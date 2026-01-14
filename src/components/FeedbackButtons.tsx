import { useState } from "react";
import { ThumbsUp, ThumbsDown, ExternalLink, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FeedbackButtonsProps {
  messageId: string;
  userQuestion?: string;
}

const FRESHSERVICE_TICKET_URL = "https://99acres.freshservice.com/support/tickets/new";

export function FeedbackButtons({ messageId, userQuestion }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [issueResolved, setIssueResolved] = useState<boolean | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleFeedback = (type: "positive" | "negative") => {
    setFeedback(type);
    
    if (type === "positive") {
      toast({
        title: "Thanks for the feedback!",
        description: "Glad this was helpful.",
      });
    } else {
      // For negative feedback, show follow-up question
      setShowFollowUp(true);
    }
  };

  const handleResolutionResponse = async (resolved: boolean) => {
    setIssueResolved(resolved);
    setShowFollowUp(false);
    
    if (resolved) {
      toast({
        title: "Great!",
        description: "Happy we could help resolve your issue.",
      });
    } else {
      // Save unresolved question to database
      if (userQuestion) {
        setIsSaving(true);
        try {
          const { error } = await supabase
            .from("unresolved_feedback")
            .insert({
              question: userQuestion,
              message_id: messageId,
            });
          
          if (error) {
            console.error("Failed to save unresolved feedback:", error);
          }
        } catch (err) {
          console.error("Error saving unresolved feedback:", err);
        } finally {
          setIsSaving(false);
        }
      }
      
      toast({
        title: "We're sorry",
        description: "Please create a support ticket for further assistance.",
      });
    }
  };

  // Show follow-up question after negative feedback
  if (showFollowUp) {
    return (
      <div className="mt-3 p-3 bg-muted/50 border border-border rounded-lg animate-in fade-in-0 duration-200">
        <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
          <HelpCircle className="h-4 w-4 text-primary" />
          Was your issue resolved?
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleResolutionResponse(true)}
            className="text-xs h-8 hover:bg-green-50 hover:text-green-700 hover:border-green-300"
          >
            Yes, resolved
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleResolutionResponse(false)}
            className="text-xs h-8 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
          >
            No, still need help
          </Button>
        </div>
      </div>
    );
  }

  // Show ticket link if issue not resolved
  if (issueResolved === false) {
    return (
      <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg animate-in fade-in-0 duration-200">
        <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
          We're sorry this didn't help. Please create a support ticket for personalized assistance.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(FRESHSERVICE_TICKET_URL, "_blank")}
          className="gap-1.5 text-xs h-8 bg-white dark:bg-background hover:bg-orange-100 dark:hover:bg-orange-900/50 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Create Support Ticket
        </Button>
      </div>
    );
  }

  // Show confirmation after feedback
  if (feedback) {
    return (
      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
        {feedback === "positive" ? (
          <span className="flex items-center gap-1 text-green-600">
            <ThumbsUp className="h-3 w-3" /> Helpful
          </span>
        ) : issueResolved === true ? (
          <span className="flex items-center gap-1 text-green-600">
            <ThumbsUp className="h-3 w-3" /> Issue resolved
          </span>
        ) : (
          <span className="flex items-center gap-1 text-orange-600">
            <ThumbsDown className="h-3 w-3" /> Noted
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 mt-2">
      <span className="text-xs text-muted-foreground mr-1">Was this helpful?</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleFeedback("positive")}
        className="h-7 px-2 text-xs hover:text-green-600 hover:bg-green-50"
      >
        <ThumbsUp className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleFeedback("negative")}
        className="h-7 px-2 text-xs hover:text-orange-600 hover:bg-orange-50"
      >
        <ThumbsDown className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}
