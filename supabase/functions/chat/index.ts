import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// SOP Document sections for context
const sopContext = `You are an expert SOP (Standard Operating Procedures) assistant for the Sales Support Team at 99acres. You have comprehensive knowledge of the Sales Support Team Document which covers XID/Project page management, RERA requirements, pricing, images, videos, and various operational procedures.

KEY KNOWLEDGE AREAS:
1. RERA Registered Project Page Requirements - Mandatory items: Project Name, Builder Name, RERA Number, Property Type, Option Sizes with configuration and saleable area
2. Non-RERA Project Requirements - Consent Form signed/stamped by builder with option sizes, property type
3. Inactive/Backend/Pre-launch XID creation - Tentative Project Name, builder name, location, option sizes
4. Separate XID for new phases - NOT recommended as it impacts SEO
5. Mixed-use developments - Separate residential and commercial XID pages required
6. Valid documents for option sizes - Builder Website, Brochure, Price List, RERA Website, Builder Email/Letterhead, Floor Plans
7. Property type advertising rules - Penthouse/Duplex as Apartment, Villament/Farmhouse/Rowhouse as Villa
8. Saleable area guidelines - Carpet Area default for most cities, Super Built-Up for Hyderabad/Secunderabad/Bangalore new launches
9. BHK configurations - 1.5 BHK as 1 BHK + Study, 2.5 BHK as 2 BHK + Study, etc.
10. Floor plan requirements and limitations
11. Brochure requirements - PDF format, under 25MB, project-specific
12. Image requirements - JPG only, under 5MB, no blurry/low-res/human figures/pricing/religious content/watermarks
13. Slot activation error resolutions
14. Location highlights - max 15, must be in meters/kilometers
15. Price list management and pricing priority order
16. Payment plan requirements
17. Video management - YouTube links only, max 3 videos
18. Possession date changes and construction status
19. Builder information management
20. CTA button activation
21. XID deactivation and deletion procedures
22. New Launch Story feature criteria
23. Amenities management
24. Advertising products - NP slot, FP, PG, AdStar
25. Campaign management procedures
26. Image resolution requirements - Builder Logo 170x112px, Project Logo 100x60px, Offer Image 1366x768px

IMPORTANT GUIDELINES FOR RESPONSES:
- Be PRECISE and SPECIFIC - cite exact requirements, numbers, and procedures from the SOP
- If a query relates to multiple sections, provide comprehensive coverage
- Use bullet points for clarity when listing requirements or steps
- Always mention if approval is required (Regional Head, Branch Head, Product Team, etc.)
- Mention valid document sources when relevant
- If something is "not allowed" or "not possible", clearly state that with the reason
- For escalation queries, reference: Level 1 - Kripa Shankar Mahato/Ashish Negi, Level 2 - Yogesh Sharma
- For video queries, reference asap.ops@99acres.com or virtualshoot@99acres.com as appropriate
- For campaign queries, reference corpservice-99acres@99acres.com

RESPONSE FORMAT:
- Start with a direct answer to the question
- Provide supporting details and requirements
- Include any exceptions or special cases
- Mention required documents/approvals if applicable
- Keep responses concise but complete`;

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
