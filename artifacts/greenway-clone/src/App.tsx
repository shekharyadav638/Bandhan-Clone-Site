import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import sitemapData from "@/data/sitemap-inventory.json";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import SolutionPage from "@/pages/SolutionPage";
import ChallengePage from "@/pages/ChallengePage";
import SpecialtyPage from "@/pages/SpecialtyPage";
import MarketplacePage from "@/pages/MarketplacePage";
import ResourcePage from "@/pages/ResourcePage";
import NewsPage from "@/pages/NewsPage";
import GenericPage from "@/pages/GenericPage";
import LeadershipPage from "@/pages/LeadershipPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();
const data = sitemapData as { all: string[]; cats: Record<string, string[]> };

function ScrollToTop() {
  const [loc] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [loc]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />

        <Route path="/solutions/:slug" component={SolutionPage} />

        <Route path="/challenges" component={ChallengePage} />
        <Route path="/challenges/:slug" component={ChallengePage} />

        <Route path="/specialties" component={SpecialtyPage} />
        <Route path="/specialties/:slug" component={SpecialtyPage} />

        <Route path="/marketplace" component={MarketplacePage} />
        <Route path="/marketplace/:slug" component={MarketplacePage} />
        <Route path="/marketplace/partner/:slug" component={MarketplacePage} />

        <Route path="/knowledge-center" component={ResourcePage} />
        <Route path="/knowledge-center/:cat" component={ResourcePage} />
        <Route path="/knowledge-center/:cat/:slug" component={ResourcePage} />

        <Route path="/news" component={NewsPage} />
        <Route path="/news/:slug" component={NewsPage} />

        <Route path="/leadership" component={LeadershipPage} />
        <Route path="/leadership/:slug" component={LeadershipPage} />

        <Route>
          {() => {
            const path = window.location.pathname;
            const base = import.meta.env.BASE_URL.replace(/\/$/, "");
            const rel = path.startsWith(base) ? path.slice(base.length) || "/" : path;
            if (data.all.includes(rel)) return <GenericPage />;
            return <NotFound />;
          }}
        </Route>
      </Switch>
    </>
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
