import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";
import { streamChat, type Message } from "@/lib/chatApi";
import { fullDocumentText } from "@/data/knowledgeBase";
import { useToast } from "@/hooks/use-toast";
import { FileText, Sparkles, RotateCcw, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestedQuestions = [
  {
    icon: "🏢",
    text: "What are the mandatory requirements to create a RERA registered project page?"
  },
  {
    icon: "⚠️",
    text: "How to resolve slot activation errors like 'Some Error Occurred'?"
  },
  {
    icon: "📄",
    text: "What are valid documents to add or modify option sizes on XID page?"
  },
  {
    icon: "💰",
    text: "How does pricing display work and what is the priority hierarchy?"
  },
];

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = async (input: string) => {
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (nextChunk: string) => {
      assistantSoFar += nextChunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    await streamChat({
      messages: [...messages, userMsg],
      documentText: fullDocumentText,
      onDelta: (chunk) => upsertAssistant(chunk),
      onDone: () => setIsLoading(false),
      onError: (error) => {
        setIsLoading(false);
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
      },
    });
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area - takes maximum space */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 shadow-md">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-1">
              How can I help you today?
            </h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Ask about project creation, options, pricing, or troubleshooting.
            </p>
            
            {/* Compact Quick Actions */}
            <QuickActions onAction={handleSend} disabled={isLoading} />
            
            <div className="grid gap-2 w-full max-w-lg mt-4">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question.text)}
                  className="text-left px-3 py-2 rounded-lg border border-border bg-card hover:bg-primary/5 hover:border-primary/30 transition-all text-xs text-foreground group"
                >
                  <span className="mr-1.5">{question.icon}</span>
                  <span className="group-hover:text-primary transition-colors">{question.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="pb-2">
            {/* Show compact quick actions when chatting */}
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
              <QuickActions onAction={handleSend} disabled={isLoading} />
            </div>
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                role={msg.role}
                content={msg.content}
                isLoading={isLoading && index === messages.length - 1 && msg.role === "assistant"}
                messageId={`msg-${index}`}
              />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <ChatMessage role="assistant" content="" isLoading />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Compact input area */}
      <div className="border-t border-border bg-background">
        <div className="flex items-center gap-2 p-2">
          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNewChat}
              className="text-xs text-muted-foreground hover:text-foreground h-8 px-2 shrink-0"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          )}
          <div className="flex-1">
            <ChatInput onSend={handleSend} disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
