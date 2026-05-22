import { Layout } from "@/components/layout/Layout";
import { PageHeader, FeatureGrid, CtaBanner, CardLinkGrid } from "@/components/sections/Sections";
import { HeartPulse, Globe, Sparkles, GraduationCap, Users, Coffee } from "lucide-react";

export default function Careers() {
  return (
    <Layout title="Careers at Greenway Health" description="Build technology that gives clinicians their time back. Explore careers at Greenway Health.">
      <PageHeader eyebrow="Careers" title="Build technology that gives clinicians back their time." subtitle="We're hiring engineers, clinicians, designers, revenue cycle experts, and customer-facing teammates who want to help independent ambulatory practices thrive." />

      <FeatureGrid
        eyebrow="Why Greenway"
        title="What it feels like to work here."
        features={[
          { icon: <HeartPulse className="h-6 w-6" />, title: "Mission that matters", description: "Every line of code, every claim worked, every implementation moves real care forward in real practices." },
          { icon: <Users className="h-6 w-6" />, title: "Real ownership", description: "Small teams with clear remits, fast decisions, and the runway to ship work you're proud of." },
          { icon: <Globe className="h-6 w-6" />, title: "Flexible, global team", description: "Hubs in Tampa, Carrollton, and Bangalore plus remote teammates across the US and India." },
          { icon: <Sparkles className="h-6 w-6" />, title: "Modern stack", description: "AI factories, cloud-native architecture on AWS, and a healthy appetite for replacing the legacy bits." },
          { icon: <GraduationCap className="h-6 w-6" />, title: "Career growth", description: "Internal mobility, mentorship, certifications, and a learning budget that gets used." },
          { icon: <Coffee className="h-6 w-6" />, title: "Real benefits", description: "Competitive comp, generous PTO, full medical/dental/vision, 401(k) match, parental leave, and wellness stipends." },
        ]}
      />

      <section className="section-pad bg-secondary/40">
        <div className="container-x">
          <h2 className="text-3xl font-bold md:text-4xl">Get to know our teams</h2>
          <div className="mt-10">
            <CardLinkGrid items={[
              { title: "Explore open jobs", href: "/careers/explore-jobs", description: "Search current openings across engineering, services, support, and more." },
              { title: "Benefits", href: "/careers/benefits", description: "What we offer to support our teammates and their families." },
              { title: "Career FAQ", href: "/careers/career-faq", description: "What hiring looks like and how to prepare for your conversations with us." },
              { title: "Recruiting Events", href: "/careers/recruiting-events", description: "Meet our team at industry conferences and university events." },
              { title: "Greenway India", href: "/careers/greenway-india", description: "Working with us from our Bangalore office." },
              { title: "Meet Talent", href: "/careers/meet-talent", description: "A look at our people team and how they support careers at Greenway." },
              { title: "Meet Product Management", href: "/careers/meet-product-management" },
              { title: "Meet Revenue Services", href: "/careers/meet-revenue-services" },
              { title: "Meet Clearinghouse", href: "/careers/meet-clearinghouse" },
              { title: "Meet Interoperability", href: "/careers/meet-interoperability" },
            ]} />
          </div>
        </div>
      </section>

      <CtaBanner title="See yourself here?" subtitle="Browse open roles and find a team that fits how you want to work." primaryCta={{ label: "Explore open jobs", href: "/careers/explore-jobs" }} />
    </Layout>
  );
}
