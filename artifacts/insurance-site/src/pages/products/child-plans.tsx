import React from "react";
import termHero from "@/assets/term-hero.png";
import { Link } from "wouter";

export default function ChildPlans() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[400px] flex items-center bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={termHero} alt="Child education" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Suraksha <span className="text-primary">Vidya Protect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ensure nothing comes between your child and their dreams, even if you're not around.
            </p>
            <div className="pt-4">
              <Link href="/customer-service/contact-us" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Calculate Needs
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
                <strong className="block text-foreground">Premium Waiver Benefit</strong>
                <span className="text-muted-foreground text-sm">In case of the parent's demise, all future premiums are waived off and paid by us, ensuring the fund grows uninterrupted.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Milestone Payouts</strong>
                <span className="text-muted-foreground text-sm">Get funds exactly when needed—for higher education, college admission, or professional courses.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              <div>
                <strong className="block text-foreground">Immediate Financial Support</strong>
                <span className="text-muted-foreground text-sm">A lump sum death benefit is paid immediately to the family to manage sudden expenses.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}