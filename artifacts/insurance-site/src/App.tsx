import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/layout/SiteLayout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import AboutUs from "@/pages/about-us/index";
import OurStory from "@/pages/about-us/our-story";
import Leadership from "@/pages/about-us/leadership";
import Awards from "@/pages/about-us/awards";
import CSR from "@/pages/about-us/csr";

import Products from "@/pages/products/index";
import TermInsurance from "@/pages/products/term-insurance";
import SavingsPlans from "@/pages/products/savings-plans";
import ULIP from "@/pages/products/ulip";
import RetirementPlans from "@/pages/products/retirement-plans";
import ChildPlans from "@/pages/products/child-plans";
import GroupInsurance from "@/pages/products/group-insurance";

import Claims from "@/pages/claims/index";
import HowToClaim from "@/pages/claims/how-to-claim";
import ClaimForms from "@/pages/claims/claim-forms";
import ClaimStatus from "@/pages/claims/claim-status";

import CustomerService from "@/pages/customer-service/index";
import ContactUs from "@/pages/customer-service/contact-us";
import FAQs from "@/pages/customer-service/faqs";
import GrievanceRedressal from "@/pages/customer-service/grievance-redressal";
import Downloads from "@/pages/customer-service/downloads";
import PremiumPayment from "@/pages/customer-service/premium-payment";

import Careers from "@/pages/careers/index";
import LifeAtSuraksha from "@/pages/careers/life-at-suraksha";

import BlogList from "@/pages/blog/index";
import BlogPost from "@/pages/blog/[slug]";

import InvestorRelations from "@/pages/investor-relations/index";
import Financials from "@/pages/investor-relations/financials";
import AnnualReports from "@/pages/investor-relations/annual-reports";
import Disclosures from "@/pages/investor-relations/disclosures";

import Sitemap from "@/pages/sitemap";

const queryClient = new QueryClient();

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        
        <Route path="/about-us" component={AboutUs} />
        <Route path="/about-us/our-story" component={OurStory} />
        <Route path="/about-us/leadership" component={Leadership} />
        <Route path="/about-us/awards" component={Awards} />
        <Route path="/about-us/csr" component={CSR} />
        
        <Route path="/products" component={Products} />
        <Route path="/products/term-insurance" component={TermInsurance} />
        <Route path="/products/savings-plans" component={SavingsPlans} />
        <Route path="/products/ulip" component={ULIP} />
        <Route path="/products/retirement-plans" component={RetirementPlans} />
        <Route path="/products/child-plans" component={ChildPlans} />
        <Route path="/products/group-insurance" component={GroupInsurance} />
        
        <Route path="/claims" component={Claims} />
        <Route path="/claims/how-to-claim" component={HowToClaim} />
        <Route path="/claims/claim-forms" component={ClaimForms} />
        <Route path="/claims/claim-status" component={ClaimStatus} />
        
        <Route path="/customer-service" component={CustomerService} />
        <Route path="/customer-service/contact-us" component={ContactUs} />
        <Route path="/customer-service/faqs" component={FAQs} />
        <Route path="/customer-service/grievance-redressal" component={GrievanceRedressal} />
        <Route path="/customer-service/downloads" component={Downloads} />
        <Route path="/customer-service/premium-payment" component={PremiumPayment} />
        
        <Route path="/careers" component={Careers} />
        <Route path="/careers/life-at-suraksha" component={LifeAtSuraksha} />
        
        <Route path="/blog" component={BlogList} />
        <Route path="/blog/:slug" component={BlogPost} />
        
        <Route path="/investor-relations" component={InvestorRelations} />
        <Route path="/investor-relations/financials" component={Financials} />
        <Route path="/investor-relations/annual-reports" component={AnnualReports} />
        <Route path="/investor-relations/disclosures" component={Disclosures} />
        
        <Route path="/sitemap" component={Sitemap} />

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