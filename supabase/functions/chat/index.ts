import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Enhanced RAG-based chat with strict document adherence
// Uses semantic chunking and provides structured responses

const SYSTEM_PROMPT = `You are a Sales Support Assistant for 99acres. Provide precise, professional answers using ONLY the document excerpts provided.

## CRITICAL RULES

1. **Document-Only Answers** - Use ONLY information from the provided excerpts. Never assume or guess.

2. **If Information Not Found** - Respond with:
   "Sorry, I wasn't able to help you with this. Please contact xidops@99acres.com or [create a ticket here](https://infoedgehelpdesk.freshservice.com/support/catalog/items?category_id=27000510486)"

3. **Zero Hallucination** - Never fabricate facts, values, or conclusions.

## RESPONSE FORMAT (Minimal Bullet Style)

**[Topic Title]**
- Key point 1
- Key point 2
- Key point 3

Keep responses SHORT and PRECISE. No over-explaining.

## CONTACT EMAILS RULE
**DO NOT include contact emails unless the user specifically asks for contacts/emails.**

Available contacts (ONLY when asked):
- XIDops: xidops@99acres.com
- Feedback: Feedback@99acres.com
- Operations: Operation@99acres.com
- Listing Screening: Listingscreening_99acres@99acres.com
- ASAP Team: asap.ops@99acres.com
- Virtual Shoot: virtualshoot@99acres.com
- Corp Service: Corpservice-99acres@99acres.com
- Photos: Photos@99acres.com

## TONE - INFORMATIONAL, NOT INSTRUCTIONAL
CRITICAL: Describe how things work, don't tell users what to do.

❌ WRONG (instructional):
- "Go to the XID page and click..."
- "You need to upload the image..."
- "Contact the team to get..."

✅ CORRECT (informational):
- "The XID page is accessed through..."
- "Images are uploaded via..."
- "The team handles requests at..."

Write as if explaining how a system works, not as a step-by-step guide.
Use passive voice or descriptive statements: "X is done by...", "X happens when...", "X requires..."

## STYLE
- Professional, concise, factual
- Describe processes, don't give commands
- Use emojis sparingly: ✅ ❌ ⚠️ only when helpful
- Bullet points over paragraphs`;

// Critical terms that should always match strongly regardless of length
// Note: "builder" and "project" removed as standalone terms to prevent cross-matching between similar entries
const CRITICAL_TERMS = ["xid", "rera", "option", "options", "slot", "price", "image", "bhk", "np", "fp", "pg", "logo", "deactivate", "deactivation", "glossary", "escalation", "banner", "mailer", "possession", "offer", "resale", "verbal", "capital", "pvt", "religious", "washroom", "duration", "reactivate", "profile", "locality", "typical"];

// Compound phrases that should be matched as units (higher priority than individual terms)
const COMPOUND_PHRASES = [
  "project logo", "builder logo", "developer logo",
  "project page", "project name", "builder name"
];

