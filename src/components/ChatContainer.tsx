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
      {/* Quick Actions Bar */}
      <QuickActions onAction={handleSend} disabled={isLoading} />

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg animate-in zoom-in-50 duration-500">
              <Building2 className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2 animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-100">
              Sales Support Assistant
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-200">
              Get instant answers about project page creation, content management, 
              pricing, and troubleshooting from the official knowledge base.
            </p>
            
            <div className="grid gap-3 w-full max-w-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-300">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2 justify-center">
                <Sparkles className="h-4 w-4" /> Popular questions:
              </p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question.text)}
                  className="text-left p-4 rounded-xl border border-border bg-card hover:bg-primary/5 hover:border-primary/30 transition-all text-sm text-foreground hover:shadow-md group"
                >
                  <span className="mr-2">{question.icon}</span>
                  <span className="group-hover:text-primary transition-colors">{question.text}</span>
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-muted/50 rounded-xl max-w-md animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-400">
              <p className="text-xs font-medium text-muted-foreground mb-2">📧 Need direct help?</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">XID Operations:</span> xidops@99acres.com
              </p>
            </div>
          </div>
        ) : (
          <div className="pb-4">
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

      {/* Input area with new chat button */}
      <div className="border-t border-border">
        {messages.length > 0 && (
          <div className="flex justify-center py-2 bg-secondary/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNewChat}
              className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              New Conversation
            </Button>
          </div>
        )}
        <ChatInput onSend={handleSend} disabled={isLoading} />
      </div>
    </div>
  );
}
