import { Layout } from "@/components/layout/Layout";
import { Hero, Breadcrumbs, FeatureGrid, SplitBlock, CtaBanner, Testimonial } from "@/components/sections/Sections";
import { titleFromPath } from "@/lib/utils";
import { useLocation } from "wouter";
import { Brain, Workflow, Users, BarChart3, ShieldCheck, ArrowUpRight } from "lucide-react";

const COPY: Record<string, { eyebrow: string; subtitle: string; body: string; items: string[] }> = {
  "/solutions/electronic-health-records-EHR": {
    eyebrow: "Solution",
    subtitle: "An ambulatory EHR that follows how clinicians think — designed to reduce clicks, surface what matters, and keep documentation out of the way of the visit.",
    body: "Greenway's EHR brings the patient story together in one place, with workflows tuned to your specialty and AI that lifts routine work off your team.",
    items: ["Specialty-tuned templates and content", "Ambient documentation with Clinical Assist", "Embedded clinical decision support", "Interoperability via Carequality and CommonWell"],
  },
  "/solutions/revenue-cycle-management": {
    eyebrow: "Solution",
    subtitle: "A US-based revenue cycle team paired with software that automates clean claims, denial prevention, and patient billing — with transparent KPIs every week.",
    body: "Greenway Revenue Services owns the end-to-end revenue cycle for your practice, from charge capture to denial follow-up, with aligned incentives and specialty-deep expertise.",
    items: ["Specialty-specific coding and follow-up", "Automated eligibility and prior authorization", "Denial prevention and root-cause analytics", "Weekly KPI reviews with your dedicated team"],
  },
  "/solutions/clinical-assist": {
    eyebrow: "AI",
    subtitle: "Ambient clinical documentation built directly into the Greenway EHR. Capture the visit; let Clinical Assist draft the note.",
    body: "Greenway Clinical Assist listens during the patient encounter, drafts a structured note, and drops it into the chart for clinician review — no extra hardware, no separate app.",
    items: ["Drafts ready in seconds after the visit", "Specialty-aware structure", "Built into the Greenway workflow — no toggling", "Clinician stays in control of the final note"],
  },
};

const DEFAULT_ITEMS = [
  "Built for ambulatory practices",
  "Tight integration with the Greenway platform",
  "US-based services and support",
  "Specialty-aware configuration",
];

export default function SolutionPage() {
  const [location] = useLocation();
  const meta = COPY[location] || {
    eyebrow: "Solution",
    subtitle: `${titleFromPath(location)} from Greenway Health — built to extend the value of your EHR and practice management platform.`,
    body: `Greenway's ${titleFromPath(location)} solution helps ambulatory practices streamline workflow, reduce administrative burden, and improve outcomes — without adding lift to your team.`,
    items: DEFAULT_ITEMS,
  };
  const title = titleFromPath(location);

  return (
    <Layout title={title} description={meta.subtitle}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/ehr-practice-management-rcm-software" }, { label: title }]} />
      <Hero eyebrow={meta.eyebrow} title={title} subtitle={meta.subtitle} primaryCta={{ label: "Request a demo", href: "/contact" }} secondaryCta={{ label: "Talk to our team", href: "/contact" }} />
      <SplitBlock eyebrow="How it works" title={`A practical approach to ${title.toLowerCase()}.`} body={meta.body} items={meta.items} ctaLabel="See related solutions" ctaHref="/ehr-practice-management-rcm-software" />
      <FeatureGrid eyebrow="What you get" title="Outcomes that show up in your numbers." features={[
        { icon: <Workflow className="h-6 w-6" />, title: "Fewer manual steps", description: "Automate the repeat work that fills your team's day." },
        { icon: <BarChart3 className="h-6 w-6" />, title: "Clear, weekly insight", description: "Dashboards and reports that surface what's working and what isn't." },
        { icon: <Users className="h-6 w-6" />, title: "Better patient experience", description: "Smoother intake, faster responses, fewer surprises." },
        { icon: <Brain className="h-6 w-6" />, title: "AI where it helps", description: "Targeted automation, not novelty for its own sake." },
        { icon: <ShieldCheck className="h-6 w-6" />, title: "Healthcare-grade security", description: "Hosted on Greenway Secure Cloud, built on AWS." },
        { icon: <ArrowUpRight className="h-6 w-6" />, title: "Room to scale", description: "Grows with your practice from a single location to a multi-site group." },
      ]} />
      <Testimonial quote="The change wasn't dramatic; it was felt. Less friction every day, fewer escalations, cleaner numbers at the end of the month." author="Practice administrator" role="Operations lead" practice="Multi-specialty group" />
      <CtaBanner title={`See ${title} in action.`} subtitle="A short, tailored walkthrough — no commitment." primaryCta={{ label: "Request a demo", href: "/contact" }} />
    </Layout>
  );
}
