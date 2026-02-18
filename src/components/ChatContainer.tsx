import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";
import { streamChat, type Message } from "@/lib/chatApi";
import { fullDocumentText } from "@/data/knowledgeBase";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RotateCcw, Sparkles, MessageSquarePlus } from "lucide-react";
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

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    supabase
      .from("learned_answers")
      .select("question, answer")
      .then(({ data }) => {
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
      learnedAnswers,
      onDelta: (chunk) => upsertAssistant(chunk),
      onDone: () => setIsLoading(false),
      onError: (error) => {
        setIsLoading(false);
        toast({ title: "Error", description: error, variant: "destructive" });
      },
    });
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-4 py-6">
            {/* Welcome hero */}
            <div className="text-center mb-8 animate-fade-up">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-lg mb-4 animate-float">
                <div className="absolute inset-0 rounded-2xl animate-pulse-ring bg-primary/30" />
                <Sparkles className="h-7 w-7 text-primary-foreground relative z-10" />
              </div>
              <h2 className="text-xl font-extrabold mb-1.5 animated-gradient-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                How can I help you?
              </h2>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Ask about projects, options, pricing, or pick a topic below
              </p>
            </div>

            {/* Categorized quick actions */}
            <div className="w-full max-w-2xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <QuickActions onAction={handleSend} disabled={isLoading} variant="full" />
            </div>
          </div>
        ) : (
          <div className="pb-2">
            {/* Compact quick actions bar */}
            <div className="sticky top-0 z-10 glass border-b border-border/40 py-1.5">
              <QuickActions onAction={handleSend} disabled={isLoading} variant="compact" />
            </div>

            {/* Messages */}
            <div className="space-y-0.5">
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

      {/* Input area */}
      <div className="border-t border-border/50 glass">
        <div className="flex items-center gap-2 p-2.5 max-w-3xl mx-auto">
          {messages.length > 0 && (
            <Button
              variant="outline"
              size="icon"
              onClick={handleNewChat}
              className="h-9 w-9 shrink-0 rounded-xl border-border/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
              title="New Chat"
            >
              <MessageSquarePlus className="h-4 w-4" />
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
