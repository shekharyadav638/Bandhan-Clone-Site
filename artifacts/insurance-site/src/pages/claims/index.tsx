import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Claims() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Claims Process</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We understand that filing a claim happens during difficult times. Our promise is to make the process as smooth and transparent as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-muted/30 rounded-xl">
          <div className="text-4xl font-bold text-primary mb-2">99.4%</div>
          <div className="text-sm font-medium">Claim Settlement Ratio</div>
        </div>
        <div className="text-center p-6 bg-muted/30 rounded-xl">
          <div className="text-4xl font-bold text-primary mb-2">24 Hrs</div>
          <div className="text-sm font-medium">Claim Registration TAT</div>
        </div>
        <div className="text-center p-6 bg-muted/30 rounded-xl">
          <div className="text-4xl font-bold text-primary mb-2">Dedicated</div>
          <div className="text-sm font-medium">Claim Handlers</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>How to Claim</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Step-by-step guide to registering and tracking your claim.</p>
            <Link href="/claims/how-to-claim" className="text-primary hover:underline text-sm font-medium">View Guide →</Link>
          </CardContent>
        </Card>
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Claim Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Download all necessary forms for various types of claims.</p>
            <Link href="/claims/claim-forms" className="text-primary hover:underline text-sm font-medium">Download Forms →</Link>
          </CardContent>
        </Card>
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Track Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Check the real-time status of an already registered claim.</p>
            <Link href="/claims/claim-status" className="text-primary hover:underline text-sm font-medium">Track Claim →</Link>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground hover-elevate">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-primary-foreground/80 mb-4">Our claims support team is available 24/7 to assist you.</p>
            <Link href="/customer-service/contact-us" className="font-medium hover:underline text-sm">Contact Support →</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}