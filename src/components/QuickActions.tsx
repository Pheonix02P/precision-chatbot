import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { 
  Layers, 
  AlertTriangle, 
  FileText, 
  DollarSign, 
  Mail,
  Building2,
  Image,
  MapPin,
  Calendar,
  GitBranch,
  Power,
  Type,
  Star,
  BookOpen,
  Trees,
  LayoutGrid,
  Ruler,
  List,
  Map,
  Users,
  CreditCard,
  Table,
  Globe,
  Video,
  FileCheck,
  Tag,
  XCircle,
  Play,
  Navigation,
  QrCode,
  FileSignature,
  Home,
  Landmark,
  MapPinned,
  HelpCircle,
  FileEdit,
  MousePointer,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

interface QuickActionsProps {
  onAction: (query: string) => void;
  disabled?: boolean;
  variant?: "full" | "compact";
}

const quickActions = [
  // Project Types
  { id: "rera-project", label: "RERA Project", icon: Building2, query: "What is a RERA registered project and what are the mandatory requirements for creating a RERA project page?" },
  { id: "non-rera", label: "Non-RERA", icon: FileText, query: "What is a Non-RERA project page and what documents are needed for it?" },
  { id: "resale", label: "Resale", icon: Home, query: "What is a Resale project and how does it differ from new projects?" },
  { id: "property-type", label: "Property Type", icon: LayoutGrid, query: "What are the different property types available and their meanings?" },
  
  // Core Features
  { id: "images", label: "Images", icon: Image, query: "What are the image requirements and guidelines for XID page?" },
  { id: "options", label: "Options", icon: Layers, query: "What are options in a project and what documents are valid for adding or modifying option sizes?" },
  { id: "possession", label: "Possession", icon: Calendar, query: "What is possession date and how is it displayed on the project page?" },
  { id: "phase", label: "Phase", icon: GitBranch, query: "What is a project phase and how are phases managed?" },
  
  // Activation & Naming
  { id: "activation", label: "Activation", icon: Power, query: "What is project activation/deactivation and when does it occur?" },
  { id: "project-name", label: "Project Name", icon: Type, query: "What are the guidelines for project naming on the platform?" },
  { id: "usp", label: "USP", icon: Star, query: "What is USP (Unique Selling Proposition) and how is it displayed?" },
  { id: "brochure", label: "Brochure", icon: BookOpen, query: "What are the brochure requirements and how to upload brochures?" },
  
  // Amenities & Layout
  { id: "amenities", label: "Amenities", icon: Trees, query: "What are amenities and how are they managed on project pages?" },
  { id: "floor-plan", label: "Floor Plan", icon: LayoutGrid, query: "What is a floor plan and what are the requirements for uploading floor plans?" },
  { id: "saleable", label: "Saleable", icon: Ruler, query: "What is saleable area and how is it calculated or displayed?" },
  { id: "price-list", label: "Price List", icon: List, query: "What is a price list and how is pricing information managed?" },
  
  // Location
  { id: "location-highlights", label: "Location", icon: MapPin, query: "What are location highlights and advantages on XID page?" },
  { id: "locality", label: "Locality", icon: Map, query: "What is locality in the context of project listings?" },
  { id: "locality-creation", label: "Locality Creation", icon: MapPinned, query: "What is the process for locality creation?" },
  { id: "lat-long", label: "Lat-Long", icon: Navigation, query: "What is Lat-Long (latitude-longitude) and how is it used for projects?" },
  
  // Builder & Payment
  { id: "builder", label: "Builder", icon: Users, query: "What is builder information and how is it managed on the platform?" },
  { id: "payment-plan", label: "Payment Plan", icon: CreditCard, query: "What is a payment plan and how is it displayed?" },
  { id: "bank", label: "Bank", icon: Landmark, query: "What is bank information in project context and how is it managed?" },
  { id: "fact-table", label: "Fact Table", icon: Table, query: "What is a Fact Table from RERA/Brochure/Builder Site and what information does it contain?" },
  
  // Media
  { id: "video", label: "Video", icon: Video, query: "What are video requirements and how are videos managed on project pages?" },
  { id: "p2v-video", label: "P2V Video", icon: Play, query: "What is P2V Video and how is video addition/deletion handled?" },
  { id: "rera-qr", label: "RERA QR", icon: QrCode, query: "What is RERA QR code and how is it used?" },
  { id: "builder-site", label: "Builder Site", icon: Globe, query: "What is Builder Site information and how is it used for project data?" },
  
  // Slots & Pricing
  { id: "np-slot-edit", label: "NP Slot/Price", icon: DollarSign, query: "What is NP Slot and how does price editing work?" },
  { id: "np-slot-deactivate", label: "NP Deactivate", icon: XCircle, query: "What is NP Slot deactivation and when does it happen?" },
  { id: "offers", label: "Offers", icon: Tag, query: "What are offers and how are they displayed on project pages?" },
  { id: "price-trend", label: "Price Trend", icon: TrendingUp, query: "What is price trend and how is it calculated or displayed?" },
  
  // Documentation
  { id: "rera", label: "RERA", icon: FileCheck, query: "What is RERA registration and what are the RERA requirements?" },
  { id: "consent-form", label: "Consent Form", icon: FileSignature, query: "What is a Consent Form and when is it required?" },
  { id: "pif", label: "PIF", icon: FileText, query: "What is PIF (Project Information Form) and what information does it contain?" },
  { id: "faq", label: "FAQ", icon: HelpCircle, query: "What are FAQs in project context and how are they managed?" },
  
  // Content
  { id: "project-description", label: "Description", icon: FileEdit, query: "What is project description and what are the guidelines for it?" },
  { id: "cta", label: "CTA", icon: MousePointer, query: "What is CTA (Call To Action) and how is it configured?" },
  { id: "advertiser", label: "Advertiser", icon: ShieldCheck, query: "What is Advertiser Allow/Blocked status and how does it work?" },
  { id: "fix-errors", label: "Fix Errors", icon: AlertTriangle, query: "What are common errors like 'Some Error Occurred' and what causes them?" },
  { id: "contacts", label: "Contacts", icon: Mail, query: "What are the contact emails for different teams like XID, Premium, Product team?" }
];

export function QuickActions({ onAction, disabled, variant = "compact" }: QuickActionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show first 8 items when collapsed, all when expanded
  const visibleActions = isExpanded ? quickActions : quickActions.slice(0, 8);
  const hasMore = quickActions.length > 8;

  if (variant === "full") {
    return (
      <div className="w-full">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                onClick={() => onAction(action.query)}
                disabled={disabled}
                className="h-7 px-2 text-xs gap-1 bg-card hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all border-border/60"
              >
                <Icon className="h-3 w-3 text-primary/70" />
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
              <>
                <ChevronUp className="h-2.5 w-2.5" />
                Less
              </>
            ) : (
              <>
                <ChevronDown className="h-2.5 w-2.5" />
                +{quickActions.length - 8} more
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
