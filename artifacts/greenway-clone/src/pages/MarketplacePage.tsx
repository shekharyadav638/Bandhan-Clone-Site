import { Layout } from "@/components/layout/Layout";
import { useLocation, Link } from "wouter";
import { Breadcrumbs, PageHeader, Hero, FeatureGrid, CtaBanner, CardLinkGrid } from "@/components/sections/Sections";
import { titleFromPath } from "@/lib/utils";
import sitemapData from "@/data/sitemap-inventory.json";
import { Boxes, Handshake, MessagesSquare, Sparkles } from "lucide-react";

const data = sitemapData as { all: string[]; cats: Record<string, string[]> };

export default function MarketplacePage() {
  const [location] = useLocation();
  const title = titleFromPath(location);

  if (location === "/marketplace") {
    const partners = data.cats.marketplace.filter((p) => !["/marketplace", "/marketplace/about-marketplace", "/marketplace/become-a-partner", "/marketplace/marketplace-solution-request", "/marketplace/webinars"].includes(p));
    return (
      <Layout title="Greenway Marketplace">
        <PageHeader eyebrow="Marketplace" title="Extend your Greenway platform with curated partner solutions." subtitle="Discover vetted technology and service partners that integrate with Greenway to round out your clinical, financial, and patient experience workflows." />
        <FeatureGrid eyebrow="Why Marketplace" title="A network built for ambulatory practices." features={[
          { icon: <Boxes className="h-6 w-6" />, title: "Curated catalog", description: "Every partner is vetted for fit, security, and integration quality." },
          { icon: <Handshake className="h-6 w-6" />, title: "Pre-built integrations", description: "Skip the heavy lift — partners plug into Greenway out of the box." },
          { icon: <Sparkles className="h-6 w-6" />, title: "Real results", description: "Solutions chosen because they move the needle for real practices." },
          { icon: <MessagesSquare className="h-6 w-6" />, title: "One team to call", description: "Greenway helps coordinate adoption end-to-end." },
        ]} />
        <section className="section-pad bg-secondary/30">
          <div className="container-x">
            <h2 className="text-2xl font-bold mb-2">Browse Marketplace solutions</h2>
            <p className="text-muted-foreground mb-8">Search across our partner network.</p>
            <CardLinkGrid items={partners.map((p) => ({ title: titleFromPath(p), href: p }))} columns={3} />
          </div>
        </section>
        <section className="container-x section-pad">
          <h2 className="text-2xl font-bold mb-6">Become part of the network</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/marketplace/about-marketplace" className="rounded-2xl border border-border bg-white p-6 no-underline hover:shadow-md"><h3 className="font-bold mb-1">About Marketplace</h3><p className="text-sm text-muted-foreground">How the program works.</p></Link>
            <Link href="/marketplace/become-a-partner" className="rounded-2xl border border-border bg-white p-6 no-underline hover:shadow-md"><h3 className="font-bold mb-1">Become a Partner</h3><p className="text-sm text-muted-foreground">Apply to join the partner network.</p></Link>
            <Link href="/marketplace/marketplace-solution-request" className="rounded-2xl border border-border bg-white p-6 no-underline hover:shadow-md"><h3 className="font-bold mb-1">Request a Solution</h3><p className="text-sm text-muted-foreground">Tell us what you're looking for.</p></Link>
          </div>
        </section>
      </Layout>
    );
  }

  const isPartnerProfile = location.startsWith("/marketplace/partner/");
  return (
    <Layout title={title}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Marketplace", href: "/marketplace" }, ...(isPartnerProfile ? [{ label: "Partner Profile" }] : []), { label: title }]} />
      <Hero
        eyebrow={isPartnerProfile ? "Marketplace partner" : "Marketplace solution"}
        title={title}
        subtitle={`${title} is part of the Greenway Marketplace — a curated catalog of vetted technology and services that integrate with the Greenway platform.`}
        primaryCta={{ label: "Talk to our team", href: "/contact" }}
        secondaryCta={{ label: "Browse all of Marketplace", href: "/marketplace" }}
      />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-6 prose-greenway">
            <h2 className="text-2xl font-bold">About this solution</h2>
            <p>{title} integrates with the Greenway platform to streamline workflow and improve outcomes for ambulatory practices. As part of the Greenway Marketplace, it has been vetted for fit, security posture, and integration quality.</p>
            <h3 className="text-xl font-bold pt-3">What it does</h3>
            <p>Practices using {title} typically see improvements in operational efficiency, patient satisfaction, and revenue performance — depending on how the solution fits into their existing workflow. Reach out to learn how {title} could fit into your practice's day-to-day.</p>
            <h3 className="text-xl font-bold pt-3">How it works with Greenway</h3>
            <p>The integration is built and maintained by the partner team in coordination with Greenway, so you don't need to wire it up yourself. Greenway's services team can help coordinate adoption end-to-end.</p>
          </article>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h4 className="font-bold mb-3">Talk to Greenway about {title}</h4>
              <p className="text-sm text-muted-foreground mb-4">Get pricing, integration details, and a guided walkthrough.</p>
              <Link href="/contact" className="btn-primary w-full text-center">Request information</Link>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h4 className="font-bold mb-3">More from Marketplace</h4>
              <Link href="/marketplace" className="btn-outline w-full text-center">Browse all partners</Link>
            </div>
          </aside>
        </div>
      </section>
      <CtaBanner title={`Add ${title} to your Greenway platform.`} primaryCta={{ label: "Request information", href: "/contact" }} />
    </Layout>
  );
}
