import { ChatContainer } from "@/components/ChatContainer";
import { Building2, BookOpen } from "lucide-react";
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
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-card sticky top-0 z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground text-sm leading-tight">99acres Sales Support</h1>
            <p className="text-[10px] text-muted-foreground leading-none">AI Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate("/learn")}>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
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
          </TooltipProvider>
        </div>
      </header>

      <main className="flex-1 overflow-hidden min-h-0">
        <div className="h-full max-w-4xl mx-auto">
          <ChatContainer />
        </div>
      </main>
    </div>
  );
};

export default Index;