// Common phrase mappings for query normalization
const QUERY_MAPPINGS: Record<string, string> = {
  "xid page": "project page",
  "np xid": "project page",
  "create xid": "create project page XID",
  "add option": "add option sizes",
  "create option": "add option sizes create options",
  "how to create xid": "create project page XID creation",
  "how to add options": "add option sizes create options",
  "np deactivate": "NP deactivation deactivate slot advertiser slot",
  "deactivate np": "NP deactivation deactivate slot advertiser slot",
  "deactivate slot": "NP deactivation deactivate slot advertiser",
  "property type": "property types residential commercial apartment villa shop office land independent floor",
  "basic requirement": "mandatory requirements required details property types residential commercial",
  "requirement for property": "property types residential commercial allowed property types apartment villa land",
  "what is": "glossary definition meaning terms",
  "consent form": "non-RERA consent form state-wise download consent form builder approval",
  "non rera": "non-RERA consent form project creation without RERA not RERA registered",
  "not rera registered": "non-RERA consent form project creation without RERA builder approval",
  "without rera": "non-RERA consent form project creation not RERA registered",
  "create non rera": "non-RERA consent form project creation without RERA builder approval",
  "non rera xid": "non-RERA consent form project creation XID without RERA",
  "raw video": "raw video footage policy sharing",
  "escalation": "escalation matrix sales requests",
  "banner": "banner availability campaign mailer LBXID",
  "requirement": "mandatory requirements required details",
  "check xid": "check XID exists project page search project 99acres suggester",
  "xid created": "check XID exists project page search project already created",
  "project page created": "check XID exists project page search project already exists",
  "xid exists": "check XID exists search project page already created",
  "extend duration": "extend NP AdStar AdPro transaction expired new TID",
  "extend adstar": "extend NP AdStar AdPro transaction duration expired",
  "extend adpro": "extend NP AdStar AdPro transaction duration expired",
  "reactivate xid": "reactivate activate inactive XID project page reactivation",
  "activate xid": "reactivate activate inactive XID project page activation",
  "reactivate project": "reactivate activate inactive XID project page reactivation",
  "deactivate xid": "deactivate XID project page deactivation deletion remove",
  "deactivate project": "deactivate XID project page deactivation deletion",
  "without mail": "without builder mail verbal communication pricing update",
  "without email": "without builder mail verbal communication pricing update",
  "verbal communication": "verbal pricing update without mail builder mail mandatory",
  "builder profile": "builder slot pricing seller portal update price builder",
  "extend offer": "offer validity extension extend offer date sellers portal",
  "offer date": "offer validity extension extend offer date sellers portal",
  "resale listing": "resale listing changes update address pricing images listing screening",
  "change address": "resale listing address change update listing screening",
  "change property type": "change property type modification live slots builder communication",
  "without options": "project without options options mandatory create project page",
  "multiple property": "multiple property types single project page residential commercial",
  "religious": "religious content restrictions USP location highlights temple mosque",
  "mandir": "religious content restrictions location highlights temple mosque not allowed",
  "temple": "religious content restrictions location highlights mandir mosque not allowed",
  "remove rera": "remove RERA phase old phase RERA number cannot remove",
  "remove phase": "remove RERA phase old phase RERA number cannot remove",
  "capital letter": "project name capital letters uppercase SEO not recommended pvt ltd",
  "pvt ltd": "project name pvt ltd private limited not allowed SEO",
  "remove cp": "remove CP dealer broker slots project page builder communication",
  "remove channel partner": "remove CP dealer broker slots project page",
  "remove dealer": "remove CP dealer broker slots deactivate",
  "washroom": "individual images washroom bathroom indoor images image categories",
  "floor plan size": "floor plan image size format requirements 5 MB JPG",
  "floor plan image": "floor plan image size format requirements resolution",
  "profileid": "profile ID access error blocked dealer builder blocked",
  "profile id": "profile ID access error blocked dealer builder blocked",
  "does not have access": "profile ID access error blocked dealer builder slots",
  "possession date": "possession date mandatory status required legally mandatory",
  "without possession": "possession date mandatory status required cannot create without",
  "price nan": "NAN price per sq ft mismatch saleable area seller panel",
  "as present": "existing active product AS present link ID duplicate slot",
  "price without other charges": "update price without other charges mandatory system-generated",
  "update price without": "update price without other charges mandatory cannot remove",
  "without other charges": "price update without other charges mandatory system-generated cannot",
  "typical floor plan": "floor plan residential typical layout upload option size",
  "upload floor plan": "floor plan residential upload option size commercial land",
  "floor plan residential": "floor plan residential upload option size typical",
  "change locality": "locality change update location project page existing RERA builder brochure",
  "locality in existing": "locality change update location project page existing",
  "update locality": "locality change update location project page existing RERA",
  "change location": "locality change update location project page existing RERA builder",
  "call to action": "CTA call to action button",
  "call to action button": "CTA call to action button",
  "search engine optimization": "SEO search engine optimization",
  "unique selling point": "USP unique selling points",
  "unique selling points": "USP unique selling points",
  "unique selling proposition": "USP unique selling points",
  "new project": "NP new project slot",
  "new launch": "NP new project new launch",
  "project page": "XID project page NPXID",
  "frequently asked": "FAQ frequently asked questions",
  "point of contact": "POC point of contact",
  "channel partner": "CP channel partner dealer broker",
  "turn around time": "TAT turn around time",
  "turnaround time": "TAT turn around time",
  "registration number": "RERA registration number",
  "real estate regulatory": "RERA real estate regulatory authority",
  "ad star": "AdStar ad star product",
  "ad pro": "AdPro ad pro product",
  "listing broker": "LBXID listing broker XID",
  "types of descriptions": "description types system generated user generated project description about project XID page",
  "project description": "description types system generated user generated about project XID page",
  "about project": "description types system generated user generated project description XID page",
  "description types": "description types system generated user generated project description about project",
  "project not visible": "project page not visible frontend deactivated RERA consent reactivate",
  "not visible on frontend": "project page not visible frontend deactivated RERA consent reactivate",
  "delete xid": "deactivate delete XID project page deactivation deletion remove",
  "delete project": "deactivate delete XID project page deactivation deletion remove",
};

