import { Layout } from "@/components/layout/Layout";
import { useLocation, Link } from "wouter";
import { Breadcrumbs, PageHeader, CardLinkGrid, CtaBanner } from "@/components/sections/Sections";
import { titleFromPath } from "@/lib/utils";
import sitemapData from "@/data/sitemap-inventory.json";
import { Calendar, Clock, Download, FileText, Tag } from "lucide-react";

const data = sitemapData as { all: string[]; cats: Record<string, string[]> };

const KNOWLEDGE_CATS: { label: string; path: string; cat: keyof typeof data.cats; description: string }[] = [
  { label: "Blog", path: "/knowledge-center/blog", cat: "blog", description: "Expert perspectives on ambulatory care, EHR, RCM, and the practice of medicine." },
  { label: "Case Studies", path: "/knowledge-center/case-study", cat: "caseStudy", description: "How real Greenway practices solved real challenges." },
  { label: "Success Stories", path: "/knowledge-center/success-story", cat: "successStory", description: "Customer wins, in their own words." },
  { label: "E-Books", path: "/knowledge-center/ebook", cat: "ebook", description: "Long-form guides on the issues facing ambulatory practices." },
  { label: "Brochures", path: "/knowledge-center/brochure", cat: "brochure", description: "Product and service overviews you can share with your team." },
  { label: "Benefit Overviews", path: "/knowledge-center/benefit-overview", cat: "benefitOverview", description: "Quick reads on the impact of Greenway solutions." },
  { label: "Infographics", path: "/knowledge-center/Infographic", cat: "infographic", description: "Visual takes on the trends shaping ambulatory care." },
  { label: "Webinars", path: "/knowledge-center/webinar-recording", cat: "webinar", description: "On-demand sessions from Greenway and industry experts." },
  { label: "Whitepapers", path: "/knowledge-center/whitepaper-1", cat: "whitepaper", description: "Research and analysis on healthcare IT topics." },
  { label: "Checklists", path: "/knowledge-center/checklists", cat: "checklist", description: "Step-by-step references for common practice initiatives." },
  { label: "Comparison Charts", path: "/knowledge-center/comparison-chart", cat: "comparison", description: "Side-by-side breakdowns to help you make informed decisions." },
  { label: "E-Magazines", path: "/knowledge-center/e-magazine", cat: "emagazine", description: "Curated reads on the state of ambulatory care." },
  { label: "Videos", path: "/knowledge-center/video", cat: "video", description: "Product tours, customer stories, and quick-hit explainers." },
];

function categoryLabel(p: string): { kind: string; cat?: typeof KNOWLEDGE_CATS[number] } {
  for (const k of KNOWLEDGE_CATS) {
    if (p.startsWith(k.path + "/") || p === k.path) return { kind: k.label, cat: k };
  }
  if (p.startsWith("/knowledge-center")) return { kind: "Resource" };
  return { kind: "Resource" };
}

