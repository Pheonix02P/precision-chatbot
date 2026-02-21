import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { password, secret_name, secret_value } = await req.json();

    // Verify admin password first
    const adminPassword = Deno.env.get("ADMIN_PASSWORD");
    if (!password || !adminPassword || password !== adminPassword) {
      return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Only allow updating specific secrets
    const allowedSecrets = ["GEMINI_API_KEY"];
    if (!allowedSecrets.includes(secret_name)) {
      return new Response(JSON.stringify({ success: false, error: "Secret not allowed" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!secret_value || secret_value.trim().length < 10) {
      return new Response(JSON.stringify({ success: false, error: "Invalid secret value" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Use the Management API to update the secret
    const projectId = Deno.env.get("SUPABASE_PROJECT_ID") || "likoqdqnfpqwsurfkmyf";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!serviceRoleKey) {
      return new Response(JSON.stringify({ success: false, error: "Service role key not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Store the new value using Vault
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // We can't directly update edge function secrets from within an edge function,
    // but we can store the key in a database table that the chat function reads from.
    // Let's use a simple config table approach instead.

    // Actually, the simplest approach: store the override in a config table
    // and have the chat function check there first.
    
    // For now, let's just validate and store in a simple secrets_config table
    const { error } = await supabase
      .from("admin_config")
      .upsert({ key: secret_name, value: secret_value }, { onConflict: "key" });

    if (error) {
      console.error("Error saving config:", error);
      return new Response(JSON.stringify({ success: false, error: "Failed to save. Table may not exist." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "API key updated successfully" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ success: false, error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
