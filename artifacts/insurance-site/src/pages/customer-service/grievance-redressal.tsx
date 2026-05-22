import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function GrievanceRedressal() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6 text-primary text-center">Grievance Redressal</h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Your satisfaction is our priority. If you are unhappy with our services, we have a structured escalation matrix to resolve your concerns promptly.
        </p>

        <div className="space-y-8">
          <Card className="border-l-4 border-l-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">1</span>
                Level 1: Branch / Customer Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">First point of contact for any complaint or grievance.</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Email:</strong> complaints@surakshalife.in</li>
                <li><strong>Phone:</strong> 1800-123-4567</li>
                <li><strong>Resolution TAT:</strong> Within 15 days</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">2</span>
                Level 2: Grievance Redressal Officer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">If your issue is not resolved at Level 1, or you are unsatisfied with the response, you can escalate it to the GRO.</p>
              <ul className="space-y-2 text-sm mb-4">
                <li><strong>Email:</strong> gro@surakshalife.in</li>
                <li><strong>Address:</strong> Grievance Redressal Cell, Suraksha Tower, Lower Parel, Mumbai - 400013</li>
              </ul>
              <Link href="/customer-service/downloads" className="text-primary hover:underline text-sm font-medium">Download Grievance Form →</Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                Level 3: Insurance Ombudsman / IRDAI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">If you are still not satisfied with our resolution, or if we have not responded within 30 days, you may approach the Insurance Ombudsman or IRDAI.</p>
              <div className="p-4 bg-muted/30 rounded-lg text-sm">
                <p className="mb-2"><strong>IRDAI Bima Bharosa Portal:</strong> <a href="#" className="text-primary hover:underline">bimabharosa.irdai.gov.in</a></p>
                <p><strong>Toll-free:</strong> 155255</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}