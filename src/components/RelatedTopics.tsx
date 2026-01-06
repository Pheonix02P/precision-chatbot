import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RelatedTopicsProps {
  topics: string[];
  onTopicClick: (topic: string) => void;
}

export function RelatedTopics({ topics, onTopicClick }: RelatedTopicsProps) {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="mt-4 pt-3 border-t border-border/50">
      <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
        <Link2 className="h-3.5 w-3.5" />
        Related Topics:
      </p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => onTopicClick(`Tell me about ${topic}`)}
            className="h-7 px-2.5 text-xs text-primary hover:text-primary hover:bg-primary/10"
          >
            • {topic}
          </Button>
        ))}
      </div>
    </div>
  );
}
