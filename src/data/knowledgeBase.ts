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
- Option sizes clearly mentioned`,
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
    keywords: ["location highlights", "connectivity", "nearby landmarks", "distance", "location advantages", "add location", "update location"],
    content: `## How to Update Location Highlights/Advantages on the XID Page

**Sources for Location Highlights:**
- Exact Latitude/Longitude of the project on Google Maps (preferred source)
- If lat/long is not available: Brochure, Project Website, Sales Mail

**Key Guidelines:**
- Location highlights should be mentioned in meters/kilometers, NOT travel time
- Maximum: 15 highlights per XID page
- Each location highlight should be from unique category (Preferred)

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
    keywords: ["USP", "why buy", "project highlights", "unique features", "add USP", "project USP", "unique selling points"],
    content: `## Guidelines for Project USPs

**Maximum:** 7 logical USPs per project

**Content Sources - Can Be Derived From:**
- Builder reputation
- Unique offerings
- Location advantages
- Awards and recognitions
- Project amenities

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
    keywords: ["locality", "location change", "area", "neighborhood", "lat/long", "change locality", "update location", "latitude longitude"],
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

## If CP/Dealer Wants to Advertise Later

**Process:**
- Must obtain explicit builder approval
- Share builder approval with request

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
    team: "Premium Team",
    email: "premium@99acres.com",
    purpose: "Builder premium issues, slot activation"
  },
  {
    team: "Product Team",
    email: "product@99acres.com",
    purpose: "P2V removal, New Launch tag removal for RERA projects"
  },
  {
    team: "Operations Team",
    email: "operations@99acres.com",
    purpose: "Builder profile updates, company name changes"
  }
];

// Generate full document text for the edge function
export const fullDocumentText = knowledgeChunks
  .map(chunk => `## ${chunk.title}\nCategory: ${chunk.category}\nKeywords: ${chunk.keywords.join(", ")}\n\n${chunk.content}`)
  .join("\n\n---\n\n");
