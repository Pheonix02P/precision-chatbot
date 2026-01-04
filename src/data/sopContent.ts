// SOP Document Content - Sales Support Team Document
// This contains the structured SOP content for RAG-based querying

export const sopSections = [
  {
    id: 1,
    title: "Mandatory Items for RERA Registered Project Page",
    content: `To create/design a RERA registered project page/XID/NP XID, the following mandatory details are required:
- Project Name
- Builder Name
- RERA Number
- Property Type (apartment, villa, plot etc)
- Option Sizes (with configuration + saleable area)

Note: If the requested saleable area is super built-up area or built-up area, please share Regional Head approval along with the creation request. This does not apply to Hyderabad/Secunderabad and Bangalore new launch projects.

Additional (Not Mandatory) Details for Page Enrichment:
- Brochure, Project Website, Images, and Video
- Price List, Payment Plan
- USP (Unique Selling Points)
- Location Highlights

A project page can be created with only the mandatory details. Additional details are optional but help significantly in enhancing the listing quality. For Commercial and Plot projects, configuration (1/2/3 BHK) is not required.`
  },
  {
    id: 2,
    title: "Non-RERA Project Page Requirements",
    content: `For projects not RERA registered, the mandatory details are:
- Consent Form signed or stamped by the builder
- The consent form must include:
  - Option Sizes (with configuration + saleable area)
  - Property Type (apartment, villa, plot etc)

Note: If the consent form is provided on the builder's official letterhead, only an authorized signature is required (no stamp needed).

If the requested saleable area is super built-up area or built-up area, share Regional Head approval along with the creation request. (Not applicable for Hyderabad/Secunderabad and Bangalore new launch projects.)

Additional (Not Mandatory) Details for Page Enrichment:
- Brochure, Project Website, and Images
- Price List, Payment Plan
- Project Video
- USP (Unique Selling Points)
- Location Highlights`
  },
  {
    id: 3,
    title: "Inactive/Backend/Pre-launch Project Page",
    content: `Required Details for Inactive/Backend/Pre-launch XID:
- Tentative Project Name and builder name
- Project Location
- Option Sizes (with configuration and saleable area)

When Can an Inactive/Backend/Pre-launch XID Be Created:
- When requested for a SAB campaign by the Sales or CMT team
- When Sales needs an XID number only to initiate a quotation in CRM

Note: The XID will remain inactive. It will be activated only after receiving either the builder consent form or the RERA registration number.`
  },
  {
    id: 4,
    title: "Separate XID for New Phase",
    content: `Can We Create a Separate XID for a New Phase of an Existing Project?

No, it is not recommended to create a separate XID/project page for a new phase of an already existing project. This is because creating a separate XID can negatively impact SEO and dilute the visibility and ranking of the main project page.`
  },
  {
    id: 5,
    title: "Mixed-Use Development Projects",
    content: `Can we advertise both residential and commercial properties in a single project page?

If a project involves mixed-use development, a separate residential project page is necessary to advertise residential properties such as apartments, studios, serviced apartments, and villas. Similarly, to promote commercial properties such as shops, offices, and commercial land, a unique commercial XID is required.`
  },
  {
    id: 6,
    title: "Valid Documents for Option Sizes",
    content: `Valid Documents to Add/Create/Modify Option Sizes on XID:

Any One of the Following Documents Can Be Considered Valid:
- Builder Website
- Project Brochure
- Builder Price List
- RERA Website
- Builder Email or Letterhead
- Floor Plans (with sizes clearly mentioned on the plan)

Note: All the above documents must mention:
- Saleable Area
- Configuration
- Option Sizes

Sources That Are NOT Considered Valid:
- Competition Websites
- Advertisement Websites / Channel Partner Websites
- WhatsApp Communication

Additional Notes:
- Floor/Unit Plans play a crucial role in enriching the project page
- If valid documents are provided, options can be created even without floor plans
- These options will show on frontend only after client slot is activated`
  },
  {
    id: 7,
    title: "Penthouse/Duplex/Villament Advertising",
    content: `Can We Advertise Penthouse/Duplex/Villament/Farmhouse/Rowhouse on the XID Page?

Direct Advertising Not Allowed:
Penthouse, Duplex, Villament, Farmhouse, and Rowhouse cannot be advertised as standalone property types on the Project/XID page.

However, These Can Be Advertised Under the Following Approved Property Types:
- Penthouse / Duplex → Advertise as Apartment
- Villament → Advertise as Villa
- Farmhouse → Advertise as Villa
- Rowhouse → Advertise as Villa`
  },
  {
    id: 8,
    title: "Saleable Area Guidelines",
    content: `How to change saleable area (Super built-up Area/Built-Up Area/Carpet Area) on project page:

For all cities across India, the saleable area must be considered as Carpet Area by default. If the requested saleable area is Super Built-Up Area or Built-Up Area, Regional Head approval is mandatory to proceed.

Exceptions: Projects in Hyderabad, Secunderabad, and Bangalore (New Launch Projects) can use Super Built-Up Area without requiring any approval.

Can we change saleable area if slots are already live on an XID page?

There is no provision to change the saleable area (e.g., from super area to carpet area and vice versa) once slots are live on the XID page. The saleable area can only be modified after the existing slots are either expired or deactivated.`
  },
  {
    id: 9,
    title: "BHK Configuration Guidelines",
    content: `Can We Advertise 1.5 BHK on the XID Page?

No Separate Category for 1.5/2.5/3.5/4.5 BHK Configurations:
There is no distinct configuration category for 1.5 BHK, 2.5 BHK, etc., on the XID page.

How to Represent These Configurations:
- 1.5 BHK → Represent as 1 BHK + Study under 1 BHK configuration
- 2.5 BHK → Represent as 2 BHK + Study under 2 BHK configuration
- 3.5 BHK → Represent as 3 BHK + Study under 3 BHK configuration
- 4.5 BHK → Represent as 4 BHK + Study under 4 BHK configuration

Note: If the client specifically requests, the study room can be considered as an additional room, and the unit can be mapped to the next higher BHK category.`
  },
  {
    id: 10,
    title: "Floor Plans Guidelines",
    content: `Can We Update Floor Plans on Land Options?
There is no provision to display individual floor plans for land options on the XID page. However, if a master plan is uploaded to the XID page, it will automatically reflect under the floor plan section for all land options after slot activation.

Can We Add Floor Plans on Commercial Projects?
There is no provision to display floor plans specifically under the floor plan section for commercial projects on the XID page. However, typical layout images can be uploaded in the photo gallery.

If floor plans are not available, can the XID team design floor plans for options?
No, there is no provision for the XID team to create or design floor plans, and no default floor plans are available. Floor plans must be sourced from:
- Builder brochure
- Builder's official website
- RERA documents
- Verified sales communication

If floor plans are not available, the unit options can still be created in the backend using valid documents.`
  },
  {
    id: 11,
    title: "Saleable Area by City and Property Type",
    content: `Accepted Saleable Areas Based on City:
- Super Area is allowed only in specific cases (Hyderabad, Secunderabad, Bangalore new launches)
- All other Indian cities must advertise only in Carpet Area

Note: For cities not listed above, if Super Area or Built-Up Area is requested, it will require prior approval from the Regional Head before the option can be created.

Specific Saleable Area Requirements Based on Property Type:
- Apartment / Builder Floor / Commercial / Studio: Can be advertised in Super Area, Built-Up Area, or Carpet Area
- Villa: Can be advertised in Super Area, Built-Up Area, or Carpet Area
- Land / Commercial Plot / SCO (Shop-Cum-Office): Can be advertised in Plot Area only

For multiphase projects, all the phases should have same saleable mapping.`
  },
  {
    id: 12,
    title: "Removing Option Sizes",
    content: `How to Remove Option Sizes from the XID Page:

If the Option is Paid (Client Slots Live):
- Share official builder communication (email or letterhead) confirming the size does not exist or is sold out
- If builder communication is not available, get confirmation from all salespersons who have live clients in that option to remove their respective slots

If the Option is Unpaid (No Client Slots Live):
- Only builder document (Builder mail/letterhead, price list or brochure) is needed to confirm the size doesn't exist or is sold out

To Remove/Deactivate an Option for a Specific Dealer/CP/Builder:
- Share the TID of the client (e.g., 2526-T0008781)
- Get confirmation from the salesperson who created the transaction`
  },
  {
    id: 13,
    title: "Option Sizes Visibility in Seller Portal",
    content: `Why Are Option Sizes Not Reflecting in the Seller Portal for Slot Activation?

The following could be the reasons:
- No option sizes are available in the backend
- Option sizes exist in the backend, but the saleable area does not match the expected values

What to Do:
- Share all such requests with the XID Team
- For option creation, ensure you provide valid source documents (e.g., brochure, builder website, RERA, etc.)

Order of Visibility for Option Sizes on the XID Page:
- If all options have floor plans, they are displayed in ascending order of size
- If some options have floor plans and others don't, options with floor plans appear first

Note: There is no provision to manually change the option sequencing on the XID page.`
  },
  {
    id: 14,
    title: "Multiple Floor Plans and Duplicate Options",
    content: `Can We Add Multiple Floor Plans/Unit Plans/Option Image for a Single Unit Option Size?
There is no provision to display multiple floor plans for a single unit option size on the frontend. Only one floor plan can be mapped per unit size at a time.

Can we add two options of same sizes?
No Duplicate Options for Same Configuration. If two floor plans in the brochure have the same size but only minor layout differences, we create only one option. Any one of the layouts can be mapped to that size. If the same size exists in different configurations (e.g., a 3BHK and a 4BHK of the same size), then separate options will be created for each configuration.

Can we create options in square meter/square yard/acres?
The options created in any of the area units in backend will automatically change to square feet and frontend will by default show options in square feet.`
  },
  {
    id: 15,
    title: "Brochure Requirements",
    content: `What Are the Requirements to Upload a Brochure on the Project/XID Page?

Brochure Requirements:
- The brochure must be project-specific
- It should not be a corporate brochure focused on the builder's achievements or company profile
- It should not be a single-page leaflet with minimal information
- The brochure must be in PDF format
- The file size should be less than 25 MB

Can We Change the View of the Brochure on the XID Page?
The orientation of the brochure displayed on the frontend is based on the original design/layout of the uploaded file. It cannot be changed from landscape to portrait or vice versa.

How to remove a brochure from the XID page:
Brochure is a critical element of the project page and cannot be removed without replacement. It can only be replaced with a new brochure. If the builder requests removal without replacement, a formal communication from the builder stating the reason must be shared with the XID team.`
  },
  {
    id: 16,
    title: "Image Requirements and Guidelines",
    content: `Requirements to Remove Under Construction Images:
To remove existing under construction images, the latest construction images must be shared with the XID team for replacement. If project is completely ready-to-move, construction images can be removed without any replacement.

Images with Text Information:
Images containing price information or leaflet-style content are not allowed in the Image Section of Residential XID/Project Pages. Such images are acceptable on Commercial XID/Project Pages as Cover/first image.

Predefined Image Titles:
There is no provision to change the image titles or naming on the XID page. All image titles are system-defined and cannot be modified manually.

Preferred Cover Images:
- Elevation
- Aerial View
- Entrance
- Site View
- Villa Images

Cover Image Restrictions - Cannot be used:
- Master Plan
- Location Map
- Construction Images

Image Requirements:
- Only JPG format images are allowed
- Each image must be under 5 MB in size
- Images must be relevant to the project and of high quality

Not Permitted:
- Blurry or low-resolution images
- Images containing human figures
- Images with pricing information
- Images with religious content
- Images with watermark or contact details

For large files, use online file-sharing tools like Smash, TransferNow, WeSentIt. Do not use WeTransfer (blocked on XID team's system).`
  },
  {
    id: 17,
    title: "Artistic Images and Image Sequencing",
    content: `Can We Upload Artistic Images in a Ready-to-Move Project?
Artistic images cannot be uploaded on the XID page if the project is fully ready to move. Artistic images can be uploaded only if the project is partially ready (multi-phase development where some phases are still under construction).

Master Plan and Location Map Removal:
A replacement image must be shared to remove the existing master plan or location map. If the client insists on complete removal without a replacement, a valid reason must be provided and documented.

Amenities Images as Cover:
Yes, amenities images can be used as the cover image only if suitable outdoor images are not available.

Image Folder Sequencing:
The correct visibility order for images on the XID page is: Outdoor Images → Indoor Images → Facilities (Outdoor before Indoor) → Demo Flats → Construction Images → Others. This sequencing is system-defined and cannot be modified.

Real vs Artistic Images for Cover:
Use real images if they are aesthetically suitable. If real images are of poor quality or visually unappealing, artistic images may be used instead.`
  },
  {
    id: 18,
    title: "Slot Activation Errors",
    content: `How to Resolve Different NP Slot / Client Slot / AdPro / AdStar / Campaign / PG / FP Activation Errors:

a) "Some Error Occurred"
Issue: Tower mapping is missing for the project.
Resolution: Tower mapping must be done from the XID backend by the XID team.

b) "This Is a New Launch Premium Project. Please Use FP/PG to Advertise on This Project"
Issue: The project is tagged as New Launch Premium, which restricts advertising via AdPro/AdStar.
Resolution: Turn off the New Launch tag.
Required Approvals:
- Non-RERA Projects: Official builder email mentioning the project name and launch date
- RERA-Registered Projects: Approval from the Product Team to remove the tag

c) "Config Slot Count Cannot Exceed the Number of Available Configurations"
Issue: Number of selected slots exceeds available configurations.
Resolution Steps:
1. XID team creates a temporary dummy option as the additional configuration
2. Map the dummy option to the relevant phase to proceed with the transaction
3. Once the actual slot is activated, the dummy option must be removed

d) "Phase Status and Completion Date Does Not Match"
Issue: Phase status doesn't align with the possession/completion date.
Resolution Options:
1. Mark the project as Ready to Move (requires OC or CC, or builder's consent form with ready-to-move images and Regional Head approval)
2. Extend the possession date (requires extension certificate or official builder communication)

e) "Max Slots Entered Cannot Be Greater Than Number of Distinct Configurations on Project i.e. 0"
Issue: No option sizes/configurations in backend or saleable mapping is missing/incorrect
Resolution: Check option sizes and ensure saleable area mapping is correctly set

f) "Quantity Left Is Less Than Required"
Issue: Not enough slots available to activate the transaction
Resolution: Verify slot availability and check whether the transaction is already active

g) Possession date more than 8 years from the current year:
Due to system limitations, projects with possession date beyond 2030 will face activation errors. Connect with XID team to temporarily update the possession date to before 2030, then revert after activation.`
  },
  {
    id: 19,
    title: "Location Highlights",
    content: `How to Update Location Highlights/Advantages on the XID Page?

Sources for Location Highlights:
- Exact Latitude/Longitude of the project on Google Maps (preferred source)
- If lat/long is not available, alternative sources can be used

Key Guidelines:
- Location highlights should be mentioned in meters/kilometers, not travel time
- A maximum of 15 highlights can be added from the XID backend
- Each location highlight must be from a unique category (Preferred)

Preferred Categories for Location Highlights:
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
15. Any Other Major Landmark (if relevant)

If the client requests specific location highlights:
- The landmark name must be provided along with the travel distance (preferred)
- If distance isn't available, travel time can be accepted as an exception

Note: The Location advantages description visible on the XID page is system generated and cannot be modified.`
  },
  {
    id: 20,
    title: "Price List Management",
    content: `How to Add or Remove a Price List/Cost Sheet/Price Sheet from the XID Page:

To Remove a Price List:
- A replacement price list must be shared to remove the existing one
- If the client insists on complete removal without a replacement, a valid reason must be clearly mentioned in the email

To Add a Price List:
The price list must be shared via:
- Builder's official email or
- Builder's letterhead

If the above is not available, the following will be considered:
- Channel Partner / Dealer / Broker email

If no mail is available, the price list may still be accepted only if:
- It is in a proper format, including Base Pricing, Extra Charges, Government Charges
- The project name is clearly mentioned on the price list

Important Note: If the shared price list is outdated compared to the one already uploaded on the XID page, it will not be considered for update.`
  },
  {
    id: 21,
    title: "Pricing Issues and Priority",
    content: `How Can Pricing Issues Be Resolved on an XID Page?

To resolve pricing issues, share the updated price list with option sizes clearly mentioned.

Pricing Priority Order:
1. Builder Slot Prices (Highest Priority) - Considered first if the builder slot is active. If only the builder slot is live, pricing issues can be resolved directly by Sales using the Seller Panel.

2. XID Team Entered Prices in Price Panel - Used only if builder slot prices are not available. Share the updated price list with the XID team.

3. Average Channel Partner (CP) Entered Prices - Considered if neither builder slot nor XID-entered prices are available.

Can we remove "+ other charges" from the XID page?
No, the "+ other charges" section cannot be removed, as it is a standard component of all paid XID pages. This section reflects additional charges such as government charges and extra charges.

Key Notes:
- If there are discrepancies in extra charges, they can be corrected by sharing a valid builder price list
- Government charges cannot be modified manually
- Any changes in registration fees or stamp duty must be supported with a valid source document`
  },
  {
    id: 22,
    title: "Resale Listings and Price on Request",
    content: `How to Remove Resale Listing Prices and Resale Options Displayed on the XID/Project Page:

To remove resale listings and their prices:
- At least one paid slot must be live on the XID/project page in all the available configurations
- Delete all resale listings currently mapped to the XID/project page
- Block future resale listings to prevent them from appearing again
- To block and delete resale listings, a builder email or letterhead is mandatory

Can We Show "Price on Request" on Live Option Sizes?
"Price on Request" can be displayed for a configuration only if all option sizes within that configuration have their prices set to "Price on Request". If even one option size has an updated price, the system will automatically calculate and display pricing for all other sizes.`
  },
  {
    id: 23,
    title: "Payment Plan Management",
    content: `How to Add or Remove a Payment Plan from a Project/XID Page:

To Remove a Payment Plan:
- A replacement payment plan document must be shared
- If the client insists on complete removal without a replacement, a valid reason must be clearly mentioned in the email request

To Add a Payment Plan:
The payment plan must be shared via:
- Builder's official email or
- Builder's letterhead

If builder documentation is not available, the following will be accepted:
- Channel Partner / Broker / Dealer email

The payment plan must include:
- Clearly defined milestones
- Corresponding percentage or amount to be paid at each milestone
- The total of all percentages must equal 100%`
  },
  {
    id: 24,
    title: "Project Highlights and USPs",
    content: `What Are the Guidelines to Add Project Highlights / USPs / "Why You Should Buy" on a Project Page?

Key Guidelines:
- A maximum of seven logical USPs can be added per project

USPs can be derived from:
- Builder reputation
- Unique offerings
- Location advantages
- Awards and recognitions
- Project amenities

Examples of Valid USPs:
- Magnificent 25,000 sq. ft. clubhouse with a 5000 sq. ft. gym
- International Olympic FIFA football size court
- 30 acres of open space with sports facilities
- Best Theme Project Of The Year - Godrej Woods by ET Realty Awards 2022
- IGBC gold rated project`
  },
  {
    id: 25,
    title: "Video Management",
    content: `How to get video added to XID page?
Raw video files cannot be directly added to the XID page. Videos can be uploaded only via a YouTube link. The video should be uploaded on the builder's official YouTube channel. If the builder does not have an official YouTube channel, the raw .MP4 file can be uploaded on the XID team's YouTube channel, provided there is no copyright content.

How many videos can we display on XID page?
Maximum 3 videos can be displayed on XID page.

How to remove influencer video from XID page?
Ask client to share good quality video to replace. Else provide branch head approval for video removal.

How to remove/update P2V video from/on XID page?
P2V videos are generated automatically after 24 hours on XID page. This video is derived from the images available in Image Gallery Section. If issue is with the content, rectify by updating correct images. If client doesn't want P2V at all, the reason for removal is required with Product team approval.

Video Sequencing on XID Page (Priority Order):
1. In-house Video (created by media team)
2. In-house Video (Agency)
3. CP/Broker Video (Influencer video)
4. Builder Project Video (Real Video)
5. Builder Project Video (Animated)
6. P2V Video (System generated auto slideshow)
7. Operation Video (Field team videos)
8. Others`
  },
  {
    id: 26,
    title: "Possession Date Changes",
    content: `Requirements to Change Possession/Completion Date on a RERA-Registered Project:

One of the following documents is required:
- RERA extension certificate (if the extended possession date is not yet reflected on the RERA website)
- Builder's official email or letterhead
- Builder's official website mentioning the new possession date

Note: For single-phase projects registered under one RERA number, only one possession date can be displayed—tower-wise possession dates cannot be shown.

If the requested possession date has passed (Project is RTM):
- Occupancy Certificate (OC) or Completion Certificate (CC) is mandatory
- If OC/CC is not available:
  - Builder consent form clearly stating the project is Ready to Move
  - Recent Ready-to-Move images of the site
  - Approval from the Regional Head

Requirements for Consent-Based Creations (Non-RERA Projects):
- Builder's official email or letterhead
- New consent form clearly mentioning the revised possession date
- Builder's official website displaying the new possession timeline`
  },
  {
    id: 27,
    title: "Construction Status Changes",
    content: `What Is Required to Change a Project's Status from Under Construction to Ready to Move (RTM)?
- Occupancy Certificate (OC) or Completion Certificate (CC) is mandatory
- If OC/CC is not available:
  - Builder consent form clearly stating the project is Ready to Move
  - Recent Ready-to-Move images of the site
  - Approval from the Regional Head

How Can Construction Status (New Launch to Under Construction) Be Changed on an XID Page?
Images confirming construction activity must be provided to change the status. Additionally, if the project's launch date has crossed 6 months, the project can be marked as Under Construction even without images.

How Can We Display "Partially Ready to Move" as the Construction Status?
If the project is a single-phase development, the status cannot be set as "Partially Ready to Move." (Must be shown as either Under Construction or Ready to Move)

For multi-phase projects, the system will automatically display "Partially Ready to Move" if:
- At least one phase marked as Ready to Move has an active client slot, and
- At least one phase marked as Under Construction also has an active client slot`
  },
  {
    id: 28,
    title: "Bank Details and Builder Logo",
    content: `How to Add Banks on the XID Page?

Bank details can be sourced from:
- The builder's official website
- The project brochure
- A sales team email

Interest rates displayed under the Banks section cannot be removed. Interest rates are fetched from the official websites of the respective banks. Any modification to interest rates can only be made if a valid source document is provided.

How to Update the Builder Logo on the XID Page?

The builder logo can be sourced from:
- The official builder website
- The project brochure
- A sales team email

In some cases, the logo may also be found on RERA documents. If the builder logo is not available from any valid source, a text-based logo can be created and used.

Required resolution for builder logo: 170X112 px`
  },
  {
    id: 29,
    title: "Builder Description",
    content: `How to Add or Update the "About Builder" / "Builder Description" on the XID Page:

Approved Sources for Builder Description:
- Official Builder Website
- Project Brochure
- Builder's Official LinkedIn Profile
- ZaubaCorp
- Sales Team Input (must be validated before use)

Content Guidelines:
The builder description should include:
- Year of Establishment
- Company Overview
- Achievements & Awards
- Core Projects / Notable Developments
- Vision and Mission
- Experience in Other Industries (if applicable)

Do not include individual names like Chairman, CEO, MD, or other company personnel.

Character Limit: The builder description is limited to 600 characters.

Sources for "Year of Experience":
- Builder's Official Website
- Project Brochure
- Builder's Official LinkedIn Account
- ZaubaCorp`
  },
  {
    id: 30,
    title: "Builder Name Changes",
    content: `How to Change the Builder Name on the XID Page:

Required Documents to Validate Builder Name Change:
- Builder's official website (must reflect the requested project details)
- Updated brochure
- Builder's official mail or letterhead
- If the requested builder name is mentioned on the RERA certificate, it is also acceptable

If Builder Slot is Active:
The name shown under the "Developed by" or "Contact Builder section" or "CTA section" is pulled from the Builder Profile (Company Name). The change must be requested by sharing:
- The Builder Profile ID
- The updated builder name
- Send the request to the Operations Team to update the Company Name in the Builder Profile`
  },
  {
    id: 31,
    title: "Projects by Builder Section",
    content: `How to Display/Remove a Project under Specific Sections in "Projects by Builder" on 99acres:

Common Requirements for All Sections:
- The XID/Project page must exist on 99acres
- The builder name on the project page must match the builder profile

Section-wise Conditions:
1. Upcoming / New Launch Section: Project's possession status must be set to New Launch
2. Delivered / Complete Section: Project's possession status must be set to Ready to Move
3. Under Construction / Ongoing Section: Project's possession status must be set to Under Construction

To remove a specific project from the "Projects by Builder" section:
- The builder name must be unmapped from the specific project (XID)
- Once unmapped, the project will automatically be removed from the section within 2–4 hours

Can We Display Two or More Builders on the XID Page in Case of a Joint Venture (JV)?
Currently, there is no provision to display multiple builder names on a single XID/project page. However, if the client insists, the XID team can create a new builder name that combines both entities (e.g., "ABC Builders and XYZ Developers").

How to update project count in builder widget?
The project count is automatically calculated based on the projects available on 99acres that are mapped under the same builder. Commercial projects are not displayed in the project count.`
  },
  {
    id: 32,
    title: "CTA Button and Fact Table",
    content: `How to Activate the CTA Button on an XID Page?

CTA (Call-To-Action) buttons on XID pages appear automatically when a builder slot is live.

If the CTA Button Doesn't Appear (For XIDs with Stories):
Ensure that:
- The builder slot is active
- The client profile is set as "Builder"

How to Update the Fact Table / Project Overview on the XID Page?
(Includes tower count, unit count, floor count, open area and total project area)

Accepted Sources for Fact Table Data (in order of priority):
1. Builder's official website or brochure
2. RERA documentation
3. Sales email (must be verifiable)

Important Guidelines:
For mixed-use developments:
- The residential XID will display fact table details for the residential portion only
- The commercial XID will display fact table details for the commercial portion only
- The Fact Table reflects overall project-level information, not phase-specific details`
  },
  {
    id: 33,
    title: "XID Deactivation and Deletion",
    content: `What Is Required to Deactivate or Delete an XID/Project Page from the 99acres Frontend?

To deactivate or delete a project page from 99acres, an official builder email clearly stating the reason is mandatory.

Deactivation:
- The project page will be temporarily removed from the frontend but will show in Google Searches and 99acres Suggester
- It can be reactivated later upon builder's confirmation

Deletion:
- The project page will be permanently removed from 99acres, including from Google search results
- A fresh builder email will be required to re-create the project page in the future

Why project page is not visible on 99acres frontend?

For Consent-Based Projects:
- If no paid activity (such as client slot activation) occurs within 15 days of project creation, the project may be automatically deactivated
- To reactivate, please connect with the XID team

For RERA-Registered Projects:
- The project may be deactivated if the RERA registration has lapsed
- To reactivate, connect with XID team`
  },
  {
    id: 34,
    title: "Project Description Types",
    content: `What Types of Descriptions Can Be Used on an XID Page & How to Change Them?

There are two types of descriptions available:

1. System-Generated Description
- Auto-generated by the system and SEO-optimized for better search rankings
- It is recommended to retain this description type to ensure maximum visibility on search engines
- No changes can be made on the content of this description
- If there is any major language or spelling mistake, same can be raised to feedback

2. User-Generated Description
- This can be enabled only if the client requests not to display the system-generated content
- The content can be taken from the project brochure or official website, with minor modifications to avoid negative SEO impact

How to Change from System-Generated to User-Generated Description?
Inform the client about the potential SEO impact of the change. If the client confirms, the request must be shared with the XID team to update the backend setting and switch the description type.`
  },
  {
    id: 35,
    title: "Project Logo and Name",
    content: `How to Add a Project Logo on the XID Page:

Accepted Sources:
- Builder's official website
- Project brochure
- Sales email (only if the logo is validated)

Logo Requirements:
- The project name on the logo must exactly match the name displayed on the XID/project page
- The logo format must be JPG
- The required resolution is 100 x 60 pixels

Important Note: Builder logos cannot be used in place of the project logo under any circumstances. If a valid project logo is not available, the logo section should be left blank.

How Can the Project Name Be Changed or Modified on an XID Page (Project Name Change):

For Non-RERA Registered Projects:
An official builder email or letterhead clearly stating the new project name is mandatory.

For RERA-Registered Projects:
A new brochure or builder website showing the updated project name along with the RERA number must be provided. If not available, then an official builder email or letterhead can be accepted.

Adding or Removing Builder Prefix in Project Name:
By default, the builder's first name is prefixed to the project name to enhance SEO ranking. This prefix can be removed on client request, but only after informing the client about the possible impact on SEO.`
  },
  {
    id: 36,
    title: "Project Location and Address",
    content: `How to change/modify project locality/Location Change on project page?

If the requested locality is explicitly mentioned in any of the following, the location can be updated directly:
- RERA
- Builder website/brochure
- Google Maps (Lat/Long)

If the requested locality is not listed in these sources, it may still be accepted if it falls within a 4 km radius of the verified project location.

Can We Display the Complete Project Address in the Locality Section?
No, there is no provision to display the complete project address in the Locality section on the XID page. However, the complete address can be shown in the auto-generated description under the 'What is the project address' section. This gets updated automatically within 24 hours.

Accepted Sources to Update Complete Project Address:
- RERA
- Builder's official website
- Project brochure
- Field Content Team / Verification Team
- Google Maps (only if validated)
- Sales mail (must be verified)

Note: The complete address section has a character limit of 100 characters.

Sources to Update Google Latitude/Longitude:
- Google Maps (accurate pin location)
- Field Content Team / Verification Team
- Sales Team (must be validated before use)`
  },
  {
    id: 37,
    title: "Property Types for Advertising",
    content: `Which property types can we advertise on 99acres residential XID/Project page?
- Apartment
- Villa
- Land
- Independent Floor
- Service Apartment
- Studio Apartment

Which property types can we advertise on 99acres commercial XID/Project page?
- Shop
- Ready to move Office Space
- Bare shell Office Space
- Showroom
- Ware House
- Co-working office spaces
- Commercial Land/Inst. Land
- Agricultural/Farm Land
- Industrial Lands/Plots
- Food Court
- SCO Plots
- Multiplex
- Restaurant
- Kiosk
- Business Center
- Factory
- Manufacturing
- Cold Storage

Can we advertise studio apartments and service apartments in commercial XID?
No, studio apartments and service apartments are residential units, hence can be advertised in residential project page only.`
  },
  {
    id: 38,
    title: "Adding New Phase to Project",
    content: `What are the required details to add a new phase to an existing project page?

A new RERA number or consent form along with possession status/date for the new phase is required:
- RERA QR code (if applicable)
- Possession status and possession date for the new phase

Important Note:
If the existing project is residential and the new phase is commercial, the new phase cannot be added to the same XID. A separate commercial XID page must be created.`
  },
  {
    id: 39,
    title: "Resale Listing Management",
    content: `How to Block or Unblock Resale Listing on a Project Page:

By Default Blocked:
Resale listings are automatically blocked for new launch projects that are less than 6 months old.

To Unblock Resale Listing:
- The project must be at least 6 months old
- It should be under construction
- Under construction site images are required to validate the project status and resale activity

To Block Resale Listing:
- Share official builder communication (email or letterhead) stating that the builder does not want resale listings shown on the project page

Visibility Rules:
- Even if blocked on the project page, resale listings will still appear on the SRP (Search Results Page)
- To remove them from SRP as well, Sales HOD approval is mandatory

To Remove a Specific Resale Listing:
- If a particular listing has incorrect details, raise a request with the Listing Screening team along with the listing ID`
  },
  {
    id: 40,
    title: "Advertiser Block and FAQ",
    content: `How to Block a CP/Dealer from Advertising (Advertiser Block) on a Particular XID Page as per builder request?

- A builder's official mail is mandatory to initiate this request
- Once approved, only the builder will be allowed to advertise on that XID/project page
- All CPs/Dealers will be restricted from advertising on the page
- If any Channel Partner / Dealer / Broker later wants to advertise on the blocked XID, they must obtain and share explicit builder approval to proceed

Can we add or remove a specific question from XID page FAQ (Frequently asked questions) section?
There is no provision to remove or add questions from FAQ section. However, as per client request, the complete section can be removed.`
  },
  {
    id: 41,
    title: "New Launch Story Feature",
    content: `What Are the Criteria to Activate/Display the New Launch Story Feature on a Project Page?

Automatic Eligibility:
- The project is a SAB (Shubharambh) project OR
- The project is a New Launch (Created or RERA registered within the last 6 months)

Conditional Eligibility (Product Approval Required):
- If the New Launch project is Non-RERA and has less than 20 units, product team approval is required
- If the project is neither SAB nor a New Launch, and the client requests story activation, product team approval is also mandatory`
  },
  {
    id: 42,
    title: "Amenities Management",
    content: `How Can Amenities Be Added to an XID Page?

Amenities can be added based on information from the following verified sources:
- Builder's official website
- Project brochure
- Builder website
- RERA
- Sales communication (must be validated)

Important Notes:
- The amenity names are system-defined in the XID backend — spelling or naming cannot be modified
- Amenities sequencing and amenities description on the frontend are also system-generated and cannot be customized
- The amenities logos/icons shown on the frontend are predefined and cannot be manually changed`
  },
  {
    id: 43,
    title: "Advertising Products",
    content: `Which products/slots are available for Builder/Dealer/Channel Partner to advertise on XID page?

Following products are available for advertising on XID page:
- NP (New Project) slot
- FP (Featured Project)
- PG (Photo Gallery)
- AdStar

How to add videos on Ad Star and Ad Pro seller card?
Send videos to asap.ops@99acres.com with the consent form.

How to schedule a virtual shoot for a client for their Adstar/PG seller card?
Send such requests to virtualshoot@99acres.com with client Username, contact number and preferred time for the shoot (if available).`
  },
  {
    id: 44,
    title: "Feedback Team Queries",
    content: `Which queries should be sent to feedback team?

Below queries need to be raised to feedback team:
- Price trend and transaction details related
- Society review, locality reviews and Explore locality section related issues
- Builder widget removal
- Locality not visible in FSL
- Any activation error that cannot be solved by XID team`
  },
  {
    id: 45,
    title: "RERA QR Code and Offers",
    content: `How to update RERA QR code on XID page?
As per legal guidelines, it is mandatory to have QR code for all phases on an XID page. QR code can be obtained from RERA certificate, brochure/builder website or from sales mail.

What are the prerequisites to add an Offer image and Offer Text on XID page?

Offer Text:
- Share the offer text with the XIDops team for whitelisting
- The text must be quantifiable and under 65 characters
- If it meets the criteria, XIDops will update it on the "Seller" portal
- The sales team will activate the offer from the same portal
- If the offer has a validity date, it will be added during activation

Offer Image:
- Residential XIDs: Offer image has a dedicated section; it should not be uploaded to the general image section. Required resolution: Width 400px x Height 225px
- Commercial XIDs: An in-house designed image is used as the XID cover image`
  },
  {
    id: 46,
    title: "PIF Activation",
    content: `How to activate PIF on a project?

For PIF activation, two banner images are mandatory:
- Desktop banner image
- Mobile site banner image

Share both banner images with XID team for PIF activation.

PIF may take 2-4 hours to reflect on city page.

Image dimension for PIF is 960X540`
  },
  {
    id: 47,
    title: "Escalation Matrix",
    content: `Escalation Matrix for Sales requests:

Level 1: Kripa Shankar Mahato/Ashish Negi
Level 2: Yogesh Sharma`
  },
  {
    id: 48,
    title: "Locality Taxonomy",
    content: `Questions regarding locality taxonomy:

1. What is needed to add a new locality (add locality) on 99acres?
A locality must have clear boundaries that are visible on Google Maps, or there should be official documents (like municipal records) that prove it exists.

2. Can landmarks or buildings be added as localities?
No, landmarks (like a chowk or statue) or individual buildings (like apartments or malls) cannot be added as localities. A locality should be a well-defined area, not just a single point.

3. Can an upcoming locality be added on 99acres?
Yes, if the upcoming locality is mentioned on official websites or documents from government authorities, it can be added.

4. What is needed to show one locality as a parent of another?
If the bigger locality covers at least 55% of the area of the smaller one (child), they can be linked in a parent-child relationship.

5. What can be added as a "City" on Google Maps?
A place can be added as a city if it is officially a city or a district.

6. What is required to create a new city or district on Google Maps?
There should be clearly marked boundaries on Google Maps, or valid government proof that the city or district exists.`
  },
  {
    id: 49,
    title: "Builder Name Guidelines",
    content: `Questions regarding Builder/Developer:

Are special characters allowed in the builder's name?
No, special characters are not permitted in the builder's name due to their impact on SEO. Additionally, certain terms such as "Pvt Ltd," "Ltd," etc., are not included in the builder's name.

Can the builder's name in the logo and the builder's name on the XID page differ?
No, the builder's name displayed on the XID page must match the name shown in the builder's logo.

Can a dealer, real estate agent, promoter, or marketing partner be considered a builder?
No, dealer, real estate agent, promoter, or marketing partner cannot be considered a builder.`
  },
  {
    id: 50,
    title: "AdStar and AdPro Process",
    content: `AdStar – AdPro Process:

1. How can a video shoot be arranged for a client for AdPro?
A virtual video shoot can be arranged by sharing the client's details (Company Name, Profile ID or Username, and contact information) with the team at virtualshoot@99acres.com.

2. Can a client create multiple videos?
Yes, clients are allowed to create multiple project videos, but only one profile video. For example, if a client has three live projects, a separate video can be created for each project. However, only one profile video is permitted.

3. Is it possible to schedule a physical shoot for a client?
No, physical shoots have been discontinued. Only virtual shoots are currently available for clients.

4. Can raw video footage be shared with the client after the shoot?
As per company policy, raw video footage cannot be shared with clients. Only the final edited video will be provided in the form of a YouTube link.

5. What is the difference between a profile video and a project video?
A profile video serves as an introduction to the company, highlighting its overall background and offerings. A project video focuses specifically on an individual project and does not cover multiple projects.

6. Can a sales person upload their client's raw video?
Yes, you can upload their raw video directly through the CRM, provided it is accompanied by a signed consent form.

7. What is the required duration for a seller card video?
The video should be at least 10 seconds long and can be up to a maximum of 20 minutes.

8. How long does it take for a video to go live after upload?
Once the video is approved during the screening process, it typically goes live within 1–2 minutes.

9. Whom should we contact for queries related to video uploads?
For any concerns or questions regarding video uploads, please reach out to asap.ops@99acres.com.

10. What content is prohibited in an Ad Star video?
The following elements are not allowed:
- Background audio or music tracks (songs are strictly prohibited)
- Mention of multiple projects within a single video
- Disclosure of project pricing
- Reference to or comparison with other builders

11. Can we upload a T2V video in Ad star?
Yes, we can upload a T2V video in Ad star but cannot upload the profile or project video in Adpro.`
  },
  {
    id: 51,
    title: "Campaign Management",
    content: `Campaign Management:

1. There are multiple DLs for Corpservices. Which one is correct?
The correct distribution list (DL) for raising requests is: corpservice-99acres@99acres.com.

2. In which scenarios is approval required for mailers?
- Trial or Single Shot Mailers: Approval from the Regional Head is mandatory
- Repeat Project Mailers (within 15 days) or Mailers to Open Database: Approval from the Branch Head is required

3. I want to execute a mailer activity today or early tomorrow morning. When should I submit the Mailer QC request?
For same-day or early-morning execution, please submit your Mailer QC request by 4:00 PM. Last-minute requests are difficult to accommodate.

4. When does the LBXID banner go live on the site after activation?
LBXID banners go live after midnight on the following day post activation. For banners with specific go-live dates, please ensure the request is submitted a day in advance.

5. The Top Banner or Inline Banner is not visible on the site after activation. Why?
Ensure that the seller configuration is active on the project page using the same Profile ID. If not, the banner will automatically be paused.

6. Can we use a client's external landing page?
Yes, external landing pages can be used with prior approval from Sandeep Upadhyay via email.

7. Why are the QR code, RERA number, RERA website link, and disclaimer important?
As per RERA guidelines:
- RERA number and website link are mandatory for all projects
- If there are multiple RERA numbers, a disclaimer specifying the applicable details must be added
- A QR code is mandatory for projects in Maharashtra, Kerala, Gujarat, Uttar Pradesh, and Bihar

8. I haven't received the auto-generated email for my banner booking. What should I do?
If your banner is booked but you haven't received the auto-email due to a delay, go to the Banner Creation section, select the QC Process from the dropdown, and search your banner using your Profile ID.

9. How can I check banner availability for sellers?
Under the Banner Creation tab, select Date Availability. After choosing the Banner SKU, Page Type, and City, a popup window will display the available dates for that city.`
  },
  {
    id: 52,
    title: "Image Resolution Requirements",
    content: `What are the required resolutions/dimension of images and logos in XID page?

The preferred resolutions are:
- Builder Logo: 170 x 112 px
- Project Logo: 100 x 60 px
- Offer Image: 1366 x 768 px
- Banner image: Width 400px x Height 225px
- PIF image: 960 x 540 px`
  },
  {
    id: 53,
    title: "Glossary",
    content: `Glossary:

1. XID page
A Project Page—also referred to as NPXID—is a comprehensive webpage containing all key information about a real estate project. It includes project overview, configurations, pricing, amenities, location, RERA details, and inventory slots added by various dealers, channel partners (CPs), brokers, or the builder.

2. Configuration
A configuration refers to the number of bedrooms available in a residential unit such as an apartment, villa, or independent floor. Examples include: 1 BHK, 2 BHK, 3 BHK, 4 BHK, and 5 BHK, where BHK stands for Bedroom, Hall, and Kitchen. For plot, office, or shop projects, configurations do not apply—only the unit size is considered.

3. Saleable Area
Saleable Area refers to the type of area used to advertise or market a unit in a real estate project. Types include:
- Super Built-up Area (SBA, SA, Super Area, or Total Saleable Area)
- Built-up Area (BA, BUA, or Plinth Area)
- Carpet Area (CA, Net Usable Area, Livable Area, or RERA Carpet Area)
- Plot Area (Land Area)

4. NP Slot
It means a New Project slot, advertiser slot, dealer slot or builder slot.

5. Client
A builder, dealer or channel partner.

6. Client slot
A client slot could be NP slot, FP, PG, AdStar or AdPro.

7. Price list
A document with price details for each unit, shared by the builder through official email or letterhead.`
  }
];

export const fullDocumentText = sopSections.map(s => `${s.title}:\n${s.content}`).join('\n\n---\n\n');
