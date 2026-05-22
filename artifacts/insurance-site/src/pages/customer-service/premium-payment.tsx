import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PremiumPayment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Pay Premium Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Secure, fast, and convenient. Keep your policy active by paying your renewal premiums on time.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-16">
        <Card className="border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle>Quick Pay</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="policyNo">Policy Number</Label>
                <Input id="policyNo" placeholder="Enter your policy number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required />
              </div>
              <Button type="submit" className="w-full mt-4">Fetch Premium Details</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif font-bold mb-6 text-center">Available Payment Methods</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border rounded-lg bg-card">
            <div className="font-bold mb-2 text-xl">UPI</div>
            <p className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <div className="font-bold mb-2 text-xl">Net Banking</div>
            <p className="text-xs text-muted-foreground">All major Indian banks</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <div className="font-bold mb-2 text-xl">Cards</div>
            <p className="text-xs text-muted-foreground">Credit & Debit Cards</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <div className="font-bold mb-2 text-xl">Auto-Debit</div>
            <p className="text-xs text-muted-foreground">NACH / e-Mandate setup</p>
          </div>
        </div>
      </div>
    </div>
  );
}