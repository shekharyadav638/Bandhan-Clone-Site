import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function Hero({
  eyebrow, title, subtitle, primaryCta, secondaryCta, dark = false, image,
}: {
  eyebrow?: string; title: string; subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean; image?: string;
}) {
  return (
    <section className={dark ? "bg-[hsl(var(--brand-dark))] text-white" : "bg-gradient-to-br from-[hsl(var(--brand-soft))] via-white to-white"}>
      <div className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          {eyebrow && <p className={`eyebrow mb-4 ${dark ? "text-[hsl(var(--brand))]" : ""}`}>{eyebrow}</p>}
          <h1 className={`text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl ${dark ? "text-white" : ""}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-[hsl(var(--brand-deep))]"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && <Link href={primaryCta.href} className="btn-primary">{primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>}
            {secondaryCta && (
              <Link href={secondaryCta.href} className={dark ? "btn-ghost-dark" : "btn-outline"}>
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(161_60%_48%)] shadow-2xl">
            {image ? (
              <img src={image} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-10">
                <svg viewBox="0 0 200 200" className="h-full w-full text-white/80">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#grid)" />
                  <circle cx="100" cy="100" r="60" fill="white" fillOpacity="0.15" />
                  <path d="M70 100 L90 120 L130 80" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-2xl bg-white shadow-xl md:flex items-center justify-center p-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-[hsl(var(--brand))]">75K+</div>
              <div className="text-xs text-muted-foreground">Providers served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogoStrip() {
  const logos = ["KLAS", "Frost & Sullivan", "Black Book", "HIMSS", "ONC Certified", "Censinet"];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container-x py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Recognized by leading healthcare research and industry organizations
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-lg font-bold text-[hsl(var(--brand-deep))]/60">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  eyebrow, title, subtitle, features,
}: {
  eyebrow?: string; title: string; subtitle?: string;
  features: { icon?: ReactNode; title: string; description: string; href?: string }[];
}) {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:border-[hsl(var(--brand))]/30 hover:shadow-lg">
              {f.icon && <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand))]">{f.icon}</div>}
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[hsl(var(--brand-deep))]">{f.description}</p>
              {f.href && (
                <Link href={f.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand))] no-underline group-hover:underline">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="bg-[hsl(var(--brand-dark))] text-white">
      <div className="container-x grid gap-8 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--brand))] md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonial({ quote, author, role, practice }: { quote: string; author: string; role: string; practice: string }) {
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm md:p-14">
          <svg className="h-10 w-10 text-[hsl(var(--brand))]" viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 6C5.8 6 3 8.8 3 12.2v5.6h6.2v-5.6H5.5c.2-1.8 1.7-3.2 3.7-3.2V6zm11 0c-3.4 0-6.2 2.8-6.2 6.2v5.6h6.2v-5.6h-3.7c.2-1.8 1.7-3.2 3.7-3.2V6z" /></svg>
          <p className="mt-6 text-xl leading-relaxed text-[hsl(var(--brand-dark))] md:text-2xl">"{quote}"</p>
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--brand-soft))] font-bold text-[hsl(var(--brand))]">
              {author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="font-bold">{author}</p>
              <p className="text-sm text-muted-foreground">{role}, {practice}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({ title, subtitle, primaryCta, secondaryCta }: {
  title: string; subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(161_60%_38%)] text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={primaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[hsl(var(--brand))] no-underline hover:bg-white/90">
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryCta && <Link href={secondaryCta.href} className="btn-ghost-dark">{secondaryCta.label}</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-secondary/30">
      <div className="container-x py-3 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {it.href ? <Link href={it.href} className="no-underline hover:text-[hsl(var(--brand))]">{it.label}</Link> : <span className="text-[hsl(var(--brand-dark))]">{it.label}</span>}
              {i < items.length - 1 && <span className="text-muted-foreground">/</span>}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-soft))]">
            <Check className="h-3 w-3 text-[hsl(var(--brand))]" />
          </span>
          <span className="text-[hsl(var(--brand-deep))]">{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function SplitBlock({
  eyebrow, title, body, items, ctaLabel, ctaHref, reversed,
}: {
  eyebrow?: string; title: string; body: string; items?: string[];
  ctaLabel?: string; ctaHref?: string; reversed?: boolean;
}) {
  return (
    <section className="section-pad">
      <div className={`container-x grid gap-12 lg:grid-cols-2 lg:items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-5 text-lg text-[hsl(var(--brand-deep))]">{body}</p>
          {items && <div className="mt-7"><CheckList items={items} /></div>}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="btn-outline mt-8">{ctaLabel}</Link>
          )}
        </div>
        <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-[hsl(var(--brand-soft))] to-white p-2 shadow-inner">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand))]/15 to-[hsl(var(--brand))]/5">
            <svg viewBox="0 0 120 120" className="h-2/3 w-2/3 text-[hsl(var(--brand))]">
              <circle cx="60" cy="60" r="50" fill="currentColor" fillOpacity="0.1" />
              <circle cx="60" cy="60" r="30" fill="currentColor" fillOpacity="0.2" />
              <circle cx="60" cy="60" r="12" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, subtitle, dark = true }: { eyebrow?: string; title: string; subtitle?: string; dark?: boolean }) {
  return (
    <section className={dark ? "bg-[hsl(var(--brand-dark))] text-white" : "bg-secondary/40"}>
      <div className="container-x py-16 md:py-24">
        {eyebrow && <p className={`eyebrow mb-4 ${dark ? "text-[hsl(var(--brand))]" : ""}`}>{eyebrow}</p>}
        <h1 className={`max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl ${dark ? "text-white" : ""}`}>{title}</h1>
        {subtitle && <p className={`mt-5 max-w-3xl text-lg ${dark ? "text-white/80" : "text-muted-foreground"}`}>{subtitle}</p>}
      </div>
    </section>
  );
}

export function CardLinkGrid({ items, columns = 3 }: { items: { title: string; href: string; description?: string }[]; columns?: 2 | 3 | 4 }) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`grid gap-5 ${cols}`}>
      {items.map((i) => (
        <Link key={i.href} href={i.href} className="group block rounded-xl border border-border bg-white p-6 no-underline transition hover:-translate-y-1 hover:border-[hsl(var(--brand))]/40 hover:shadow-lg">
          <h3 className="text-base font-bold text-[hsl(var(--brand-dark))] group-hover:text-[hsl(var(--brand))]">{i.title}</h3>
          {i.description && <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{i.description}</p>}
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--brand))]">Read more <ArrowRight className="h-3 w-3" /></span>
        </Link>
      ))}
    </div>
  );
}
