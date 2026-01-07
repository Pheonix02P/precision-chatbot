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
      {/* Compact Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <h1 className="font-semibold text-foreground text-sm">Sales Support Assistant</h1>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-xs">
              <p className="text-sm">
                Ask about RERA projects, options, pricing, and troubleshooting.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </header>

      {/* Main chat area - takes maximum space */}
      <main className="flex-1 overflow-hidden min-h-0">
        <div className="h-full max-w-4xl mx-auto">
          <ChatContainer />
        </div>
      </main>
    </div>
  );
};

export default Index;
