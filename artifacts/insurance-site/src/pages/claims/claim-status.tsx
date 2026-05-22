import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ClaimStatus() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake status result
    setStatus("Under Review");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6 text-primary text-center">Track Claim Status</h1>
        <p className="text-center text-muted-foreground mb-12">
          Enter your details below to check the real-time status of your registered claim.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Claim Details</CardTitle>
            <CardDescription>All fields are mandatory.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="policyNo">Policy Number</Label>
                <Input id="policyNo" required placeholder="e.g. POL123456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="claimRef">Claim Reference Number</Label>
                <Input id="claimRef" required placeholder="e.g. CLM987654" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth (Life Assured)</Label>
                <Input id="dob" type="date" required />
              </div>
              <Button type="submit" className="w-full">Track Status</Button>
            </form>

            {status && (
              <div className="mt-8 p-6 bg-muted/50 rounded-lg border text-center">
                <h3 className="font-semibold text-lg mb-2">Current Status</h3>
                <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold rounded-full">
                  {status}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Your claim is currently being reviewed by our team. We will notify you once a decision is made or if further documentation is required.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}