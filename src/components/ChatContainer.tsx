import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";
import { streamChat, type Message } from "@/lib/chatApi";
import { fullDocumentText } from "@/data/knowledgeBase";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RotateCcw, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [learnedAnswers, setLearnedAnswers] = useState<{ question: string; answer: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);

  useEffect(() => {
    supabase.from("learned_answers").select("question, answer").then(({ data }) => {
      if (data) setLearnedAnswers(data);
    });
  }, []);

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
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m);
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    await streamChat({
      messages: [...messages, userMsg],
      documentText: fullDocumentText,
      learnedAnswers,
      onDelta: (chunk) => upsertAssistant(chunk),
      onDone: () => setIsLoading(false),
      onError: (error) => {
        setIsLoading(false);
        toast({ title: "Error", description: error, variant: "destructive" });
      },
    });
  };

  const handleNewChat = () => { setMessages([]); };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-4 py-8">
            {/* Hero */}
            <div className="text-center mb-6 animate-fade-up">
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary shadow-lg shadow-primary/25 mb-3">
                <div className="absolute inset-0 rounded-2xl bg-primary animate-pulse-ring opacity-20" />
                <Building2 className="h-7 w-7 text-primary-foreground relative z-10" />
              </div>
              <h2 className="text-xl font-bold mb-1 text-foreground">
                How can I help you today?
              </h2>
              <p className="text-sm text-muted-foreground max-w-md">
                Get instant answers about projects, options, pricing & troubleshooting
              </p>
            </div>

            {/* Quick Actions */}
            <div className="w-full max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Popular Topics</span>
              </div>
              <QuickActions onAction={handleSend} disabled={isLoading} variant="full" />
            </div>
          </div>
        ) : (
          <div className="pb-2">
            {/* Compact quick actions */}
            <div className="sticky top-0 z-10 bg-card/90 backdrop-blur-sm border-b border-border/50 py-1">
              <QuickActions onAction={handleSend} disabled={isLoading} variant="compact" />
            </div>

            <div className="space-y-1">
              {messages.map((msg, index) => {
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

      {/* Input */}
      <div className="border-t border-border bg-card">
        <div className="flex items-center gap-1.5 p-2.5 max-w-4xl mx-auto">
          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNewChat}
              className="h-9 w-9 shrink-0 text-muted-foreground hover:text-primary"
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
