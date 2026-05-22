export interface PageContent {
  eyebrow?: string;
  title?: string;
  subtitle: string;
  body: string;
  items?: string[];
}

// Per-route paraphrased content overrides. Each entry rewrites the original
// page's positioning in our own words, preserving meaning without copying text.
export const PAGE_CONTENT: Record<string, PageContent> = {
  "/intergy": {
    eyebrow: "Platform",
    title: "Intergy",
    subtitle: "A cloud-based EHR and practice management suite built around the way ambulatory specialties actually work.",
    body: "Intergy unifies clinical documentation, scheduling, billing, patient engagement, and reporting in one specialty-tuned platform — so the entire practice operates against a single source of truth, from front desk to back office.",
    items: [
      "Specialty-specific templates and content for primary care, OB-GYN, pediatrics, ortho, cardiology and more",
      "Integrated practice management and revenue cycle workflows",
      "Patient portal, secure messaging, and modern scheduling built in",
      "Quality measure tracking and regulatory reporting in the daily flow",
    ],
  },
  "/intergy-on-demand": {
    eyebrow: "Platform",
    title: "Intergy On Demand",
    subtitle: "Intergy delivered as a managed, hosted service — Greenway runs the infrastructure, your team runs the practice.",
    body: "Intergy On Demand pairs the full Intergy suite with Greenway-managed hosting, backups, and patching, so practices get enterprise-grade reliability without standing up the IT to support it.",
    items: ["Greenway-managed hosting and infrastructure", "Continuous backups and disaster recovery", "Predictable subscription pricing", "Built on Greenway Secure Cloud, hosted on AWS"],
  },
  "/clinical": {
    eyebrow: "Platform",
    title: "Clinical",
    subtitle: "Clinical workflows that follow how clinicians think — fewer clicks, less hunting, more time with the patient.",
    body: "Greenway's clinical capabilities bring the patient story into one chart, surface decision support inside the encounter, and remove the friction that makes documentation feel like a second shift.",
    items: ["Specialty-aware templates and order sets", "Embedded clinical decision support", "Ambient documentation with Clinical Assist", "Interoperability via Carequality and CommonWell"],
  },
  "/financial": {
    eyebrow: "Platform",
    title: "Financial",
    subtitle: "Practice management, billing, and revenue cycle tools designed to turn the work your team already does into cleaner claims and faster cash.",
    body: "From eligibility checks and charge capture through claim submission, denial follow-up, and patient payments, the financial side of Greenway gives leadership weekly visibility into the metrics that move the bottom line.",
    items: ["Automated eligibility and prior authorization", "Clean-claim engine with denial prevention", "Patient payments, statements, and payment plans", "Real-time KPI dashboards for practice leadership"],
  },
  "/patient-engagement": {
    eyebrow: "Platform",
    title: "Patient Engagement",
    subtitle: "Modern scheduling, intake, messaging, and payments that meet patients where they are — and free up staff time at the same time.",
    body: "Greenway's patient engagement layer turns the routine touch points around the visit into self-service workflows your patients actually prefer, while reducing inbound calls to the front office.",
    items: ["Online scheduling and digital intake", "Two-way secure messaging and reminders", "Patient portal with results, statements, and payments", "Surveys and engagement campaigns"],
  },
  "/analytics-reporting": {
    eyebrow: "Platform",
    title: "Analytics & Reporting",
    subtitle: "Dashboards and reports that turn raw EHR and practice management data into decisions leadership can act on this week.",
    body: "Bring clinical, operational, and financial data together with role-based dashboards designed for practice administrators, clinical leads, and billing managers.",
    items: ["Role-based dashboards", "Specialty benchmarks", "Custom report builder", "Scheduled exports and email digests"],
  },
  "/quality-and-compliance": {
    eyebrow: "Platform",
    title: "Quality & Compliance",
    subtitle: "Stay ahead of MIPS, UDS, and changing program rules without bolting on yet another reporting tool.",
    body: "Greenway tracks quality measures inside the daily clinical workflow, surfaces care gaps in chart, and produces the submission packages your team needs without manual data wrangling.",
    items: ["MIPS, UDS, and HEDIS measure tracking", "Care gap closure in workflow", "Submission-ready exports", "Regulatory updates released with the platform"],
  },
  "/ehr-practice-management-rcm-software": {
    eyebrow: "The platform",
    title: "EHR, Practice Management & RCM",
    subtitle: "One connected platform across the clinical record, the practice management workflow, and the revenue cycle — sold and supported by one team.",
    body: "Most ambulatory practices end up stitching together an EHR, a PM, and a billing service. Greenway's unified suite removes the seams, and the services that wrap around it close the operational gaps.",
    items: ["Unified data model across clinical, operational, and financial", "Specialty-tuned out of the box", "US-based services and support", "Greenway Secure Cloud, built on AWS"],
  },
  "/discover": {
    eyebrow: "Discover",
    title: "Discover Greenway",
    subtitle: "A guided introduction to what Greenway does, who it's for, and how a typical practice gets value in the first 90 days.",
    body: "If you're new to Greenway, this is the right place to start. Take a short, self-guided tour and decide whether a more detailed conversation makes sense for your practice.",
  },
  "/leadership": {
    eyebrow: "About",
    title: "Leadership",
    subtitle: "The team driving Greenway's strategy, product vision, and customer outcomes.",
    body: "Greenway's leadership brings together decades of experience across ambulatory care, healthcare technology, services, and security — with a shared bias toward shipping things that actually help practices.",
  },
  "/community-culture": {
    eyebrow: "About",
    title: "Community & Culture",
    subtitle: "How we work, what we value, and how we show up for the communities our customers serve.",
    body: "Greenway's culture is shaped by the people it serves — independent ambulatory practices, community health centers, and tribal health organizations. We invest in our teammates, in our customer communities, and in the wider conversation about the future of ambulatory care.",
  },
  "/about/awards-and-certifications": {
    eyebrow: "About",
    title: "Awards & Certifications",
    subtitle: "Independent recognition from KLAS, Frost & Sullivan, Black Book, and others — alongside the certifications healthcare buyers expect.",
    body: "Awards aren't a substitute for results in your own practice, but they do reflect what customers and analysts see when they evaluate Greenway against the field.",
  },
  "/about-us/vista-equity-partners": {
    eyebrow: "About",
    title: "Vista Equity Partners",
    subtitle: "Our investment partner and what their backing means for our customers.",
    body: "Vista Equity Partners' long-term investment in Greenway supports the platform investments and services expansion our customers ask for — including AI capabilities, security, and revenue services.",
  },
  "/investor-relations": {
    eyebrow: "About",
    title: "Investor Relations",
    subtitle: "Company information for investors, analysts, and partners.",
    body: "Resources for investors and partners evaluating Greenway Health.",
  },
  "/client-support": {
    eyebrow: "Support",
    title: "Client Support",
    subtitle: "Already a Greenway customer? Reach our support team through your customer portal.",
    body: "Existing Greenway customers can access support tickets, knowledge base articles, release notes, and training resources through the Greenway customer portal.",
  },
  "/greenway-login": {
    eyebrow: "Login",
    title: "Greenway Login",
    subtitle: "Access the Greenway customer portal and Intergy applications.",
    body: "Sign in to the Greenway customer portal to manage your account, access training, and connect with support.",
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Contact",
    subtitle: "Tell us about your practice and a Greenway specialist will reach out within one business day.",
    body: "Use the form on this page to start a conversation with our team.",
  },
  "/request-ehr-quote": {
    eyebrow: "Request a quote",
    title: "Request an EHR Quote",
    subtitle: "Get tailored pricing for the Greenway platform based on your specialty, size, and workflow needs.",
    body: "Share a few details and a Greenway specialist will prepare a quote that reflects your practice's specific configuration.",
  },
  "/free-ehr-demo-family-practice-and-internal-medicine": {
    eyebrow: "Demo",
    title: "Free EHR Demo for Family Practice & Internal Medicine",
    subtitle: "See Intergy in a primary care workflow — scheduling, documentation, orders, billing, and reporting.",
    body: "A short, guided walkthrough configured for primary care practices.",
  },
  "/events": {
    eyebrow: "Events",
    title: "Events",
    subtitle: "Where to meet the Greenway team — conferences, webinars, user groups, and partner events.",
    body: "Browse upcoming and recent Greenway events.",
  },
  "/news": {
    eyebrow: "Newsroom",
    title: "News & Press",
    subtitle: "Press releases, leadership perspectives, and industry recognition from across Greenway Health.",
    body: "The latest Greenway announcements.",
  },
  "/marketplace/about-marketplace": {
    eyebrow: "Marketplace",
    title: "About Greenway Marketplace",
    subtitle: "A curated catalog of vetted technology and service partners that integrate with the Greenway platform.",
    body: "Marketplace exists so practices don't have to evaluate every health IT vendor on the planet — we've already done the work of vetting partners for fit, security posture, and integration quality.",
  },
  "/marketplace/become-a-partner": {
    eyebrow: "Marketplace",
    title: "Become a Marketplace Partner",
    subtitle: "Apply to join the Greenway Marketplace and reach tens of thousands of ambulatory providers.",
    body: "Marketplace partners go through a structured evaluation covering fit, integration approach, security, and customer support. Tell us about your solution and we'll get back to you.",
  },
  "/marketplace/marketplace-solution-request": {
    eyebrow: "Marketplace",
    title: "Request a Marketplace Solution",
    subtitle: "Looking for a capability that isn't in Marketplace today? Let us know.",
    body: "If you're looking for a specific integration or service, tell us what you need and we'll point you in the right direction — or work to bring the right partner in.",
  },
  "/privacy": {
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How Greenway Health collects, uses, and protects information on this site and across our services.",
    body: "This summary describes the categories of information we collect, how we use it, your choices, and how to contact us about privacy matters. For the legally binding version, please contact us.",
  },
  "/terms": {
    eyebrow: "Legal",
    title: "Terms of Use",
    subtitle: "The terms that govern your use of this website.",
    body: "By accessing or using this site, you agree to these terms. They cover acceptable use, intellectual property, disclaimers, and limitations of liability.",
  },
  "/cookie-policy": {
    eyebrow: "Legal",
    title: "Cookie Policy",
    subtitle: "How this site uses cookies and similar technologies.",
    body: "This policy explains the types of cookies we use, why we use them, and how you can manage your preferences.",
  },
  "/consumer-privacy-request": {
    eyebrow: "Legal",
    title: "Consumer Privacy Request",
    subtitle: "Submit a privacy request under applicable US state privacy laws.",
    body: "Use this page to submit access, deletion, correction, or opt-out requests under applicable state privacy laws.",
  },
  "/privacy-notice-california-residents": {
    eyebrow: "Legal",
    title: "California Privacy Notice",
    subtitle: "Additional privacy disclosures for California residents under the CCPA/CPRA.",
    body: "This notice supplements our main privacy policy with the disclosures required for California residents.",
  },
  "/state-privacy-law-notice": {
    eyebrow: "Legal",
    title: "State Privacy Law Notice",
    subtitle: "State-specific privacy disclosures for residents covered by recent US state privacy laws.",
    body: "This notice describes the rights available to residents of states with comprehensive privacy laws and how to exercise them.",
  },
  "/release-agreement": {
    eyebrow: "Legal",
    title: "Release Agreement",
    subtitle: "Release of liability for select Greenway events and programs.",
    body: "If you are participating in a Greenway event that requires a release, this is the standard form.",
  },
  "/subscribe": {
    eyebrow: "Newsletter",
    title: "Subscribe",
    subtitle: "Get the Greenway newsletter — practice insights, product updates, and event invitations.",
    body: "Sign up to get the latest from Greenway in your inbox.",
  },
  "/subscription-management": {
    eyebrow: "Newsletter",
    title: "Manage Your Subscription",
    subtitle: "Update your email preferences or unsubscribe from Greenway communications.",
    body: "Choose what you'd like to hear from Greenway about — or step away from email entirely.",
  },
};

