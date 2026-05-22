import { Layout } from "@/components/layout/Layout";
import { useLocation, Link } from "wouter";
import { Breadcrumbs, PageHeader, SplitBlock, CtaBanner, CardLinkGrid } from "@/components/sections/Sections";
import { titleFromPath, humanizeSlug } from "@/lib/utils";
import { PAGE_CONTENT, LEADERSHIP_BIOS } from "@/data/page-content";
import sitemapData from "@/data/sitemap-inventory.json";

const data = sitemapData as { all: string[] };

function deriveContent(path: string, title: string) {
  const explicit = PAGE_CONTENT[path];
  if (explicit) {
    return {
      eyebrow: explicit.eyebrow ?? "Greenway Health",
      title: explicit.title ?? title,
      subtitle: explicit.subtitle,
      body: explicit.body,
      items: explicit.items,
    };
  }

  // Slug-derived heuristics keep generic pages from looking identical.
  if (path.startsWith("/team/")) {
    const name = humanizeSlug(path.replace(/^\/team\//, ""));
    return {
      eyebrow: "Meet the team",
      title: name,
      subtitle: `${name} is part of the team behind Greenway Health.`,
      body: `Greenway is built by people who care about ambulatory practices — clinicians, engineers, designers, services experts, and customer-facing teammates. ${name} contributes to that work day-to-day, alongside teammates across our offices in Tampa, Carrollton, and Bangalore.`,
      items: ["Multi-disciplinary teams across product, services, and support", "Hubs in Tampa, Carrollton, and Bangalore plus remote teammates", "A bias toward shipping things customers can feel"],
    };
  }
  if (path.startsWith("/leadership/")) {
    const slug = path.replace(/^\/leadership\//, "");
    const name = humanizeSlug(slug);
    const bio = LEADERSHIP_BIOS[slug];
    return {
      eyebrow: "Leadership",
      title: name,
      subtitle: bio?.role ?? "Greenway Health leadership",
      body: bio?.bio ?? `${name} is part of the Greenway Health leadership team.`,
    };
  }
  if (path.includes("/events")) {
    return {
      eyebrow: "Events",
      title,
      subtitle: `Find us at ${title.toLowerCase()} — connect with the Greenway team and see the platform in action.`,
      body: `Greenway shows up at the conferences, user groups, and community events that matter to ambulatory practices. ${title} is one of them. Stop by to talk through your practice's challenges and see how Greenway customers are working through similar ones.`,
    };
  }
  if (path.startsWith("/covid-")) {
    return {
      eyebrow: "Resources",
      title,
      subtitle: "Resources Greenway shared during the COVID-19 response to help practices keep delivering care.",
      body: `${title} is part of the body of guidance Greenway published to help ambulatory practices navigate the COVID-19 response — operational, clinical, and financial.`,
    };
  }
  if (path.includes("award")) {
    return {
      eyebrow: "Awards",
      title,
      subtitle: `${title} — recognition that reflects the work our team and customers do every day.`,
      body: `Awards are a useful external signal — they capture what analysts and customers see when they evaluate Greenway against the field. ${title} is one of those signals.`,
    };
  }
  if (path.startsWith("/ignite") || path.startsWith("/preparing-financial") || path.startsWith("/revenue-cycle-partnership")) {
    return {
      eyebrow: "Financial",
      title,
      subtitle: `${title} — a Greenway perspective on the financial health of independent practices.`,
      body: `Healthy practices are made of many decisions. ${title} is part of Greenway's ongoing work to surface what's actually moving the needle inside ambulatory practices today, and what leaders can do about it.`,
    };
  }
  if (path.includes("greenway-revenue-services") || path.includes("ehr-quote")) {
    return {
      eyebrow: "Greenway Revenue Services",
      title,
      subtitle: `${title} — part of the way Greenway Revenue Services supports ambulatory practices end-to-end.`,
      body: `Greenway Revenue Services pairs software with a US-based team that owns the revenue cycle work — from charge capture through denial follow-up — with weekly visibility into the KPIs that matter most.`,
    };
  }

  // Default: section-derived paraphrased content
  const parent = "/" + path.split("/").filter(Boolean).slice(0, -1).join("/");
  const parentLabel = parent === "" ? "Greenway Health" : titleFromPath(parent);
  return {
    eyebrow: parentLabel,
    title,
    subtitle: `${title} is part of Greenway Health's ${parentLabel.toLowerCase()} offering — built to support ambulatory practices with software, services, and people who have lived the work.`,
    body: `Greenway Health partners with thousands of ambulatory practices across the country. ${title} reflects that ongoing work — bringing software, services, and specialty expertise together in a way that's practical for practices to adopt and operate.`,
    items: [
      "Built around the realities of ambulatory practice",
      "Integrated with the broader Greenway platform",
      "Backed by US-based services and support",
      "Configurable to your specialty, scale, and workflow",
    ],
  };
}

export default function GenericPage() {
  const [location] = useLocation();
  const title = titleFromPath(location);
  const segments = location.split("/").filter(Boolean);
  const crumbs: { label: string; href?: string }[] = [{ label: "Home", href: "/" }];
  let acc = "";
  segments.slice(0, -1).forEach((s) => {
    acc += "/" + s;
    crumbs.push({ label: titleFromPath(acc), href: acc });
  });
  crumbs.push({ label: title });

  const c = deriveContent(location, title);
  const sectionRoot = "/" + (segments[0] ?? "");
  const related = data.all
    .filter((p) => p !== location && p.startsWith(sectionRoot + "/"))
    .slice(0, 6);

  return (
    <Layout title={c.title} description={c.subtitle}>
      <Breadcrumbs items={crumbs} />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <SplitBlock
        eyebrow="Overview"
        title={`About ${c.title}`}
        body={c.body}
        items={c.items ?? [
          "Built around the realities of ambulatory practice",
          "Integrated with the broader Greenway platform",
          "Backed by US-based services and support",
          "Configurable to your specialty, scale, and workflow",
        ]}
        ctaLabel="Talk to our team"
        ctaHref="/contact"
      />
      {related.length > 0 && (
        <section className="section-pad bg-secondary/40">
          <div className="container-x">
            <h2 className="text-2xl font-bold mb-6">More from {titleFromPath(sectionRoot)}</h2>
            <CardLinkGrid items={related.map((p) => ({ title: titleFromPath(p), href: p }))} />
            <div className="mt-8">
              <Link href={sectionRoot} className="btn-outline">See all of {titleFromPath(sectionRoot)}</Link>
            </div>
          </div>
        </section>
      )}
      <CtaBanner title={`See how ${c.title} fits your practice.`} primaryCta={{ label: "Request a demo", href: "/contact" }} />
    </Layout>
  );
}
