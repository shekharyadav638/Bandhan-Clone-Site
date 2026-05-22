export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { heading: string; links: NavLink[] };
export type MegaMenu = { label: string; href?: string; groups: NavGroup[]; feature?: { title: string; copy: string; href: string; cta: string } };

export const megaMenu: MegaMenu[] = [
  {
    label: "Platform",
    groups: [
      {
        heading: "Integrated EHR Suites",
        links: [
          { label: "Intergy", href: "/intergy", description: "Cloud-based EHR built for ambulatory practices" },
          { label: "Intergy On Demand", href: "/intergy-on-demand", description: "Hosted Intergy with managed infrastructure" },
          { label: "Clinical", href: "/clinical", description: "Clinical workflows that follow how clinicians think" },
          { label: "Financial", href: "/financial", description: "Practice management and billing in one place" },
          { label: "Patient Engagement", href: "/patient-engagement", description: "Portals, scheduling, communication" },
          { label: "Analytics & Reporting", href: "/analytics-reporting", description: "Dashboards across the whole practice" },
          { label: "Quality & Compliance", href: "/quality-and-compliance", description: "Stay ahead of changing program rules" },
        ],
      },
      {
        heading: "Solutions",
        links: [
          { label: "Electronic Health Records (EHR)", href: "/solutions/electronic-health-records-EHR" },
          { label: "Practice Management", href: "/solutions/practice-management" },
          { label: "Revenue Cycle Management", href: "/solutions/revenue-cycle-management" },
          { label: "Patient Portal", href: "/solutions/patient-portal" },
          { label: "Patient Connect", href: "/solutions/patient-connect" },
          { label: "Telehealth", href: "/solutions/telehealth" },
          { label: "Clinical Assist", href: "/solutions/clinical-assist" },
          { label: "Document Manager", href: "/solutions/document-manager" },
          { label: "Health Pay", href: "/solutions/health-pay" },
          { label: "Insights", href: "/solutions/insights" },
          { label: "Interoperability", href: "/solutions/interoperability" },
          { label: "Interpreter Services", href: "/solutions/interpreter-services" },
          { label: "Medical Coding", href: "/solutions/medical-coding" },
          { label: "Practice Analytics", href: "/solutions/practice-analytics" },
          { label: "Professional Services", href: "/solutions/professional-services" },
          { label: "Regulatory Reporting", href: "/solutions/regulatory-reporting" },
          { label: "Remote Patient Monitoring", href: "/solutions/remote-patient-monitoring-rpm" },
          { label: "Care Coordination Services", href: "/solutions/care-coordination-services" },
          { label: "Chronic Care Management", href: "/solutions/chronic-care-management-ccm" },
          { label: "Clearinghouse Services", href: "/solutions/clearinghouse-services" },
          { label: "Electronic Dental Records", href: "/solutions/electronic-dental-records" },
          { label: "Secure Cloud", href: "/solutions/secure-cloud" },
        ],
      },
    ],
    feature: {
      title: "See the unified platform",
      copy: "From the first patient touch to the last reimbursed claim — one connected system of record.",
      href: "/ehr-practice-management-rcm-software",
      cta: "Tour the platform",
    },
  },
  {
    label: "Specialties",
    groups: [
      {
        heading: "By Specialty",
        links: [
          { label: "Primary Care", href: "/specialties/electronic-health-record-ehr-software-primary-care-practices" },
          { label: "OB-GYN", href: "/specialties/electronic-health-record-ehr-software-ob-gyn-practices" },
          { label: "Pediatrics", href: "/specialties/electronic-health-record-ehr-software-pediatric-practices" },
          { label: "Orthopedics", href: "/specialties/electronic-health-record-ehr-software-orthopedic-practices" },
          { label: "Cardiology", href: "/specialties/electronic-health-records-ehr-software-cardiology-practices" },
          { label: "Surgery", href: "/specialties/electronic-health-records-ehr-software-surgery-practices" },
          { label: "FQHC / Public Health", href: "/specialties/electronic-health-records-ehr-software-fqhc-public-health-practices" },
          { label: "Tribal Health", href: "/specialties/electronic-health-records-ehr-software-tribal-health" },
          { label: "All Specialties", href: "/specialties" },
        ],
      },
    ],
  },
  {
    label: "Challenges",
    href: "/challenges",
    groups: [
      {
        heading: "What we solve",
        links: [
          { label: "Patient Care", href: "/challenges/patient-care" },
          { label: "Profitability", href: "/challenges/profitability" },
          { label: "Compliance & Reporting", href: "/challenges/compliance-and-reporting" },
          { label: "Workflow Efficiencies", href: "/challenges/workflow-efficiencies" },
          { label: "Medical Billing", href: "/challenges/medical-billing" },
          { label: "Healthcare Cybersecurity", href: "/challenges/healthcare-cybersecurity" },
          { label: "Government Regulations", href: "/challenges/government-regulations" },
          { label: "MACRA, MIPS & APMs", href: "/challenges/macra-mips-and-apms" },
          { label: "Value-Based Care", href: "/challenges/value-based-care" },
        ],
      },
    ],
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    groups: [
      {
        heading: "Greenway Marketplace",
        links: [
          { label: "About Marketplace", href: "/marketplace/about-marketplace" },
          { label: "Become a Partner", href: "/marketplace/become-a-partner" },
          { label: "Request a Solution", href: "/marketplace/marketplace-solution-request" },
          { label: "Webinars", href: "/marketplace/webinars" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/knowledge-center",
    groups: [
      {
        heading: "Knowledge Center",
        links: [
          { label: "All Resources", href: "/knowledge-center" },
          { label: "Blog", href: "/knowledge-center/blog" },
          { label: "Case Studies", href: "/knowledge-center/case-study" },
          { label: "Success Stories", href: "/knowledge-center/success-story" },
          { label: "E-Books", href: "/knowledge-center/ebook" },
          { label: "Brochures", href: "/knowledge-center/brochure" },
          { label: "Benefit Overviews", href: "/knowledge-center/benefit-overview" },
          { label: "Infographics", href: "/knowledge-center/Infographic" },
          { label: "Webinars", href: "/knowledge-center/webinar-recording" },
          { label: "Whitepapers", href: "/knowledge-center/whitepaper-1" },
          { label: "Checklists", href: "/knowledge-center/checklists" },
          { label: "Comparison Charts", href: "/knowledge-center/comparison-chart" },
          { label: "Calculators", href: "/knowledge-center/interactive-calculator" },
          { label: "E-Magazines", href: "/knowledge-center/e-magazine" },
          { label: "Videos", href: "/knowledge-center/video" },
          { label: "News", href: "/news" },
          { label: "Events", href: "/events" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about-us",
    groups: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about-us" },
          { label: "Leadership", href: "/leadership" },
          { label: "Community & Culture", href: "/community-culture" },
          { label: "Awards & Certifications", href: "/about/awards-and-certifications" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Vista Equity Partners", href: "/about-us/vista-equity-partners" },
          { label: "News", href: "/news" },
          { label: "Client Awards", href: "/client-awards" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

export const footerColumns: NavGroup[] = [
  {
    heading: "Platform",
    links: [
      { label: "Intergy", href: "/intergy" },
      { label: "Clinical", href: "/clinical" },
      { label: "Financial", href: "/financial" },
      { label: "Patient Engagement", href: "/patient-engagement" },
      { label: "Analytics & Reporting", href: "/analytics-reporting" },
      { label: "EHR / PM / RCM Suite", href: "/ehr-practice-management-rcm-software" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Revenue Cycle Management", href: "/solutions/revenue-cycle-management" },
      { label: "Practice Management", href: "/solutions/practice-management" },
      { label: "Patient Portal", href: "/solutions/patient-portal" },
      { label: "Telehealth", href: "/solutions/telehealth" },
      { label: "Clinical Assist", href: "/solutions/clinical-assist" },
      { label: "Interoperability", href: "/solutions/interoperability" },
      { label: "Secure Cloud", href: "/solutions/secure-cloud" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Blog", href: "/knowledge-center/blog" },
      { label: "Case Studies", href: "/knowledge-center/case-study" },
      { label: "Brochures", href: "/knowledge-center/brochure" },
      { label: "Webinars", href: "/knowledge-center/webinar-recording" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Community & Culture", href: "/community-culture" },
      { label: "Awards & Certifications", href: "/about/awards-and-certifications" },
      { label: "Contact", href: "/contact" },
      { label: "Client Support", href: "/client-support" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "CA Privacy Notice", href: "/privacy-notice-california-residents" },
      { label: "State Privacy Notice", href: "/state-privacy-law-notice" },
      { label: "Consumer Privacy Request", href: "/consumer-privacy-request" },
    ],
  },
];
