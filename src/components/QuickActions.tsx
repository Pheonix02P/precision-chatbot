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

const categories = [
  {
    name: "Project Types",
    icon: Building2,
    items: [
      { label: "RERA Project", icon: Building2, query: "RERA Project" },
      { label: "Non-RERA", icon: FileText, query: "Non-RERA" },
      { label: "Resale", icon: Home, query: "Resale" },
      { label: "Property Type", icon: LayoutGrid, query: "Property Type" },
    ]
  },
  {
    name: "Core Features",
    icon: Layers,
    items: [
      { label: "Images", icon: Image, query: "Images" },
      { label: "Options", icon: Layers, query: "Options" },
      { label: "Possession", icon: Calendar, query: "Possession" },
      { label: "Phase", icon: GitBranch, query: "Phase" },
    ]
  },
  {
    name: "Naming & Activation",
    icon: Power,
    items: [
      { label: "Activation", icon: Power, query: "Activation" },
      { label: "Project Name", icon: Type, query: "Project Name" },
      { label: "USP", icon: Star, query: "USP" },
      { label: "Brochure", icon: BookOpen, query: "Brochure" },
    ]
  },
  {
    name: "Layout & Pricing",
    icon: DollarSign,
    items: [
      { label: "Amenities", icon: Trees, query: "Amenities" },
      { label: "Floor Plan", icon: LayoutGrid, query: "Floor Plan" },
      { label: "Saleable", icon: Ruler, query: "Saleable" },
      { label: "Price List", icon: List, query: "Price List" },
    ]
  },
  {
    name: "Location",
    icon: MapPin,
    items: [
      { label: "Location", icon: MapPin, query: "Location" },
      { label: "Locality", icon: Map, query: "Locality" },
      { label: "Locality Creation", icon: MapPinned, query: "Locality Creation" },
      { label: "Lat-Long", icon: Navigation, query: "Lat-Long" },
    ]
  },
  {
    name: "Builder & Payment",
    icon: Users,
    items: [
      { label: "Builder", icon: Users, query: "Builder" },
      { label: "Payment Plan", icon: CreditCard, query: "Payment Plan" },
      { label: "Bank", icon: Landmark, query: "Bank" },
      { label: "Fact Table", icon: Table, query: "Fact Table" },
    ]
  },
  {
    name: "Media",
    icon: Video,
    items: [
      { label: "Video", icon: Video, query: "Video" },
      { label: "P2V Video", icon: Play, query: "P2V Video" },
      { label: "RERA QR", icon: QrCode, query: "RERA QR" },
      { label: "Builder Site", icon: Globe, query: "Builder Site" },
    ]
  },
  {
    name: "Slots & Pricing",
    icon: DollarSign,
    items: [
      { label: "NP Slot/Price", icon: DollarSign, query: "NP Slot/Price" },
      { label: "NP Deactivate", icon: XCircle, query: "NP Deactivate" },
      { label: "Offers", icon: Tag, query: "Offers" },
      { label: "Price Trend", icon: TrendingUp, query: "Price Trend" },
    ]
  },
  {
    name: "Documentation",
    icon: FileCheck,
    items: [
      { label: "RERA", icon: FileCheck, query: "RERA" },
      { label: "Consent Form", icon: FileSignature, query: "Consent Form" },
      { label: "PIF", icon: FileText, query: "PIF" },
      { label: "FAQ", icon: HelpCircle, query: "FAQ" },
    ]
  },
  {
    name: "Content & More",
    icon: FileEdit,
    items: [
      { label: "Description", icon: FileEdit, query: "Description" },
      { label: "CTA", icon: MousePointer, query: "CTA" },
      { label: "Advertiser", icon: ShieldCheck, query: "Advertiser" },
      { label: "Fix Errors", icon: AlertTriangle, query: "Fix Errors" },
      { label: "Contacts", icon: Mail, query: "Contacts" },
    ]
  }
];

const allActions = categories.flatMap(c => c.items);

export function QuickActions({ onAction, disabled, variant = "compact" }: QuickActionsProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  if (variant === "full") {
    return (
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {categories.map((cat, catIdx) => {
          const CatIcon = cat.icon;
          const isExpanded = expandedCategory === cat.name;
          return (
            <div
              key={cat.name}
              className="category-card rounded-xl border border-border/60 bg-card p-2.5 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${catIdx * 0.04}s` }}
              onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CatIcon className="h-3 w-3 text-primary" />
                </div>
                <span className="text-[11px] font-semibold text-foreground truncate">{cat.name}</span>
              </div>
              <div className={`flex flex-col gap-0.5 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40' : 'max-h-[4.5rem]'}`}>
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={(e) => { e.stopPropagation(); onAction(item.query); }}
                      disabled={disabled}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all text-left disabled:opacity-50"
                    >
                      <Icon className="h-3 w-3 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              {cat.items.length > 3 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setExpandedCategory(isExpanded ? null : cat.name); }}
                  className="text-[10px] text-primary/60 hover:text-primary mt-1 flex items-center gap-0.5"
                >
                  {isExpanded ? <ChevronUp className="h-2.5 w-2.5" /> : <ChevronDown className="h-2.5 w-2.5" />}
                  {isExpanded ? 'Less' : 'More'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Compact variant
  const visibleActions = showAll ? allActions : allActions.slice(0, 10);

  return (
    <div className="px-2">
      <div className="flex flex-wrap gap-1 items-center">
        {visibleActions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant="ghost"
              size="sm"
              onClick={() => onAction(action.query)}
              disabled={disabled}
              className="h-6 px-2 text-[10px] gap-1 text-muted-foreground hover:text-primary hover:bg-primary/8 rounded-full transition-all"
            >
              <Icon className="h-2.5 w-2.5" />
              {action.label}
            </Button>
          );
        })}
        {allActions.length > 10 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="h-6 px-2 text-[10px] gap-0.5 text-primary hover:bg-primary/8 rounded-full"
          >
            {showAll ? <ChevronUp className="h-2.5 w-2.5" /> : <ChevronDown className="h-2.5 w-2.5" />}
            {showAll ? 'Less' : `+${allActions.length - 10}`}
          </Button>
        )}
      </div>
    </div>
  );
}
