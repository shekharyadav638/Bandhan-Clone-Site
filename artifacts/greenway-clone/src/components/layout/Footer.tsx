import { Link } from "wouter";
import { footerColumns } from "@/data/nav";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--brand-dark))] text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--brand))] text-white font-bold">G</div>
              <span className="text-xl font-bold text-white">Greenway Health</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              Ambulatory health IT software and services that help independent practices deliver better care, run smoother operations, and stay paid.
            </p>
            <div className="mt-6 text-sm text-white/70 space-y-1">
              <p>4301 W Boy Scout Blvd, Suite 800</p>
              <p>Tampa, FL 33607</p>
              <p className="pt-2"><a href="tel:18772422443" className="text-white hover:underline">877-242-2443</a></p>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/greenway-health/", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com/GreenwayHealth", label: "Twitter" },
                { Icon: Facebook, href: "https://www.facebook.com/GreenwayHealthLLC/", label: "Facebook" },
                { Icon: Youtube, href: "https://www.youtube.com/user/GreenwayMedical", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-[hsl(var(--brand-dark))]" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/70 hover:text-white no-underline">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Greenway Health, LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`${import.meta.env.BASE_URL}sitemap.xml`} className="text-white/60 hover:text-white no-underline">Sitemap</a>
            <Link href="/privacy" className="text-white/60 hover:text-white no-underline">Privacy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white no-underline">Terms</Link>
            <Link href="/cookie-policy" className="text-white/60 hover:text-white no-underline">Cookies</Link>
            <Link href="/consumer-privacy-request" className="text-white/60 hover:text-white no-underline">Do Not Sell My Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
