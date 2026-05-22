import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerService() {
  const services = [
    { title: "Pay Premium", href: "/customer-service/premium-payment", desc: "Quick and secure online premium payment." },
    { title: "Contact Us", href: "/customer-service/contact-us", desc: "Reach out to our support team for assistance." },
    { title: "FAQs", href: "/customer-service/faqs", desc: "Find answers to commonly asked questions." },
    { title: "Grievance Redressal", href: "/customer-service/grievance-redressal", desc: "Report and track your concerns." },
    { title: "Downloads", href: "/customer-service/downloads", desc: "Access brochures, forms, and reports." },
    { title: "Update Details", href: "#", desc: "Update your contact info and KYC (Coming soon)." },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Customer Service Hub</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are here to assist you. Access our self-service portal or reach out to our dedicated support team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <Card key={i} className="hover-elevate">
            <CardHeader>
              <CardTitle>{svc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{svc.desc}</p>
              <Link href={svc.href} className="text-primary font-medium text-sm hover:underline">Access Service →</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}