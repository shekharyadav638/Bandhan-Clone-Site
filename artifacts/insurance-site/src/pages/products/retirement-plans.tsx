import React from "react";
import termHero from "@/assets/term-hero.png";
import { Link } from "wouter";

export default function RetirementPlans() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[400px] flex items-center bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={termHero} alt="Elderly couple relaxing" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Suraksha <span className="text-primary">Golden Years</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure a steady income for your retirement while keeping your family protected today.
            </p>
            <div className="pt-4">
              <Link href="/customer-service/contact-us" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Plan Your Retirement
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-6">Key Benefits</h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Guaranteed Regular Income</strong>
                <span className="text-muted-foreground text-sm">Receive a fixed payout post-retirement to maintain your lifestyle independently.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Life Cover Included</strong>
                <span className="text-muted-foreground text-sm">Ensures financial protection for your spouse in case of unfortunate events during the accumulation phase.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Tax Advantages</strong>
                <span className="text-muted-foreground text-sm">Save tax on premiums paid under Section 80C and on payouts under Section 10(10D) as per prevailing laws.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}