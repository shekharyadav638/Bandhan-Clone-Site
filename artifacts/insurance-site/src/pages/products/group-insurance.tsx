import React from "react";
import termHero from "@/assets/term-hero.png";
import { Link } from "wouter";

export default function GroupInsurance() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[400px] flex items-center bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={termHero} alt="Corporate team" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Suraksha <span className="text-primary">Corporate Shield</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive group term life insurance to protect your most valuable asset—your employees.
            </p>
            <div className="pt-4">
              <Link href="/customer-service/contact-us" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Contact Corporate Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-6">Key Benefits for Employers</h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Talent Retention</strong>
                <span className="text-muted-foreground text-sm">Enhance your employee benefits package to attract and retain top talent.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Tax Benefits</strong>
                <span className="text-muted-foreground text-sm">Premiums paid by the employer are treated as business expenses under the Income Tax Act.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Easy Administration</strong>
                <span className="text-muted-foreground text-sm">Simple onboarding process with minimal documentation and a dedicated corporate helpdesk.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}