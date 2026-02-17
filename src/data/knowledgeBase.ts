// Sales Support Team Knowledge Base - Comprehensive Chunked Data
// Each chunk includes metadata for better retrieval

export interface KnowledgeChunk {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  content: string;
  relatedTopics: string[];
  contactEmail?: string;
}

export const knowledgeChunks: KnowledgeChunk[] = [
  {
    id: "what-is-xid",
    category: "General",
    title: "What is XID / Project Page",
    keywords: ["what is XID", "XID meaning", "XID definition", "project page", "what is project page", "XID explain", "define XID", "XID full form", "what is a XID", "what is an XID"],
    content: `## What is XID?

**XID** (also known as **Project Page** or **NP XID**) is a dedicated page on 99acres that showcases a real estate project with all its details.

**Key Features of XID:**
- Displays project information including name, builder, location, and RERA details
- Shows available unit configurations (options) with sizes and floor plans
- Contains images, brochures, videos, and other marketing content
- Allows multiple dealers/builders to activate slots and advertise on the same project

**XID is used for:**
- New project launches
- Under-construction projects
- Ready-to-move projects
- Both RERA and non-RERA registered projects

**Who manages XID?**
The XID Operations team handles all project page creation, modifications, and content updates.

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["Creating RERA-Registered Projects", "Creating Non-RERA Projects", "Option Creation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "rera-project-creation",
    category: "Project Creation",
    title: "Creating RERA-Registered Projects",
    keywords: ["RERA", "project page", "XID", "mandatory requirements", "new project", "create project", "create XID", "how to create XID", "XID creation", "make XID", "new XID", "project creation", "create project page", "how to create project", "NP XID", "create NP"],
    content: `## Mandatory Requirements for RERA-Registered Project Page

To create/design a RERA-registered project page/XID/NP XID, the following mandatory details are required:

**Essential Information:**
- ✓ Project Name
- ✓ Builder Name
- ✓ RERA Number
- ✓ Property Type (apartment, villa, plot, etc.)
- ✓ Option Sizes (configuration + saleable area)

**Saleable Area Guidelines:**
- Default: Carpet Area for all cities across India
- Exceptions (Super Built-up Area allowed):
  - Hyderabad/Secunderabad (all projects)
  - Bangalore (New Launch projects only)
- For Other Cities: If Super Built-up Area or Built-up Area is requested, Regional Head approval is mandatory. Share approval along with creation request.

**Optional Details (Page Enrichment):**
These enhance listing quality but are not required for creation:
- Brochure, Project Website, Images, Video
- Price List, Payment Plan
- USP (Unique Selling Points)
- Location Highlights

**Important Notes:**
- Project page can be created with mandatory details alone
- For Commercial and Plot projects, configuration (1/2/3 BHK) is not required
- Additional details significantly enhance listing quality`,
    relatedTopics: ["Non-RERA Projects", "Option Creation", "Saleable Area Guidelines"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "non-rera-project-creation",
    category: "Project Creation",
    title: "Creating Non-RERA Projects",
    keywords: ["consent form", "non-RERA", "builder approval", "project creation", "no RERA", "create non-RERA", "non-RERA XID", "project without RERA", "create XID without RERA"],
    content: `## Mandatory Requirements for Non-RERA Project Page

**Primary Document Required:**
Consent Form (signed OR stamped by builder)

**Consent Form Must Include:**
- Project Name
- Project Location
- Possession Date/Status (New Launch, Under Construction)
- Reason for not being RERA registered
- Builder Name
- Builder Contact Details
- Fact Table (Unit Count, Total Area)
- Option Sizes (configuration + saleable area)
- Property Type (apartment, villa, plot, etc.)

**Document Requirements:**
- Official Letterhead: Only authorized signature required (no stamp needed)
- Non-letterhead documents: Both signature AND stamp required

**State-wise Consent Forms Available:**
- Delhi, Kerala, Karnataka, Telangana, Gujarat, Assam
- Bihar (separate form)
- Maharashtra (separate form)
- Punjab (separate form)
- West Bengal (separate form)
- Rajasthan (separate form)
- Rest of India / Other Cities (separate form)

**Saleable Area Requirements:**
Same rules as RERA projects apply:
- Default: Carpet Area
- Exceptions: Hyderabad/Secunderabad/Bangalore new launch
- Other cities require Regional Head approval for Super/Built-up Area

**Optional Details:**
- Brochure, Project Website, Images
- Price List, Payment Plan
- Project Video
- USP (Unique Selling Points)
- Location Highlights`,
    relatedTopics: ["RERA Projects", "Consent Form Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "inactive-prelunch-projects",
    category: "Project Creation",
    title: "Creating Inactive/Backend/Pre-launch Projects",
    keywords: ["inactive XID", "backend project", "pre-launch", "SAB campaign", "tentative", "create inactive XID", "backend XID", "prelunch XID", "SAB XID"],
    content: `## When to Create Inactive/Backend/Pre-launch XID

**Allowed Scenarios:**
1. SAB campaign requested by Sales or CMT team
2. Sales needs XID number only to initiate quotation in CRM

**Required Information (Minimum Details):**
- Tentative Project Name and Builder Name
- Project Location
- Option Sizes (configuration + saleable area)

**Activation Requirements:**
XID remains inactive until receiving:
- Builder consent form, OR
- RERA registration number

**Status:** Backend/Inactive until proper documentation received`,
    relatedTopics: ["SAB Campaigns", "Project Activation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "multi-phase-projects",
    category: "Project Creation",
    title: "Multi-Phase Projects",
    keywords: ["phases", "multi-phase", "new phase", "project expansion", "separate XID", "add phase", "new phase XID", "multiple phases"],
    content: `## Should You Create Separate XID for New Phase?

**Answer: NO**

**Reason:** Creates negative SEO impact and dilutes visibility of main project page.

**Adding New Phase to Existing Project - Required Details:**
- New RERA number OR Consent form (for non-RERA)
- Possession status and date for new phase
- RERA QR code (if applicable)

**Important Restrictions:**

**Mixed-Use Developments:**
- If existing project is residential and new phase is commercial
- Cannot add to same XID
- Must create separate commercial XID page

**Saleable Area Consistency Rule:**
All phases MUST have same saleable area mapping
- If Phase 1 uses Carpet Area, all phases must use Carpet Area
- Cannot mix different area types across phases`,
    relatedTopics: ["Residential vs Commercial", "Adding Phases"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "mixed-use-developments",
    category: "Project Creation",
    title: "Mixed-Use Developments",
    keywords: ["residential", "commercial", "mixed-use", "separate XID"],
    content: `## Can Both Residential and Commercial be Advertised on Single Page?

**Answer: NO**

**Required Structure:**

**For Residential Properties:**
- Separate residential project page required
- Can advertise: Apartments, Studios, Serviced Apartments, Villas

**For Commercial Properties:**
- Unique commercial XID required
- Can advertise: Shops, Offices, Commercial Land

**Why Separate Pages?**
- Different property types have different audiences
- SEO optimization requires focused content
- Better user experience with targeted information`,
    relatedTopics: ["Property Types - Residential", "Property Types - Commercial"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "valid-documents-options",
    category: "Options Management",
    title: "Valid Documents for Option Sizes",
    keywords: ["option sizes", "valid documents", "brochure", "price list", "floor plans", "RERA website", "add options", "create options", "how to add options", "option creation", "new option", "add option sizes", "modify options", "options", "option"],
    content: `## Valid Documents to Add/Create/Modify Option Sizes on XID

**Accepted Sources (Any ONE):**
- ✓ Builder Website
- ✓ Project Brochure
- ✓ Builder Price List
- ✓ RERA Website
- ✓ Builder Email or Letterhead
- ✓ Floor Plans (with sizes clearly mentioned)

**All documents must include:**
- Saleable Area
- Configuration
- Option Sizes

**Sources That Are NOT Considered Valid:**
- ✗ Competition Websites
- ✗ Advertisement Websites / Channel Partner Websites
- ✗ WhatsApp Communication

**Additional Notes:**
- Floor/Unit Plans play a crucial role in enriching the project page
- If valid documents are provided, options can be created even without floor plans
- These options will show on frontend only after client slot is activated`,
    relatedTopics: ["Floor Plans", "Option Creation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "special-property-types",
    category: "Options Management",
    title: "Penthouse/Duplex/Villament Advertising",
    keywords: ["penthouse", "duplex", "villament", "farmhouse", "rowhouse", "property type", "advertise penthouse", "advertise duplex", "create penthouse option"],
    content: `## Can We Advertise Penthouse/Duplex/Villament/Farmhouse/Rowhouse on the XID Page?

**Direct Advertising Not Allowed:**
Penthouse, Duplex, Villament, Farmhouse, and Rowhouse cannot be advertised as standalone property types on the Project/XID page.

**However, These Can Be Advertised Under the Following Approved Property Types:**

| Property Type | Advertise As |
|---------------|--------------|
| Penthouse | Apartment |
| Duplex | Apartment |
| Villament | Villa |
| Farmhouse | Villa |
| Rowhouse | Villa |

**Why This Mapping?**
- System has predefined property type categories
- Ensures consistent user search experience
- Maintains proper categorization for SEO`,
    relatedTopics: ["Property Types"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "bhk-configurations",
    category: "Options Management",
    title: "Non-Standard BHK Configurations",
    keywords: ["1.5 BHK", "2.5 BHK", "study room", "configuration mapping", "BHK", "half BHK", "configuration", "BHK options", "create BHK"],
    content: `## Can 1.5/2.5/3.5/4.5 BHK Be Advertised?

**Answer:** No separate category exists, but can be represented

**Method 1: Add as Study Room (Recommended)**

| Actual Configuration | Represent As Under Category |
|---------------------|----------------------------|
| 1.5 BHK | 1 BHK + Study |
| 2.5 BHK | 2 BHK + Study |
| 3.5 BHK | 3 BHK + Study |
| 4.5 BHK | 4 BHK + Study |

**Method 2: Round Up (Client Request Only)**
Study room considered as additional room:

| Actual Configuration | Represent As Under Category |
|---------------------|----------------------------|
| 1.5 BHK | Create under 2 BHK |
| 2.5 BHK | Create under 3 BHK |
| 3.5 BHK | Create under 4 BHK |
| 4.5 BHK | Create under 5 BHK |

**Example:**
- Client has: 1.5 BHK, 1200 sq ft
- Display as: "1 BHK + Study | 1200 sq ft"
- Listed under: 1 BHK configuration`,
    relatedTopics: ["Configuration Rules"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "saleable-area-guidelines",
    category: "Options Management",
    title: "Saleable Area Guidelines",
    keywords: ["carpet area", "super area", "built-up area", "saleable mapping", "change area", "saleable area", "area type", "change saleable area", "super built-up"],
    content: `## How to Change Saleable Area on Project Page

**Default Saleable Area Rules:**
- All Cities Default: Carpet Area
- Exceptions (Super Built-up Area Allowed):
  - Hyderabad/Secunderabad: All projects
  - Bangalore: New Launch projects only

**Changing from Default - Requirements:**
- Regional Head approval mandatory
- Exception: Hyderabad/Secunderabad/Bangalore new launch

**Can Saleable Area Be Changed with Live Slots?**
**Answer: NO**

**Process to Change:**
1. Expire or deactivate all existing live slots
2. Submit change request with Regional Head approval
3. System will update saleable area mapping
4. Reactivate slots as needed

**Multi-Phase Projects Important Rule:**
All phases MUST have same saleable area mapping
- Cannot mix Carpet Area and Super Area across phases

**Accepted Saleable Areas Based on Property Type:**
- Apartment / Builder Floor / Commercial / Studio: Can be advertised in Super Area, Built-Up Area, or Carpet Area
- Villa: Can be advertised in Super Area, Built-Up Area, or Carpet Area
- Land / Commercial Plot / SCO: Can be advertised in Plot Area only`,
    relatedTopics: ["Option Visibility", "Slot Activation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "removing-option-sizes",
    category: "Options Management",
    title: "Removing Option Sizes",
    keywords: ["delete option", "remove size", "sold out", "deactivate option", "remove option", "delete options", "remove options"],
    content: `## How to Remove Option Sizes from the XID Page

**Decision Tree: Are there paid client slots live on this option?**

**YES - Paid Slots Live:**

*Option 1: Complete Removal*
- Share official builder communication (email/letterhead)
- Must confirm size doesn't exist OR is sold out
- Post this communication, XID team will deactivate the slots after 8 hours

*Option 2: Can't Get Builder Communication*
- Get confirmation from ALL salespersons with live clients
- Each must approve removal of their respective slots

**NO - No Paid Slots:**
Simple Process:
- Only builder document needed
- Accepted: Builder mail/letterhead, price list, or brochure
- Must confirm size doesn't exist OR is sold out

**Removing Option for Specific Dealer/CP/Builder:**
Requirements:
- Share TID of the client (e.g., 2526-T0008781)
- Get confirmation from salesperson who created transaction`,
    relatedTopics: ["Option Creation", "Slot Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "option-visibility-sequencing",
    category: "Options Management",
    title: "Option Visibility and Sequencing",
    keywords: ["option order", "display sequence", "sorting", "visibility", "seller portal", "options not showing", "option visibility", "option display"],
    content: `## Why Options Not Showing in Seller Portal?

**Common Reasons:**
1. No option sizes available in backend
2. Option sizes exist but saleable area doesn't match expected values

**Solution:**
- Share request with XID Team
- Provide valid source documents for option creation

## Display Order on XID Page

**Sorting Logic:**
- If ALL options have floor plans: Displayed in ascending order of size
- If SOME options have floor plans:
  - Options WITH floor plans appear first (ascending order)
  - Options WITHOUT floor plans appear after (ascending order)

**Can Sequencing Be Changed Manually?**
Answer: NO
- No provision to manually change option sequence
- System automatically sorts based on above logic`,
    relatedTopics: ["Floor Plans", "Option Display"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "duplicate-options",
    category: "Options Management",
    title: "Duplicate Option Sizes",
    keywords: ["same size", "duplicate options", "multiple layouts", "same option size", "two options same size"],
    content: `## Can Two Options Have Same Size?

**Depends on Configuration:**

**Same Configuration, Same Size:**
Answer: NO - Create Only ONE Option
- Two 3 BHK floor plans, both 1500 sq ft
- Only minor layout differences
- Create ONE option, map either layout

**Different Configuration, Same Size:**
Answer: YES - Create Separate Options
- Example: 3 BHK - 1800 sq ft AND 4 BHK - 1800 sq ft
- Create TWO separate options (different configurations)

**Rationale:**
- Same configuration: Size is the distinguishing factor, minor layout variations don't warrant separate options
- Different configuration: Configuration is primary differentiator, same size is incidental

## Area Unit Conversion
Options can be created in: Square Meter, Square Yard, Acres, Square Feet
Frontend: System automatically converts to Square Feet and displays in Square Feet by default`,
    relatedTopics: ["Option Creation", "Multiple Floor Plans"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "floor-plan-management",
    category: "Content Management",
    title: "Floor Plan Management",
    keywords: ["floor plans", "unit plans", "layout", "option images", "add floor plan", "upload floor plan", "floor plan requirements"],
    content: `## Floor Plan Guidelines

**Residential Projects:**
Floor plans can be uploaded for residential project pages (apartments, villas, builder floors, etc.). Floor plans are mapped to individual option sizes.

**Valid Sources for Floor Plans:**
- Builder brochure
- Builder's official website
- RERA documents
- Verified sales communication

**Can XID Team Create Floor Plans?**
Answer: NO
- No provision for XID team to design floor plans
- No default floor plans available
- Must be sourced from valid sources

**If Floor Plans Not Available:**
- Options can still be created using valid documents
- Options appear on frontend WITHOUT floor plans
- Display after slot activation

**Multiple Floor Plans Per Option:**
Can multiple floor plans be added for single unit size?
Answer: NO - Only ONE floor plan per unit option size on frontend

**Typical Floor Plans:**
"Typical floor plans" are standard representative floor plans. For residential projects, floor plans are uploaded per option/unit size — there is no separate "typical floor plan" upload. Each floor plan is linked to a specific option size.

**Land Options:**
Can floor plans be uploaded for land?
Answer: NO - But upload master plan to XID page, it automatically reflects under floor plan section for all land options after slot activation

**Commercial Projects:**
Can floor plans be added to commercial XID?
Answer: NO - Upload typical layout images to photo gallery instead`,
    relatedTopics: ["Option Creation", "Image Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "image-requirements",
    category: "Content Management",
    title: "Image Gallery Requirements",
    keywords: ["images", "photos", "cover image", "gallery", "image requirements", "upload images", "add images", "image upload", "photo upload", "upload photos"],
    content: `## Image Technical Requirements
- Format: JPG only
- Size: Under 5 MB per image
- Quality: High resolution, clear images

## Prohibited Image Content
NOT Allowed:
- ✗ Blurry or low-resolution images
- ✗ Images containing human figures
- ✗ Images with pricing information
- ✗ Images with religious content
- ✗ Watermarks or contact details
- Elevation Images: Complete elevation must be visible (partial views not accepted)

## Cover Image Guidelines

**Preferred Cover Images (Best Choices - Outdoor Visuals):**
- Elevation
- Aerial View
- Entrance
- Site View
- Villa Images

**Amenities as Cover:** Allowed only if suitable outdoor images not available

**Not Allowed as Cover:**
- Master Plan
- Location Map
- Construction Images

## Real vs Artistic Images
- If real images are aesthetically suitable → Use real images
- If real images are poor quality → Use artistic images
- Fully Ready-to-Move Projects: Artistic images NOT allowed
- Partially Ready (multi-phase with some under construction): Artistic images allowed

## Image Folder Sequencing (Cannot Be Modified):
1. Outdoor Images → 2. Indoor Images → 3. Facilities → 4. Demo Flats → 5. Construction Images → 6. Others

## Uploading Large Files
Use: Smash, TransferNow, WeSentIt
DO NOT Use: WeTransfer (blocked on XID team's system)`,
    relatedTopics: ["Cover Image", "Construction Images"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "construction-images",
    category: "Content Management",
    title: "Construction Image Management",
    keywords: ["construction images", "under construction", "RTM images", "remove images", "remove construction images", "delete construction images"],
    content: `## Removing Construction Images

**Requirements:**
- Latest construction images must be shared for replacement
- Cannot remove without replacement

**Exception:**
- Project is completely Ready-to-Move
- Can remove without replacement

**Process:**

**Under Construction Projects:**
1. Share latest construction images
2. XID team replaces old with new
3. Old images removed after replacement

**Ready-to-Move Projects:**
1. Confirm project is fully RTM
2. Provide RTM status proof
3. Construction images removed

**Why Replacement Needed?**
- Shows project progress
- Builds buyer confidence
- Required for active construction projects`,
    relatedTopics: ["Project Status", "Image Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "brochure-management",
    category: "Content Management",
    title: "Brochure Management",
    keywords: ["brochure", "PDF", "project brochure", "document upload", "add brochure", "upload brochure", "brochure requirements"],
    content: `## Brochure Requirements

**Content Requirements:**
- ✓ Must be project-specific
- ✗ NOT corporate brochure (company profile/achievements)
- ✗ NOT single-page leaflet with minimal information

**Technical Requirements:**
- Format: PDF
- File size: Less than 25 MB

**Brochure Orientation:**
Can orientation be changed (landscape ↔ portrait)?
Answer: NO - Orientation based on original uploaded file, cannot be changed

**Removing or Replacing Brochure:**
Brochure is Critical - Cannot Remove Without Replacement

**To Replace:**
Share new brochure with XID team

**To Remove (Without Replacement):**
- Formal builder communication required
- Must state reason for removal
- XID team reviews and decides

**Why Brochure is Critical?**
- Key project information source
- Enhances page credibility
- Important for SEO and user experience`,
    relatedTopics: ["Project Documents", "Builder Communication"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "video-management",
    category: "Content Management",
    title: "Video Management",
    keywords: ["videos", "YouTube", "project video", "P2V", "video upload", "add video", "upload video", "video requirements"],
    content: `## How to Add Video to XID Page

Raw video files cannot be directly added

**Process:**
1. Video must be uploaded to YouTube
2. Share YouTube link with XID team

**YouTube Channel Requirements:**
- Preferred: Builder's official YouTube channel
- Alternative: Raw .MP4 file can be uploaded on XID team's YouTube channel (must have NO copyright content)
- If Copyright Content Detected: Must use builder's official YouTube channel only

**Maximum Videos on XID Page:** 3 videos maximum

**Video Priority Order:**
1. In-house Video (99acres YouTube)
2. In-house Video (Agency)
3. CP/Broker Video (Influencer via individual YouTube)
4. Builder Project Video (Real)
5. Builder Project Video (Animated)
6. P2V Video (System-generated auto slideshow)
7. Operation Video (Field team)
8. Others

**P2V (Photo to Video) Management:**
- Automatically generated after 24 hours from Image Gallery
- To Fix P2V Content: Update images in Image Gallery, P2V regenerates automatically
- To Remove P2V: Reason required + Product team approval mandatory`,
    relatedTopics: ["YouTube Upload", "Image Gallery"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "price-list-management",
    category: "Content Management",
    title: "Price List Management",
    keywords: ["price list", "cost sheet", "price sheet", "pricing document", "add price list", "upload price list", "update price list"],
    content: `## Adding Price List

**Accepted Sources (Priority Order):**

**First Preference:**
- Builder's official email, OR
- Builder's letterhead

**If Above Not Available:**
- Channel Partner/Dealer/Broker email

**If No Email Available:**
Price list accepted if:
- Proper format with Base Pricing, Extra Charges, Government Charges
- Project name clearly mentioned

## Removing Price List

**Replacement Required:**
Cannot remove without sharing replacement

**Complete Removal (No Replacement):**
Valid reason must be mentioned in email

**Outdated Price List:**
If shared price list is outdated compared to uploaded version:
- Will NOT be considered for update
- Must provide latest price list

## Price List Format Requirements
Must Include:
- Base Pricing
- Extra Charges
- Government Charges
- Project Name
- Option sizes clearly mentioned

**Not Accepted:** Excel format price list will NOT be accepted`,
    relatedTopics: ["Pricing Management", "Valid Documents"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "payment-plan-management",
    category: "Content Management",
    title: "Payment Plan Management",
    keywords: ["payment plan", "payment schedule", "installment plan", "add payment plan", "update payment plan"],
    content: `## Adding Payment Plan

**Accepted Sources:**
First Preference:
- Builder's official email, OR
- Builder's letterhead

**Content Requirements:**
- Clearly defined milestones
- Corresponding percentage or amount per milestone
- Total of all percentages must equal 100%

## Removing Payment Plan
Replacement Required: Cannot remove without sharing replacement
Complete Removal (No Replacement): Valid reason must be mentioned in email

## Example Valid Payment Plan

**Construction Linked Payment Plan:**
- On Booking: 10%
- On Foundation: 15%
- On Basement Completion: 10%
- On Ground Floor Completion: 15%
- On 5th Floor Completion: 15%
- On Structure Completion: 15%
- On Possession: 20%
- **Total: 100%**`,
    relatedTopics: ["Price List", "Pricing Display"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "location-highlights",
    category: "Content Management",
    title: "Location Advantages Management",
    keywords: ["location highlights", "connectivity", "nearby landmarks", "distance", "location advantages", "add location", "update location", "religious places", "mandir", "temple", "mosque", "church"],
    content: `## How to Update Location Highlights/Advantages on the XID Page

**Sources for Location Highlights:**
- Exact Latitude/Longitude of the project on Google Maps (preferred source)
- If lat/long is not available: Brochure, Project Website, Sales Mail

**Key Guidelines:**
- Location highlights should be mentioned in meters/kilometers, NOT travel time
- Maximum: 15 highlights per XID page
- Each location highlight should be from unique category (Preferred)
- ⚠️ Religious places such as temple, mosque, churches etc. are NOT allowed in location highlights

**Preferred Categories (15 Categories):**
1. School
2. Hospital
3. Shopping Mall
4. College/University
5. Airport
6. Metro Station
7. Railway Station
8. Highway/Expressway
9. Golf Course
10. Stadium
11. Office Complex
12. Amusement Park
13. Beach
14. 5-Star Hotel
15. Any Other Major Landmark

**Client-Requested Highlights:**
- Landmark name must be provided
- Travel distance (preferred)
- Travel time accepted as exception

**Note:** Location advantages description visible on XID page is system-generated and cannot be modified

**Good Examples:**
- "2 km from ABC International School"
- "5 km from City Hospital"
- "10 km from International Airport"`,
    relatedTopics: ["Location Update", "Google Maps"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-usp",
    category: "Content Management",
    title: "Project Highlights and USPs",
    keywords: ["USP", "why buy", "project highlights", "unique features", "add USP", "project USP", "unique selling points", "religious name in USP", "religious content USP"],
    content: `## Guidelines for Project USPs

**Maximum:** 7 logical USPs per project

**Content Sources - Can Be Derived From:**
- Builder reputation
- Unique offerings
- Location advantages
- Awards and recognitions
- Project amenities

⚠️ **No religious content is allowed in the USP section.**

## Valid USP Examples (Specific and Quantifiable):
- "Magnificent 25,000 sq ft clubhouse with 5,000 sq ft gym"
- "International Olympic FIFA football size court"
- "30 acres of open space with sports facilities"
- "Best Theme Project Of The Year - Godrej Woods by ET Realty Awards 2022"
- "IGBC Gold Rated project"

## Avoid Generic Statements:
- ✗ "Great location"
- ✗ "Best project"
- ✗ "Premium amenities"

## Tips for Strong USPs

**Be Specific:**
- Use numbers and measurements
- Include award details with year
- Mention certifications

**Be Unique:**
- What sets THIS project apart?
- What can't competitors claim?

**Be Relevant:**
- What matters to target buyers?
- What solves buyer pain points?`,
    relatedTopics: ["About Project", "Amenities"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "slot-activation-errors",
    category: "Troubleshooting",
    title: "Slot Activation Errors",
    keywords: ["activation error", "slot error", "cannot activate", "NP slot error", "some error occurred", "error", "fix error", "troubleshoot error", "slot activation error", "activation issue"],
    content: `## How to Resolve Slot Activation Errors

### Error: "Some Error Occurred"
**Issue:** Tower mapping missing for project
**Resolution:** Tower mapping must be done from XID backend by XID team. Contact XID team to add tower mapping.

### Error: "This Is a New Launch Premium Project"
**Full Message:** "Please Use FP/PG to Advertise on This Project"
**Issue:** Project tagged as New Launch Premium (restricts AdPro/AdStar)
**Resolution:** Turn off New Launch tag

**Required Approvals:**
- Non-RERA Projects: Official builder email mentioning project name and launch date
- RERA Projects: Product Team approval required to remove tag

### Error: "Config Slot Count Cannot Exceed Available Configurations"
**Issue:** Number of selected slots exceeds available configurations
**Resolution Steps:**
1. XID team creates temporary dummy option
2. Map dummy option to relevant phase
3. Proceed with transaction
4. After slot activated, inform XID team to remove dummy option

### Error: "Phase Status and Completion Date Does Not Match"
**Issue:** Phase status doesn't align with possession/completion date
**Resolution Options:**
- Option 1: Mark as Ready to Move (requires OC/CC, or builder consent form + RTM images + Regional Head approval)
- Option 2: Extend Possession Date (requires extension certificate or official builder communication)

### Error: "Max Slots Entered Cannot Be Greater Than Number of Distinct Configurations"
**Also Appears As:** "Option Area Is Coming as 0"
**Issue:** No option sizes/configurations in backend OR saleable mapping missing/incorrect
**Resolution:** Check if option sizes created in backend, ensure saleable area mapping correctly set

### Error: "Quantity Left Is Less Than Required"
**Issue:** Not enough slots available to activate transaction
**Resolution:** Verify slot availability, check if transaction already active

### Error: Possession Date Beyond 2030
**Issue:** System limitation - possession dates beyond 2030 cause errors
**Resolution:**
1. Connect with XID team
2. Temporarily update possession date to before 2030
3. Activate slot
4. Inform XID team to revert to original date`,
    relatedTopics: ["Slot Management", "Option Creation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "pricing-display",
    category: "Pricing",
    title: "Pricing Display Management",
    keywords: ["price", "pricing issues", "price display", "cost", "rate", "pricing not showing", "price not visible", "update pricing", "change price"],
    content: `## Pricing Priority Hierarchy

The system displays pricing in this priority order:

**1. Builder Slot Prices (Highest Priority)**
- When Applied: Builder slot is active
- Single-Phase Projects: Sales can resolve directly using Seller Panel
- Multi-Phase Projects: Share price list with XID team to update

**2. XID Team Entered Prices in Price Panel**
- When Applied: Builder slot prices not available
- XID team uses price list to calculate and update

**3. Average Channel Partner (CP) Entered Prices**
- When Applied: Neither builder slot nor XID-entered prices available
- System calculates average from CP entries
- To Lock Pricing: Share latest price list with XID team

## Resolving Pricing Issues
**Requirements:**
- Share updated price list
- Option sizes must be clearly mentioned
- Essential for accurate price updates

## Price on Request
**Configuration-Level Rule:**
ALL option sizes within configuration must be "Price on Request". If even ONE option has price, system calculates pricing for all.

**Cannot Show Selective "Price on Request"**
- No provision to show "Price on Request" for just one option
- Cannot mix "Price on Request" with actual prices in same configuration`,
    relatedTopics: ["Price List", "Builder Slots"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "other-charges",
    category: "Pricing",
    title: "Other Charges Management",
    keywords: ["other charges", "extra charges", "government charges", "additional costs", "remove other charges", "plus other charges"],
    content: `## Can "+ Other Charges" Be Removed?

**Answer: NO**

**Reason:**
- Standard component of all paid XID pages
- System-generated and mandatory

## What "+ Other Charges" Includes

**Government Charges:**
- Registration fees
- Stamp duty
- Other statutory charges

**Extra Charges:**
- Clubhouse charges
- DG (Diesel Generator) charges
- Maintenance deposits
- Other builder charges

## Correcting Charge Discrepancies

**Extra Charges:**
Can be corrected by sharing valid builder price list

**Government Charges:**
- Cannot be modified manually
- Regulated by government
- Changes require official government update/notification

## When to Update

**Extra Charges Change:**
1. Get updated builder price list
2. Share with XID team
3. Team updates extra charges

**Government Charges Change:**
1. Government issues new rates
2. Provide official notification/document
3. System updates across platform`,
    relatedTopics: ["Price List", "Pricing Display"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "builder-name-change",
    category: "Builder Information",
    title: "Builder Profile Management",
    keywords: ["builder name", "developer", "builder profile", "company name", "change builder", "update builder name", "builder change"],
    content: `## Changing Builder Name on XID Page

**For Non-RERA Projects:**
- Official builder email or letterhead required
- Must clearly state new builder name

**For RERA Projects:**
- Option 1: New brochure showing updated name + RERA number, OR Builder website with updated name + RERA number
- Option 2 (If Above Not Available): Official builder email or letterhead

**If Builder Slot is Active:**
Name in "Developed by" / "Contact Builder" / "CTA" section pulled from Builder Profile (Company Name)

**Change Process:**
1. Share Builder Profile ID
2. Provide updated builder name
3. Send request to Operations Team
4. Operations updates Company Name in Builder Profile

## Adding/Removing Builder Prefix

**Default Behavior:** Builder's first name prefixed to project name for SEO

**Can Be Removed:**
- Client request required
- Must inform client about SEO impact

**To Add Prefix:**
Builder name must exactly match name in Developer section

**Example:**
- Original: "Green Valley Apartments"
- With Prefix: "ABC Green Valley Apartments"
- Builder: ABC Developers`,
    relatedTopics: ["Project Name", "Builder Profile"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "builder-logo",
    category: "Builder Information",
    title: "Builder Logo Management",
    keywords: ["builder logo", "developer logo", "company logo", "add builder logo", "upload builder logo", "change builder logo", "builder logo requirements"],
    content: `## Sourcing Builder Logo

**Accepted Sources:**
- Official builder website
- Project brochure
- Sales team email
- RERA documents (in some cases)

## Logo Requirements
- Resolution: 170 x 112 pixels
- Format: JPG

## If Logo Not Available
**Alternative:** Text-based logo can be created using builder name in formatted text

## Logo vs Builder Name
**Important Rule:** Builder name in logo MUST match builder name on XID page. No discrepancies allowed.`,
    relatedTopics: ["Project Logo", "Image Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "about-builder",
    category: "Builder Information",
    title: "Builder Description (About Builder)",
    keywords: ["about builder", "builder description", "developer info", "company profile", "builder info", "add builder description"],
    content: `## Approved Content Sources for About Builder

**Valid Sources:**
- Official Builder Website
- Project Brochure
- Builder's Official LinkedIn Profile
- ZaubaCorp
- Sales Team Input (must be validated)

## Content Guidelines

**Should Include:**
- Year of Establishment
- Company Overview
- Achievements & Awards
- Core Projects / Notable Developments
- Vision and Mission
- Experience in Other Industries (if applicable)

**Should NOT Include:**
- Individual names (Chairman, CEO, MD, personnel)

**Character Limit:** Maximum 600 characters

**If Content Exceeds Limit:**
- Must be edited or summarized
- Retain accuracy and key highlights
- Maintain brand alignment

## Year of Experience Sources
**Valid Sources:**
- Builder's Official Website
- Project Brochure
- Builder's Official LinkedIn Account
- ZaubaCorp`,
    relatedTopics: ["Builder Profile", "Content Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "joint-venture-builders",
    category: "Builder Information",
    title: "Joint Venture (Multiple Builders)",
    keywords: ["joint venture", "JV", "multiple builders", "two builders", "add two builders", "multiple developers"],
    content: `## Can Two or More Builders Be Displayed?

**Current System:** NO provision for multiple builder names

**Exception Available:**
- XID team can make exception on request
- Creates combined builder name

## Combined Name Example
**Original Builders:**
- "ABC Builders"
- "XYZ Developers"

**Combined Name:** "ABC Builders and XYZ Developers"

## Process
1. Client insists on showing both builders
2. XID team reviews request internally
3. New combined builder name created
4. Mapped to project

## Builder Name Restrictions

**Special Characters:** Not Allowed (impact SEO negatively). Must use standard alphanumeric characters.

**Excluded Terms:** "Pvt Ltd" not included in builder name

**Who Can Be Builder?**
- Allowed: Registered builders/developers only
- NOT Allowed: Dealer, Real estate agent, Promoter, Marketing partner`,
    relatedTopics: ["Builder Name", "Builder Profile"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "locality-management",
    category: "Location",
    title: "Location and Locality Management",
    keywords: ["locality", "location change", "area", "neighborhood", "lat/long", "change locality", "update location", "latitude longitude", "change locality in existing project", "update locality", "project locality", "locality change"],
    content: `## Changing Project Locality

**If Locality Explicitly Mentioned In:**
- RERA
- Builder website/brochure
- Google Maps (Lat/Long)
Then: Location can be updated directly

**If Not Listed in Above Sources:**
May be accepted if within 4 km radius of verified project location

## Complete Project Address
Cannot Display in Locality Section

**Alternative:** Complete address shown in auto-generated description under "What is the project address" section. Updates automatically within 24 hours.

**Accepted Sources for Complete Address:**
- RERA
- Builder's official website
- Project brochure
- Field Content Team / Verification Team
- Google Maps (validated)
- Sales mail (verified)

**Character Limit:** 100 characters

## Latitude/Longitude Update

**Valid Sources:**
- Google Maps (accurate pin location)
- Field Content Team / Verification Team
- Sales Team (must be validated)

**Why Lat/Long Important?**
- Accurate map display
- Location highlights calculation
- Distance measurements
- Nearby landmark identification`,
    relatedTopics: ["Location Highlights", "Google Maps"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "offer-management",
    category: "Content Management",
    title: "Offer Management",
    keywords: ["offers", "promotions", "discounts", "offer image", "offer text", "add offer", "create offer", "offer requirements"],
    content: `## Offer Text Requirements

**Whitelisting Process:**
1. Share offer text with XIDops team for whitelisting
2. Text must be quantifiable
3. Maximum 65 characters

**After Whitelisting:**
- XIDops updates on "Seller" portal
- Sales team activates offer from portal
- Add validity date during activation (if applicable)

## Offer Image Requirements

**Residential XIDs:**
- Offer image has separate section
- Should NOT be uploaded to general image section
- Required Resolution: 400px width × 225px height

**Commercial XIDs:**
- In-house designed image used as XID cover image

## Examples of Valid Offers (Quantifiable):
- ✓ "Save ₹5 Lakhs - Limited Time Offer"
- ✓ "Zero Registration Charges This Month"
- ✓ "10% Discount on Select Units"
- ✓ "Free Car Parking Worth ₹3 Lakhs"

## Not Valid:
- ✗ "Amazing Discount" (not quantifiable)
- ✗ "Best Offer Ever" (vague)
- ✗ "Contact for Details" (no value stated)`,
    relatedTopics: ["Image Requirements", "Pricing Display"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "amenity-management",
    category: "Content Management",
    title: "Amenity Management",
    keywords: ["amenities", "facilities", "project features", "add amenities", "update amenities"],
    content: `## How to Add Amenities

**Accepted Sources:**
- Builder's official website
- Project brochure
- Builder website
- RERA documentation
- Sales communication (must be validated)

## System Limitations

**Cannot Be Modified:**
- Amenity names (system-defined in backend)
- Spelling or naming conventions
- Amenities sequencing on frontend
- Amenities description (system-generated)
- Amenity logos/icons (predefined)

**What This Means:**
- Must use exact amenity names from system
- Cannot create custom amenity names
- Cannot rearrange amenity display order
- Cannot change amenity descriptions

## Best Practices
- Verify amenities actually exist in project
- Match amenities to system-defined names
- Ensure accuracy of amenity information`,
    relatedTopics: ["Project Highlights", "Image Gallery"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "advertising-products",
    category: "Slot Types",
    title: "Available Advertising Products",
    keywords: ["NP slot", "FP", "PG", "AdStar", "AdPro", "advertising products", "slot types", "available products", "advertising options"],
    content: `## Products Available for XID Advertising

**For All Advertisers (Builder/Dealer/Channel Partner):**

1. **NP (New Project) Slot**
   - Standard inventory listing
   - Configuration-based advertising

2. **FP (Featured Project)**
   - Premium visibility
   - Featured positioning

3. **PG (Photo Gallery)**
   - Enhanced visual presentation
   - Multiple images showcase

4. **AdStar**
   - Video-enabled seller card
   - Enhanced profile visibility

5. **AdPro**
   - Premium video profile
   - Advanced features

## CTA (Call-To-Action) Button
**Requirement:** Builder slot must be live

**CTA Button Not Visible? Check:**
- For XIDs with Stories: SAB Campaigns → CTA appears below USP section
- Non-SAB Projects: CTA appears in "Builder" section

**Verification Checklist:**
- ✓ Builder slot is active
- ✓ Client profile set as "Builder"`,
    relatedTopics: ["AdStar Process", "Slot Activation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "blocking-advertisers",
    category: "Access Control",
    title: "Blocking Advertisers",
    keywords: ["block CP", "block dealer", "advertiser block", "builder exclusive", "block advertiser", "restrict CP"],
    content: `## Blocking CP/Dealer from XID Page

**When Used:** Builder wants exclusive advertising rights

**Requirement:** Builder's official mail mandatory

**Effect:**
- Only builder allowed to advertise
- All CPs/Dealers restricted
- Currently active CP/Dealer/Broker slots must be deactivated manually
- XID team will include all relevant Account Managers in email and seek confirmation
- If no objections received within 8 hours, XID team proceeds with deactivating dealer slots

## If CP/Dealer Wants to Advertise Later

**Process:**
- Must obtain explicit builder approval
- Share builder approval with request
- If error encountered: "This profileid does not have access to project ID" - this means builder has blocked dealer slots

## Use Cases

**Typical Scenarios:**
- Builder wants direct customer engagement
- Exclusive launch period
- Premium projects with builder-only sales`,
    relatedTopics: ["Builder Slots", "Access Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "resale-listings",
    category: "Pricing",
    title: "Resale Listing Prices",
    keywords: ["resale listings", "resale prices", "secondary market", "remove resale", "block resale", "delete resale"],
    content: `## Removing Resale Listings and Prices

**Requirements:**
1. At least ONE paid slot must be live in all available configurations
2. Delete all resale listings mapped to XID page
3. Block future resale listings

**Mandatory Documentation:**
Builder email or letterhead required for blocking and deletion

**Why Paid Slots Needed?**
- Ensures fresh inventory available
- Prevents empty project page
- Maintains buyer engagement

## Process
1. Ensure paid slots live in all configurations
2. Get builder approval (email/letterhead)
3. Submit request to delete mapped resale listings
4. Block future resale posting`,
    relatedTopics: ["Blocking Resale", "Slot Activation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-logo",
    category: "Content Management",
    title: "Project Logo Management",
    keywords: ["project logo", "add project logo", "upload project logo", "change project logo", "project logo requirements", "logo for project", "XID project logo"],
    content: `## How to Add a Project Logo on the XID Page

**Accepted Sources:**
- Official website of the developer
- Project brochure
- Sales email (as per below requirement)

**Logo Requirements:**
- The project name on the logo must exactly match the name displayed on the XID/project page
- Format: JPG
- Required resolution: 100 x 60 pixels

**Important Note:**
Developer company logos CANNOT be used in place of the project logo under any circumstances. If a valid project logo is not available, the logo section should be left blank.

**Key Differences from Developer Logo:**
- Project logo represents the SPECIFIC PROJECT (not the company)
- Resolution is 100 x 60 pixels (smaller than developer logo)
- Name on logo must match PROJECT name on XID page
- These two logo types are NOT interchangeable`,
    relatedTopics: ["Image Requirements", "Content Guidelines"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-name-change",
    category: "Project Creation",
    title: "Project Name Change",
    keywords: ["project name", "change project name", "modify project name", "project name change", "rename project", "update project name", "project name guidelines", "capital letters", "project name capital", "pvt ltd", "pvt ltd in project name", "uppercase project name"],
    content: `## How to Change or Modify Project Name on an XID Page

**For Non-RERA Registered Projects:**
- Official builder email or letterhead clearly stating the new project name is mandatory

**For RERA-Registered Projects:**
- New brochure and builder website showing the updated project name along with RERA number must be provided
- If not available, official builder email or letterhead can be accepted

## Adding or Removing Builder Prefix in Project Name

**Default Behavior:** Builder's first name is prefixed to project name to enhance SEO ranking

**To Remove Prefix:**
- Can be removed on client request
- Must inform client about possible impact on SEO

**To Add Prefix:**
- Builder name must exactly match the one updated in Developer section

## Project Name Guidelines & Limitations

**Legal Guidelines:**
- Project name on XID must match RERA website, project brochure, builder consent form (Non-RERA) or official project website
- If new phase has different name: Cannot replace main project name, can only be displayed under phase details
- Adding "Phase 2", "Phase 3" etc. allowed only if phase RERA is mapped on XID
- Project name cannot be same as builder name
- City or locality name cannot be added in project name

**SEO & Formatting Rules:**
- Writing entire project name in CAPITAL LETTERS is NOT recommended (negative SEO impact)
- "Pvt Ltd", "Ltd" etc. are NOT included in project name (SEO impact)

**System Limitations:**
- Special characters are NOT allowed in project name
- Roman numerals (I, II, IV, etc.) are NOT permitted due to SEO impact`,
    relatedTopics: ["Project Creation", "Builder Prefix"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-description",
    category: "Content Management",
    title: "Project Description / About Project",
    keywords: ["project description", "about project", "description types", "system generated description", "user generated description", "change description"],
    content: `## Types of Descriptions on XID Page

There are two types of descriptions available:

**1. System-Generated Description**
- Auto-generated by the system
- SEO-optimized for better search rankings
- Recommended to retain for maximum visibility on search engines
- NO changes can be made on content
- If major language or spelling mistake found: Raise to feedback team

**2. User-Generated Description**
- Can be enabled only if client requests NOT to display system-generated content
- Content can be taken from project brochure or official website
- Minor modifications allowed to avoid negative SEO impact

## When to Use Each Type

**Use System-Generated (Default & Recommended):**
- For best SEO performance
- For consistent formatting
- For automatic updates

**Switch to User-Generated Only When:**
- Client explicitly requests it
- Builder has specific content requirements
- Marketing needs override SEO considerations`,
    relatedTopics: ["SEO", "Content Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "p2v-management",
    category: "Content Management",
    title: "P2V (Photo to Video) Management",
    keywords: ["P2V", "photo to video", "auto video", "slideshow", "remove P2V", "P2V video", "automatic video"],
    content: `## What is P2V (Photo to Video)?

P2V is an automatically generated video slideshow created from the project's Image Gallery.

**Automatic Generation:**
- Generated automatically 24 hours after images are uploaded
- Uses images from Image Gallery

## Fixing P2V Content Issues

**If P2V content is incorrect:**
1. Update images in Image Gallery
2. P2V regenerates automatically with updated images

## Removing P2V from Project Page

**Requirements:**
- Valid reason must be provided
- Product team approval is MANDATORY

**Process:**
1. Submit removal request with reason
2. Get product team approval
3. XID team removes P2V

## P2V Display

**Where P2V Appears:**
- SRP/Pseudo Listing (if cover image is marked)
- May appear as slideshow display
- Only appears if cover image is properly marked in XID backend`,
    relatedTopics: ["Video Management", "Image Gallery"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "slot-reactivation",
    category: "Slot Types",
    title: "Slot Re-activation Rules",
    keywords: ["reactivate slot", "slot reactivation", "old TID", "deactivated slot", "reactivate TID", "same TID"],
    content: `## Can a Deactivated Slot Be Re-activated with Same TID?

**Answer: NO**

**Rule:** Once a transaction is deactivated, it CANNOT be re-activated using the old TID.

**Solution:** A new TID will be required to create a new slot.

## Slot Transfer Between Projects

**Can slots be transferred from one configuration/project to another?**

**Answer: NO**

Once a slot is activated on a specific configuration or project:
- It cannot be transferred to another configuration
- It cannot be transferred to another project
- The current configuration/project must be deactivated first
- A new transaction (new TID) is required for the new configuration/project`,
    relatedTopics: ["Slot Activation", "Transaction Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "3d-floor-plans",
    category: "Content Management",
    title: "3D and Isometric Floor Plans",
    keywords: ["3D floor plan", "isometric floor plan", "3D plan", "isometric plan", "3D layout"],
    content: `## Are 3D/Isometric Floor Plans Allowed on XID Page?

**Answer: YES, with conditions**

Builder/client-provided 3D floor plans or isometric floor plans CAN be updated on XID page.

**Conditions:**
- If client insists on updating isometric floor plans, same may be considered only after internal discussion and approval

## Preferred Order for Floor Plans on XID Page

**Priority (Best to Acceptable):**
1. 2D floor plans with clear dimensions (MOST PREFERRED)
2. 2D floor plans without dimensions
3. Isometric floor plans with dimensions

**Note:** Floor plans with clear dimensions are always preferred as they help the team design more accurate and better-quality in-house 3D floor plans.`,
    relatedTopics: ["Floor Plan Management", "Option Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "possession-status-changes",
    category: "Project Creation",
    title: "Possession Status Changes",
    keywords: ["possession date", "RTM", "ready to move", "under construction", "change status", "extend possession", "possession status", "OC", "CC", "completion certificate"],
    content: `## Extending Possession Date on Under Construction Project

**For RERA-registered:**
Documents required:
- Extension certificate from RERA, OR
- Official builder communication

## Changing Status: Under Construction to Ready to Move (RTM)

**For RERA-registered projects:**
- Occupancy Certificate (OC) or Completion Certificate (CC) is MANDATORY
- If OC/CC not available, provide:
  - Builder consent form clearly stating project is RTM
  - Recent Ready-to-Move images of site
  - Approval from Regional Head

**For Non-RERA projects:**
If possession date has passed (project is RTM):
- Builder mail clearly stating project is RTM
- Recent Ready-to-Move images of site

## Changing Status: New Launch to Under Construction

Project can be marked Under Construction if:
- Construction is evident on RERA, builder website, or Google Maps
- If not verifiable: Under-construction images are mandatory
- If launch date is over 6 months old: May be marked Under Construction even without images

## Partially Ready to Move Status

**Single-phase projects:** Status CANNOT be "Partially Ready to Move" - must be either Under Construction OR Ready to Move

**Multi-phase projects:** System automatically displays "Partially Ready to Move" if:
- At least one phase marked as RTM has active client slot, AND
- At least one phase marked as Under Construction has active client slot

## Tower-wise Possession Date

**Single-phase projects:** NO provision to display tower-wise possession dates. Only one common possession date for entire project.

**Different property types (same RERA):** NO provision to display separate possession dates. Only single possession date shown.`,
    relatedTopics: ["Project Status", "Slot Activation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "bank-information",
    category: "Content Management",
    title: "Bank Information on XID Page",
    keywords: ["banks", "add banks", "bank details", "home loan", "interest rates", "bank approval"],
    content: `## How to Add Banks on the XID Page

**Accepted Sources:**
- Builder's official website
- Project brochure
- Sales team email

## Interest Rates Display

**Can interest rates be removed?**
Answer: NO

**Why:**
- Interest rates are fetched from official websites of respective banks
- Any modification requires valid source document (official bank URL or document)

## Bank Section Content

**Information Displayed:**
- Bank names approved for project
- Current interest rates (auto-fetched)
- Home loan availability`,
    relatedTopics: ["Project Content", "Price List"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "resale-management",
    category: "Pricing",
    title: "Resale Block/Unblock Management",
    keywords: ["resale", "block resale", "unblock resale", "resale listings", "hide resale", "remove resale listings", "rental listings"],
    content: `## How to Permanently Delete a Resale/Rental Listing

**XID team has NO access** to delete/remove resale or rental listings.

**Contact:** Listing Screening team at Listingscreening_99acres@99acres.com

## How to Block Resale Visibility on Project Page

**Process:**
1. Connect with XID team
2. Share official builder communication
3. XID team blocks resale listings from displaying

**Note:** Rental listings CANNOT be blocked by XID team. For rental concerns: Contact Listing Screening team at Listingscreening_99acres@99acres.com

## How to Unblock/Allow Resale Listings

**Process:**
1. Connect with XID team to unblock resale listings

**Conditions for Re-enabling:**
- Project must be under construction, OR
- Project must be more than 6 months old with construction progress visible in valid sources`,
    relatedTopics: ["Listing Management", "Builder Communication"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-deactivation",
    category: "Project Creation",
    title: "Project Deactivation and Deletion",
    keywords: ["deactivate project", "delete project", "remove XID", "project not visible", "deactivation", "deletion", "hide project"],
    content: `## Deactivating or Deleting an XID/Project Page

**When Allowed:** Only in exceptional circumstances (legal issues, etc.)

**Deactivation:**
- Project page temporarily removed from frontend
- Will still show in Google Searches and 99acres Suggester
- Can be reactivated later upon builder's confirmation

**Deletion:**
- Project page permanently removed from 99acres
- Removed from Google search results
- Fresh builder email required to re-create project page in future

## Why Project Page is Not Visible on Frontend

**For Consent-Based Projects:**
- If no paid activity (slot activation) within 15 days of creation
- Project may be automatically deactivated
- To reactivate: Connect with XID team

**For RERA-Registered Projects:**
- Project may be deactivated if RERA registration has lapsed
- To reactivate:
  - Share new RERA number, OR
  - Provide RERA extension certificate
  - If project is RTM: Share OC/CC`,
    relatedTopics: ["Project Status", "RERA Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "faq-section",
    category: "Content Management",
    title: "FAQ Section Management",
    keywords: ["FAQ", "frequently asked questions", "FAQ section", "remove FAQ", "add FAQ question"],
    content: `## Can Specific Questions be Added/Removed from FAQ Section?

**Answer:** NO provision to add or remove individual questions from FAQ section.

**However:** As per client's request, the ENTIRE FAQ section can be removed.

## How FAQ Works

**Question Source:** Questions in FAQ are pre-defined

**Answer Source:** Answers are automatically fetched from different sections of XID page

**Update Timing:** If any content is updated on XID page, changes reflect in FAQ section within 4–8 hours`,
    relatedTopics: ["Project Content", "System Generated Content"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "sab-story-feature",
    category: "Content Management",
    title: "SAB Story / New Launch Story Feature",
    keywords: ["SAB story", "new launch story", "story feature", "activate story", "project story", "shubharambh"],
    content: `## Criteria to Activate New Launch Story Feature

**Automatic Eligibility:**
1. Project is a SAB (Shubharambh) project, OR
2. Project is a New Launch:
   - Created or RERA registered within last 6 months

**Conditional Eligibility (Product Approval Required):**
1. If New Launch project is Non-RERA and has less than 20 units: Product team approval required
2. If project is neither SAB nor New Launch and client requests story activation: Product team approval mandatory

## What is SAB?

SAB (Shubharambh) is a premium campaign for new project launches with enhanced visibility and story features.`,
    relatedTopics: ["New Launch", "Premium Features"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "rera-qr-code",
    category: "Project Creation",
    title: "RERA QR Code Requirements",
    keywords: ["RERA QR", "QR code", "update QR", "RERA QR code", "add QR code"],
    content: `## RERA QR Code Requirements

**Legal Requirement:** As per legal guidelines, QR code is MANDATORY for all phases on an XID page.

**QR Code Sources:**
- RERA certificate
- Brochure/Builder website
- Sales mail

## Can Same RERA Number be Added to Two Projects?

**Answer: NO**

The same RERA number cannot be added to two different projects.

**Exception:** If RERA number belongs to mixed-use project:
- Same RERA can be added to Residential XID page
- Same RERA can be added to Commercial XID page
(Both for the same project)`,
    relatedTopics: ["RERA Requirements", "Project Creation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "fact-table",
    category: "Content Management",
    title: "Fact Table / Project Overview",
    keywords: ["fact table", "project overview", "tower count", "unit count", "floor count", "total area", "project area"],
    content: `## How to Update Fact Table / Project Overview

**Includes:** Tower count, unit count, floor count, open area, total project area

**Accepted Sources (Priority Order):**
1. Builder's official website or brochure
2. RERA documentation
3. Sales email (must be verifiable)

## Important Guidelines

**For Mixed-Use Developments:**
- Residential XID: Displays fact table for residential portion only
- Commercial XID: Displays fact table for commercial portion only
- Fact Table reflects overall project-level information, NOT phase-specific details

## Unit Display Limitations

**Total Project Area:**
- Can be displayed only in "Acres" on frontend
- No provision to change unit

**Floor Count:**
- Field accepts only numerical values
- Cannot display as "G+30" - only "30" floors
- For multiple towers: Maximum floor count among all towers displayed

**Unit Count Guidelines:**
- Represents total units offered by builder
- For mixed developments: Residential page shows residential count only; Commercial page shows commercial count only
- EWS and LIG units are EXCLUDED
- Cannot show "available units" - shows total units including sold out`,
    relatedTopics: ["Project Content", "Project Overview"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "authorized-builder-tag",
    category: "Access Control",
    title: "Authorized Builder Tag for Channel Partners",
    keywords: ["builder approved", "authorized by builder", "builder tag", "authorized dealer", "CP approval", "dealer approval"],
    content: `## How to Add "Builder Approved" or "Authorized by Builder" Tag

**Requirements:**
1. Official communication from builder must be shared with XID team
2. Communication should clearly mention:
   - Project name
   - Dealer name to be marked as "Builder Approved"
3. Dealer must be RERA-registered
4. Dealer's RERA details must be updated in client profile (via CRM request)

**Important Notes:**
- This tag is PROJECT-SPECIFIC
- XID team adds tag only for projects explicitly mentioned in builder's communication`,
    relatedTopics: ["Channel Partner", "Builder Communication"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "price-on-request",
    category: "Pricing",
    title: "Price on Request Display",
    keywords: ["price on request", "hide price", "no pricing", "POR"],
    content: `## Can "Price on Request" be Shown on Live Option Sizes?

**Answer: NO**

**Rule:** It is MANDATORY for all XIDs to display active pricing.

**XID team is strictly prohibited** from using "Price on Request" on any project page on the platform.

## Configuration-Level Rule

ALL option sizes within a configuration must be "Price on Request" for it to display.

If even ONE option has a price: System calculates pricing for all options.

**Cannot show selective "Price on Request":**
- No provision to show "Price on Request" for just one option
- Cannot mix "Price on Request" with actual prices in same configuration`,
    relatedTopics: ["Pricing Display", "Option Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "cover-image-visibility",
    category: "Content Management",
    title: "Cover Image and SRP Visibility",
    keywords: ["SRP images", "mobile app images", "images not visible", "cover image visibility", "search result images", "pseudo listing"],
    content: `## Why Images Not Visible on SRP/Pseudo Listing or Mobile App?

**Reason:** Images will not appear if a cover image is NOT marked from XID backend.

**Solution:** Connect with XID team to ensure cover image is properly marked.

## Cover Image Rules

**Can there be more than one cover image?**
Answer: NO - Only one cover image can be marked on XID page

**P2V with Cover Image:**
If P2V (Photo to Video) is available on XID page, a slideshow display may appear in SRP/Pseudo Listing.

## Master Plan and Location Map Removal

**Requirement:** Replacement image must be shared to remove existing master plan or location map.

**If client insists on complete removal:** Valid reason must be provided on mail.`,
    relatedTopics: ["Image Requirements", "P2V"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "locality-taxonomy",
    category: "Location",
    title: "Locality Taxonomy Management",
    keywords: ["add locality", "new locality", "locality taxonomy", "create locality", "parent locality", "child locality"],
    content: `## Requirements to Add New Locality on 99acres

A locality must have:
- Clear boundaries visible on Google Maps, OR
- Official documents (like municipal records) proving it exists

## Can Landmarks or Buildings be Added as Localities?

**Answer: NO**

Landmarks (like a chowk or statue) or individual buildings (like apartments or malls) cannot be added as localities.

**Requirement:** A locality should be a well-defined AREA, not just a single point.

## Can Upcoming Localities be Added?

**Answer: YES**

If the upcoming locality is mentioned on official websites or documents from government authorities, it can be added.

## Parent-Child Locality Relationship

**Requirement:** If bigger locality covers at least 55% of area of smaller one (child), they can be linked in parent-child relationship.

## Adding New City or District

**Requirements:**
- Clearly marked boundaries on Google Maps, OR
- Valid government proof that city/district exists

**What can be added as "City":**
- Only if it is officially a city or a district`,
    relatedTopics: ["Location Management", "Project Location"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "adstar-adpro-process",
    category: "Slot Types",
    title: "AdStar and AdPro Video Process",
    keywords: ["AdStar video", "AdPro video", "video shoot", "virtual shoot", "seller card video", "profile video", "project video"],
    content: `## How to Arrange Video Shoot for AdPro

**Virtual Video Shoot:**
Share client details with virtualshoot@99acres.com:
- Company Name
- Profile ID or Username
- Contact information

**Physical Shoots:** Discontinued - Only virtual shoots available

## Video Types

**Profile Video:**
- Introduction to the company
- Highlights overall background and offerings
- Only ONE profile video allowed per client
- Applicable across all projects

**Project Video:**
- Focuses specifically on individual project
- Does not cover multiple projects
- Multiple project videos allowed (one per project)

## Video Upload Requirements

**Duration:** Minimum 10 seconds, Maximum 20 minutes
**File Size:** Maximum 180 MB
**Go-Live Time:** 24-48 hours after approval during screening

## Prohibited Content in AdStar Videos

NOT Allowed:
- ✗ Background audio or music tracks (songs strictly prohibited)
- ✗ Mention of multiple projects in single video
- ✗ Disclosure of project pricing
- ✗ Reference to or comparison with other builders

## Self Video Upload

Sales can upload client's raw video through CRM with signed consent form.

**Contact for queries:** asap.ops@99acres.com

## T2V Video in AdStar

- CAN upload T2V video in AdStar
- CANNOT upload profile or project video in AdPro`,
    relatedTopics: ["Video Management", "Advertising Products"],
    contactEmail: "asap.ops@99acres.com"
  },
  {
    id: "pif-activation",
    category: "Content Management",
    title: "PIF (Project in Focus) Activation",
    keywords: ["PIF", "project in focus", "PIF activation", "PIF banner", "activate PIF"],
    content: `## How to Activate PIF (Project in Focus)

**Mandatory Requirements:**
Two banner images required:
1. Desktop banner image
2. Mobile site banner image

**Image Dimension:** 960 x 540 pixels

**Process:**
1. Share both banner images with XID team
2. XID team activates PIF

**Go-Live Timing:** PIF may take 2-4 hours to reflect on city page`,
    relatedTopics: ["Premium Features", "Banner Images"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "property-types-residential",
    category: "Project Creation",
    title: "Residential Property Types",
    keywords: ["residential property types", "apartment", "villa", "land", "service apartment", "studio apartment", "independent floor", "property type", "basic requirement for property type", "allowed property types", "which property types", "residential XID property"],
    content: `## Property Types for Residential XID/Project Page

**Allowed Property Types:**
- Apartment
- Villa
- Land
- Independent Floor
- Service Apartment
- Studio Apartment

**Important Notes:**
- Studio apartments and service apartments are residential units
- Cannot be advertised on commercial XID page
- Must use residential project page only`,
    relatedTopics: ["Project Creation", "Property Types"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "property-types-commercial",
    category: "Project Creation",
    title: "Commercial Property Types",
    keywords: ["commercial property types", "shop", "office", "showroom", "warehouse", "SCO", "commercial land", "property type", "basic requirement for property type", "allowed property types", "which property types", "commercial XID property"],
    content: `## Property Types for Commercial XID/Project Page

**Allowed Property Types:**
- Shop
- Ready to Move Office Space
- Bare Shell Office Space
- Showroom
- Warehouse
- Co-working Office Spaces
- Commercial Land / Institutional Land
- Agricultural / Farm Land
- Industrial Lands / Plots
- Food Court
- SCO Plots
- Multiplex
- Restaurant
- Kiosk
- Business Center
- Factory
- Manufacturing
- Cold Storage

**Note:** Studio apartments and service apartments CANNOT be advertised on commercial XID - they are residential units.`,
    relatedTopics: ["Project Creation", "Property Types"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "file-size-requirements",
    category: "Content Management",
    title: "File Size and Format Requirements",
    keywords: ["file size", "resolution", "image size", "file format", "file requirements", "upload requirements"],
    content: `## Resolution/Size/Format Requirements for Different Elements

| Element Type | File Format | Resolution/Size |
|--------------|-------------|-----------------|
| Project Logo | JPG, PNG | 100 x 60 pixels |
| Builder Logo | JPG | 170 x 112 pixels |
| Image | JPG, PNG, CDR, HEF, PDF, HEIC, TIF | Less than 5 MB each |
| Video | MP4, YouTube link | NA |
| Brochure | PDF, JPG, PNG | Less than 25 MB |
| Offer Image | JPG, PNG | 400 x 225 pixels |
| Banner Image (PIF) | JPG, PNG | 960 x 540 pixels |

## File Sharing Guidelines

**For Large Files:**
Use online file-sharing tools:
- ✓ Smash
- ✓ TransferNow
- ✓ WeSentIt

**Do NOT use:** WeTransfer (blocked on XID team's system)`,
    relatedTopics: ["Image Requirements", "Content Upload"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "campaign-management",
    category: "Content Management",
    title: "Campaign Management and Mailers",
    keywords: ["mailer", "campaign", "banner booking", "LBXID", "top banner", "inline banner", "mailer QC"],
    content: `## Correct DL for Campaign Requests

**Email:** corpservice-99acres@99acres.com

## Mailer Approval Requirements

**Trial or Single Shot Mailers:** Regional Head approval mandatory

**Repeat Project Mailers (within 15 days) or Open Database Mailers:** Branch Head approval required

## Mailer QC Timing

For same-day or early-morning execution: Submit Mailer QC request by 4:00 PM

Last-minute requests are difficult to accommodate.

## LBXID Banner Go-Live

**Timing:** Banners go live after midnight on following day post activation

**For specific go-live dates:** Submit request a day in advance

## Banner Not Visible After Activation?

**Check:** Ensure seller configuration is active on project page using same Profile ID

If not active: Banner will automatically be paused

## External Landing Pages

Can use client's external landing page with prior approval from Sandeep Upadhyay via email.

## RERA Compliance in Mailers/Banners

As per RERA guidelines:
- RERA number and website link are MANDATORY for all projects
- If multiple RERA numbers: Disclaimer specifying applicable details must be added
- QR code is MANDATORY for projects in Maharashtra, Kerala, Gujarat, Uttar Pradesh, and Bihar`,
    relatedTopics: ["Banner Advertising", "Premium Features"],
    contactEmail: "corpservice-99acres@99acres.com"
  },
  {
    id: "feedback-team-queries",
    category: "Troubleshooting",
    title: "Queries for Feedback Team",
    keywords: ["feedback team", "feedback queries", "price trend", "society review", "locality review", "builder widget"],
    content: `## Queries to Raise with Feedback Team

**Contact:** feedback@99acres.com

**Types of Queries:**
- Price trend and transaction details related issues
- Society review, locality reviews and Explore locality section related issues
- Builder widget removal
- Locality not visible in FSL
- System-generated description change/modification related

## Removing Price Trend and Transaction Details

XID team has NO access to remove these sections from project page.

**Contact:** Feedback team for removal requests`,
    relatedTopics: ["Troubleshooting", "Contact Teams"],
    contactEmail: "feedback@99acres.com"
  },
  {
    id: "projects-by-builder-section",
    category: "Builder Information",
    title: "Projects by Builder Section",
    keywords: ["projects by builder", "delivered projects", "ongoing projects", "upcoming projects", "builder projects", "project count"],
    content: `## How to Display/Remove Project in "Projects by Builder" Section

**Requirements for Display:**
- XID/Project page must exist on 99acres with correct possession status
- Project will reflect in Delivered/Ongoing/Upcoming section based on possession status

**To Remove Project from Section:**
- Builder name must be unmapped from specific project (XID)
- Connect with XID team for unmapping
- Once unmapped: Project automatically removed within 2–4 hours

## Updating Project Count in Builder Widget

**How it works:** Project count is automatically calculated based on projects on 99acres mapped under same builder

**If count is incorrect:**
- Ensure all builder's projects have active 99acres page
- Ensure projects are correctly mapped under same builder name

**For projects without 99acres page:**
- Valid RERA number OR builder consent form mandatory to create project page

**Note:** Commercial projects and deactivated projects are NOT included in project count`,
    relatedTopics: ["Builder Profile", "Project Display"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "images-text-pricing",
    category: "Content Management",
    title: "Images with Text/Pricing Information",
    keywords: ["price in image", "text image", "pricing image", "leaflet image"],
    content: `## Can Images with Pricing Information be Added?

**Residential XID/Project Pages:**
- ✗ NOT Allowed
- Images containing price information or leaflet-style content are NOT allowed in Image Section

**Commercial XID/Project Pages:**
- ✓ Allowed
- Such images can be used as Cover/first image of project page

## Changing Predefined Image Titles

**Can image titles/naming be changed?**
Answer: NO

- No provision to change image titles on XID page
- All image titles are system-defined
- Cannot be modified manually`,
    relatedTopics: ["Image Requirements", "Content Guidelines"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "artistic-images-rtm",
    category: "Content Management",
    title: "Artistic Images for Ready-to-Move Projects",
    keywords: ["artistic images", "RTM images", "ready to move images", "render images"],
    content: `## Can Artistic Images be Uploaded in Ready-to-Move Projects?

**Fully Ready-to-Move Projects:**
- ✗ NOT Allowed
- Artistic images cannot be uploaded

**Partially Ready Projects:**
- ✓ Allowed
- For multi-phase developments where some phases are still under construction
- Artistic images can be uploaded`,
    relatedTopics: ["Image Requirements", "Project Status"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "video-priority-order",
    category: "Content Management",
    title: "Video Priority Order on XID Page",
    keywords: ["video priority", "video order", "video sequence", "which video first"],
    content: `## Video Priority Order on XID Page

**Maximum Videos:** 3 videos on project page

**Priority Order (Highest to Lowest):**
1. In-house Video (99acres YouTube)
2. In-house Video (Agency)
3. CP/Broker Video (Influencer via individual YouTube)
4. Builder Project Video (Real)
5. Builder Project Video (Animated)
6. P2V Video (System-generated auto slideshow)
7. Operation Video (Field team)
8. Others

## Removing Project Video

**Requirements:**
- Replacement video is MANDATORY
- If builder insists on removal without replacement: Official communication required with reason

## Removing 99acres Locality Review Video

XID team has NO access to remove 99acres locality review video.

**Contact:** Feedback team for removal`,
    relatedTopics: ["Video Management", "P2V"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "carpet-area-frontend",
    category: "Options Management",
    title: "Carpet Area Display on Frontend",
    keywords: ["carpet area frontend", "saleable area display", "super area display", "area visibility"],
    content: `## Why Carpet Area Shows on Frontend When Backend has Super Area?

**Reason:** Frontend shows carpet area by default if it is updated in backend (even when super/built-up area exists) AND no slots are live on XID page.

**When Saleable Area Displays Correctly:**
Once slots are activated, frontend displays the saleable area mapped in backend.

## Saleable Area Calculation

**For Seller Portal Issues:**
If "Price per sq ft showing NAN": Check for mismatch between backend saleable area and Seller panel configuration.`,
    relatedTopics: ["Saleable Area Guidelines", "Slot Activation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "contact-directory",
    category: "Support",
    title: "Contact Directory - Team Emails",
    keywords: ["contact", "email", "emails", "contact emails", "team email", "who to contact", "contact details", "support email", "help email", "reach out", "contact team", "email address", "mail", "mailing"],
    content: `## Contact Directory - All Team Emails

**📧 XID Operations Team**
Email: xidops@99acres.com
Purpose: Project creation, option management, content updates, floor plans, images, brochures, project modifications

**📧 Feedback Team**
Email: Feedback@99acres.com
Purpose: Price trend issues, society reviews, locality reviews, builder widget removal, system-generated description changes

**📧 Operations Team**
Email: Operation@99acres.com
Purpose: Builder profile updates, company name changes, operational queries

**📧 Listing Screening Team**
Email: Listingscreening_99acres@99acres.com
Purpose: Listing quality, screening issues, content moderation

**📧 ASAP Team**
Email: asap.ops@99acres.com
Purpose: AdStar/AdPro video queries, video shoot arrangements, seller card videos

**📧 Virtual Shoot Team**
Email: virtualshoot@99acres.com
Purpose: Virtual video shoot requests for AdPro

**📧 Corp Service Team**
Email: Corpservice-99acres@99acres.com
Purpose: Campaign requests, mailer requests, banner bookings, LBXID

**📧 Photos Team**
Email: Photos@99acres.com
Purpose: Photo-related queries, image processing, photo shoots

## Quick Reference by Query Type

| Query Type | Contact Team | Email |
|------------|--------------|-------|
| Project/XID creation | XID Operations | xidops@99acres.com |
| Options/Floor plans | XID Operations | xidops@99acres.com |
| Price trends/Reviews | Feedback Team | Feedback@99acres.com |
| Builder profile | Operations Team | Operation@99acres.com |
| Listing issues | Listing Screening | Listingscreening_99acres@99acres.com |
| Video shoots | ASAP Team | asap.ops@99acres.com |
| Virtual shoots | Virtual Shoot | virtualshoot@99acres.com |
| Campaigns/Mailers | Corp Service | Corpservice-99acres@99acres.com |
| Photo queries | Photos Team | Photos@99acres.com |`,
    relatedTopics: ["Troubleshooting", "Support"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "slot-reactivation-credit",
    category: "Slots & Transactions",
    title: "Slot Re-activation and Credit Back",
    keywords: ["slot", "reactivate", "re-activate", "credit back", "transaction", "deactivated", "TID", "reactivation", "slot deactivated", "credit refund"],
    content: `## Slot Re-activation After Deactivation

**Question:** Is there a provision to re-activate a slot or credit back the transaction if the slot was deactivated?

**Answer: No**

Once a transaction is deactivated, it cannot be re-activated using the old TID.

**What Happens Next:**
- A new TID will be required
- The old transaction cannot be restored
- Credit back is not available for deactivated slots

**Important:**
- Deactivation is a permanent action for that specific TID
- Plan carefully before deactivating any slot
- Contact the operations team if you have questions before deactivating`,
    relatedTopics: ["Slot Activation Errors", "Slot Re-activation Rules"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "np-deactivation-process",
    category: "Slots & Transactions",
    title: "NP Slot / Advertiser Slot Deactivation Process",
    keywords: ["NP deactivate", "NP deactivation", "deactivate slot", "deactivate NP", "advertiser deactivation", "slot deactivation process", "deactivate advertiser", "remove slot", "deactivate NP slot"],
    content: `## How to Deactivate an NP Slot / Advertiser Slot

**If the Option is Paid (Client Slots Live):**

*Option 1: Builder Communication*
- Share official builder communication (email or letterhead) confirming the size does not exist or is sold out
- Post this communication, XID team will deactivate the slots after 8 hours

*Option 2: No Builder Communication Available*
- Get confirmation from ALL salespersons who have live clients in that option
- Each must approve removal of their respective slots

**If the Option is Unpaid (No Client Slots Live):**
- Only builder document needed (mail/letterhead, price list, or brochure)
- Must confirm size doesn't exist or is sold out

**To Deactivate for a Specific Dealer/CP/Builder:**
- Share the TID of the client (e.g., 2526-T0008781)
- Get confirmation from the salesperson who created the transaction

**Important Notes:**
- Once deactivated, the slot CANNOT be re-activated with the same TID
- A new TID will be required for future activation
- Slots cannot be transferred between configurations or projects`,
    relatedTopics: ["Slot Re-activation Rules", "Removing Option Sizes"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "glossary-terms",
    category: "General",
    title: "Glossary of Key Terms",
    keywords: ["glossary", "definitions", "terms", "meaning", "what is", "define", "terminology", "abbreviation", "full form", "NP slot meaning", "FP meaning", "PG meaning", "configuration meaning", "saleable area meaning", "client meaning"],
    content: `## Glossary of Key Terms

**XID Page / Project Page / NPXID:**
A comprehensive webpage containing all key information about a real estate project — project overview, configurations, pricing, amenities, location, RERA details, and inventory slots added by dealers, CPs, brokers, or the builder.

**Configuration:**
The number of bedrooms in a residential unit (e.g., 1 BHK, 2 BHK, 3 BHK). BHK stands for Bedroom, Hall, and Kitchen. For plot, office, or shop projects, configurations do not apply — only the unit size is considered.

**Saleable Area:**
The type of area used to market a unit. Types include:
- Super Built-up Area (SBA/SA/Super Area/Total Saleable Area)
- Built-up Area (BA/BUA/Plinth Area)
- Carpet Area (CA/Net Usable Area/Livable Area/RERA Carpet Area)
- Plot Area (Land Area)

**NP Slot:**
New Project slot — also referred to as advertiser slot, dealer slot, or builder slot.

**Client:**
A builder, dealer, or channel partner.

**Client Slot:**
Can be NP slot, FP, PG, AdStar, or AdPro.

**FP (Featured Project):**
Premium visibility product with featured positioning.

**PG (Project Gallery):**
Enhanced visual presentation product with multiple images showcase.

**USP:**
Unique Selling Point — also known as "Why You Should Consider" section or Project Highlight.

**Location Highlight:**
Location advantage — nearby landmarks and connectivity details.

**Floor Plan:**
Also known as Unit Plan, Option Layout Plan, or Option Image.

**Typical Plan:**
Layout of a particular floor in a building.

**PIF:**
Project in Focus — premium banner feature on city page.

**Paid XID:**
A project page that has active advertising slots.

**Valid Documents for Option Creation:**
Brochure, Builder website, Price list, Floor plans with option sizes, Builder mail/letterhead, and RERA.

**Project Description / About Project:**
Section to update about the project, its RERA number, pricing, amenities, famous landmarks.

**Builder Description / About Builder:**
Section to update brief summary of builder's history, achievements, etc.`,
    relatedTopics: ["What is XID / Project Page", "Available Advertising Products"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "escalation-matrix",
    category: "Support",
    title: "Escalation Matrix for Sales Requests",
    keywords: ["escalation", "escalation matrix", "escalate", "complaint", "escalate request", "manager", "supervisor"],
    content: `## Escalation Matrix for Sales Requests

**Level 1:** Kripa Shankar Mahato / Ashish Negi

**Level 2:** Yogesh Sharma

**When to Escalate:**
- If a request is not resolved within the expected timeframe
- If there is a disagreement on the resolution provided
- For urgent or time-sensitive requests that need immediate attention`,
    relatedTopics: ["Contact Directory - Team Emails"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "raw-video-policy",
    category: "Content Management",
    title: "Raw Video Footage Policy",
    keywords: ["raw video", "video footage", "share video", "video sharing", "raw footage", "video policy"],
    content: `## Can Raw Video Footage Be Shared with Clients?

**Answer: NO**

As per company policy, raw video footage CANNOT be shared with clients.

**What is Provided:**
- Only the final edited video is provided
- Delivered as a YouTube link once uploaded to the backend system

**Self Video Upload Process:**
- Sales team can upload client's raw video through CRM
- Must be accompanied by a signed consent form`,
    relatedTopics: ["AdStar and AdPro Video Process", "Video Management"],
    contactEmail: "asap.ops@99acres.com"
  },
  {
    id: "additional-activation-errors",
    category: "Troubleshooting",
    title: "Additional Slot Activation Errors",
    keywords: ["existing active product", "AS present", "link ID", "NAN price", "price per sq ft NAN", "profile ID error", "duplicate slot", "duplicate activation"],
    content: `## Error: "Existing Active Product AS Present with Link ID" 

**Issue:** Duplicate slot activation with same profile ID or same TID
**Resolution:** Check if a slot is already active with the same profile ID or TID. A new transaction will be required.

## Error: Price per sq ft Showing "NAN"

**Issue:** Mismatch between backend saleable area and Seller panel configuration
**Resolution:** Check if option sizes are created in backend and ensure saleable area mapping is correctly set. Contact XID team to fix mapping.

## Error: Possession Date Beyond 8 Years

**Issue:** System constraints do not allow possession dates more than 8 years from current year
**Resolution:**
1. Connect with XID team
2. Temporarily update possession date to within 8 years
3. Activate slot
4. Inform XID team to revert to original date`,
    relatedTopics: ["Slot Activation Errors", "Troubleshooting"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "banner-availability",
    category: "Content Management",
    title: "Banner Availability Check",
    keywords: ["banner availability", "check banner", "banner dates", "banner booking check", "available dates"],
    content: `## How to Check Banner Availability

**Process:**
1. Go to the Banner Creation tab
2. Select "Date Availability"
3. Choose the Banner SKU, Page Type, and City
4. A popup window will display available dates for that city

## Auto-Generated Email for Banner Booking

**If not received:**
1. Go to Banner Creation section
2. Select "QC Process" from dropdown
3. Search banner using Profile ID`,
    relatedTopics: ["Campaign Management and Mailers"],
    contactEmail: "corpservice-99acres@99acres.com"
  },
  {
    id: "check-xid-exists",
    category: "General",
    title: "How to Check if XID/Project Page Already Exists",
    keywords: ["check XID", "XID exists", "project page exists", "search project", "find XID", "check project page", "already exists", "check xid created", "how to check project page created", "search project name", "project already created", "xid created with us"],
    content: `## How to Check if a Project/XID Page Already Exists on 99acres

**Step 1: Search in 99acres Suggester**
- Search for the project name in the 99acres Suggester
- If the society name appears, click on it — it should redirect to the project page

**Step 2: Search on Google**
If the project doesn't appear in the Suggester, search on Google using:
- "Project Name + Location/City + 99acres" OR
- "Project Name + 99acres NPXID" OR
- "RERA number + 99acres"

**Step 3: Contact XID Team**
If the project is still not searchable:
- It may not exist on 99acres, OR
- It could be in a deactivated state
- Connect with the XID team for further assistance

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["What is XID / Project Page", "Project Deactivation and Deletion"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "possession-date-mandatory",
    category: "Project Creation",
    title: "Possession Date/Status Requirement",
    keywords: ["possession date mandatory", "possession status mandatory", "create without possession", "remove possession date", "possession required", "without possession date", "possession status required", "can we create project page without possession"],
    content: `## Is Possession Date/Status Mandatory for Project Page?

**Answer: YES**

The possession status/date is a legally mandatory detail for every project page.

**Key Rules:**
- It is REQUIRED at the time of project page creation
- It CANNOT be removed from an already created project page under any circumstances
- No project page can be created without a possession status/date

**Valid Possession Statuses:**
- New Launch
- Under Construction
- Ready to Move
- Partially Ready to Move (only for multi-phase projects)`,
    relatedTopics: ["Creating RERA-Registered Projects", "Possession Status Changes"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "extend-transaction-duration",
    category: "Slots & Transactions",
    title: "Extending NP/AdStar/AdPro Duration",
    keywords: ["extend duration", "extend NP", "extend AdStar", "extend AdPro", "extend transaction", "extend slot duration", "extend adstar duration", "duration extension", "expired transaction"],
    content: `## Can NP/AdStar/AdPro Duration Be Extended?

**Answer: NO**

There is no provision to extend the duration of a transaction if it is expired.

**What to Do:**
- A new transaction ID (TID) will be required to reactivate the expired slot
- The old transaction cannot be extended or renewed

**Important:**
- Plan the transaction duration carefully before activation
- Once expired, the slot must be re-created with a new TID`,
    relatedTopics: ["Slot Re-activation Rules", "Slot Activation Errors"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "xid-reactivation",
    category: "Project Creation",
    title: "How to Reactivate/Activate an Inactive XID",
    keywords: ["reactivate XID", "activate XID", "inactive XID", "reactivate project page", "activate project page", "reactivation", "activate inactive", "how to reactivate", "XID inactive", "project page inactive", "reactivate inactive"],
    content: `## How to Reactivate/Activate an Inactive/Deactivated Project Page

Project pages can be inactive or deactivated for various reasons. The activation process depends on the scenario:

| Scenario | Reason | Action Required |
|----------|--------|-----------------|
| Pre-Launch Project | Project is in pre-launch stage | Share RERA registration number OR builder consent form |
| RERA-Registered (Builder Request) | Deactivated on builder's request | Official builder confirmation mail for reactivation |
| RERA-Registered (Lapsed RERA) | Deactivated by XID team due to lapsed RERA | Share RERA extension certificate OR OC/CC documents |
| Consent-Based (Builder Request) | Deactivated on builder's request | Official builder mail requesting reactivation |
| Consent-Based (Auto-deactivated) | No paid activity for 15 days | Connect with XID team for reactivation |

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["Project Deactivation and Deletion", "Possession Status Changes"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "verbal-pricing-update",
    category: "Pricing",
    title: "Pricing Update Without Builder Mail",
    keywords: ["verbal pricing", "update price without mail", "without builder mail", "verbal communication pricing", "price update without email", "without any mail update prices", "update prices without mail"],
    content: `## Can Pricing Be Updated on Verbal Communication Only?

**Answer: NO**

Pricing on a project page CANNOT be updated based on verbal communication alone.

**Mandatory Requirements:**
- An official builder mail is required to update pricing
- If the builder is not involved with 99acres, an official channel partner mail can be considered

**To Update Prices:**
- Share the updated price list or builder mail/letterhead
- Ensure option sizes are clearly mentioned
- This is essential for accurately updating the prices displayed on the XID page`,
    relatedTopics: ["Pricing Display Management", "Price List Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "update-builder-profile-pricing",
    category: "Pricing",
    title: "Update Pricing in Builder Slot/Profile",
    keywords: ["builder profile pricing", "update price builder slot", "builder pricing", "builder slot pricing", "update price in builder profile", "seller portal pricing", "builder live pricing"],
    content: `## How to Update Pricing When Only Builder is Live

When the builder is active on a project page, only the builder's pricing is reflected on the project page.

**For Single-Phase Projects:**
- Pricing updates can be done from the Sales or CMT end through the Seller Portal
- No XID team involvement needed

**For Multi-Phase Projects (Builder Not Live Across All Phases):**
- A valid price list or official builder communication is mandatory
- This needs to be shared with the XID team
- XID team will calculate and update pricing for remaining phases
- This ensures a uniform price is displayed on the project page

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["Pricing Display Management", "Price List Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "offer-validity-extension",
    category: "Content Management",
    title: "Offer Validity Extension",
    keywords: ["extend offer", "offer validity", "offer date", "extend offer date", "offer expiry", "extend offer validity", "how to extend offer date"],
    content: `## Can the Offer Validity Date Be Extended?

**Answer:** There is NO provision to extend the offer validity date from the XID team's end.

**What to Do:**
- Check the possibility from the Sellers Portal
- Offer validity (if editable) can only be managed from the Sellers Portal
- XID team cannot modify offer dates

📧 For further assistance: xidops@99acres.com`,
    relatedTopics: ["Offer Management", "Pricing Display Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "resale-listing-changes",
    category: "Pricing",
    title: "Changes in Resale/Rental Listings",
    keywords: ["resale listing changes", "change address resale", "update resale listing", "resale price update", "rental listing changes", "change address in resale", "update resale price", "resale listing address", "resale images", "rental listing update"],
    content: `## How to Update Pricing, Address, Images in Resale/Rental Listings

**XID team has NO access** to make any changes in resale or rental listings.

**For all such queries:**
- Contact the Listing Screening team
- They handle all modifications to resale and rental listings

📧 Contact: Listingscreening_99acres@99acres.com

**This includes:**
- Pricing updates in resale listings
- Address changes in resale listings
- Image updates in resale listings
- Any modifications to rental listings`,
    relatedTopics: ["Resale Block/Unblock Management", "Contact Directory - Team Emails"],
    contactEmail: "Listingscreening_99acres@99acres.com"
  },
  {
    id: "change-property-type",
    category: "Options Management",
    title: "Changing Property Type on Project Page",
    keywords: ["change property type", "property type change", "change apartment to floor", "modify property type", "property type with live slots", "change property type without mail", "can you change property type", "property type paid project", "change property type in paid"],
    content: `## Can Property Type Be Changed on a Project Page?

**With Active Client Slots:**
- ✗ There is NO provision to change the property type when client slots are live
- For example, cannot change from Apartment to Independent Floor while slots are active

**Without Live Slots:**
- ✓ Property type CAN be changed
- The requested property type must be clearly available and supported by valid sources:
  - Builder's website
  - RERA details
  - Brochure
  - Official builder communication

**Can Property Type Be Changed Without Builder/Client Mail?**
- ✗ NO — Official builder communication or valid source document is mandatory to change property type

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["Property Types", "Slot Activation Errors"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-without-options",
    category: "Project Creation",
    title: "Creating Project Page Without Options",
    keywords: ["project without options", "create XID without options", "options mandatory", "no options", "create project page without options", "without options"],
    content: `## Can a Project Page Be Created Without Options?

**Answer: NO**

Option Sizes (with configuration + saleable area) are part of the mandatory details required to create a project page.

**Mandatory Details for Project Page Creation:**
- Project Name
- Builder Name
- RERA Number (or Consent Form for non-RERA)
- Property Type
- **Option Sizes (with configuration + saleable area)** — MANDATORY

A project page cannot be created without at least one option size with configuration and saleable area details.`,
    relatedTopics: ["Creating RERA-Registered Projects", "Valid Documents for Option Sizes"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "multiple-property-types",
    category: "Project Creation",
    title: "Multiple Property Types on Single Project Page",
    keywords: ["multiple property types", "add multiple property type", "two property types", "more than one property type", "multiple property type in project", "can we add multiple property type"],
    content: `## Can Multiple Property Types Be Advertised on a Single Project Page?

**Answer: YES, with conditions**

Multiple property types CAN be advertised on a single project page, provided:
- All property types belong to the SAME category — either all residential OR all commercial

**Allowed Examples:**
- ✓ Apartments + Villas (both residential) — on same page
- ✓ Shop + Office (both commercial) — on same page

**Not Allowed:**
- ✗ Apartments + Shops (residential + commercial) — requires separate pages

**Property Type–Wise Possession Dates:**
- There is NO provision to display multiple possession dates on a single-phase project page
- If multiple property types are under the same phase, they must have the same possession date`,
    relatedTopics: ["Property Types", "Mixed-Use Developments"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "religious-content-restrictions",
    category: "Content Management",
    title: "Religious Content Restrictions",
    keywords: ["religious content", "religious name", "mandir", "temple", "mosque", "church", "religious USP", "religious location", "religious highlight", "mandir distance", "religious name in USP"],
    content: `## Religious Content Restrictions on XID Page

**In USP Section:**
- ✗ No religious content is allowed in the USP section
- Religious names, references, or themes cannot be added as project highlights

**In Location Highlights:**
- ✗ Religious places such as temple, mosque, churches etc. are NOT allowed in location highlights
- Distance to religious places (e.g., "Mandir — 2 km") cannot be added

**In Images:**
- ✗ Images with religious content are not permitted on XID page

**Why This Restriction?**
- Maintains neutrality and inclusivity
- Ensures compliance with platform content guidelines`,
    relatedTopics: ["Project Highlights and USPs", "Location Advantages Management"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "remove-rera-phase",
    category: "Project Creation",
    title: "Removing Old Phase RERA Number",
    keywords: ["remove RERA", "remove phase RERA", "remove old RERA", "delete RERA number", "remove phase 1 RERA", "remove RERA from project", "can you remove RERA"],
    content: `## Can an Old Phase's RERA Number Be Removed from a Project/XID Page?

**Answer: NO**

An old phase's RERA details CANNOT be removed from the project/XID page under any circumstances.

**Important:**
- Even if a new phase is added, the old phase's RERA number must remain
- If the builder wants to advertise only the latest phase, this can be done WITHOUT removing the old phase's RERA number from the page
- RERA details are legally required and cannot be deleted`,
    relatedTopics: ["Multi-Phase Projects", "RERA QR Code Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "project-name-capital-pvt",
    category: "Project Creation",
    title: "Project Name – Capital Letters and Pvt Ltd Rules",
    keywords: ["capital letters", "project name capital", "all caps project name", "uppercase project name", "pvt ltd", "pvt ltd in project name", "private limited", "project name in capital letter"],
    content: `## Can Project Name Be Written Entirely in Capital Letters?

**Answer: NOT RECOMMENDED**

Writing the entire project name in capital letters is not recommended for SEO reasons. It can negatively impact search engine optimization and the project's visibility.

## Can "Pvt. Ltd." Be Added in Project Name?

**Answer: NO**

"Pvt Ltd", "Ltd", and similar terms are NOT included in the project name due to their negative impact on SEO.

**Additional Project Name Rules:**
- Special characters are NOT allowed
- Roman numerals (I, II, IV, etc.) are NOT permitted due to SEO impact
- Project name cannot be same as builder name
- City or locality name cannot be added in project name`,
    relatedTopics: ["Project Name Change", "Project Creation"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "remove-cp-slots",
    category: "Access Control",
    title: "Remove CP/Dealer Slots from Project Page",
    keywords: ["remove CP", "remove dealer", "remove broker", "remove channel partner", "remove active CP", "remove CP from page", "remove CP slots", "remove dealer slots", "as per builder mail remove CP", "builder mail remove CP"],
    content: `## How to Remove Active CP/Dealer/Broker Slots from a Project Page

**If Builder Requests Removal of All CPs:**
1. Share official builder communication requesting removal
2. XID team will include all relevant Account Managers in email
3. Seek confirmation from Account Managers
4. If no objections received within 8 hours, XID team proceeds with deactivating dealer slots
5. Once implemented, no new CP/Dealer/Broker slots will be activated

**To Remove a Specific CP/Dealer/Broker:**
- Share the TID of the client (e.g., 2526-T0008781)
- Get confirmation from the salesperson who created the transaction

**To Block All Future Dealer Slots:**
- Official builder communication is required
- XID team has backend provision to block all CP/Dealer/Broker advertisements

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["Blocking Advertisers", "NP Slot / Advertiser Slot Deactivation Process"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "individual-images-sections",
    category: "Content Management",
    title: "Individual Images in Specific Sections",
    keywords: ["individual image", "washroom image", "bathroom image", "specific image section", "individual washroom image", "separate image category"],
    content: `## Can Individual Section Images (e.g., Washroom) Be Added to Project Page?

Individual images are organized into system-defined categories/folders on the XID page. The image folder sequencing and naming is system-defined and cannot be modified.

**System-Defined Image Categories (in order):**
1. Outdoor Images
2. Indoor Images
3. Facilities (Outdoor Facilities first, then Indoor Facilities)
4. Demo Flats
5. Construction Images
6. Others

**Important:**
- Image titles/naming cannot be changed — all are system-defined
- Individual room-specific images (like washroom, kitchen, etc.) can be uploaded under the appropriate category (e.g., Indoor Images or Demo Flats)
- There is no provision to create custom image categories or sub-sections
- All images must meet standard requirements: JPG format, under 5 MB, high quality

📧 Contact XID team for image upload assistance: xidops@99acres.com`,
    relatedTopics: ["Image Gallery Requirements", "Cover Image and SRP Visibility"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "floor-plan-image-size",
    category: "Content Management",
    title: "Floor Plan Image Size Requirements",
    keywords: ["floor plan size", "floor plan image size", "floor plan resolution", "floor plan file size", "floor plan format", "what is floor plan image size"],
    content: `## Floor Plan Image Size and Format Requirements

**Accepted Formats:** JPG, PNG, CDR, HEF, PDF, HEIC, TIF

**Maximum File Size:** Less than 5 MB per image

**Key Points:**
- Floor plans follow the same image requirements as other project images
- Only ONE floor plan can be mapped per unit option size on the frontend
- Multiple floor plans for a single unit option size are NOT allowed

**For all file size/format requirements:**

| Element | Format | Size/Resolution |
|---------|--------|-----------------|
| Image/Floor Plan | JPG, PNG, CDR, HEF, PDF, HEIC, TIF | Less than 5 MB each |
| Project Logo | JPG, PNG | 100 x 60 pixels |
| Builder Logo | JPG, PNG | 170 x 112 pixels |
| Brochure | PDF, JPG, PNG | Less than 25 MB |
| Offer Image | JPG, PNG | 400 x 225 pixels |
| PIF Banner | JPG, PNG | 960 x 540 pixels |`,
    relatedTopics: ["Floor Plan Management", "File Size and Format Requirements"],
    contactEmail: "xidops@99acres.com"
  },
  {
    id: "profileid-access-error",
    category: "Troubleshooting",
    title: "Profile ID Access Error on Project",
    keywords: ["profile id error", "profileid does not have access", "profile ID access", "does not have access to project", "blocked profile", "this profileid does not have access to project ID"],
    content: `## Error: "This ProfileID Does Not Have Access to Project ID"

**Reason:** The builder has blocked dealer/CP/broker slots on the XID page.

**Resolution:**
- Official communication from the builder is required to allow activation of that specific dealer on the project page
- The builder must explicitly approve the dealer for the specific project

**To Unblock:**
1. Obtain official builder approval (email/letterhead)
2. Builder must mention the project name and dealer name
3. Share approval with XID team
4. XID team will enable access for the specified dealer

📧 Contact: xidops@99acres.com`,
    relatedTopics: ["Blocking Advertisers", "Slot Activation Errors"],
    contactEmail: "xidops@99acres.com"
  }
];

// Quick action categories for the UI
export const quickActionCategories = [
  {
    id: "create-project",
    label: "Create Project",
    icon: "Plus",
    keywords: ["RERA", "non-RERA", "new project", "XID"]
  },
  {
    id: "add-options",
    label: "Add Options",
    icon: "Layers",
    keywords: ["option sizes", "configuration", "BHK"]
  },
  {
    id: "fix-errors",
    label: "Fix Errors",
    icon: "AlertTriangle",
    keywords: ["activation error", "slot error", "troubleshoot"]
  },
  {
    id: "manage-content",
    label: "Manage Content",
    icon: "FileText",
    keywords: ["images", "brochure", "video", "price list"]
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: "DollarSign",
    keywords: ["price", "charges", "payment plan"]
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: "Mail",
    keywords: ["email", "contact", "team"]
  }
];

// Contact directory
export const contactDirectory = [
  {
    team: "XID Operations",
    email: "xidops@99acres.com",
    purpose: "Project creation, option management, content updates"
  },
  {
    team: "Feedback Team",
    email: "Feedback@99acres.com",
    purpose: "Price trends, reviews, builder widget, system descriptions"
  },
  {
    team: "Operations Team",
    email: "Operation@99acres.com",
    purpose: "Builder profile updates, company name changes"
  },
  {
    team: "Listing Screening",
    email: "Listingscreening_99acres@99acres.com",
    purpose: "Listing quality, screening issues, content moderation"
  },
  {
    team: "ASAP Team",
    email: "asap.ops@99acres.com",
    purpose: "AdStar/AdPro video queries, seller card videos"
  },
  {
    team: "Virtual Shoot",
    email: "virtualshoot@99acres.com",
    purpose: "Virtual video shoot requests"
  },
  {
    team: "Corp Service",
    email: "Corpservice-99acres@99acres.com",
    purpose: "Campaigns, mailers, banner bookings"
  },
  {
    team: "Photos Team",
    email: "Photos@99acres.com",
    purpose: "Photo-related queries, image processing"
  }
];

// Generate full document text for the edge function
export const fullDocumentText = knowledgeChunks
  .map(chunk => `## ${chunk.title}\nCategory: ${chunk.category}\nKeywords: ${chunk.keywords.join(", ")}\n\n${chunk.content}`)
  .join("\n\n---\n\n");