// Common phrases that should trigger high scoring
const COMMON_PHRASES = [
  "create xid", "add options", "create options", "create project",
  "activation error", "slot error", "change price", "upload image",
  "add option", "option sizes", "how to create", "some error",
  "rera project", "non rera", "floor plan", "price list",
  "np deactivate", "deactivate slot", "deactivate np", "slot deactivation",
  "raw video", "banner availability", "consent form", "escalation matrix",
  "property type", "property types", "glossary", "what is", "meaning",
  "basic requirement", "residential property", "commercial property",
  "allowed property", "requirement for",
  "check xid", "xid exists", "project page exists", "xid created",
  "extend duration", "extend adstar", "extend adpro",
  "reactivate xid", "activate xid", "reactivate project",
  "deactivate xid", "deactivate project",
  "without mail", "without email", "verbal communication",
  "builder profile", "update price builder",
  "extend offer", "offer date", "offer validity",
  "resale listing", "change address", "resale price",
  "change property type", "property type change",
  "without options", "without possession",
  "multiple property", "multiple property type",
  "religious content", "religious name", "mandir distance",
  "remove rera", "remove phase",
  "capital letter", "pvt ltd",
  "remove cp", "remove dealer", "remove channel partner",
  "washroom image", "floor plan size", "floor plan image size",
  "profile id error", "does not have access",
  "price nan", "as present with link",
  "typical floor plan", "upload floor plan", "floor plan residential",
  "change locality", "update locality", "change location", "locality change"
];

function normalizeQuery(query: string): string {
  let normalized = query.toLowerCase();
  for (const [from, to] of Object.entries(QUERY_MAPPINGS)) {
    if (normalized.includes(from)) {
      normalized = normalized + " " + to;
    }
  }
  return normalized;
}

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

function scoreSection(section: string, tokens: string[], originalQuery: string): number {
  const hay = section.toLowerCase();
  let score = 0;
  const queryLower = originalQuery.toLowerCase();
  
  // HIGHEST PRIORITY: Compound phrase matching (e.g., "project logo" vs "builder logo")
  for (const phrase of COMPOUND_PHRASES) {
    if (queryLower.includes(phrase) && hay.includes(phrase)) {
      score += 40; // Very high boost for exact compound phrase match
    }
    // Penalize if query has one phrase but section has another related phrase
    if (queryLower.includes("project logo") && !hay.includes("project logo") && hay.includes("builder logo")) {
      score -= 20;
    }
    if (queryLower.includes("builder logo") && !hay.includes("builder logo") && hay.includes("project logo")) {
      score -= 20;
    }
  }
  
  // Phrase matching - check if common phrases match
  for (const phrase of COMMON_PHRASES) {
    if (queryLower.includes(phrase) && hay.includes(phrase)) {
      score += 25; // High boost for exact phrase match
    }
  }
  
  for (const t of tokens) {
    let idx = 0;
    let matchCount = 0;
    while (true) {
      idx = hay.indexOf(t, idx);
      if (idx === -1) break;
      matchCount++;
      idx += t.length;
    }
    
    if (matchCount > 0) {
      // Critical terms get high weight regardless of length
      if (CRITICAL_TERMS.includes(t)) {
        score += matchCount * 8;
      } else {
        score += matchCount * (t.length >= 4 ? 2 : 1);
      }
    }
  }
  
  // Boost for title/keyword matches
  const lines = section.split('\n');
  const titleLine = lines[0] || '';
  const keywordLine = lines.find(l => l.toLowerCase().includes('keywords:')) || '';
  
  for (const t of tokens) {
    if (titleLine.toLowerCase().includes(t)) {
      score += CRITICAL_TERMS.includes(t) ? 15 : 5;
    }
    if (keywordLine.toLowerCase().includes(t)) {
      score += CRITICAL_TERMS.includes(t) ? 10 : 3;
    }
  }
  
  return score;
}

