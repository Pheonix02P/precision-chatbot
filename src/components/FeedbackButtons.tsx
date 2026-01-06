import { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface FeedbackButtonsProps {
  messageId: string;
}

export function FeedbackButtons({ messageId }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null);
  const { toast } = useToast();

  const handleFeedback = (type: "positive" | "negative") => {
    setFeedback(type);
    toast({
      title: type === "positive" ? "Thanks for the feedback!" : "We'll improve",
      description: type === "positive" 
        ? "Glad this was helpful." 
        : "Sorry this wasn't helpful. We'll work on improving.",
    });
  };

  if (feedback) {
    return (
      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
        {feedback === "positive" ? (
          <span className="flex items-center gap-1 text-green-600">
            <ThumbsUp className="h-3 w-3" /> Helpful
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
