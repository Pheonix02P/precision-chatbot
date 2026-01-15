import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";
import { streamChat, type Message } from "@/lib/chatApi";
import { fullDocumentText } from "@/data/knowledgeBase";
import { useToast } from "@/hooks/use-toast";
import { RotateCcw, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col h-full bg-gradient-to-b from-background via-background to-muted/30">
      {/* Messages area - takes maximum space */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-4 py-8">
            {/* Hero section with animated elements */}
            <div className="text-center mb-6 animate-message-in">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-accent shadow-xl shadow-primary/30 mb-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-purple-500 animate-pulse-ring opacity-30" />
                <Building2 className="h-8 w-8 text-primary-foreground relative z-10" />
              </div>
              <h2 className="text-2xl font-bold mb-2 animated-gradient-text">
                Sales Support Assistant
              </h2>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Get instant answers about projects, options, pricing & troubleshooting
              </p>
            </div>
            
            {/* Quick Actions - Full view */}
            <div className="w-full max-w-2xl mb-4 animate-message-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Topics</span>
              </div>
              <QuickActions onAction={handleSend} disabled={isLoading} variant="full" />
            </div>
          </div>
        ) : (
          <div className="pb-2">
            {/* Compact quick actions bar when chatting */}
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 py-1">
              <QuickActions onAction={handleSend} disabled={isLoading} variant="compact" />
            </div>
            
            {/* Messages */}
            <div className="space-y-1">
              {messages.map((msg, index) => {
                // Find the preceding user question for assistant messages
                const userQuestion = msg.role === "assistant" && index > 0 
                  ? messages.slice(0, index).reverse().find(m => m.role === "user")?.content 
                  : undefined;
                
                return (
                  <ChatMessage
                    key={index}
                    role={msg.role}
                    content={msg.content}
                    isLoading={isLoading && index === messages.length - 1 && msg.role === "assistant"}
                    messageId={`msg-${index}`}
                    userQuestion={userQuestion}
                  />
                );
              })}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <ChatMessage role="assistant" content="" isLoading />
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area - minimal */}
      <div className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 p-2 max-w-4xl mx-auto">
          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNewChat}
              className="h-9 w-9 shrink-0 text-muted-foreground hover:text-foreground"
              title="New Chat"
            >
              <RotateCcw className="h-4 w-4" />
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
