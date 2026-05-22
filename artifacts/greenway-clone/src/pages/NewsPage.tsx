import { Layout } from "@/components/layout/Layout";
import { useLocation, Link } from "wouter";
import { Breadcrumbs, PageHeader, CardLinkGrid, CtaBanner } from "@/components/sections/Sections";
import { titleFromPath } from "@/lib/utils";
import sitemapData from "@/data/sitemap-inventory.json";
import { Calendar, Newspaper } from "lucide-react";

const data = sitemapData as { all: string[]; cats: Record<string, string[]> };

export default function NewsPage() {
  const [location] = useLocation();
  if (location === "/news") {
    const items = (data.cats.news || []).filter((p) => p !== "/news");
    return (
      <Layout title="News & Press">
        <PageHeader eyebrow="Newsroom" title="Greenway in the news." subtitle="Press releases, leadership perspectives, and industry recognition from across Greenway Health." />
        <section className="section-pad">
          <div className="container-x">
            <p className="text-sm text-muted-foreground mb-6">{items.length} press items</p>
            <CardLinkGrid items={items.map((p) => ({ title: titleFromPath(p), href: p, description: "Press release from Greenway Health." }))} />
          </div>
        </section>
      </Layout>
    );
  }

  const title = titleFromPath(location);
  const others = (data.cats.news || []).filter((p) => p !== location && p !== "/news").slice(0, 5);
  return (
    <Layout title={title}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Newsroom", href: "/news" }, { label: title }]} />
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-x py-12 md:py-16">
          <p className="eyebrow mb-3 inline-flex items-center gap-2"><Newspaper className="h-3.5 w-3.5" /> Press release</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">{title}</h1>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" /> Greenway Health</div>
        </div>
      </section>
      <article className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="prose-greenway space-y-5">
            <p className="text-xl text-[hsl(var(--brand-deep))] leading-relaxed">TAMPA, FL — Greenway Health announced today an update related to {title.toLowerCase()}, continuing the company's ongoing work to deliver software and services that help ambulatory practices thrive.</p>
            <p>"Our customers tell us what they need, and we keep building toward that," said a Greenway spokesperson. "This is another step in the work we're doing alongside thousands of ambulatory practices across the country."</p>
            <h2 className="text-2xl font-bold pt-3">About Greenway Health</h2>
            <p>Greenway Health is a leading provider of ambulatory health information technology and services. For more than three decades, the company has supported tens of thousands of healthcare providers in delivering better care while running more efficient practices. To learn more, visit <Link href="/" className="text-[hsl(var(--brand))]">our homepage</Link>.</p>
            <h2 className="text-2xl font-bold pt-3">Media contact</h2>
            <p>For media inquiries, contact the Greenway Health communications team via <Link href="/contact" className="text-[hsl(var(--brand))]">our contact page</Link>.</p>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold mb-3">More from the newsroom</h3>
              <ul className="space-y-2 text-sm">
                {others.map((p) => <li key={p}><Link href={p} className="no-underline hover:text-[hsl(var(--brand))]">{titleFromPath(p)}</Link></li>)}
              </ul>
              <Link href="/news" className="mt-4 inline-block text-sm font-semibold text-[hsl(var(--brand))]">All news →</Link>
            </div>
          </aside>
        </div>
      </article>
      <CtaBanner title="Want to talk with Greenway?" primaryCta={{ label: "Contact our team", href: "/contact" }} />
    </Layout>
  );
}
