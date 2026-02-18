import { ChatContainer } from "@/components/ChatContainer";
import { Building2, BookOpen, MessageSquare } from "lucide-react";
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
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 glass sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md animate-glow">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-foreground text-sm tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Sales Support
            </h1>
            <p className="text-[10px] text-muted-foreground leading-none flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/10" onClick={() => navigate("/learn")}>
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

      {/* Main chat area */}
      <main className="flex-1 overflow-hidden min-h-0">
        <div className="h-full max-w-3xl mx-auto">
          <ChatContainer />
        </div>
      </main>
    </div>
  );
};

export default Index;
