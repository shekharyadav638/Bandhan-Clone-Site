import React from "react";
import { openRoles } from "@/data/careers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import careersHero from "@/assets/careers-hero.png";

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[400px] flex items-center bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={careersHero} alt="Happy diverse workplace" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Build a Career with <span className="text-primary">Purpose</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join us in our mission to secure the financial futures of millions of Indian families. We are always looking for passionate individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Why Suraksha Life?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mb-12">
            <div>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-2">Meaningful Work</h3>
              <p className="text-muted-foreground text-sm">Every role here directly contributes to protecting families and providing peace of mind.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-2">Growth & Learning</h3>
              <p className="text-muted-foreground text-sm">We invest heavily in the professional development of our employees through continuous training.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-2">Inclusive Culture</h3>
              <p className="text-muted-foreground text-sm">We foster a diverse and inclusive environment where every voice is heard and valued.</p>
            </div>
          </div>
          <div className="text-center">
             <Link href="/careers/life-at-suraksha" className="text-primary font-medium hover:underline">Learn more about Life at Suraksha →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Open Roles</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {openRoles.map(role => (
            <Card key={role.id} className="hover-elevate">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-xl mb-1 text-primary">{role.title}</h3>
                  <div className="text-sm text-muted-foreground flex gap-4">
                    <span>{role.function}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">Posted: {role.postedDate}</span>
                  <Button>Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}