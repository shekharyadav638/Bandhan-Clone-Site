import React from "react";
import { Link } from "wouter";
import homeHero from "@/assets/home-hero.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[600px] flex items-center bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={homeHero} alt="Happy Indian family at sunset" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Secure their tomorrow, <span className="text-primary">today.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Life is unpredictable, but your family's financial security doesn't have to be. Suraksha Life provides accessible, straightforward life insurance for middle-class Indian families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Explore Plans
              </Link>
              <Link href="/customer-service/contact-us" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Protection tailored for you</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We offer a range of plans to suit different life stages and goals. Find the perfect fit for your family.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Term Insurance</CardTitle>
                <CardDescription>Pure protection at affordable rates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Secure a large life cover with minimal premium outlays. Ensure your family's lifestyle remains uninterrupted.</p>
                <Link href="/products/term-insurance" className="text-primary font-medium hover:underline text-sm">Learn more →</Link>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Savings Plans</CardTitle>
                <CardDescription>Protection with guaranteed returns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Build a corpus for your future goals while enjoying life insurance coverage throughout the policy term.</p>
                <Link href="/products/savings-plans" className="text-primary font-medium hover:underline text-sm">Learn more →</Link>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Retirement Plans</CardTitle>
                <CardDescription>Secure your golden years</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Plan for a comfortable retirement with regular pension income and life cover to protect your spouse.</p>
                <Link href="/products/retirement-plans" className="text-primary font-medium hover:underline text-sm">Learn more →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Why choose Suraksha Life?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">99.4%</div>
              <div className="text-sm font-medium text-foreground">Claim Settlement Ratio</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-foreground">Customer Support</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15M+</div>
              <div className="text-sm font-medium text-foreground">Families Protected</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm font-medium text-foreground">Branches Nationwide</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}