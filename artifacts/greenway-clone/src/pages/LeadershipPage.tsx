import { Layout } from "@/components/layout/Layout";
import { useLocation, Link } from "wouter";
import { Breadcrumbs, PageHeader, CardLinkGrid, CtaBanner } from "@/components/sections/Sections";
import { humanizeSlug } from "@/lib/utils";
import { LEADERSHIP_BIOS } from "@/data/page-content";

const LEADERS = Object.keys(LEADERSHIP_BIOS);

export default function LeadershipPage() {
  const [location] = useLocation();
  if (location === "/leadership") {
    return (
      <Layout title="Leadership">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }, { label: "Leadership" }]} />
        <PageHeader eyebrow="About" title="Leadership" subtitle="The team driving Greenway's strategy, product vision, and customer outcomes." />
        <section className="section-pad">
          <div className="container-x">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LEADERS.map((slug) => {
                const name = humanizeSlug(slug);
                const b = LEADERSHIP_BIOS[slug];
                return (
                  <Link key={slug} href={`/leadership/${slug}`} className="group block rounded-2xl border border-border bg-white p-7 no-underline transition hover:-translate-y-1 hover:border-[hsl(var(--brand))]/40 hover:shadow-lg">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(var(--brand-soft))] text-2xl font-bold text-[hsl(var(--brand))]">
                      {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-[hsl(var(--brand))]">{name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[hsl(var(--brand))]">{b.role}</p>
                    <p className="mt-3 line-clamp-3 text-sm text-[hsl(var(--brand-deep))]">{b.bio}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const slug = location.replace(/^\/leadership\//, "");
  const name = humanizeSlug(slug);
  const bio = LEADERSHIP_BIOS[slug];
  const role = bio?.role ?? "Greenway Health leadership";
  const body = bio?.bio ?? `${name} is part of the Greenway Health leadership team.`;

  return (
    <Layout title={`${name} — Leadership`}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }, { label: "Leadership", href: "/leadership" }, { label: name }]} />
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[hsl(var(--brand-soft))] text-5xl font-bold text-[hsl(var(--brand))]">
            {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <p className="eyebrow mb-2">Leadership</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{name}</h1>
            <p className="mt-3 text-lg font-semibold text-[hsl(var(--brand))]">{role}</p>
            <p className="mt-5 text-lg text-[hsl(var(--brand-deep))]">{body}</p>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x">
          <h2 className="text-2xl font-bold mb-6">More from Greenway leadership</h2>
          <CardLinkGrid items={LEADERS.filter((s) => s !== slug).map((s) => ({ title: humanizeSlug(s), href: `/leadership/${s}`, description: LEADERSHIP_BIOS[s].role }))} />
        </div>
      </section>
      <CtaBanner title="Want to learn more about Greenway?" primaryCta={{ label: "About Greenway", href: "/about-us" }} secondaryCta={{ label: "Contact us", href: "/contact" }} />
    </Layout>
  );
}
