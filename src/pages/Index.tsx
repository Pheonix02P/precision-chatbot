import { ChatContainer } from "@/components/ChatContainer";
import { Building2, Menu, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Sales Support Assistant</h1>
            <p className="text-xs text-muted-foreground">99acres Knowledge Base</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p className="text-sm">
                  Ask questions about RERA projects, option sizes, pricing, 
                  slot activation errors, and more. All answers are sourced 
                  from the official Sales Support Knowledge Base.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Main chat area */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-4xl mx-auto">
          <ChatContainer />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-2 border-t border-border bg-card/50 text-center">
        <p className="text-xs text-muted-foreground">
          Answers are based on the Sales Support Team Knowledge Base (Last Updated: January 31, 2025)
        </p>
      </footer>
    </div>
  );
};

export default Index;
