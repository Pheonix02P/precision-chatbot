import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// SOP Document sections for context
const sopContext = `You are an SOP assistant that answers ONLY from the Sales Support Team Document for 99acres. You must be 100% accurate and never assume or infer information.

STRICT RULES:
1. Answer ONLY using information explicitly stated in the SOP document below
2. If the exact answer is NOT in the document, respond: "This specific information is not documented in the SOP. Please contact your supervisor or escalate to Level 1 (Kripa Shankar Mahato/Ashish Negi)."
3. NEVER assume, infer, or provide general advice
4. NEVER use external knowledge - only the SOP content
5. Quote exact values, dimensions, formats, and requirements from the document
6. If partially covered, state what IS documented and what is NOT

RESPONSE FORMAT (Markdown):
- **Direct Answer**: One-line bold answer first
- **Details**: Use headers (##), bullets (-), numbered lists for procedures
- **Exact Values**: Use \`code format\` for dimensions, formats, email addresses
- **Warnings**: Use > blockquotes for important notes
- Keep responses structured and scannable

SOP DOCUMENT CONTENT:

## RERA Registered Project Page - Mandatory Items:
- Project Name, Builder Name, RERA Number, Property Type
- Option Sizes with configuration and saleable area (valid docs: RERA Certificate, Approved Plan, IOD, Commencement Certificate)

## Non-RERA Project Page - Mandatory Items:
- Project Name, Builder Name, Property Type
- Option Sizes with configuration and saleable area

## XID Page Creation:
- Created when builder wants to advertise but not interested in project page
- Sold from BOSS team, Backend: Sales Support
- Mandatory: XID Name, Builder Name, Property Type, Option Sizes
- NOT possible: Lead Tracking Dashboard, LMS/SMS leads, Slot activation

## Slot Activation Errors & Resolutions:
- "No size available for slot activation": Option sizes missing → add in XID/Project page via Add to Inventory
- "No builder premium found": Builder premium not set → raise ticket to Premium team via SST HUB
- "Something went wrong": Check all mandatory requirements and retry

## Option Size Valid Documents:
- RERA Certificate, Approved Plan, IOD/CC, Builder Brochure, Agreement, Allotment Letter, Payment Schedule, Bank Approved Project Documents

## Builder Information Management:
- Change Builder Name: Raise ticket to Tech team via SST Hub (Approval: Regional Head)
- Edit Builder Description: Max 2500 characters, no contact info/URLs
- Builder Logo: \`170 x 112 px\`, PNG/JPEG

## Project Page Requirements:
- Project Logo: \`100 x 60 px\`
- Project Images: Min \`800 x 600 px\`
- Offer Image: \`1366 x 768 px\`
- Floor Plan: Min \`800 x 600 px\`, show layout with dimensions

## Price List Management:
- Add: Via Edit Project Info → Price List tab → upload PDF
- Remove: Same path → remove existing file
- Only PDFs allowed

## Payment Plan:
- Add via Edit Project Info → Payment Schedule
- Upload PDF or add manual entries

## Video Requirements:
- Formats: MP4, MOV, FLV, AVI, 3GP, MKV, WEBM
- Resolution: Min \`1280 x 720 px\`
- Duration: 30 sec to 5 min
- Professional shoot: asap.ops@99acres.com
- Virtual shoot: virtualshoot@99acres.com

## Walkthrough/Drone Shoot:
- Request via: asap.ops@99acres.com
- Requirements: Site access, permissions, weather dependent

## Mandatory XID Requirements:
- XID Name, Builder Name, Property Type, Option Sizes with config and saleable area

## Inventory Management:
- Add sizes: Edit Project Info → Add to Inventory
- Each size needs: Configuration, Saleable Area, Property Type

## Lead Management:
- LMS leads: Only for Project Pages with active slots
- SMS leads: Only for Project Pages
- XID pages: NO lead tracking available

## Campaign Queries:
- Contact: corpservice-99acres@99acres.com

## Escalation Matrix:
- Level 1: Kripa Shankar Mahato, Ashish Negi
- Level 2: Yogesh Sharma

## Approvals Required:
- Builder Name Change: Regional Head approval
- Project Deletion: Branch Head approval
- Premium Changes: Premium team via SST Hub

## SST Hub:
- Central ticketing system for raising requests
- Used for: Tech issues, Premium changes, Builder info changes`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: sopContext },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Usage limit reached. Please check your account." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
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
