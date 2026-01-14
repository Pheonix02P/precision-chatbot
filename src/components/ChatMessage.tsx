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
  userQuestion?: string;
}

export function ChatMessage({ role, content, isLoading, messageId, userQuestion }: ChatMessageProps) {
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
        "flex gap-2 px-3 py-2 animate-in fade-in-0 duration-200",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar - smaller */}
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm"
        )}
      >
        {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
      </div>
      
      {/* Message bubble */}
      <div
        className={cn(
          "flex-1 rounded-xl px-3 py-2 max-w-[88%] relative group",
          isUser
            ? "bg-primary text-primary-foreground ml-auto"
            : "bg-card text-card-foreground border border-border/60 shadow-sm"
        )}
      >
        {isLoading && !content ? (
          <div className="flex items-center gap-1.5 py-0.5">
            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
            <span className="text-[10px] text-muted-foreground ml-1">Searching...</span>
          </div>
        ) : isUser ? (
          <div className="text-sm leading-relaxed">{content}</div>
        ) : (
          <>
            <div className="prose prose-sm max-w-none dark:prose-invert 
              prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-2 prose-headings:mb-1 prose-headings:text-sm
              prose-p:text-foreground prose-p:leading-relaxed prose-p:my-1 prose-p:text-sm
              prose-strong:text-foreground prose-strong:font-semibold 
              prose-li:text-foreground prose-li:my-0 prose-li:text-sm
              prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:before:content-none prose-code:after:content-none 
              prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-0.5 prose-blockquote:px-2 prose-blockquote:rounded-r prose-blockquote:my-1
              prose-table:text-xs prose-th:bg-muted prose-th:px-2 prose-th:py-1 prose-td:px-2 prose-td:py-1 prose-td:border prose-th:border
              prose-ul:my-1 prose-ol:my-1">
              <ReactMarkdown
                components={{
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-2">
                      <table className="w-full border-collapse border border-border rounded-lg overflow-hidden text-xs">
                        {children}
                      </table>
                    </div>
                  ),
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
                  ul: ({ children }) => (
                    <ul className="list-none space-y-0.5 my-1">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-1.5 text-sm">
                      <span className="text-primary mt-1 text-[10px]">•</span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  h1: ({ children }) => <h1 className="text-base font-bold mt-2 mb-1">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-sm font-bold mt-2 mb-1">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm font-semibold mt-1.5 mb-0.5">{children}</h3>,
                  p: ({ children }) => <p className="text-sm my-1 leading-relaxed">{children}</p>,
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
                className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-600" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            )}
            
            {/* Feedback buttons */}
            {content && !isLoading && messageId && (
              <FeedbackButtons messageId={messageId} userQuestion={userQuestion} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