export default function ResourcePage() {
  const [location] = useLocation();

  // Knowledge Center index
  if (location === "/knowledge-center") {
    return (
      <Layout title="Knowledge Center">
        <PageHeader eyebrow="Knowledge Center" title="Insights, guides, and tools for ambulatory practices." subtitle="Browse the full Greenway library — blogs, case studies, e-books, webinars, and more." />
        <section className="section-pad">
          <div className="container-x">
            <CardLinkGrid items={KNOWLEDGE_CATS.map((k) => ({ title: k.label, href: k.path, description: k.description }))} />
          </div>
        </section>
        <CtaBanner title="Looking for something specific?" primaryCta={{ label: "Contact our team", href: "/contact" }} />
      </Layout>
    );
  }

  // Category landing pages
  const matchedCat = KNOWLEDGE_CATS.find((k) => k.path === location);
  if (matchedCat) {
    const items = (data.cats[matchedCat.cat] || []).filter((p) => p !== matchedCat.path);
    return (
      <Layout title={matchedCat.label}>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Knowledge Center", href: "/knowledge-center" }, { label: matchedCat.label }]} />
        <PageHeader eyebrow="Knowledge Center" title={matchedCat.label} subtitle={matchedCat.description} dark={false} />
        <section className="section-pad">
          <div className="container-x">
            <p className="text-sm text-muted-foreground mb-6">{items.length} {matchedCat.label.toLowerCase()}</p>
            <CardLinkGrid items={items.map((p) => ({ title: titleFromPath(p), href: p, description: `${matchedCat.label} — ${titleFromPath(p)}.` }))} />
          </div>
        </section>
        <CtaBanner title="See how Greenway fits your practice." primaryCta={{ label: "Request a demo", href: "/contact" }} />
      </Layout>
    );
  }

  // Individual resource detail
  const title = titleFromPath(location);
  const { kind, cat } = categoryLabel(location);
  return (
    <Layout title={title}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Knowledge Center", href: "/knowledge-center" }, ...(cat ? [{ label: cat.label, href: cat.path }] : []), { label: title }]} />
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-x py-12 md:py-16">
          <p className="eyebrow mb-3 inline-flex items-center gap-2"><Tag className="h-3.5 w-3.5" /> {kind}</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">{title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Updated recently</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</span>
            <span className="inline-flex items-center gap-1.5"><FileText className="h-4 w-4" /> Greenway Health</span>
          </div>
        </div>
      </section>
      <article className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="prose-greenway space-y-5">
            <p className="text-xl text-[hsl(var(--brand-deep))] leading-relaxed">
              {title} — a Greenway {kind.toLowerCase()} that helps ambulatory practice leaders navigate the realities of today's healthcare landscape.
            </p>
            <h2 className="text-2xl font-bold pt-3">Why it matters</h2>
            <p>Independent ambulatory practices are operating under sustained pressure — clinical complexity is rising, administrative overhead keeps growing, and patient expectations have permanently shifted. This {kind.toLowerCase()} walks through the most important shifts and what practice leaders can do about them.</p>
            <h2 className="text-2xl font-bold pt-3">What you'll learn</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The forces reshaping ambulatory care this year and next</li>
              <li>Where most practices are leaving time, money, or quality on the table</li>
              <li>A practical framework for thinking about technology and services together</li>
              <li>How Greenway customers are addressing this in their own practices today</li>
            </ul>
            <h2 className="text-2xl font-bold pt-3">A practical lens</h2>
            <p>Rather than offering a generic prescription, this {kind.toLowerCase()} grounds the conversation in the operational realities of running an independent ambulatory practice — small staff, tight margins, real patients waiting in real rooms. The recommendations are deliberately implementable within those constraints.</p>
            <h2 className="text-2xl font-bold pt-3">Want a walkthrough?</h2>
            <p>If you'd like to dig deeper into any of the ideas here, a Greenway specialist can walk you through how other practices have applied them — and how the Greenway platform can help. <Link href="/contact" className="text-[hsl(var(--brand))]">Get in touch</Link> and we'll set up a short conversation.</p>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl bg-[hsl(var(--brand-dark))] p-6 text-white">
              <h3 className="font-bold text-white mb-2">Get the full resource</h3>
              <p className="text-sm text-white/80 mb-4">Tell us a little about yourself and we'll send a copy.</p>
              <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand))] px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-[hsl(161_86%_30%)]"><Download className="h-4 w-4" /> Request a copy</Link>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold mb-3">More {cat ? cat.label.toLowerCase() : "resources"}</h3>
              <ul className="space-y-2 text-sm">
                {(cat ? (data.cats[cat.cat] || []).filter((p) => p !== location).slice(0, 5) : []).map((p) => (
                  <li key={p}><Link href={p} className="no-underline hover:text-[hsl(var(--brand))]">{titleFromPath(p)}</Link></li>
                ))}
              </ul>
              <Link href={cat?.path || "/knowledge-center"} className="mt-4 inline-block text-sm font-semibold text-[hsl(var(--brand))]">See all →</Link>
            </div>
          </aside>
        </div>
      </article>
      <CtaBanner title="Ready to see Greenway in action?" primaryCta={{ label: "Request a demo", href: "/contact" }} />
    </Layout>
  );
}
