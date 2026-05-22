import { Layout } from "@/components/layout/Layout";
import { useLocation } from "wouter";
import { titleFromPath } from "@/lib/utils";
import { Breadcrumbs, PageHeader, SplitBlock, FeatureGrid, CtaBanner, CardLinkGrid } from "@/components/sections/Sections";
import { AlertTriangle, Workflow, ShieldCheck, BadgeDollarSign, Stethoscope, ClipboardCheck } from "lucide-react";

const CHALLENGE_INDEX = [
  { label: "Patient Care", href: "/challenges/patient-care" },
  { label: "Profitability", href: "/challenges/profitability" },
  { label: "Compliance & Reporting", href: "/challenges/compliance-and-reporting" },
  { label: "Workflow Efficiencies", href: "/challenges/workflow-efficiencies" },
  { label: "Medical Billing", href: "/challenges/medical-billing" },
  { label: "Healthcare Cybersecurity", href: "/challenges/healthcare-cybersecurity" },
  { label: "Government Regulations", href: "/challenges/government-regulations" },
  { label: "MACRA, MIPS & APMs", href: "/challenges/macra-mips-and-apms" },
  { label: "Value-Based Care", href: "/challenges/value-based-care" },
];

export default function ChallengePage() {
  const [location] = useLocation();
  const isIndex = location === "/challenges";
  const title = isIndex ? "Challenges we help practices solve" : titleFromPath(location);

  if (isIndex) {
    return (
      <Layout title={title}>
        <PageHeader eyebrow="Challenges" title="What's holding your practice back?" subtitle="Pick the friction you feel most. We've spent decades helping ambulatory practices work through these challenges with software, services, and people who've been there." />
        <section className="section-pad">
          <div className="container-x">
            <CardLinkGrid items={CHALLENGE_INDEX.map((c) => ({ title: c.label, href: c.href, description: "How Greenway helps ambulatory practices address this challenge." }))} />
          </div>
        </section>
        <CtaBanner title="Not sure where to start?" primaryCta={{ label: "Talk to our team", href: "/contact" }} />
      </Layout>
    );
  }

  return (
    <Layout title={title}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Challenges", href: "/challenges" }, { label: title }]} />
      <PageHeader eyebrow="Challenge" title={title} subtitle={`How Greenway helps ambulatory practices address ${title.toLowerCase()} — with software, services, and people who have lived it.`} />
      <SplitBlock
        eyebrow="The problem"
        title={`Why ${title.toLowerCase()} gets harder every year.`}
        body={`Ambulatory practices are being asked to deliver more care, with tighter margins, under shifting rules — while doing it on tools that weren't designed for today's pace. ${title} is one of the places that pressure shows up first.`}
        items={[
          "Administrative work crowding out clinical time",
          "Disconnected tools that don't talk to each other",
          "Visibility gaps that hide the real bottleneck",
          "A team stretched thin and harder to retain",
        ]}
      />
      <SplitBlock
        reversed
        eyebrow="The Greenway approach"
        title="A unified platform, plus services that do the work with you."
        body={`Greenway combines an integrated EHR, practice management, and revenue cycle platform with services that handle the operational lift — so ${title.toLowerCase()} stops feeling like an emergency and starts feeling like a process you control.`}
        items={[
          "One source of truth across clinical, financial, and patient experience",
          "AI and automation built into daily workflow",
          "US-based services with aligned incentives",
          "Specialty-deep expertise from teams who've worked in practices like yours",
        ]}
        ctaLabel="See related solutions"
        ctaHref="/ehr-practice-management-rcm-software"
      />
      <FeatureGrid
        eyebrow="What changes"
        title="Outcomes practices see when they tackle this with Greenway."
        features={[
          { icon: <Stethoscope className="h-6 w-6" />, title: "More time on patient care", description: "Fewer clicks, fewer pop-ups, fewer after-hours notes." },
          { icon: <BadgeDollarSign className="h-6 w-6" />, title: "Cleaner financial performance", description: "Higher clean-claim rates, faster collections, fewer denials." },
          { icon: <Workflow className="h-6 w-6" />, title: "Smoother daily workflow", description: "The routine work the team used to chase happens automatically." },
          { icon: <ClipboardCheck className="h-6 w-6" />, title: "Confident compliance", description: "Quality measures, MIPS, and UDS handled inside daily work." },
          { icon: <ShieldCheck className="h-6 w-6" />, title: "Stronger security posture", description: "Greenway Secure Cloud on AWS, monitored around the clock." },
          { icon: <AlertTriangle className="h-6 w-6" />, title: "Fewer surprises", description: "Weekly visibility into the metrics that matter to leadership." },
        ]}
      />
      <section className="section-pad bg-secondary/40">
        <div className="container-x">
          <h2 className="text-2xl font-bold">Explore other challenges</h2>
          <div className="mt-8">
            <CardLinkGrid items={CHALLENGE_INDEX.filter((c) => c.href !== location).slice(0, 6).map((c) => ({ title: c.label, href: c.href }))} />
          </div>
        </div>
      </section>
      <CtaBanner title={`Ready to tackle ${title.toLowerCase()}?`} primaryCta={{ label: "Request a demo", href: "/contact" }} />
    </Layout>
  );
}
