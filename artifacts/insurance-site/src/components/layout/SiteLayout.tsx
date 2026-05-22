import React from "react";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-serif">S</div>
          <span className="font-serif font-bold text-xl text-primary tracking-tight">Suraksha Life</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about-us" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">Products</Link>
          <Link href="/claims" className="text-sm font-medium hover:text-primary transition-colors">Claims</Link>
          <Link href="/customer-service" className="text-sm font-medium hover:text-primary transition-colors">Service</Link>
          <Link href="/careers" className="text-sm font-medium hover:text-primary transition-colors">Careers</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/customer-service/premium-payment" className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow hover:bg-secondary/90 transition-colors">
            Pay Premium
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-serif">S</div>
              <span className="font-serif font-bold text-xl text-primary tracking-tight">Suraksha Life</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Protecting families across India with thoughtful, accessible life insurance and financial planning solutions.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>IRDAI Registration No. 123</p>
              <p>CIN: U12345MH2024PLC678901</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about-us" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/about-us/leadership" className="hover:text-primary">Leadership</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/investor-relations" className="hover:text-primary">Investors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Products</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/products/term-insurance" className="hover:text-primary">Term Plans</Link></li>
              <li><Link href="/products/savings-plans" className="hover:text-primary">Savings</Link></li>
              <li><Link href="/products/child-plans" className="hover:text-primary">Child Plans</Link></li>
              <li><Link href="/products/retirement-plans" className="hover:text-primary">Retirement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/claims" className="hover:text-primary">Claims</Link></li>
              <li><Link href="/customer-service/contact-us" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/customer-service/premium-payment" className="hover:text-primary">Pay Premium</Link></li>
              <li><Link href="/sitemap" className="hover:text-primary">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Suraksha Life Insurance Co. Ltd. All rights reserved. This is a fictional entity for demonstration.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
