import { ChatContainer } from "@/components/ChatContainer";
import { Building2, HelpCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FeedbackExport } from "@/components/FeedbackExport";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Ultra Compact Header */}
      <header className="flex items-center justify-between px-3 py-1.5 border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Building2 className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <h1 className="font-semibold text-foreground text-xs">Sales Support</h1>
        </div>
        <div className="flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => navigate("/learn")}>
                  <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xs">Learning Mode</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <FeedbackExport />
                </span>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xs">Admin Export</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p className="text-xs">
                  Ask about RERA projects, options, pricing, and troubleshooting.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Main chat area - maximum space */}
      <main className="flex-1 overflow-hidden min-h-0">
        <div className="h-full max-w-4xl mx-auto">
          <ChatContainer />
        </div>
      </main>
    </div>
  );
};

export default Index;
