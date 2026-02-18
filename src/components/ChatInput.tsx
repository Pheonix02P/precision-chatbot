import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal, Loader2 } from "lucide-react";
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
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [input]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-end gap-2 p-1.5 rounded-2xl border transition-all duration-300",
        isFocused
          ? "border-primary/40 shadow-lg shadow-primary/8 bg-card"
          : "border-border/60 bg-card/50 hover:border-border"
      )}
    >
      <div className="flex-1">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type your question..."
          disabled={disabled}
          className="min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm py-2.5 px-3 placeholder:text-muted-foreground/50"
          rows={1}
        />
      </div>
      <Button
        type="submit"
        size="icon"
        disabled={!input.trim() || disabled}
        className={cn(
          "h-9 w-9 shrink-0 rounded-xl transition-all duration-300",
          input.trim() && !disabled
            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:scale-105"
            : "bg-muted text-muted-foreground shadow-none"
        )}
      >
        {disabled ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <SendHorizontal className="h-4 w-4" />
        )}
      </Button>
    </form>
  );
}
