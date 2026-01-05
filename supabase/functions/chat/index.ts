import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Strict, document-grounded chat proxy.
// Enforces: answers MUST be backed by verbatim quotes from the provided document excerpts.

// Fallback mini-document (used only if the client does not send documentText)
const fallbackDocumentText = `Mandatory Items for RERA Registered Project Page:
- Project Name
- Builder Name
- RERA Number
- Property Type
- Option Sizes with configuration and saleable area

---

Non-RERA Project Page Requirements:
- Project Name
- Builder Name
- Property Type
- Option Sizes with configuration and saleable area

---

Slot Activation Errors & Resolutions:
- Error: "No size available for slot activation"\n  - Cause: Option sizes missing\n  - Resolution: Add option sizes in XID/Project page via Add to Inventory
- Error: "No builder premium found"\n  - Cause: Builder premium not set\n  - Resolution: Raise ticket to Premium team via SST HUB
- Error: "Something went wrong"\n  - Resolution: Check all mandatory requirements and retry`;

const STRICT_RULES = `## ROLE & AUTHORITY
You are acting as a Subject Matter Expert (SME). Provide factually correct, document-verified answers only.

## CORE RULES (MANDATORY)
1) Answer ONLY from the provided DOCUMENT EXCERPTS.
2) NO assumptions, NO guessing, NO extrapolation.
3) If info is missing/unclear, respond exactly with one of:
- "Information not available in the provided document."
- "The document does not explicitly mention this."
- "The document does not clearly specify this."
- "I cannot answer this because the document does not contain this information."

## OUTPUT FORMAT (MANDATORY)
Return EITHER one of the exact failure messages above OR a Markdown bullet list where EVERY bullet includes a verbatim quote from the DOCUMENT EXCERPTS.

Format each bullet exactly like:
- <answer> — Evidence: "<verbatim quote copied from the excerpts>"

Hard rules:
- The Evidence quote MUST be copied exactly from the DOCUMENT EXCERPTS.
- If you cannot find an exact quote for a claim, do NOT answer the claim; use a failure message instead.
- Do not use words like "likely", "probably", "typically", "usually", "generally".`;

const FAILURE_MESSAGES = new Set([
  "Information not available in the provided document.",
  "The document does not explicitly mention this.",
  "The document does not clearly specify this.",
  "I cannot answer this because the document does not contain this information.",
]);

function tokenize(q: string) {
  return Array.from(
    new Set(
      q
        .toLowerCase()
        .split(/[^a-z0-9]+/g)
        .map((t) => t.trim())
        .filter((t) => t.length >= 3)
    )
  );
}

function scoreSection(section: string, tokens: string[]) {
  const hay = section.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    // cheap frequency scoring
    let idx = 0;
    while (true) {
      idx = hay.indexOf(t, idx);
      if (idx === -1) break;
      score += 1;
      idx += t.length;
    }
  }
  return score;
}

function pickRelevantExcerpts(documentText: string, query: string) {
  // fullDocumentText uses "\n\n---\n\n" delimiter.
  const parts = documentText.split(/\n\n---\n\n/g);
  const tokens = tokenize(query);

  if (tokens.length === 0) return "";

  const scored = parts
    .map((p) => ({ p, score: scoreSection(p, tokens) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return "";

  // Keep excerpts reasonably small.
  const MAX_SECTIONS = 6;
  const MAX_CHARS = 14000;

  let out = "";
  for (const item of scored.slice(0, MAX_SECTIONS)) {
    if (out.length + item.p.length + 10 > MAX_CHARS) break;
    out += (out ? "\n\n---\n\n" : "") + item.p;
  }
  return out;
}

function extractEvidenceQuotes(answer: string) {
  const quotes: string[] = [];
  // Match: Evidence: "..."
  const re = /Evidence:\s*"([\s\S]*?)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(answer)) !== null) {
    const q = (m[1] ?? "").trim();
    if (q) quotes.push(q);
  }
  return quotes;
}

function enforceStrictness(answer: string, excerpts: string) {
  const trimmed = answer.trim();
  if (FAILURE_MESSAGES.has(trimmed)) return trimmed;

  const evidence = extractEvidenceQuotes(trimmed);
  if (evidence.length === 0) {
    return "Information not available in the provided document.";
  }

  for (const q of evidence) {
    if (!excerpts.includes(q)) {
      return "Information not available in the provided document.";
    }
  }

  // If we got here, at least every cited quote is verbatim from excerpts.
  return trimmed;
}

function sseFromText(content: string) {
  const payload = JSON.stringify({ choices: [{ delta: { content } }] });
  return `data: ${payload}\n\ndata: [DONE]\n\n`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const messages = Array.isArray((body as any)?.messages) ? (body as any).messages : [];
    const documentText =
      typeof (body as any)?.documentText === "string" ? (body as any).documentText : fallbackDocumentText;

    const lastUserMsg = [...messages].reverse().find((m: any) => m?.role === "user")?.content ?? "";

    // Build excerpts and hard-stop if we can't find anything relevant.
    const excerpts = pickRelevantExcerpts(documentText, lastUserMsg);
    if (!excerpts) {
      return new Response(sseFromText("Information not available in the provided document."), {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    console.log("Processing chat request with", messages.length, "messages");

    const systemPrompt = `${STRICT_RULES}\n\n---\n\n## DOCUMENT EXCERPTS (ONLY SOURCE OF TRUTH)\n\n${excerpts}`;

    // Prevent prior assistant messages from "poisoning" future answers.
    const userOnlyMessages = messages
      .filter((m: any) => m && m.role === "user" && typeof m.content === "string")
      .map((m: any) => ({ role: "user", content: m.content }));

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-5-mini",
        messages: [{ role: "system", content: systemPrompt }, ...userOnlyMessages],
        stream: false,
      }),
    });

    if (!aiResp.ok) {
      if (aiResp.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiResp.status === 402) {
        return new Response(JSON.stringify({ error: "Usage limit reached. Please check your account." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await aiResp.text();
      console.error("AI gateway error:", aiResp.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to get AI response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiResp.json().catch(() => ({}));
    const rawText: string =
      (data as any)?.choices?.[0]?.message?.content ??
      (data as any)?.choices?.[0]?.delta?.content ??
      "Information not available in the provided document.";

    const strictText = enforceStrictness(String(rawText ?? ""), excerpts);

    return new Response(sseFromText(strictText), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
