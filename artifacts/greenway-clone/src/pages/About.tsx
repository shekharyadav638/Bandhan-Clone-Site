import { Layout } from "@/components/layout/Layout";
import { PageHeader, StatsBand, SplitBlock, CtaBanner, CardLinkGrid } from "@/components/sections/Sections";

export default function About() {
  return (
    <Layout title="About Greenway Health" description="For more than three decades, Greenway Health has built ambulatory health IT for the practices that hold up our healthcare system.">
      <PageHeader eyebrow="About us" title="We build technology for the practices that hold up healthcare." subtitle="For more than thirty years, Greenway Health has partnered with ambulatory practices to deliver software and services that put clinicians, staff, and patients first." />

      <SplitBlock
        eyebrow="Our mission"
        title="Healthier providers, healthier patients, healthier practices."
        body="We believe independent ambulatory practices are essential to a healthy country — and that the technology supporting them should disappear into the background. Greenway exists to give clinicians back the time they trained to spend on patients, and to make sure every practice gets paid for the care it delivers."
        items={["Unified system of record across clinical, financial, and patient experience", "AI and automation that take routine work off your team", "Specialty depth — primary care, OB-GYN, pediatrics, orthopedics, FQHC, tribal health and more", "US-based revenue services with aligned incentives"]}
      />

      <StatsBand stats={[
        { value: "30+", label: "Years in ambulatory care" },
        { value: "75K+", label: "Healthcare providers" },
        { value: "10M+", label: "Patients served annually" },
        { value: "2,500+", label: "Team members worldwide" },
      ]} />

      <SplitBlock reversed eyebrow="Our story" title="Built by and for ambulatory care." body="Greenway was formed by bringing together pioneers in ambulatory health IT under one roof. Today the company is headquartered in Tampa with offices and team members across the US and India, supporting tens of thousands of providers in independent practices, health systems, FQHCs, and tribal health organizations." ctaLabel="Read our awards & certifications" ctaHref="/about/awards-and-certifications" />

      <section className="section-pad bg-secondary/40">
        <div className="container-x">
          <h2 className="text-3xl font-bold md:text-4xl">Learn more about Greenway</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Get to know the people, partners, and standards behind the platform.</p>
          <div className="mt-10">
            <CardLinkGrid items={[
              { title: "Leadership", href: "/leadership", description: "Meet the team driving Greenway's strategy and product vision." },
              { title: "Community & Culture", href: "/community-culture", description: "How we work, what we value, and how we show up for the communities we serve." },
              { title: "Awards & Certifications", href: "/about/awards-and-certifications", description: "Independent recognition from KLAS, Frost & Sullivan, Black Book, and others." },
              { title: "Vista Equity Partners", href: "/about-us/vista-equity-partners", description: "Our investment partner and what it means for our customers." },
              { title: "Investor Relations", href: "/investor-relations", description: "Company information for investors and partners." },
              { title: "Careers", href: "/careers", description: "Help us build the future of ambulatory care." },
            ]} />
          </div>
        </div>
      </section>

      <CtaBanner title="Want to see how Greenway fits your practice?" primaryCta={{ label: "Request a demo", href: "/contact" }} secondaryCta={{ label: "Browse solutions", href: "/ehr-practice-management-rcm-software" }} />
    </Layout>
  );
}
