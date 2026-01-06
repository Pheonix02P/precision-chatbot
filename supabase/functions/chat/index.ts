import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Enhanced RAG-based chat with strict document adherence
// Uses semantic chunking and provides structured responses

const SYSTEM_PROMPT = `You are a Sales Support Assistant for 99acres real estate platform. Your role is to help sales teams quickly find accurate information about project pages, content management, and troubleshooting.

## CRITICAL RULES (MANDATORY COMPLIANCE)

1. **Answer ONLY from the provided DOCUMENT EXCERPTS**
   - Use exact information present in the document
   - If a fact is not explicitly mentioned, you MUST NOT answer it

2. **NO Assumptions, NO Logical Guessing**
   - Do not fill gaps using domain knowledge or common sense
   - Do not "connect dots" unless the document explicitly connects them

3. **Missing Information Handling**
   If the required information is not available or unclear, respond with:
   "❌ **Information not available in the knowledge base.**
   
   The document does not contain information about this topic. Please contact the relevant team for assistance."

4. **Zero Hallucination Policy**
   - Never fabricate values, names, dates, counts, features, prices, or conclusions
   - Never rephrase uncertainty as confidence

## RESPONSE FORMAT

Structure your responses as follows:

**Quick Answer:** (2-3 sentences summarizing the key point)

**Details:** (Bullet points with specific information from the document)

**📧 Contact:** (Relevant email if mentioned in document)

## PERSONALITY
- Professional, helpful, and efficient
- Quick and direct (sales teams need fast answers)
- Use emojis sparingly: ✅ ✓ ❌ ✗ ⚠️ 📧 📋 only

## IMPORTANT GUIDELINES
- Always cite specific requirements and steps
- Provide examples when available in the document
- Use tables for comparisons when helpful
- Highlight important notes with ⚠️
- If question is ambiguous, ask for clarification
- If information not found, say so clearly and suggest whom to contact

REMEMBER: Your answers must be 100% traceable to the document excerpts provided. If you cannot find exact information, admit it.`;

function tokenize(text: string): string[] {
  return Array.from(
    new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .map((t) => t.trim())
        .filter((t) => t.length >= 2)
    )
  );
}

function scoreSection(section: string, tokens: string[]): number {
  const hay = section.toLowerCase();
  let score = 0;
  
  for (const t of tokens) {
    // Exact match gets higher score
    let idx = 0;
    while (true) {
      idx = hay.indexOf(t, idx);
      if (idx === -1) break;
      score += t.length >= 4 ? 2 : 1; // Longer words get more weight
      idx += t.length;
    }
  }
  
  // Boost for title/keyword matches
  const lines = section.split('\n');
  const titleLine = lines[0] || '';
  const keywordLine = lines.find(l => l.toLowerCase().includes('keywords:')) || '';
  
  for (const t of tokens) {
    if (titleLine.toLowerCase().includes(t)) score += 5;
    if (keywordLine.toLowerCase().includes(t)) score += 3;
  }
  
  return score;
}

function pickRelevantExcerpts(documentText: string, query: string): string {
  const parts = documentText.split(/\n\n---\n\n/g);
  const tokens = tokenize(query);

  if (tokens.length === 0) return "";

  const scored = parts
    .map((p) => ({ p, score: scoreSection(p, tokens) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return "";

  // Keep more context for better answers
  const MAX_SECTIONS = 8;
  const MAX_CHARS = 18000;

  let out = "";
  for (const item of scored.slice(0, MAX_SECTIONS)) {
    if (out.length + item.p.length + 10 > MAX_CHARS) break;
    out += (out ? "\n\n---\n\n" : "") + item.p;
  }
  return out;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const messages = Array.isArray((body as any)?.messages) ? (body as any).messages : [];
    const documentText = typeof (body as any)?.documentText === "string" ? (body as any).documentText : "";

    const lastUserMsg = [...messages].reverse().find((m: any) => m?.role === "user")?.content ?? "";

    console.log("Processing query:", lastUserMsg.substring(0, 100));

    // Build excerpts
    const excerpts = pickRelevantExcerpts(documentText, lastUserMsg);
    
    if (!excerpts) {
      const noInfoResponse = `❌ **Information not available in the knowledge base.**

The document does not contain information about this specific topic. 

**📧 For assistance, please contact:**
- **XID Operations:** xidops@99acres.com (Project creation, options, content)
- **Premium Team:** premium@99acres.com (Builder premium, slots)
- **Product Team:** product@99acres.com (P2V, New Launch tags)`;

      return new Response(
        `data: ${JSON.stringify({ choices: [{ delta: { content: noInfoResponse } }] })}\n\ndata: [DONE]\n\n`,
        { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    console.log("Found", excerpts.split("---").length, "relevant sections");

    const systemPromptWithContext = `${SYSTEM_PROMPT}\n\n---\n\n## DOCUMENT EXCERPTS (YOUR ONLY SOURCE OF TRUTH)\n\n${excerpts}`;

    // Keep conversation context but filter to user messages for cleaner context
    const conversationMessages = messages
      .filter((m: any) => m && typeof m.content === "string")
      .slice(-6) // Keep last 6 messages for context
      .map((m: any) => ({ role: m.role, content: m.content }));

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPromptWithContext },
          ...conversationMessages
        ],
        stream: true,
      }),
    });

    if (!aiResp.ok) {
      if (aiResp.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (aiResp.status === 402) {
        return new Response(
          JSON.stringify({ error: "Usage limit reached. Please check your account." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await aiResp.text();
      console.error("AI gateway error:", aiResp.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Stream the response
    return new Response(aiResp.body, {
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