// Leadership team biographies (paraphrased role summaries, no PII beyond what is public)
export const LEADERSHIP_BIOS: Record<string, { role: string; bio: string }> = {
  "richard-atkin": {
    role: "Chair of the Board",
    bio: "Richard has spent his career leading healthcare technology and services companies through growth and transformation, and helped guide Greenway through a major operational and product reinvention.",
  },
  "david-cohen": {
    role: "Chief Product & Technology Officer",
    bio: "David leads product strategy, engineering, and platform architecture across the Greenway suite, with a focus on AI, interoperability, and the unified data model that ties the platform together.",
  },
  "dr-michael-blackman": {
    role: "Chief Medical Officer",
    bio: "Dr. Blackman is a practicing internist who works closely with product and customer teams to make sure the clinical workflows clinicians actually use are the ones we ship.",
  },
  "james-prolizo": {
    role: "Chief Financial Officer",
    bio: "James oversees finance, accounting, and operations across Greenway's businesses, with a focus on making the company a durable partner for ambulatory practices.",
  },
  "jayal-lakhani": {
    role: "Chief Information Security Officer",
    bio: "Jayal leads Greenway's security and trust program — covering Greenway Secure Cloud, vulnerability management, and the controls customers rely on every day.",
  },
  "karen-mulroe": {
    role: "Chief People Officer",
    bio: "Karen leads the people function at Greenway, focused on growing the kinds of teams that build software our customers actually love working in.",
  },
  "sherry-de-cuba": {
    role: "Chief Customer Officer",
    bio: "Sherry leads customer experience, services, and customer success — from implementation through long-term partnership.",
  },
  "tom-lango": {
    role: "Chief Revenue Officer",
    bio: "Tom leads commercial strategy, partnerships, and revenue across Greenway's platform, services, and Marketplace.",
  },
};
