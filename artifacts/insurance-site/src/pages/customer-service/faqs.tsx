import React from "react";
import { faqs } from "@/data/faqs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find quick answers to common questions about our policies, premium payments, claims, and more.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue={faqs[0]?.category} className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-start mb-8 gap-2 bg-transparent">
            {faqs.map((cat, i) => (
              <TabsTrigger 
                key={i} 
                value={cat.category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border rounded-full px-6 py-2"
              >
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {faqs.map((cat, i) => (
            <TabsContent key={i} value={cat.category}>
              <Accordion type="single" collapsible className="w-full bg-card border rounded-lg p-2">
                {cat.questions.map((q, j) => (
                  <AccordionItem key={j} value={`item-${j}`}>
                    <AccordionTrigger className="text-left font-medium px-4 hover:no-underline hover:text-primary">
                      {q.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-muted-foreground leading-relaxed">
                      {q.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}