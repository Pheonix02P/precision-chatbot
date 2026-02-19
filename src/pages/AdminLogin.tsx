import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await resp.json();

      if (data.success) {
        sessionStorage.setItem("admin_authenticated", "true");
        const redirectTo = new URLSearchParams(window.location.search).get("redirect") || "/learn";
        navigate(redirectTo);
      } else {
        toast({ title: "Login failed", description: "Invalid password", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Could not verify password", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" /> Admin Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <p className="text-sm text-muted-foreground">Enter admin password to continue.</p>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Verifying..." : "Sign In"}
            </Button>
            <Button type="button" variant="ghost" className="w-full" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Chat
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
