import { cn } from "@/lib/utils";
import { Bot, User, Copy, Check, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

function fixConsentFormLinks(text: string): string {
  let result = text;
  result = result.replace(
    /\[([^\]]*?(?:consent|Consent)[^\]]*?)\]\(([^)]*?)\)/gi,
    (_match, linkText, url) => {
      const consentPath = [linkText, url].find(s => s.includes('consent-forms/'));
      if (consentPath) {
        const pathMatch = consentPath.match(/(\/consent-forms\/[^\s)]+\.docx)/);
        if (pathMatch) {
          const filename = pathMatch[1].split('/').pop()?.replace(/_/g, ' ').replace('.docx', '') || 'Consent Form';
          return `[📥 Download ${filename}](${pathMatch[1]})`;
        }
      }
      return `[${linkText}](${url})`;
    }
  );
  result = result.replace(
    /(?<!\()(\/consent-forms\/([^\s)]+\.docx))(?!\))/g,
    (_match, fullPath, filename) => {
      const name = filename.replace(/_/g, ' ').replace('.docx', '');
      return `[📥 Download ${name}](${fullPath})`;
    }
  );
  return result;
}

export function ChatMessage({ role, content, isLoading, messageId, userQuestion }: ChatMessageProps) {
  const isUser = role === "user";
  const [copied, setCopied] = useState(false);
  const processedContent = !isUser ? fixConsentFormLinks(content) : content;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex gap-2.5 px-4 py-3 animate-message-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform duration-200",
          isUser
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20"
        )}
      >
        {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
      </div>

      {/* Message bubble */}
      <div
        className={cn(
          "flex-1 rounded-2xl px-4 py-3 max-w-[85%] relative group",
          isUser
            ? "bg-primary text-primary-foreground ml-auto shadow-sm"
            : "bg-card text-card-foreground border border-border/50 shadow-sm chat-bubble-hover"
        )}
      >
        {isLoading && !content ? (
          <div className="flex items-center gap-2.5 py-1">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-typing-dot" style={{ animationDelay: '0s' }} />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-typing-dot" style={{ animationDelay: '0.2s' }} />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-typing-dot" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3 animate-pulse" />
              Thinking...
            </span>
          </div>
        ) : isUser ? (
          <div className="text-sm leading-relaxed">{content}</div>
        ) : (
          <>
            <div className="prose prose-sm max-w-none dark:prose-invert
              prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-2 prose-headings:mb-1 prose-headings:text-sm
              prose-p:text-foreground prose-p:leading-relaxed prose-p:my-1.5 prose-p:text-sm
              prose-strong:text-foreground prose-strong:font-semibold
              prose-li:text-foreground prose-li:my-0.5 prose-li:text-sm
              prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-xs prose-code:before:content-none prose-code:after:content-none
              prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-blockquote:px-3 prose-blockquote:rounded-r-lg prose-blockquote:my-2
              prose-table:text-xs prose-th:bg-muted prose-th:px-3 prose-th:py-1.5 prose-td:px-3 prose-td:py-1.5 prose-td:border prose-th:border
              prose-ul:my-1.5 prose-ol:my-1.5">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-3 rounded-lg border border-border">
                      <table className="w-full border-collapse overflow-hidden text-xs">{children}</table>
                    </div>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-primary hover:underline font-medium transition-colors hover:text-primary/80"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...(href?.endsWith('.docx') || href?.endsWith('.pdf') ? { download: true } : {})}
                    >
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-none space-y-0.5 my-2">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  h1: ({ children }) => <h1 className="text-base font-bold mt-3 mb-2">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-sm font-bold mt-3 mb-1.5 text-primary">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm font-semibold mt-2 mb-1">{children}</h3>,
                  p: ({ children }) => <p className="text-sm my-1.5 leading-relaxed">{children}</p>,
                }}
              >
                {processedContent}
              </ReactMarkdown>
            </div>

            {/* Copy button */}
            {content && !isLoading && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary/10 rounded-lg"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </Button>
            )}

            {/* Feedback */}
            {content && !isLoading && messageId && (
              <FeedbackButtons messageId={messageId} userQuestion={userQuestion} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
