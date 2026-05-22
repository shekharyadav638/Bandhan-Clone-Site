import React from "react";
import { Link } from "wouter";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">About Suraksha Life</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8">
        Suraksha Life was founded with a singular vision: to bring transparent, accessible, and reliable life insurance to every Indian household. We believe that financial security is a fundamental right, not a privilege.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            To empower individuals and families with thoughtful financial planning tools, ensuring that their dreams and aspirations are protected against life's uncertainties.
          </p>
          <Link href="/about-us/our-story" className="text-primary hover:underline font-medium">Read our full story →</Link>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4 text-muted-foreground list-disc pl-5">
            <li><strong className="text-foreground">Integrity:</strong> Absolute transparency in all our dealings.</li>
            <li><strong className="text-foreground">Empathy:</strong> Understanding the unique needs of every family.</li>
            <li><strong className="text-foreground">Excellence:</strong> Delivering outstanding service at every touchpoint.</li>
            <li><strong className="text-foreground">Innovation:</strong> Continuously evolving to offer better solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}