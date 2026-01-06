import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  team: string;
  email: string;
  purpose?: string;
}

export function ContactCard({ team, email, purpose }: ContactCardProps) {
  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg my-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="font-medium text-sm">{team}</p>
          {purpose && (
            <p className="text-xs text-muted-foreground">{purpose}</p>
          )}
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={handleEmailClick}
        className="gap-1.5 text-xs h-8 hover:bg-primary hover:text-primary-foreground"
      >
        <span>{email}</span>
        <ExternalLink className="h-3 w-3" />
      </Button>
    </div>
  );
}
