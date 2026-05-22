import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { megaMenu } from "@/data/nav";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? "shadow-md" : "border-b border-border"}`}>
      <div className="bg-[hsl(var(--brand-dark))] text-white">
        <div className="container-x flex h-9 items-center justify-end gap-6 text-xs">
          <Link href="/client-support" className="text-white/80 hover:text-white">Client Support</Link>
          <Link href="/greenway-login" className="text-white/80 hover:text-white">Greenway Login</Link>
          <a href="tel:18772422443" className="text-white/80 hover:text-white">877-242-2443</a>
        </div>
      </div>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--brand))] text-white font-bold">G</div>
          <span className="text-xl font-bold tracking-tight text-[hsl(var(--brand-dark))]">
            Greenway <span className="text-[hsl(var(--brand))]">Health</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
          {megaMenu.map((item) => (
            <div key={item.label} className="relative">
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand))] transition"
                onMouseEnter={() => setOpen(item.label)}
                onFocus={() => setOpen(item.label)}
                onClick={() => setOpen(open === item.label ? null : item.label)}
              >
                {item.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${open === item.label ? "rotate-180" : ""}`} />
              </button>
              {open === item.label && (
                <div className="fixed left-0 right-0 top-[116px] z-50 mt-0 border-t border-border bg-white shadow-xl animate-in fade-in slide-in-from-top-2">
                  <div className="container-x grid gap-10 py-10 lg:grid-cols-[2fr_1fr]">
                    <div className={`grid gap-10 ${item.groups[0].links.length > 10 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                      {item.groups.map((g) => (
                        <div key={g.heading}>
                          <h4 className="eyebrow mb-4">{g.heading}</h4>
                          <ul className="space-y-2.5">
                            {g.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} className="block text-sm font-medium text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand))] no-underline">
                                  {l.label}
                                  {l.description && (
                                    <span className="mt-0.5 block text-xs font-normal text-muted-foreground">{l.description}</span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {item.feature && (
                      <div className="rounded-2xl bg-[hsl(var(--brand-dark))] p-7 text-white">
                        <div className="eyebrow text-[hsl(var(--brand))] mb-3">Featured</div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.feature.title}</h3>
                        <p className="text-sm text-white/80 mb-5">{item.feature.copy}</p>
                        <Link href={item.feature.href} className="btn-ghost-dark text-sm">{item.feature.cta}</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full text-[hsl(var(--brand-dark))] hover:bg-secondary" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm">Request a Demo</Link>
          <button className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md text-[hsl(var(--brand-dark))]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 max-h-[80vh] overflow-y-auto">
            {megaMenu.map((item) => (
              <details key={item.label} className="border-b border-border py-2">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-semibold text-[hsl(var(--brand-dark))]">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="space-y-4 pb-3 pl-3">
                  {item.groups.map((g) => (
                    <div key={g.heading}>
                      <p className="eyebrow mb-2">{g.heading}</p>
                      <ul className="space-y-1.5">
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="block text-sm text-[hsl(var(--brand-deep))] no-underline">{l.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full">Request a Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
