import { Layout } from "@/components/layout/Layout";
import { useLocation } from "wouter";
import { Breadcrumbs, PageHeader, SplitBlock, FeatureGrid, CtaBanner, CardLinkGrid } from "@/components/sections/Sections";
import { Workflow, BarChart3, HeartPulse, ClipboardCheck, Users, ShieldCheck } from "lucide-react";

const SPECIALTIES = [
  { name: "Primary Care", href: "/specialties/electronic-health-record-ehr-software-primary-care-practices" },
  { name: "OB-GYN", href: "/specialties/electronic-health-record-ehr-software-ob-gyn-practices" },
  { name: "Pediatrics", href: "/specialties/electronic-health-record-ehr-software-pediatric-practices" },
  { name: "Orthopedics", href: "/specialties/electronic-health-record-ehr-software-orthopedic-practices" },
  { name: "Cardiology", href: "/specialties/electronic-health-records-ehr-software-cardiology-practices" },
  { name: "Surgery", href: "/specialties/electronic-health-records-ehr-software-surgery-practices" },
  { name: "FQHC / Public Health", href: "/specialties/electronic-health-records-ehr-software-fqhc-public-health-practices" },
  { name: "Tribal Health", href: "/specialties/electronic-health-records-ehr-software-tribal-health" },
];

function shortName(slug: string) {
  const map: Record<string, string> = {
    "electronic-health-record-ehr-software-primary-care-practices": "Primary Care",
    "electronic-health-record-ehr-software-ob-gyn-practices": "OB-GYN",
    "electronic-health-record-ehr-software-pediatric-practices": "Pediatrics",
    "electronic-health-record-ehr-software-orthopedic-practices": "Orthopedics",
    "electronic-health-records-ehr-software-cardiology-practices": "Cardiology",
    "electronic-health-records-ehr-software-surgery-practices": "Surgery",
    "electronic-health-records-ehr-software-fqhc-public-health-practices": "FQHC & Public Health",
    "electronic-health-records-ehr-software-tribal-health": "Tribal Health",
  };
  return map[slug] || "Specialty";
}

export default function SpecialtyPage() {
  const [location] = useLocation();
  const isIndex = location === "/specialties";
  const slug = location.replace(/^\/specialties\//, "");
  const name = isIndex ? "Specialty solutions" : shortName(slug);

  if (isIndex) {
    return (
      <Layout title={name}>
        <PageHeader eyebrow="Specialties" title="An EHR tuned to the way your specialty works." subtitle="Specialty-specific templates, content, and workflows — backed by services built around your patient population." />
        <section className="section-pad">
          <div className="container-x">
            <CardLinkGrid items={SPECIALTIES.map((s) => ({ title: s.name, href: s.href, description: `EHR, practice management, and revenue services for ${s.name.toLowerCase()} practices.` }))} columns={3} />
          </div>
        </section>
        <CtaBanner title="Don't see your specialty?" subtitle="We support dozens of ambulatory specialties. Let's talk through your workflow." primaryCta={{ label: "Contact us", href: "/contact" }} />
      </Layout>
    );
  }

  return (
    <Layout title={`${name} EHR Software`}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Specialties", href: "/specialties" }, { label: name }]} />
      <PageHeader eyebrow="Specialty" title={`EHR & practice management built for ${name.toLowerCase()}.`} subtitle={`Templates, workflows, and services tuned to the realities of ${name.toLowerCase()} practices — backed by a team that's worked alongside groups like yours.`} />
      <SplitBlock eyebrow="Why it fits" title={`Designed around ${name.toLowerCase()} workflows.`} body={`Greenway's ${name} configuration brings the specialty-specific content, order sets, and reporting your team needs out of the box — so onboarding is fast and the EHR feels familiar from day one.`} items={["Specialty-specific templates and order sets", "Quality measure tracking built in", "Coding and billing teams who know your codes", "Integrations with the partners your specialty uses"]} ctaLabel="See related solutions" ctaHref="/ehr-practice-management-rcm-software" />
      <FeatureGrid eyebrow="What you get" title="A complete platform — not a starter kit." features={[
        { icon: <HeartPulse className="h-6 w-6" />, title: "Clinical depth", description: "Workflows tuned to specialty visit patterns and documentation needs." },
        { icon: <Workflow className="h-6 w-6" />, title: "Operational lift", description: "Front office, back office, and revenue cycle work, handled with you." },
        { icon: <BarChart3 className="h-6 w-6" />, title: "Specialty analytics", description: "Benchmarks and dashboards your specialty leadership actually uses." },
        { icon: <Users className="h-6 w-6" />, title: "Patient engagement", description: "Modern intake, scheduling, payments, and messaging." },
        { icon: <ClipboardCheck className="h-6 w-6" />, title: "Quality reporting", description: "MIPS, UDS, and program-specific reporting handled in workflow." },
        { icon: <ShieldCheck className="h-6 w-6" />, title: "Healthcare-grade security", description: "Greenway Secure Cloud, built on AWS, monitored 24/7." },
      ]} />
      <CtaBanner title={`See Greenway in your ${name.toLowerCase()} workflow.`} primaryCta={{ label: "Request a demo", href: "/contact" }} />
    </Layout>
  );
}
