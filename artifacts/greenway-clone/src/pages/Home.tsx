import { Layout } from "@/components/layout/Layout";
import { Hero, LogoStrip, FeatureGrid, StatsBand, Testimonial, CtaBanner, SplitBlock, CardLinkGrid } from "@/components/sections/Sections";
import { Activity, BadgeDollarSign, Brain, Cloud, HeartPulse, MessagesSquare, ShieldCheck, Workflow, Users } from "lucide-react";

export default function Home() {
  return (
    <Layout title="AI EHR & Practice Management Software for Ambulatory Care" description="Greenway Health combines a unified EHR, practice management, and revenue cycle services with AI that gives clinicians their time back.">
      <Hero
        eyebrow="The automated healthcare practice"
        title="An AI-powered EHR built for the ambulatory practices that keep communities healthy."
        subtitle="One connected system of record across clinical, financial, and patient experience — backed by services that help your team perform at the top of their license."
        primaryCta={{ label: "Request a demo", href: "/contact" }}
        secondaryCta={{ label: "Explore the platform", href: "/ehr-practice-management-rcm-software" }}
      />

      <LogoStrip />

      <FeatureGrid
        eyebrow="Built for the way you practice"
        title="A modern platform for clinical, financial, and patient experience."
        subtitle="Greenway brings together the tools and services ambulatory practices need to deliver high-quality care while keeping operations efficient and reimbursement on track."
        features={[
          { icon: <HeartPulse className="h-6 w-6" />, title: "Clinical", description: "An EHR that follows how clinicians actually think — fewer clicks, more time with patients.", href: "/clinical" },
          { icon: <BadgeDollarSign className="h-6 w-6" />, title: "Financial", description: "Practice management and revenue cycle tools that turn claims into cash faster.", href: "/financial" },
          { icon: <Users className="h-6 w-6" />, title: "Patient Engagement", description: "Modern scheduling, intake, payments, and messaging that meet patients where they are.", href: "/patient-engagement" },
          { icon: <Brain className="h-6 w-6" />, title: "AI & Automation", description: "Ambient documentation and agentic workflows that take routine work off your team's plate.", href: "/solutions/clinical-assist" },
          { icon: <Cloud className="h-6 w-6" />, title: "Greenway Secure Cloud", description: "Healthcare-grade hosting on AWS — built for resilience, security, and uptime.", href: "/solutions/secure-cloud" },
          { icon: <ShieldCheck className="h-6 w-6" />, title: "Quality & Compliance", description: "Stay on top of MIPS, UDS, and changing regulatory requirements with less effort.", href: "/quality-and-compliance" },
        ]}
      />

      <StatsBand stats={[
        { value: "75K+", label: "Healthcare providers" },
        { value: "30+", label: "Years in ambulatory care" },
        { value: "10M+", label: "Patients served annually" },
        { value: "$3B+", label: "Annual reimbursements processed" },
      ]} />

      <SplitBlock
        eyebrow="The automated healthcare practice"
        title="Less administrative drag. More time at the top of license."
        body="Greenway's AI factory pairs ambient clinical documentation with agentic automation across the front office, the back office, and the revenue cycle — so your team can spend more time on patients and less on paperwork."
        items={[
          "Ambient documentation that drafts notes from the conversation",
          "Automated prior authorization and referral management",
          "Denial prevention and AI-assisted coding across the revenue cycle",
          "Patient intake, scheduling, and reminders without staff lift",
        ]}
        ctaLabel="See how it works"
        ctaHref="/discover"
      />

      <SplitBlock
        reversed
        eyebrow="Greenway Revenue Services"
        title="A revenue cycle partner that gets paid when you do."
        body="Pair our software with a US-based RCM team that owns the work end-to-end — from charge capture and clean claims to denial follow-up and patient billing — with transparent reporting at every step."
        items={[
          "Average 30% lift in net collections within the first 12 months",
          "Specialty-specific coding and follow-up teams",
          "Clear KPIs and weekly performance reviews",
          "Aligned incentives — we win when your practice wins",
        ]}
        ctaLabel="Explore revenue services"
        ctaHref="/solutions/revenue-cycle-management"
      />

      <Testimonial
        quote="Greenway has been a true partner for our practice. The platform fits the way we work, and their revenue services team has measurably improved our financial performance — without adding burden to our staff."
        author="Dr. Allison Mercer"
        role="Managing Partner"
        practice="Cypress Family Health"
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Insights</p>
              <h2 className="text-3xl font-bold md:text-4xl">From the Greenway Knowledge Center</h2>
            </div>
            <a href="/knowledge-center" className="hidden sm:inline-flex btn-outline">Visit Knowledge Center</a>
          </div>
          <CardLinkGrid items={[
            { title: "Healthcare IT Trends to Watch in 2026", href: "/knowledge-center/blog/healthcare-it-trends-2026", description: "How agentic AI, secure cloud, and unified records will reshape the ambulatory practice this year." },
            { title: "The Second Shift Isn't Inevitable — It's Architectural", href: "/knowledge-center/e-book/second-shift-administrative-work-isnt-inevitable-its-architectural", description: "A practical e-book on rethinking the after-hours admin burden through workflow redesign and automation." },
            { title: "Greenway Clinical Assist vs. Heidi and Freed", href: "/knowledge-center/comparison-chart/greenway-clinical-assist-stacks-against-heidi-and-freed", description: "Side-by-side: how the major ambient AI scribes compare across documentation quality, integration, and total cost." },
          ]} />
        </div>
      </section>

      <FeatureGrid
        eyebrow="Solutions by challenge"
        title="What's holding your practice back?"
        features={[
          { icon: <HeartPulse className="h-5 w-5" />, title: "Patient care", description: "Help clinicians spend more time with patients and less time in the EHR.", href: "/challenges/patient-care" },
          { icon: <BadgeDollarSign className="h-5 w-5" />, title: "Profitability", description: "Plug revenue leaks across the front and back office.", href: "/challenges/profitability" },
          { icon: <Workflow className="h-5 w-5" />, title: "Workflow efficiencies", description: "Cut the click count and automate the routine.", href: "/challenges/workflow-efficiencies" },
          { icon: <ShieldCheck className="h-5 w-5" />, title: "Cybersecurity", description: "Healthcare-grade security backed by Greenway Secure Cloud.", href: "/challenges/healthcare-cybersecurity" },
          { icon: <Activity className="h-5 w-5" />, title: "Value-based care", description: "Surface care gaps and quality measures inside daily workflow.", href: "/challenges/value-based-care" },
          { icon: <MessagesSquare className="h-5 w-5" />, title: "MACRA, MIPS & APMs", description: "Track, report, and submit with less administrative burden.", href: "/challenges/macra-mips-and-apms" },
        ]}
      />

      <CtaBanner
        title="Ready to see what an automated practice feels like?"
        subtitle="Tell us about your practice and we'll tailor a walkthrough of the platform, the services, and the path to value."
        primaryCta={{ label: "Request a demo", href: "/contact" }}
        secondaryCta={{ label: "Talk to our team", href: "/contact" }}
      />
    </Layout>
  );
}
