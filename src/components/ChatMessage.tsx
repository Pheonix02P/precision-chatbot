import { cn } from "@/lib/utils";
import { Bot, User, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FeedbackButtons } from "./FeedbackButtons";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
  messageId?: string;
}

export function ChatMessage({ role, content, isLoading, messageId }: ChatMessageProps) {
  const isUser = role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex gap-3 p-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "flex-1 rounded-2xl px-4 py-3 max-w-[85%] shadow-sm relative group",
          isUser
            ? "bg-primary text-primary-foreground ml-auto"
            : "bg-card text-card-foreground border border-border"
        )}
      >
        {isLoading && !content ? (
          <div className="flex items-center gap-1.5 py-1">
            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
            <span className="text-xs text-muted-foreground ml-2">Searching knowledge base...</span>
          </div>
        ) : isUser ? (
          <div className="text-sm leading-relaxed">{content}</div>
        ) : (
          <>
            <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2 prose-p:text-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-semibold prose-li:text-foreground prose-li:my-0.5 prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-blockquote:px-3 prose-blockquote:rounded-r prose-table:text-sm prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-td:border prose-th:border">
              <ReactMarkdown
                components={{
                  // Custom table styling
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-3">
                      <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                        {children}
                      </table>
                    </div>
                  ),
                  // Highlight email addresses
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-primary hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  // Better list styling
                  ul: ({ children }) => (
                    <ul className="list-none space-y-1 my-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span>{children}</span>
                    </li>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
            
            {/* Copy button */}
            {content && !isLoading && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </Button>
            )}
            
            {/* Feedback buttons */}
            {content && !isLoading && messageId && (
              <FeedbackButtons messageId={messageId} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
