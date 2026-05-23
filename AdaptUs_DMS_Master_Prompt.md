# MASTER BUILD PROMPT
# AdaptUs DMS Pro™ — World's Most Powerful Car Dealer Management System
# By AdaptUs Group Inc. | Full-Stack End-to-End Application

---

## ⚠️ READ THIS FIRST — HOW TO USE THIS PROMPT

This is a comprehensive master build prompt for a complete, production-ready Automotive Dealer Management System (DMS). Use this prompt with Cursor IDE, Claude Code, or any agentic coding environment. Feed sections sequentially or as a whole. Every section contains exact specifications — follow them precisely. Do not simplify, abbreviate, or skip any feature. The goal is to build the most powerful, beautiful, and intelligent DMS ever created.

---

## 🎯 PROJECT OVERVIEW

**Product Name:** AdaptUs DMS Pro™  
**Tagline:** The Autonomous Dealership Operating System  
**Built By:** AdaptUs Group Inc. (Vancouver, BC — Global Operations)  
**Target Users:** Automotive dealerships from independent lots to multi-location franchise groups  
**Market:** North America (Canada + USA primary), UAE expansion  
**Goal:** Surpass CDK Global, Reynolds & Reynolds, Tekion, and DealerSocket in features, UX, and AI capabilities  

---

## 🏗️ TECH STACK — EXACT SPECIFICATIONS

### Frontend
- **Framework:** Next.js 15 (App Router) with TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS Variables for theming
- **Component Library:** shadcn/ui as base, heavily customized
- **Animations:** Framer Motion 11 for all transitions, micro-interactions, and page animations
- **Charts:** Recharts for standard charts + D3.js for advanced custom visualizations
- **State Management:** Zustand for global state + React Query (TanStack Query v5) for server state
- **Forms:** React Hook Form + Zod validation
- **Tables:** TanStack Table v8 (virtualized for large datasets)
- **Real-time:** Socket.io client for live updates
- **Maps:** Mapbox GL JS for dealer locator and delivery tracking
- **3D/AR:** Three.js for virtual vehicle walkarounds
- **PDF Generation:** React PDF for contract and report generation
- **Rich Text:** Tiptap editor for email template builder
- **Calendar:** FullCalendar for service scheduling and appointments
- **Drag & Drop:** dnd-kit for kanban boards and configurators
- **Notifications:** Sonner for toast notifications
- **Date Handling:** date-fns
- **Phone/SMS UI:** Twilio client SDK

### Backend
- **Runtime:** Node.js 22 LTS
- **Framework:** Fastify 5 (for performance) with full TypeScript
- **API Style:** REST + GraphQL (Apollo Server) + WebSockets
- **ORM:** Prisma 6 with PostgreSQL
- **Database:** PostgreSQL 16 (primary) + Redis 7 (caching/sessions/queues)
- **Search:** Meilisearch (fast full-text search across inventory, customers, deals)
- **Queue System:** BullMQ with Redis for background jobs (email campaigns, AI calls, reports)
- **File Storage:** AWS S3 + CloudFront CDN
- **Authentication:** Better Auth (or Clerk) with SSO, MFA, SAML support
- **Email Infrastructure:** Custom SMTP via InboxGrove Push™ integration (Postfix/KumoMTA)
- **SMS:** Twilio Messaging API
- **Voice AI:** ElevenLabs Conversational AI API + Twilio Voice
- **AI Orchestration:** Mastra AI framework + Anthropic Claude API (claude-sonnet-4-5)
- **PDF Processing:** Puppeteer for server-side PDF generation
- **Cron Jobs:** node-cron for scheduled tasks

### Infrastructure
- **Cloud:** AWS (primary) with multi-AZ deployment
- **Containerization:** Docker + Docker Compose (dev), ECS Fargate (prod)
- **CI/CD:** GitHub Actions → AWS CodePipeline
- **Monitoring:** Datadog APM + CloudWatch
- **Logging:** Winston + Datadog Logs
- **Security:** AWS WAF, Shield, Secrets Manager, KMS encryption
- **Compliance:** SOC 2 Type II, PCI-DSS Level 1, PIPEDA (Canada), CCPA
- **CDN:** AWS CloudFront
- **DNS:** Route 53 with health checks

### Key Third-Party Integrations
- **Vehicle Data:** VIN decoder (NHTSA API + Polk), CarFax, AutoCheck
- **Pricing:** Black Book, Kelley Blue Book API, Manheim Market Report (MMR)
- **Lenders:** DealerTrack, RouteOne (direct lender connections to 1,400+ lenders)
- **OEM Portals:** Dealer Connect, DealerWorld, STAR (GM), BMW Dealer Portal
- **Marketplaces:** AutoTrader CA, Cars.com, CarGurus, Kijiji Autos, Facebook Marketplace, CARFAX listings
- **Credit:** Equifax, TransUnion, Experian (soft + hard pull)
- **Accounting:** QuickBooks, Sage 300, CDK Accounting export
- **Title & Registration:** AVS (Automated Vehicle Services) integration
- **Google APIs:** Google Maps, Google Analytics 4, Google Ads, Google My Business
- **Meta APIs:** Facebook Lead Ads, Instagram, WhatsApp Business API
- **CRM Sync:** Salesforce, HubSpot bidirectional sync
- **Payment:** Stripe (deposits, service payments), Moneris (Canada)

---

## 🎨 DESIGN SYSTEM — EXACT SPECIFICATIONS

### Visual Identity
- **Theme:** Dark luxury / precision engineering aesthetic
- **Inspiration:** Blend of Bloomberg Terminal's data density + Rolls-Royce's refinement + SpaceX's Mission Control
- **Feel:** Premium, trustworthy, data-rich, fast

### Color Palette
```css
:root {
  /* Backgrounds */
  --bg-primary: #070B12;
  --bg-surface: #0C1019;
  --bg-card: #101520;
  --bg-card-hover: #141A28;
  --bg-overlay: rgba(7, 11, 18, 0.95);

  /* Borders */
  --border-subtle: #161E2E;
  --border-default: #1C2A40;
  --border-strong: #243348;
  --border-accent: rgba(0, 210, 255, 0.3);

  /* Brand Accent — Electric Cyan */
  --accent: #00D4FF;
  --accent-hover: #00BFEE;
  --accent-muted: rgba(0, 212, 255, 0.12);
  --accent-glow: 0 0 20px rgba(0, 212, 255, 0.25);

  /* Status Colors */
  --green: #00E5A0;
  --green-muted: rgba(0, 229, 160, 0.12);
  --red: #FF4D6A;
  --red-muted: rgba(255, 77, 106, 0.12);
  --gold: #F5A623;
  --gold-muted: rgba(245, 166, 35, 0.12);
  --purple: #8B5CF6;
  --purple-muted: rgba(139, 92, 246, 0.12);
  --orange: #FF7A3D;
  --orange-muted: rgba(255, 122, 61, 0.12);

  /* Text */
  --text-primary: #EAF0FF;
  --text-secondary: #8A9BBF;
  --text-muted: #4A5B7A;
  --text-inverse: #070B12;

  /* Gradients */
  --gradient-brand: linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%);
  --gradient-gold: linear-gradient(135deg, #F5A623 0%, #FF7A3D 100%);
  --gradient-surface: linear-gradient(180deg, #0C1019 0%, #070B12 100%);
}
```