function pickRelevantExcerpts(documentText: string, query: string): string {
  const parts = documentText.split(/\n\n---\n\n/g);
  
  // Normalize query to expand with related terms
  const normalizedQuery = normalizeQuery(query);
  const tokens = tokenize(normalizedQuery);

  console.log("Normalized query:", normalizedQuery);
  console.log("Tokens:", tokens.join(", "));

  if (tokens.length === 0) return "";

  const scored = parts
    .map((p) => ({ p, score: scoreSection(p, tokens, query) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  console.log("Top scoring sections:", scored.slice(0, 3).map(s => ({ 
    title: s.p.split('\n')[0]?.substring(0, 50), 
    score: s.score 
  })));

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
    const rawMessages = Array.isArray((body as any)?.messages) ? (body as any).messages : [];
    const documentText = typeof (body as any)?.documentText === "string" ? (body as any).documentText.slice(0, 200000) : "";
    const learnedAnswers = Array.isArray((body as any)?.learnedAnswers) ? (body as any).learnedAnswers.slice(0, 200) : [];

    // Input validation
    if (rawMessages.length > 50) {
      return new Response(
        JSON.stringify({ error: "Too many messages. Please start a new conversation." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const messages = rawMessages
      .filter((m: any) => m && typeof m.role === "string" && typeof m.content === "string")
      .map((m: any) => ({ role: m.role === "user" ? "user" : "assistant", content: String(m.content).slice(0, 4000) }));

    const lastUserMsg = [...messages].reverse().find((m: any) => m?.role === "user")?.content ?? "";

    if (!lastUserMsg.trim()) {
      return new Response(
        JSON.stringify({ error: "Empty message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing query:", lastUserMsg.substring(0, 100));

    // Handle greetings
    const greetingPatterns = /^(hi|hello|hey|good morning|good afternoon|good evening|greetings|howdy|hola|namaste)\s*[!?.]*$/i;
    if (greetingPatterns.test(lastUserMsg.trim())) {
      const greetingResponse = `Hello! 👋 I'm the Sales Support Assistant for 99acres.\n\nI can help you with:\n- **Project page creation** (RERA & Non-RERA)\n- **Options & floor plans** management\n- **Pricing & price list** updates\n- **Images, brochures & videos**\n- **Slot activation errors** troubleshooting\n- **Builder information** updates\n- **Location & amenities** management\n\nHow can I assist you today?`;

      return new Response(
        `data: ${JSON.stringify({ choices: [{ delta: { content: greetingResponse } }] })}\n\ndata: [DONE]\n\n`,
        { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } }
      );
    }

    // Build excerpts
    const excerpts = pickRelevantExcerpts(documentText, lastUserMsg);
    
    if (!excerpts) {
      const noInfoResponse = `Sorry, I wasn't able to help you with this. Please contact xidops@99acres.com or [create a ticket here](https://infoedgehelpdesk.freshservice.com/support/catalog/items?category_id=27000510486)`;

      return new Response(
        `data: ${JSON.stringify({ choices: [{ delta: { content: noInfoResponse } }] })}\n\ndata: [DONE]\n\n`,
        { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    console.log("Found", excerpts.split("---").length, "relevant sections");

    // Build learned answers context
    let learnedContext = "";
    if (learnedAnswers.length > 0) {
      learnedContext = "\n\n---\n\n## LEARNED Q&A PAIRS (HIGH PRIORITY - USE THESE FIRST)\n\n" +
        learnedAnswers.map((la: any) => `Q: ${la.question}\nA: ${la.answer}`).join("\n\n---\n\n");
    }

    const systemPromptWithContext = `${SYSTEM_PROMPT}\n\n---\n\n## DOCUMENT EXCERPTS (YOUR ONLY SOURCE OF TRUTH)\n\n${excerpts}${learnedContext}`;

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
