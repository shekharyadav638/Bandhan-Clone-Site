import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/layout/SiteLayout";
import NotFound from "@/pages/not-found";

// Placeholder component for pages to be built
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-24 text-center">
    <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
    <p className="text-muted-foreground max-w-md mx-auto">This page is currently being updated. Please check back later.</p>
  </div>
);

const queryClient = new QueryClient();

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={() => <PlaceholderPage title="Welcome to Suraksha Life" />} />
        
        <Route path="/about-us" component={() => <PlaceholderPage title="About Us" />} />
        <Route path="/about-us/our-story" component={() => <PlaceholderPage title="Our Story" />} />
        <Route path="/about-us/leadership" component={() => <PlaceholderPage title="Leadership Team" />} />
        <Route path="/about-us/awards" component={() => <PlaceholderPage title="Awards & Recognition" />} />
        <Route path="/about-us/csr" component={() => <PlaceholderPage title="Corporate Social Responsibility" />} />
        
        <Route path="/products" component={() => <PlaceholderPage title="Our Products" />} />
        <Route path="/products/term-insurance" component={() => <PlaceholderPage title="Term Insurance" />} />
        <Route path="/products/savings-plans" component={() => <PlaceholderPage title="Savings Plans" />} />
        <Route path="/products/ulip" component={() => <PlaceholderPage title="Unit Linked Insurance Plans" />} />
        <Route path="/products/retirement-plans" component={() => <PlaceholderPage title="Retirement Plans" />} />
        <Route path="/products/child-plans" component={() => <PlaceholderPage title="Child Education Plans" />} />
        <Route path="/products/group-insurance" component={() => <PlaceholderPage title="Group Insurance" />} />
        
        <Route path="/claims" component={() => <PlaceholderPage title="Claims Overview" />} />
        <Route path="/claims/how-to-claim" component={() => <PlaceholderPage title="How to Claim" />} />
        <Route path="/claims/claim-forms" component={() => <PlaceholderPage title="Claim Forms" />} />
        <Route path="/claims/claim-status" component={() => <PlaceholderPage title="Track Claim Status" />} />
        
        <Route path="/customer-service" component={() => <PlaceholderPage title="Customer Service" />} />
        <Route path="/customer-service/contact-us" component={() => <PlaceholderPage title="Contact Us" />} />
        <Route path="/customer-service/faqs" component={() => <PlaceholderPage title="FAQs" />} />
        <Route path="/customer-service/grievance-redressal" component={() => <PlaceholderPage title="Grievance Redressal" />} />
        <Route path="/customer-service/downloads" component={() => <PlaceholderPage title="Downloads" />} />
        <Route path="/customer-service/premium-payment" component={() => <PlaceholderPage title="Premium Payment" />} />
        
        <Route path="/careers" component={() => <PlaceholderPage title="Careers" />} />
        <Route path="/careers/life-at-suraksha" component={() => <PlaceholderPage title="Life at Suraksha" />} />
        
        <Route path="/blog" component={() => <PlaceholderPage title="Blog" />} />
        <Route path="/blog/:slug" component={() => <PlaceholderPage title="Blog Post" />} />
        
        <Route path="/investor-relations" component={() => <PlaceholderPage title="Investor Relations" />} />
        <Route path="/investor-relations/financials" component={() => <PlaceholderPage title="Financials" />} />
        <Route path="/investor-relations/annual-reports" component={() => <PlaceholderPage title="Annual Reports" />} />
        <Route path="/investor-relations/disclosures" component={() => <PlaceholderPage title="Disclosures" />} />
        
        <Route path="/sitemap" component={() => <PlaceholderPage title="Sitemap" />} />

        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
