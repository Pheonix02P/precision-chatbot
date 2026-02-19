import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export function FeedbackExport() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated } = useAdminAuth();

  const handleExport = async () => {
    if (!isAuthenticated) {
      toast({ title: "Not authorized", description: "Please sign in as admin first.", variant: "destructive" });
      return;
    }
    setIsExporting(true);
    try {
      const { data, error } = await supabase
        .from("unresolved_feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const jsonContent = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonContent], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `unresolved-feedback-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Export successful",
        description: `Downloaded ${data?.length || 0} feedback entries as JSON.`,
      });
      setIsOpen(false);
    } catch (error) {
      toast({ title: "Export failed", description: "Could not export feedback data. Are you signed in?", variant: "destructive" });
    } finally {
      setIsExporting(false);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Download className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Feedback</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Download all unresolved feedback as a JSON file.
          </p>
          <Button onClick={handleExport} disabled={isExporting} className="w-full gap-2">
            <Download className="h-4 w-4" />
            {isExporting ? "Exporting..." : "Download JSON"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
