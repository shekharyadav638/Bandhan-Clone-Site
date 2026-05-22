import React from "react";
import { Link } from "wouter";

export default function Sitemap() {
  const sections = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Story", href: "/about-us/our-story" },
        { label: "Leadership", href: "/about-us/leadership" },
        { label: "Awards", href: "/about-us/awards" },
        { label: "CSR", href: "/about-us/csr" },
      ]
    },
    {
      title: "Products",
      links: [
        { label: "All Products", href: "/products" },
        { label: "Term Insurance", href: "/products/term-insurance" },
        { label: "Savings Plans", href: "/products/savings-plans" },
        { label: "ULIP", href: "/products/ulip" },
        { label: "Retirement Plans", href: "/products/retirement-plans" },
        { label: "Child Plans", href: "/products/child-plans" },
        { label: "Group Insurance", href: "/products/group-insurance" },
      ]
    },
    {
      title: "Claims",
      links: [
        { label: "Claims Overview", href: "/claims" },
        { label: "How to Claim", href: "/claims/how-to-claim" },
        { label: "Claim Forms", href: "/claims/claim-forms" },
        { label: "Track Claim Status", href: "/claims/claim-status" },
      ]
    },
    {
      title: "Customer Service",
      links: [
        { label: "Service Hub", href: "/customer-service" },
        { label: "Contact Us", href: "/customer-service/contact-us" },
        { label: "FAQs", href: "/customer-service/faqs" },
        { label: "Grievance Redressal", href: "/customer-service/grievance-redressal" },
        { label: "Downloads", href: "/customer-service/downloads" },
        { label: "Premium Payment", href: "/customer-service/premium-payment" },
      ]
    },
    {
      title: "Resources & Others",
      links: [
        { label: "Careers", href: "/careers" },
        { label: "Life at Suraksha", href: "/careers/life-at-suraksha" },
        { label: "Blog", href: "/blog" },
        { label: "Investor Relations", href: "/investor-relations" },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-12 text-primary">Sitemap</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">{section.title}</h2>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}