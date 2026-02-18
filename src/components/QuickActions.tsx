import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Layers, AlertTriangle, FileText, DollarSign, Mail,
  Building2, Image, MapPin, Calendar, GitBranch, Power,
  Type, Star, BookOpen, Trees, LayoutGrid, Ruler, List,
  Map, Users, CreditCard, Table, Globe, Video, FileCheck,
  Tag, XCircle, Play, Navigation, QrCode, FileSignature,
  Home, Landmark, MapPinned, HelpCircle, FileEdit,
  MousePointer, TrendingUp, ShieldCheck
} from "lucide-react";

interface QuickActionsProps {
  onAction: (query: string) => void;
  disabled?: boolean;
  variant?: "full" | "compact";
}

const quickActions = [
  { id: "rera-project", label: "RERA Project", icon: Building2, query: "RERA Project" },
  { id: "non-rera", label: "Non-RERA", icon: FileText, query: "Non-RERA" },
  { id: "resale", label: "Resale", icon: Home, query: "Resale" },
  { id: "property-type", label: "Property Type", icon: LayoutGrid, query: "Property Type" },
  { id: "images", label: "Images", icon: Image, query: "Images" },
  { id: "options", label: "Options", icon: Layers, query: "Options" },
  { id: "possession", label: "Possession", icon: Calendar, query: "Possession" },
  { id: "phase", label: "Phase", icon: GitBranch, query: "Phase" },
  { id: "activation", label: "Activation", icon: Power, query: "Activation" },
  { id: "project-name", label: "Project Name", icon: Type, query: "Project Name" },
  { id: "usp", label: "USP", icon: Star, query: "USP" },
  { id: "brochure", label: "Brochure", icon: BookOpen, query: "Brochure" },
  { id: "amenities", label: "Amenities", icon: Trees, query: "Amenities" },
  { id: "floor-plan", label: "Floor Plan", icon: LayoutGrid, query: "Floor Plan" },
  { id: "saleable", label: "Saleable", icon: Ruler, query: "Saleable" },
  { id: "price-list", label: "Price List", icon: List, query: "Price List" },
  { id: "location-highlights", label: "Location", icon: MapPin, query: "Location" },
  { id: "locality", label: "Locality", icon: Map, query: "Locality" },
  { id: "locality-creation", label: "Locality Creation", icon: MapPinned, query: "Locality Creation" },
  { id: "lat-long", label: "Lat-Long", icon: Navigation, query: "Lat-Long" },
  { id: "builder", label: "Builder", icon: Users, query: "Builder" },
  { id: "payment-plan", label: "Payment Plan", icon: CreditCard, query: "Payment Plan" },
  { id: "bank", label: "Bank", icon: Landmark, query: "Bank" },
  { id: "fact-table", label: "Fact Table", icon: Table, query: "Fact Table" },
  { id: "video", label: "Video", icon: Video, query: "Video" },
  { id: "p2v-video", label: "P2V Video", icon: Play, query: "P2V Video" },
  { id: "rera-qr", label: "RERA QR", icon: QrCode, query: "RERA QR" },
  { id: "builder-site", label: "Builder Site", icon: Globe, query: "Builder Site" },
  { id: "np-slot-edit", label: "NP Slot/Price", icon: DollarSign, query: "NP Slot/Price" },
  { id: "np-slot-deactivate", label: "NP Deactivate", icon: XCircle, query: "NP Deactivate" },
  { id: "offers", label: "Offers", icon: Tag, query: "Offers" },
  { id: "price-trend", label: "Price Trend", icon: TrendingUp, query: "Price Trend" },
  { id: "rera", label: "RERA", icon: FileCheck, query: "RERA" },
  { id: "consent-form", label: "Consent Form", icon: FileSignature, query: "Consent Form" },
  { id: "pif", label: "PIF", icon: FileText, query: "PIF" },
  { id: "faq", label: "FAQ", icon: HelpCircle, query: "FAQ" },
  { id: "project-description", label: "Description", icon: FileEdit, query: "Description" },
  { id: "cta", label: "CTA", icon: MousePointer, query: "CTA" },
  { id: "advertiser", label: "Advertiser", icon: ShieldCheck, query: "Advertiser" },
  { id: "fix-errors", label: "Fix Errors", icon: AlertTriangle, query: "Fix Errors" },
  { id: "contacts", label: "Contacts", icon: Mail, query: "Contacts" },
];

export function QuickActions({ onAction, disabled, variant = "compact" }: QuickActionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleActions = isExpanded ? quickActions : quickActions.slice(0, 8);
  const hasMore = quickActions.length > 8;

  if (variant === "full") {
    return (
      <div className="w-full">
        <div className="flex flex-wrap gap-2 justify-center">
          {quickActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                onClick={() => onAction(action.query)}
                disabled={disabled}
                className="h-8 px-3 text-xs gap-1.5 bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary border-border transition-all duration-200 shadow-sm animate-fade-up"
                style={{ animationDelay: `${Math.floor(idx / 8) * 0.05}s` }}
              >
                <Icon className="h-3.5 w-3.5" />
                {action.label}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="px-1">
      <div className="flex flex-wrap gap-1 justify-start">
        {visibleActions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.id}
              variant="ghost"
              size="sm"
              onClick={() => onAction(action.query)}
              disabled={disabled}
              className="h-6 px-1.5 text-[10px] gap-0.5 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Icon className="h-2.5 w-2.5" />
              {action.label}
            </Button>
          );
        })}
        {hasMore && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-6 px-1.5 text-[10px] gap-0.5 text-primary hover:bg-primary/5"
          >
            {isExpanded ? (
              <><ChevronUp className="h-2.5 w-2.5" /> Less</>
            ) : (
              <><ChevronDown className="h-2.5 w-2.5" /> +{quickActions.length - 8} more</>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