### Typography
```css
/* Headlines / Brand */
font-family: 'Syne', sans-serif;
/* weights: 700, 800 */

/* UI / Body */
font-family: 'DM Sans', sans-serif;
/* weights: 300, 400, 500, 600, 700 */

/* Monospace / Data */
font-family: 'JetBrains Mono', monospace;
/* weights: 400, 600 */

/* Scale */
--text-xs: 11px;
--text-sm: 12px;
--text-base: 13px;
--text-md: 14px;
--text-lg: 16px;
--text-xl: 18px;
--text-2xl: 22px;
--text-3xl: 28px;
--text-hero: 36px;
```

### Spacing & Layout
- **Border Radius:** 4px (inputs) / 8px (buttons) / 12px (cards) / 16px (panels) / 24px (modals)
- **Sidebar Width:** 240px expanded / 64px collapsed
- **Top Bar Height:** 60px
- **Content Padding:** 32px horizontal / 28px vertical
- **Card Padding:** 24px
- **Grid Gap:** 16px standard

### Animation Principles
- **Page transitions:** 200ms ease-out fade + 8px Y slide
- **Card hover:** 150ms transform translateY(-2px) + border color
- **Micro-interactions:** 100ms for button states
- **Chart animations:** 600ms ease-out on mount
- **Skeleton loading:** Shimmer animation on all data loads
- **Notification toasts:** Slide in from top-right, 3s auto-dismiss
- **Modal:** Scale from 0.96 to 1 + fade, 200ms

### Component Patterns
Every card must have:
1. Subtle left border accent (3px) in the module's color
2. Hover state with elevated border color and micro-lift
3. Loading skeleton that matches exact card shape
4. Empty state with contextual illustration and CTA

---

## 📱 APPLICATION ARCHITECTURE

### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│  TOP BAR (60px) — Logo | Search | Alerts | User         │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│   SIDEBAR    │        MAIN CONTENT AREA                 │
│   (240px)    │        (scrollable)                      │
│              │                                          │
│   Nav Items  │   ┌─────────────────────────────────┐   │
│              │   │  Page Header + Breadcrumb        │   │
│   with       │   ├─────────────────────────────────┤   │
│   tooltips   │   │  KPI Row                        │   │
│   when       │   ├─────────────────────────────────┤   │
│   collapsed  │   │  Primary Content Grid            │   │
│              │   └─────────────────────────────────┘   │
│   Status     │                                          │
│   at bottom  │                                          │
└──────────────┴──────────────────────────────────────────┘
```

### Route Structure
```
/                           → Redirect to /dashboard
/login                      → Auth page
/dashboard                  → Command Center
/inventory                  → Inventory list
/inventory/[id]             → Vehicle detail
/inventory/add              → Add vehicle form
/inventory/aged             → Aged inventory manager
/deals                      → Deal pipeline (kanban)
/deals/[id]                 → Deal jacket (full)
/deals/new                  → Start new deal
/crm                        → Lead management
/crm/[id]                   → Customer 360 profile
/crm/import                 → Lead import tool
/finance                    → F&I dashboard
/finance/[dealId]           → Deal finance desk
/service                    → Service board
/service/scheduler          → Appointment scheduler
/service/[ro]               → Repair order detail
/parts                      → Parts inventory
/marketing                  → Marketing hub
/marketing/campaigns        → Campaign manager
/marketing/templates        → Email/SMS templates
/marketing/social           → Social media manager
/marketing/reputation       → Review management
/ai                         → AI intelligence center
/ai/sdr                     → AI Voice SDR control room
/ai/pricing                 → Dynamic pricing engine
/ai/forecasting             → Demand forecasting
/reports                    → Analytics hub
/reports/[reportId]         → Specific report
/employees                  → HR dashboard
/employees/[id]             → Employee profile
/payroll                    → Payroll processing
/digital                    → Digital retail hub
/digital/website            → Website analytics
/digital/chatbot            → AI chatbot configurator
/settings                   → System settings
/settings/integrations      → Integrations hub
/settings/users             → User management
/settings/security          → Security center
/settings/billing           → Subscription & billing
```

---

## 🖥️ MODULE 1: COMMAND CENTER (Dashboard)

Build a real-time operational command center that gives dealership management a complete view of the business at a glance.

### Top KPI Strip (6 cards, animated on load)
Each card must have:
- Large number with trend indicator
- Sparkline (7-day mini chart) inline
- Comparison to previous period (% change, color-coded)
- Click to drill down to relevant module

**KPI Cards:**
1. **MTD Revenue** — Total vehicle sales revenue, click → deals report
2. **Total Gross Profit** — Front-end + back-end + F&I combined
3. **Inventory Count** — New / CPO / Used breakdown with aging alert badge
4. **Active Lead Pipeline** — Hot/warm/cold breakdown
5. **Service WIP Value** — Total open RO dollar value
6. **CSI Score** — Rolling 90-day customer satisfaction with review count

### Main Dashboard Grid (below KPIs)

**Row 1 (2/3 + 1/3 split):**
- **Sales Performance Chart** (left, large): 
  - Toggle between: Daily/Weekly/Monthly/YTD
  - Stacked bar: Front-end gross vs Back-end gross vs F&I per-copy
  - Line overlay: units sold
  - Comparison to prior period as ghost bars
  - Drill down on any bar to see deal list
  
- **Real-Time Activity Feed** (right):
  - Live stream of events: deals moved, leads assigned, ROs opened
  - Color-coded by type with icons
  - "Mark all read" button
  - Auto-scrolling with pause on hover

**Row 2 (3 equal columns):**
- **Lead Funnel**: Animated funnel showing conversion at each stage
- **Inventory Age Distribution**: Donut chart with 0-15 / 16-30 / 31-60 / 60+ day segments
- **Today's Service Board**: Mini version with status dots and bay count

**Row 3 (1/3 + 2/3 split):**
- **AI Insights Panel** (left): 3-5 rotating AI recommendations with urgency levels and action buttons
- **Top Performers Table** (right): Sales leaderboard for MTD, with units/gross/CSI columns, searchable and sortable

**Row 4:**
- **Deal Pipeline Kanban Preview** (horizontal scrollable): 5 stages shown with deal cards, quick drag to move
- **Upcoming Tasks & Appointments**: Today's calendar summary with follow-up reminders

### Live Ticker Bar (bottom of dashboard)
Scrolling horizontal ticker showing:
- Last sold vehicle (make/model/gross)
- New leads (name/interest/source)
- Service completions
- System alerts
- Market pricing updates

---

## 🚗 MODULE 2: INVENTORY MANAGEMENT

The most powerful inventory system ever built. Every vehicle tracked from acquisition to delivery.

### Inventory Command Bar
- **View Toggle:** Table / Grid Cards / Map View (lot map)
- **Smart Filters Panel** (collapsible left sidebar):
  - Vehicle type (New / CPO / Used / Wholesale / Fleet)
  - Make, Model, Year (multi-select with autocomplete)
  - Price range (dual-handle slider)
  - Mileage range
  - Age on lot (slider)
  - Color (visual color picker dots)
  - Status (Available / Reserved / In Transit / Hold / Sold)
  - Body style
  - Drivetrain
  - Fuel type (including EV/Hybrid)
  - Source (Trade-in / Auction / OEM order / Transfer)
- **Quick Filters:** Today's arrivals | Aged 30+ | Price reduced | Reserved | Hot (high views)
- **Bulk Actions:** Price update / Status change / Export / Delete / Send to market

### Inventory Table Columns (configurable, draggable)
Stock # | VIN | Year | Make | Model | Trim | Ext Color | Int Color | Miles | Days on Lot | Cost | MSRP | Internet Price | Adjustment | Status | Type | Location | Assigned To | Carfax | Actions

### Vehicle Detail Page (full page, tabbed)

**Tab 1 — Overview:**
- Hero image gallery (drag-to-reorder, bulk upload, AI background removal)
- 360° spin viewer (if photos uploaded in sequence)
- Key specs grid: engine, transmission, MPG, VIN, stock#, color
- Market value comparison (KBB / Black Book / MMR side by side)
- Pricing history timeline (show all price changes with who changed it)
- Similar sold vehicles (AI match by trim/color/options)

**Tab 2 — AI Pricing:**
- Market Position Gauge (showing where this vehicle sits vs competition)
- Competitor listings map (same vehicles within 150mi, with price/miles)
- AI Price Recommendation with confidence score
- Price simulation tool: "If I drop by $500, estimated days to sell: 12 vs current 28"
- One-click to apply AI recommended price
- Auto-reprice scheduling (e.g., drop $200 every 7 days if unsold)

**Tab 3 — History & Documentation:**
- CarFax / AutoCheck report embed
- Reconditioning log (each RO linked, total recon cost shown)
- Title status (clean / salvage / rebuilt / lemon)
- Flood / frame damage indicators
- All uploaded documents (title, inspection, warranty docs)

**Tab 4 — Marketing:**
- AI-generated vehicle description (editable, tone selector: professional/casual/luxury)
- Published status on each marketplace (AutoTrader, Cars.com, etc.) with view counts
- Photo status (how many photos, quality score, missing angles highlighted)
- Boost campaigns linked to this vehicle

**Tab 5 — Activity Log:**
- Every action on this vehicle (priced, viewed, reserved, inquired about, test driven, etc.)
- Customer interest history (which leads viewed this vehicle)
- Showroom visits linked to this VIN

### Lot Map View
- Visual drag-and-drop grid representing physical dealership lot
- Each space shows vehicle thumbnail, days on lot color (green/yellow/red)
- EV charging stations marked
- Overflow lot and off-site storage locations
- Print lot sheet function

### Inventory Acquisition Tools
- **Auction Integration:** Manheim, ADESA, OVE live auction bid from within DMS
- **Trade-in Appraiser:** VIN scan → instant KBB/Black Book/MMR value → offer sheet
- **Wholesale Manager:** One-click list to dealer-to-dealer wholesale channel
- **OEM Order Tracker:** Factory orders with estimated delivery windows and build status

---

## 💼 MODULE 3: SALES & DEAL MANAGEMENT

### Deal Pipeline (Kanban Board)
Stages: **Lead → Worked → Demo / Test Drive → Trade Appraised → Pencilled → F&I → Contracted → Funded → Delivered → Lost**

Each deal card shows:
- Customer name + vehicle
- Deal amount + estimated profit
- Salesperson avatar
- Days in current stage (color-coded: green <3 / yellow 3-7 / red 7+)
- Quick action buttons: Call / Note / Move
- Drag-and-drop between stages (with manager approval prompts for backwards moves)

### Deal Jacket (Full Deal Page)

**Section 1 — Customer & Vehicle**
- Customer profile card with credit score (soft pull), purchase history
- Vehicle card with photo, specs, current pricing
- Trade-in section with appraisal tool built in

**Section 2 — Deal Desk / Pencil Tool**
- Interactive payment matrix (down payment vs term grid)
- Live calculation engine: selling price → trade → payoff → down → finance amount → rate → payment
- Multiple payment options displayed simultaneously (48mo / 60mo / 72mo / 84mo)
- Lease calculator (money factor, residual, cap cost, monthly)
- Cash deal option
- Payment bump warning (alert when monthly exceeds customer's stated budget)
- Gross calculator showing front/back/total per column

**Section 3 — F&I Products**
- Menu presentation builder (VSC, GAP, paint protection, tire & wheel, key replacement, appearance packages, prepaid maintenance)
- Per-copy profit displayed in real-time as products added/removed
- Customer acceptance/decline tracking (for compliance)
- Lender reserve calculator

**Section 4 — Lender Submission**
- Connect to DealerTrack + RouteOne
- Show all lender programs for this customer's credit profile
- Side-by-side lender comparison (rate, approval amount, stipulations)
- One-click submit to multiple lenders
- Counteroffers displayed inline
- Rate participation optimizer (shows max markup allowable per lender)

**Section 5 — Contracting**
- Digital document packet (retail installment, buyer's order, privacy notice, arbitration, warranty disclaimers, etc.)
- DocuSign / Adobe Sign integration for remote signing
- In-showroom signature capture on tablet
- Stip checker: confirms all lender conditions met before printing
- Auto-populate all deal data into forms (no re-entry)

**Section 6 — Deal Delivery Checklist**
- Interactive checklist: all items required for a complete delivery
- Assign each item to a person with due date
- Customer delivery confirmation (photo of customer with vehicle, optional)
- CSI survey trigger (automated post-delivery text/email)

---

## 👥 MODULE 4: CRM & LEAD MANAGEMENT

### Lead Inbox
- Unified inbox: all leads from all sources (website, AutoTrader, phone, walk-in, referral, social)
- Priority queue sorted by AI lead score
- Unread / Needs response / Overdue tabs
- Response time timer (turns red after 5 min for hot leads)
- Quick reply templates
- Lead assignment rules (round-robin, by specialty, by availability)

### Customer 360 Profile
**Personal Info:** Name, DOB, email, phone, address, preferred contact method, language preference  
**Financial Profile:** Credit score (soft pull on file), income estimate, payment preference  
**Vehicle Preferences:** Stored from all interactions (body style, color, features, budget)  
**Purchase History:** Every vehicle bought, financed, leased. Service history  
**Communication History:** Every email, SMS, call, chat — threaded timeline  
**Engagement Score:** AI-calculated based on recency, frequency, value of interactions  
**Lifetime Value:** Total gross generated from this customer + household  
**Next Best Action:** AI recommendation for what to do with this customer right now  
**Household Linking:** Connect family members' profiles  
**Birthday / Anniversary Automation:** Auto-trigger cards, offers  

### AI Lead Scoring Engine
Score every lead 0-100 based on:
- Time on website + pages visited + VINs viewed
- Email open/click rates
- Response speed to communications
- Social media engagement
- Credit pre-qualification result
- Trade-in inquiry (high intent signal)
- Return visit frequency
- Source quality (referral > organic > paid)
- Behavioral trigger keywords in responses
- Days since last purchase (loyalty factor)

### Follow-Up Automation (BDC Workflows)
Build visual automation workflows:
- Trigger: New lead from website
- Action 1: Immediate email (template A) + assign to BDC rep
- Wait: 30 minutes
- Check: Did rep respond? If NO → send alert to manager
- Day 2: SMS follow-up (template B)
- Day 3: Call task assigned to rep
- Day 7: If no response → move to long-term nurture sequence
- Day 30: Re-engagement campaign
- Day 90: Equity mining check (are they now eligible for an upgrade?)

Build unlimited custom workflows with conditional branching.

### Task Management
- Rep-specific task boards (calls, emails, tests drives to schedule)
- Manager oversight view (all reps' tasks, completion rates)
- Overdue task escalation
- Task templates for common activities
- Integration with Google Calendar / Outlook

---

## 💰 MODULE 5: FINANCE & F&I

### F&I Manager Dashboard
- Today's deals pending F&I (queue)
- Average per-copy (finance reserve + product income)
- Product penetration rates (VSC %, GAP %, etc.)
- Hours to fund average
- Compliance alerts (OFAC checks, red flags)

### Lender Management
- Full lender directory with program details (tiers, LTV, max terms, stips)
- Submission history and approval rates by lender
- Floorplan tracking (for vehicles financed for inventory)
- Funding tracker (funded vs contracted vs delivered)
- Chargeback tracker and reserve schedule

### Compliance Center
- OFAC (terrorist watchlist) automatic check on every customer
- Red Flag Rules compliance checklist
- DMS-enforced document expiration tracking (insurance verification)
- Adverse action notices (auto-generated when credit declined)
- Menu selling compliance (every product presented, signed off)
- Regulatory update alerts (province/state-specific)

### Accounting Integration
- Deal post to accounting (automatic journal entry creation)
- Reserve schedule from lender funding
- Chargeback journal entries
- Floorplan payoff tracking
- Profit/loss per vehicle including all associated costs

---

## 🔧 MODULE 6: SERVICE & PARTS

### Service Scheduler
- **Month/Week/Day/Advisor view** calendar
- Online booking widget (embed on dealership website)
- AI appointment optimizer: fill gaps, avoid double-booking
- Service history auto-loaded when customer books (shows last oil change, recommended upcoming services)
- Estimated time calculation per job type
- Advisor capacity display (% booked per day)
- Loaner vehicle availability shown in scheduling flow
- Automated reminders (T-48hr, T-24hr, T-2hr via SMS/email)
- No-show tracking and re-booking prompts

### Repair Order (RO) Detail Page
- Customer info + vehicle info (with full service history)
- Arrival inspection section (odometer, fuel, condition photo)
- **Digital Multi-Point Inspection (MPI):**
  - Tablet-friendly checklist for technicians
  - Traffic-light system: Green (OK) / Yellow (Monitor) / Red (Needs Attention)
  - Photo/video capture for every concern (auto-uploaded to RO)
  - Customer approval portal: see MPI results + approve/decline additional work from their phone
  - AI damage detection (flag new damage vs pre-existing)
- Job line items: labor operations, parts, sublet, supplies
- Tech clock-in/out per job (flat rate management)
- Parts ordering integrated: backorder alerts, ETA shown
- Estimate builder with customer-facing approval flow
- Invoice generation (PDF) with DMS branding

### Parts Inventory
- Real-time bin locations for every part
- Min/Max reorder points with automatic PO generation
- Lost sales tracking (what was requested but unavailable)
- Cores tracking (returnable cores log)
- Parts returns management
- Supplier catalog integration (OEM + aftermarket)
- Physical inventory count tool (barcode scanner compatible)
- Parts pricing matrix (customer / insurance / dealer / wholesale markup tiers)

### Service Advisor Dashboard
- My today's board (all ROs, status, ETAs)
- Customer waiting board (display screen mode for waiting room)
- Quick search by RO, customer, VIN
- Upsell prompts (AI flags most likely additional services based on vehicle/mileage)
- CSI score tracker per advisor

### Bay Management
- Visual bay/lift layout (drag-drop vehicles between bays)
- Technician availability (clocked in / at lunch / clocked out)
- Flat rate hours tracking and efficiency calculations
- Comeback (warranty) tracking per technician

### Warranty Management
- OEM warranty claim submission
- Extended warranty (VSC) claim submission
- Claim approval status tracking
- Warranty cost accounting

---

## 📣 MODULE 7: MARKETING & CAMPAIGNS

### Campaign Manager
Build and manage multi-channel campaigns:
- **Email:** Drag-and-drop template builder (Tiptap editor), audience segmentation, A/B testing, open/click tracking, unsubscribe management, CAN-SPAM/CASL compliance
- **SMS:** Two-way texting, drip sequences, MMS (photo/video), opt-in management, link tracking
- **Push Notifications:** Browser push for website visitors who opted in
- **Direct Mail:** Export mailing lists with merge fields for printing vendor
- **Voiceblast:** Recorded message drops to segmented customer lists

**Campaign Analytics:**
- Sent / Delivered / Opened / Clicked / Converted / Unsubscribed
- Revenue attribution per campaign
- ROI calculation (campaign cost vs deals influenced)
- Heatmap of email click zones

### Audience Segmentation Builder (Visual)
Drag-and-drop segment builder:
- All customers who bought 3+ years ago (potential trade-in)
- Customers with lease ending in 60-90 days
- Service-only customers (never bought)
- Leads that went cold (no response in 30 days)
- Customers who viewed specific VINs
- Demographic filters
- High-value customers (LTV > $X)
- Birthday this month
- Custom SQL-style filter builder for power users

### Social Media Manager
- Connect: Facebook, Instagram, TikTok, X (Twitter), LinkedIn, YouTube
- Auto-post new inventory with AI-generated captions and hashtags
- Content calendar with drag-drop scheduling
- Inventory spotlight posts (auto-select vehicles based on age, margin)
- Engagement monitoring (comments, DMs)
- Facebook Marketplace listing sync (inventory auto-pushed, inquiries pulled into CRM)
- Social ad campaign builder (Meta Ads Manager integration)
- Performance analytics per platform

### Google & Meta Ads Integration
- Vehicle Inventory Ads (VIA) — dynamic ads per VIN
- Budget management across campaigns
- Conversion tracking (website leads, calls, form fills)
- ROI per channel with attribution modeling
- Automated budget shifting to best-performing channels
- Conquest targeting (in-market shoppers from competitor makes)

### Reputation Management
- Aggregate reviews: Google, DealerRater, Cars.com, Yelp, BBB, CarGurus
- Star rating trends over time
- Review response center (AI-suggested responses, one-click publish)
- Review request automation (triggered post-delivery and post-service)
- Negative review alert (immediate notification to manager)
- Competitive review comparison (your stars vs nearest competitors)

### Website Analytics Integration
- Real-time visitor tracking
- VDP (Vehicle Detail Page) views per unit
- Lead source attribution
- Session recordings (Hotjar/FullStory integration)
- Heat maps for website pages
- Conversion funnel analysis
- Inventory search behavior (what customers searched for but didn't find)
- Chat transcript analytics

---

## 🤖 MODULE 8: AI INTELLIGENCE CENTER

This is the crown jewel — the most advanced AI system ever built for automotive retail.

### AI Command Center Dashboard
- AI system health (all models online/offline)
- Requests processed today
- Revenue attributed to AI actions
- AI accuracy metrics (pricing, scoring, forecasting)
- Model performance logs

### Feature 1: Predictive Lead Scoring Engine
**Architecture:**
- ML model trained on historical deal data (what attributes of leads converted)
- Features: source, time of day, pages viewed, VINs viewed, email engagement, response behavior, vehicle interest price vs budget, trade-in inquiry, credit pre-qual
- Score: 0-100 with confidence band
- Re-scores every 15 minutes per lead
- Displays score history as sparkline
- Explains score factors (top 3 reasons why this score)
- Threshold alerts: "Lead just crossed 80 — call now"

**Implementation:**
- Use Anthropic Claude API with structured output
- Feed lead behavioral data as context
- Return: score (int), confidence (float), top_factors (array), recommended_action (string), urgency (low/medium/high/critical)

### Feature 2: Dynamic Pricing Engine
**Real-time price intelligence:**
- Scrape/API competitor pricing every 4 hours (AutoTrader, CarGurus, Cars.com, Kijiji)
- Pull KBB, Black Book, MMR for every VIN in inventory daily
- Calculate market position: above/below/at market (with %)
- AI recommendation: "Reduce by $800 to hit market sweet spot — estimated 40% faster sale"
- Days-to-sell prediction at current price vs recommended price
- Market demand index per model (trending up/down in your area)
- One-click apply AI price
- Auto-reprice rules: "If unsold after X days, reduce by $Y automatically (with approval)"
- Price change audit log (who changed, when, from/to, reason)

### Feature 3: AI Voice SDR (Sales Development Representative)
**This is the autonomous calling engine:**
- Powered by ElevenLabs Conversational AI + Twilio Voice + Mastra framework
- Autonomous outbound calling to leads and past customers
- Natural voice conversation (not robocall — intelligent conversation)
- Handles: appointment booking, trade-in inquiries, service reminders, lease maturity calls, equity mining calls
- Call scripts per campaign type (configurable)
- Live transcription during calls
- Sentiment detection (if customer upset → transfer to human immediately)
- Call recording + AI summary (key points, outcome, next step)
- CRM auto-update after every call (no manual logging)
- Appointment booking: AI books directly into service scheduler or sales calendar
- Capacity: 500 parallel calls per hour
- Compliance: DNC list check, calling hours enforcement, disclosure statement auto-played
- Control Room UI: live calls grid, pause/stop controls, real-time transcript feed

**SDR Control Room UI:**
- Grid of active calls with status (connecting / in-conversation / completed / voicemail)
- Live transcript panel (click any call to see real-time conversation)
- Campaign queue (how many calls pending, rate, estimated completion)
- Today's stats: calls made / connected / appointment booked / transferred to human
- Campaign builder: select audience → select script → set schedule → launch

### Feature 4: Demand Forecasting
- Predict which vehicles will sell in next 30/60/90 days
- By make/model/trim/color/price band
- Based on: market data, season, local economic indicators, search trends, inventory age
- "You're likely to be short on black SUVs in 4 weeks — source now"
- Inventory acquisition recommendations (go to auction for these specific units)
- Display as confidence-banded forecast chart
- Compare actual vs forecasted monthly (model accuracy)

### Feature 5: Equity Mining & Trade Cycle Manager
- Scan entire customer database daily for equity opportunities
- Equity = current vehicle value - remaining payoff
- Flag customers with positive equity above threshold
- Lease maturity watch (customers whose lease ends in 30/60/90 days)
- High-mileage watch (customers on pace to exceed mileage allowance — upgrade pitch)
- Auto-create campaigns for equity mining segments
- ROI tracking (how many equity mining calls converted to new deals)

### Feature 6: AI Deal Desk Assistant
- Upload any customer deal — AI suggests optimal structure to maximize acceptance probability
- "This customer's sweet spot is under $650/month — here are 3 deal structures that achieve this while maintaining $4,200 minimum gross"
- Lender match: "Given this customer's credit profile, TD Auto will approve at 5.2% — here's the approval probability breakdown by lender"
- F&I product recommendation: based on customer profile + vehicle type, suggest which products most likely to be accepted

### Feature 7: Document Intelligence
- AI reads and extracts data from any document (insurance, trade title, license, pay stubs)
- OCR + Claude Vision for document processing
- Auto-populate deal fields from scanned docs
- Fraud detection: flag inconsistencies in documents
- Expired document alerts

### Feature 8: Conversational Analytics
- Analyze all call recordings, chat transcripts, email threads
- Surface: common objections, competitor mentions, lost deal reasons
- Sentiment trend per salesperson / per month
- "Rep X uses negative language 40% more than team average — coaching opportunity"
- Auto-tag conversations by topic (pricing objection / trade-in issue / financing concern / competition)
- Best practice library: surface top-performing conversation patterns

### Feature 9: AI Service Advisor
- Before customer arrives: AI reviews vehicle history → suggests likely upsell opportunities → briefed to advisor
- During MPI: AI reviews technician notes → suggests additional recommended services based on make/model/mileage patterns
- Predictive maintenance scheduling: "This customer's vehicle has 88% probability of needing brakes at next visit based on make/model pattern"
- Parts availability pre-check: flag if required parts for likely work are out of stock

### Feature 10: AI Report Narrator
- Natural language report generation: "Write me a summary of this month's performance"
- Any report → AI writes executive summary with insights and recommendations
- Ask any question in plain English: "Why did gross drop in the third week of February?"
- AI digs through all available data and provides reasoned answer with supporting data

### AI Chat Assistant (Global)
Persistent AI assistant in bottom-right corner, available on every page.
- Context-aware: knows which page you're on, shows relevant capabilities
- Can: search inventory, pull up customer records, create tasks, draft emails, run reports, explain data
- Responds in seconds with structured answers
- Escalate complex analysis to longer processing job (with progress indicator)
- Conversation history per session
- Quick prompts shown on each page (relevant to that module)

---

## 📊 MODULE 9: ANALYTICS & REPORTING

### Report Hub
Pre-built reports organized by department:

**Sales Reports:**
- Sales Summary (units + gross by day/week/month/YTD)
- Salesperson Gross Report (front/back/F&I per person)
- Vehicle Type Performance (new/CPO/used gross comparison)
- Source of Business (where buyers came from)
- Lost Deals Analysis (why deals were lost, by reason code)
- Trade-in Report (appraisal vs actual vs market)
- Closing Ratios by rep, source, vehicle type
- Leads-to-Sold Conversion Funnel

**Inventory Reports:**
- Aged Inventory Report (with recommended actions)
- Stock-to-Sales Ratio
- Days Supply by model
- Gross per unit by category
- Price Reduction History
- Recon Cost Analysis
- Market Days Supply comparison

**F&I Reports:**
- Per-Copy Report (by F&I manager, by month)
- Product Penetration Report
- Reserve/Contract Report
- Chargeback Analysis
- Lender Performance

**Service Reports:**
- Fixed Ops Absorption Rate
- RO Count and Revenue by advisor
- Labor Efficiency (actual vs flat rate hours)
- Parts Gross Margin
- Comebacks Report
- Customer Pay vs Warranty vs Internal split
- Declined Services Report (revenue left on table)

**CRM/Marketing Reports:**
- Lead Source ROI
- Campaign Performance
- CSI Trend Report
- Customer Retention Rate
- Conquest vs Loyalty split

**Financial Reports:**
- Daily Operating Control (DOC)
- Gross Profit Summary
- Expense Report
- Floorplan Aging
- Cash Flow Dashboard

### Custom Report Builder
- Drag-drop field selector
- Group by / filter by / sort by configuration
- Calculated fields (formulas)
- Save and share custom reports
- Schedule delivery (email PDF on schedule)
- Export: PDF / Excel / CSV / Google Sheets sync

### Executive Dashboard (Board-Level)
- One-page view of all KPIs
- Multi-store comparison (for dealer groups)
- Goal tracking with progress bars
- Month-over-month trend lines
- Printable / PDF export for board meetings

---

## 🏢 MODULE 10: HR & PAYROLL

### Employee Management
- Digital employee files (onboarding docs, certifications, photo ID, employment agreement)
- Org chart (visual, interactive)
- Department assignment and role management
- Certification tracking with expiry alerts (OEM certifications, OMVIC, finance licenses)
- Performance review management (360-degree review tool)
- Disciplinary action log
- Termination workflow (checklist-based offboarding)

### Payroll Engine
**Compensation Types Supported:**
- Salary
- Hourly (with overtime rules by province/state)
- Commission (configurable pay plans)
- Flat rate (for technicians)
- Draw against commission
- Bonus / Spiff structures

**Pay Plan Builder:**
- Sales consultant: units × base per unit + gross bonus tier + CSI bonus
- F&I: per-copy calculation with penetration bonuses
- Service advisor: % of customer pay labor
- Technician: flat rate hours × door rate + efficiency bonus
- BDC: appointments shown × conversion bonus
- Preview next paycheck in real-time as deals are entered

**Payroll Processing:**
- Two-week and semi-monthly cycles
- Tax calculation (federal + provincial/state)
- Benefits deductions
- Payroll export (compatible with ADP, Ceridian, Payworks)
- Pay stub generation (PDF email to employee)
- T4/W2 annual generation

### Performance Management
- Individual KPI dashboard per employee (visible to them + manager)
- Goal setting and tracking
- Coaching notes (manager private notes on employee)
- Recognition system (manager can give shoutouts, visible to team)
- Training completion tracking
- Rep ranking board (opt-in for competitive culture)

---

## 🌐 MODULE 11: DIGITAL RETAIL

### Online Deal Builder (Customer-Facing)
Embed on dealership website. Customer can:
1. Browse inventory with advanced filters
2. Select a vehicle
3. Get instant payment estimate (with credit soft pull)
4. Enter trade-in details (AI instant offer via KBB/Black Book)
5. Choose financing or lease (terms, down payment slider)
6. Select F&I products (digitally presented menu)
7. Submit deal to dealership (deal pulled into DMS as hot lead)
8. Schedule delivery appointment
9. Digital document signing

Full handoff to in-store system — no re-entry of data.

### Virtual Showroom
- 360° vehicle photos (studio quality or lot photos work)
- Exterior spin viewer
- Interior hotspots (click areas for feature callouts)
- Color configurator (show all exterior colors available for this model)
- Feature comparison tool (compare 2-3 vehicles side by side)
- AR View (mobile Safari/Chrome) — place vehicle in your driveway
- Video walkaround (YouTube embed or hosted video per VIN)

### AI Website Chatbot
- Embedded chat widget on dealership site
- Handles: inventory search, pricing questions, scheduling service, trade-in value estimates, general dealership info (hours, location, specials)
- 24/7 availability
- Escalate to human (if human is online → live handoff; if offline → capture lead)
- Speak to AI SDR voice option (click to call, AI voice agent answers)
- Multi-language support (English, French, Spanish, Punjabi, Arabic)
- WCAG 2.1 AA accessible

### Customer Self-Service Portal
Customers log in with email to:
- View their vehicle details and payoff info
- Access all deal documents (download PDF)
- View service history
- Book service appointments
- Track active repair order (live status: dropped off / in inspection / approved / being repaired / ready)
- Pay for service (Stripe payment link)
- Submit trade-in inquiry
- Chat with their rep
- Rate their experience

### Live Video Showroom
- Rep can initiate video call with customer
- Show vehicle in real-time (walk around, open trunk, start engine)
- Screen share deal desk (show payment options together)
- Record session (with consent)
- Powered by Daily.co or Whereby embed

---

## ⚙️ MODULE 12: SETTINGS & ADMINISTRATION

### User Management
- Create users with email invite
- Roles: System Admin / General Manager / Sales Manager / Finance Manager / BDC Manager / Sales Consultant / F&I Manager / Service Manager / Service Advisor / Technician / Parts Manager / Accounting / Readonly
- Custom role builder (granular permissions per module and action)
- Multi-store: assign users to specific locations or all locations
- Session management (view active sessions, force logout)
- Password policies
- Login history and audit log

### Integrations Hub
Visual integration marketplace:
- Category tabs: Pricing / CRM / Lenders / Marketing / Accounting / Inventory / OEM / Communication
- Each integration card: logo + description + connected status + configure button
- OAuth or API key connection flows
- Webhook builder (custom event → custom endpoint)
- Data sync frequency control
- Error log per integration
- API rate limit monitoring

Pre-built integrations include (500+ total, top ones):
AutoTrader, CarGurus, Cars.com, Kijiji, Facebook Marketplace, KBB, Black Book, Manheim, ADESA, DealerTrack, RouteOne, Equifax, TransUnion, Google Analytics, Google Ads, Meta Ads, Twilio, ElevenLabs, DocuSign, Adobe Sign, QuickBooks, Stripe, Moneris, CarFax, AutoCheck, NHTSA, HubSpot, Salesforce

### Security Center
- Two-factor authentication (TOTP / SMS / hardware key)
- SSO (SAML 2.0 / Google Workspace / Microsoft Entra)
- IP allowlist (restrict access to office IPs)
- Session timeout configuration
- Data encryption status
- Compliance dashboard (SOC 2, PCI-DSS status)
- Penetration test reports
- Incident response log
- Data access logs (who viewed what customer records)
- GDPR/PIPEDA data request handler (export or delete customer data)

### Notification Center
Configure alerts for:
- Aged inventory thresholds (30/45/60 days)
- Hot lead response time exceeded
- Deal profit below floor
- Lender counter-offer received
- Service appointment no-show
- AI SDR appointment booked
- Compliance issue flagged
- System downtime
- New review posted
- Employee birthday / work anniversary

Delivery channels: In-app toast / Email / SMS / Slack / Teams webhook

### White-Label & Branding
- Upload dealership logo (header, reports, emails, PDFs)
- Primary + secondary color pickers (applied system-wide)
- Custom domain (dms.yourdealership.com)
- Custom email sender domain (noreply@yourdealership.com)
- Report footer customization
- Customer-facing portal branding (full theme control)
- Multi-brand support for dealer groups (different branding per store)

### System Health Monitor
- Real-time API status for all integrations
- Queue depths (background jobs pending)
- Database performance metrics
- Storage usage
- Active user sessions
- Error rate dashboard
- Upcoming maintenance windows

---

## 📐 UX PATTERNS — IMPLEMENT THROUGHOUT

### Loading States
Every data-dependent component MUST have:
1. Skeleton loader that matches exact shape of content
2. Shimmer animation (gradient that sweeps left-to-right)
3. Error state with icon + message + retry button
4. Empty state with contextual illustration and primary CTA

### Modals & Drawers
- Modals for: confirmations, quick forms, previews (max width: 560px for simple / 900px for complex)
- Right-side drawers for: detail views, settings panels, long forms (width: 480px / 640px / full)
- Always have: X close button (top right), Escape key closes, click outside closes, scroll lock on body

### Command Palette (⌘K / Ctrl+K)
Global command palette accessible from anywhere:
- Search: customers, vehicles, deals, ROs, employees
- Navigate to any page
- Quick actions: create lead, add vehicle, new deal, run report
- Recent items
- Fuzzy search with highlighted matches

### Contextual Right-Click Menus
On table rows: Open / Open in new tab / Copy VIN / Copy link / Assign to rep / Change status / Delete

### Keyboard Shortcuts
- ⌘K — command palette
- ⌘/ — search
- ⌘N — new record (context-dependent)
- ⌘S — save current form
- Escape — close modal/drawer
- G then D — go to dashboard
- G then I — go to inventory
- ? — show keyboard shortcuts overlay

### Drag and Drop
- Deal kanban: drag deals between stages
- Inventory: arrange lot map
- Dashboard: rearrange KPI cards
- Reports: reorder columns
- F&I menu: reorder product presentation

### Notification System
- In-app notification bell (badge count)
- Toast notifications (Sonner): top-right, stacked, swipe to dismiss
- Critical alerts: full-screen modal overlay (e.g., compliance issue)
- Persistent banner for system-wide messages

### Data Tables — Universal Standards
All tables must have:
- Column sorting (click header)
- Column resizing (drag handle)
- Column visibility toggle (gear icon)
- Column reordering (drag)
- Row selection (checkbox) with bulk actions
- Inline editing (double-click cell)
- Row expansion (click arrow to show detail)
- Sticky header on scroll
- Sticky first column on horizontal scroll
- Pagination OR infinite scroll (configurable)
- Export selected / export all (CSV, Excel, PDF)
- Row count display ("Showing 1-25 of 284")
- Quick filter per column (filter icon in header)

---

## 🔔 REAL-TIME FEATURES (WebSocket Events)

All the following must update live without page refresh:
- Deal stage changes
- New lead arrival (flash animation + sound option)
- Lead score changes
- Service RO status changes
- Inventory price updates
- New review posted
- AI SDR call completed + appointment booked
- Lender decision received
- New chat message
- Technician clock events
- Dashboard KPIs (refresh every 60 seconds)

---

## 📱 MOBILE RESPONSIVENESS

While primary use is desktop, these views must be fully mobile-optimized:
- Login
- Dashboard (simplified, scrollable KPIs)
- Customer 360 profile
- Repair order status (for advisors on shop floor)
- MPI (for technicians on tablets — large touch targets)
- Lot map (for lot attendants)
- Lead inbox (for reps checking leads on phone)
- Appointment scheduler (for BDC on the go)
- Notifications

Mobile-specific features:
- VIN barcode/QR scanner (camera API)
- Photo capture for vehicle damage, documents
- Signature capture (finger/stylus)
- Push notifications

---

## 🔐 SECURITY REQUIREMENTS (NON-NEGOTIABLE)

1. All data encrypted at rest (AES-256) and in transit (TLS 1.3)
2. PII fields (SSN, DOB, credit info) additionally encrypted at field level
3. Row-level security in PostgreSQL (users only see their store's data)
4. API rate limiting on all endpoints
5. CORS properly configured
6. CSRF protection on all state-changing requests
7. SQL injection protection (Prisma parameterized queries)
8. XSS protection (Content Security Policy headers)
9. Audit log: every data read/write logged with user + timestamp + IP
10. Automated vulnerability scanning in CI/CD pipeline
11. Secrets in AWS Secrets Manager (never in code or env files in prod)
12. MFA enforced for all admin roles
13. Session invalidation on password change
14. Breach detection (alert if >10 failed logins from same IP)

---

## 🚀 PERFORMANCE REQUIREMENTS

- **Page Load:** < 1.5 seconds LCP (Largest Contentful Paint)
- **Interaction:** < 100ms response to user input
- **Table:** Handle 100,000+ row datasets with virtualization
- **Search:** < 200ms response (Meilisearch)
- **API:** < 300ms p95 response time
- **Uptime:** 99.9% SLA
- **Concurrent Users:** Handle 500+ simultaneous users per instance
- **Report Generation:** Complex reports < 5 seconds, large exports queued as background jobs

Optimization requirements:
- React Server Components where applicable
- Image optimization (Next.js Image with WebP/AVIF)
- Code splitting per route
- Prefetch on hover for likely navigation
- Service worker for offline capability (read-only critical data)
- Database query optimization (proper indexes, query explain analysis)
- Redis caching for frequently-accessed reference data (vehicle makes/models, lenders, etc.)

---

## 📋 SAMPLE DATA & SEED SCRIPT

Build a comprehensive seed script that creates:
- 1 dealership (AdaptUs Auto Group)
- 5 users (GM, Sales Manager, 2 Sales Reps, F&I Manager)
- 150 vehicles (mix of new/CPO/used, various makes)
- 200 customers with full profiles
- 80 leads in various stages
- 15 active deals across all pipeline stages
- 50 completed deals (last 90 days)
- 40 service ROs (mix of open/completed)
- 12 marketing campaigns
- 30 days of performance data for charts

---

## 🎯 FINAL QUALITY CHECKLIST

Before considering any module complete, verify:

**Visual:**
- [ ] Dark theme applied consistently, no light mode bleed
- [ ] All states: default / hover / active / disabled / loading / empty / error
- [ ] Animations working and smooth (60fps)
- [ ] Typography consistent with design system
- [ ] Color coding consistent (green=good, red=bad, gold=warning, blue=info)
- [ ] Responsive at 1280px, 1440px, 1920px
- [ ] No horizontal scroll on any page (except intentional data tables)

**Functional:**
- [ ] All forms validate with helpful error messages
- [ ] All modals closeable via Escape key
- [ ] All tables sortable, filterable, exportable
- [ ] Real-time updates working
- [ ] Search indexed and fast
- [ ] All AI features calling correct API with proper error handling

**Data:**
- [ ] All numbers formatted (currency, percentages, thousands separators)
- [ ] All dates in user's local format
- [ ] All timestamps relative (2h ago) with absolute on hover tooltip
- [ ] Empty states for every data view
- [ ] Pagination on all large data sets

**AI:**
- [ ] Lead scores updating in background
- [ ] Pricing recommendations loading within 3 seconds
- [ ] AI chat responding within 2 seconds
- [ ] SDR control room showing live updates
- [ ] Forecast charts rendering with confidence bands

---

## 💬 BRAND VOICE & COPY STANDARDS

- **Tone:** Confident, precise, premium — not playful or casual
- **Button labels:** Action-oriented (not "Submit" — use "Launch Campaign", "Apply Pricing", "Book Appointment")
- **Empty states:** Encouraging, not just "No data" — explain what goes here and how to add it
- **Error messages:** Explain what went wrong AND what to do about it
- **Loading messages:** Specific ("Analyzing 284 vehicles..." not just "Loading...")
- **AI messages:** Never say "As an AI..." — speak directly and confidently
- **Success messages:** Celebrate briefly, move forward ("Deal submitted to 4 lenders. You'll hear back within 4 hours.")

---

## 🏁 BUILD ORDER (RECOMMENDED SEQUENCE)

**Phase 1 — Foundation (Week 1-2)**
1. Project setup (Next.js, Prisma, auth, Docker)
2. Design system (colors, typography, base components)
3. Layout (top bar, sidebar, routing)
4. Database schema (all models)
5. Seed data

**Phase 2 — Core Modules (Week 3-6)**
6. Inventory (full CRUD, table, detail page)
7. CRM / Leads (full customer 360)
8. Deals pipeline (kanban + deal jacket)
9. Dashboard (all KPIs, charts)

**Phase 3 — Financial & Service (Week 7-9)**
10. Finance / F&I (deal desk, lenders, products)
11. Service & Parts (RO management, scheduler)
12. Reporting basics

**Phase 4 — AI & Automation (Week 10-13)**
13. Lead scoring engine
14. Dynamic pricing engine
15. AI chat assistant
16. AI Voice SDR (ElevenLabs + Twilio)
17. Document intelligence
18. Demand forecasting

**Phase 5 — Marketing & Digital (Week 14-16)**
19. Marketing campaigns (email/SMS)
20. Social media manager
21. Digital retail / online deal builder
22. Customer portal
23. Reputation management

**Phase 6 — Operations & Polish (Week 17-18)**
24. HR & Payroll
25. Settings (users, integrations, security)
26. Full mobile optimization
27. Performance optimization
28. Security audit
29. End-to-end testing
30. Production deployment

---

## 📌 CLOSING DIRECTIVE

Build this as if your reputation depends on it. Every pixel matters. Every interaction should feel like operating a premium instrument. This DMS should make CDK Global look like a spreadsheet and Tekion look like a demo. It should be so good that dealerships talk about it. When you look at any screen, it should immediately communicate: **this was built by people who understand automotive retail deeply, who care about design, and who believe software should be a competitive advantage, not just a tool.**

**AdaptUs DMS Pro™ — Built by AdaptUs Group Inc.**  
**The Autonomous Dealership Operating System.**

---

*End of Master Build Prompt | Version 1.0 | AdaptUs Group Inc. © 2026*
