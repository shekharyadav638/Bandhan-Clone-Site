import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import investorHero from "@/assets/investor-hero.png";

export default function InvestorRelations() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[400px] flex items-center bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={investorHero} alt="Corporate building" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Investor <span className="text-primary">Relations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Creating long-term value for our shareholders through sustainable growth and robust governance.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex flex-wrap gap-8 justify-center text-sm font-medium">
          <div>NSE: SURAKSHA <span className="text-green-300 ml-2">▲ ₹1,245.50</span></div>
          <div>BSE: 543210 <span className="text-green-300 ml-2">▲ ₹1,245.25</span></div>
          <div className="text-primary-foreground/80 hidden sm:block">|</div>
          <div className="text-primary-foreground/80">Market Cap: ₹45,000 Cr</div>
        </div>
      </div>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle>Financial Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">View our latest quarterly and annual financial performance, investor presentations, and transcripts.</p>
              <Link href="/investor-relations/financials" className="text-primary font-medium text-sm hover:underline">View Financials →</Link>
            </CardContent>
          </Card>
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle>Annual Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Access comprehensive reports on our strategic direction, operational highlights, and financial statements.</p>
              <Link href="/investor-relations/annual-reports" className="text-primary font-medium text-sm hover:underline">Download Reports →</Link>
            </CardContent>
          </Card>
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle>Public Disclosures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Access statutory public disclosures, L-forms, and other regulatory filings as mandated by IRDAI.</p>
              <Link href="/investor-relations/disclosures" className="text-primary font-medium text-sm hover:underline">View Disclosures →</Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}