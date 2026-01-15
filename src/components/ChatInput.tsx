import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-end gap-2 p-1 rounded-2xl border-2 transition-all duration-300",
        isFocused 
          ? "border-primary/50 shadow-lg shadow-primary/10 bg-background" 
          : "border-border bg-muted/30 hover:border-border/80"
      )}
    >
      <div className="flex-1 relative">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask about projects, options, pricing..."
          disabled={disabled}
          className="min-h-[42px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pr-4 text-sm py-2.5 px-3 placeholder:text-muted-foreground/60"
          rows={1}
        />
      </div>
      <Button
        type="submit"
        size="icon"
        disabled={!input.trim() || disabled}
        className={cn(
          "h-10 w-10 shrink-0 rounded-xl transition-all duration-300 shadow-md",
          input.trim() && !disabled
            ? "bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 hover:scale-105 hover:shadow-lg shadow-primary/30"
            : "bg-muted text-muted-foreground shadow-none"
        )}
      >
        {disabled ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : input.trim() ? (
          <SendHorizontal className="h-4 w-4" />
        ) : (
          <Sparkles className="h-4 w-4" />
        )}
      </Button>
    </form>
  );
}
