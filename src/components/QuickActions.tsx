import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Layers, 
  AlertTriangle, 
  FileText, 
  DollarSign, 
  Mail,
  Building2,
  Image,
  MapPin
} from "lucide-react";

interface QuickActionsProps {
  onAction: (query: string) => void;
  disabled?: boolean;
}

const quickActions = [
  {
    id: "rera-project",
    label: "RERA Project",
    icon: Building2,
    query: "What are the mandatory requirements to create a RERA registered project page?"
  },
  {
    id: "non-rera",
    label: "Non-RERA Project",
    icon: FileText,
    query: "How do I create a Non-RERA project page? What documents are needed?"
  },
  {
    id: "add-options",
    label: "Add Options",
    icon: Layers,
    query: "What are valid documents to add or modify option sizes on XID page?"
  },
  {
    id: "fix-errors",
    label: "Fix Errors",
    icon: AlertTriangle,
    query: "How to resolve slot activation errors like 'Some Error Occurred'?"
  },
  {
    id: "images",
    label: "Images",
    icon: Image,
    query: "What are the image requirements and guidelines for uploading to XID page?"
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: DollarSign,
    query: "How does pricing display work and how to resolve pricing issues?"
  },
  {
    id: "location",
    label: "Location",
    icon: MapPin,
    query: "How to update location highlights and advantages on XID page?"
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: Mail,
    query: "What are the contact emails for different teams like XID, Premium, Product team?"
  }
];

export function QuickActions({ onAction, disabled }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-3 border-b border-border bg-secondary/30">
      <span className="text-xs text-muted-foreground font-medium self-center mr-1">
        Quick Actions:
      </span>
      {quickActions.map((action) => {
        const Icon = action.icon;
        return (
          <Button
            key={action.id}
            variant="outline"
            size="sm"
            onClick={() => onAction(action.query)}
            disabled={disabled}
            className="h-8 px-3 text-xs gap-1.5 bg-background hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
          >
            <Icon className="h-3.5 w-3.5" />
            {action.label}
          </Button>
        );
      })}
    </div>
  );
}
