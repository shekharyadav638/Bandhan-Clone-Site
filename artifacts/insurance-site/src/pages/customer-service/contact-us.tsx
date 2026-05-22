import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help. Reach out to us through any of the channels below or visit your nearest branch.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Toll-Free Numbers</h3>
            <p className="text-muted-foreground mb-2">Customer Helpline (24/7):</p>
            <p className="text-xl font-medium text-primary mb-4">1800-123-4567</p>
            <p className="text-muted-foreground mb-2">Claim Support (24/7):</p>
            <p className="text-xl font-medium text-primary">1800-987-6543</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Email Addresses</h3>
            <p className="text-muted-foreground mb-1">General Queries:</p>
            <p className="text-foreground font-medium mb-4">support@surakshalife.in</p>
            <p className="text-muted-foreground mb-1">Claims Intimation:</p>
            <p className="text-foreground font-medium">claims@surakshalife.in</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Corporate Office</h3>
            <address className="text-muted-foreground not-italic leading-relaxed">
              Suraksha Life Insurance Co. Ltd.<br />
              Suraksha Tower, Senapati Bapat Marg,<br />
              Lower Parel, Mumbai - 400013,<br />
              Maharashtra, India.
            </address>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="p-8 text-center bg-muted/50 rounded-lg">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. One of our representatives will get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" required placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic of Query</Label>
                    <Select required>
                      <SelectTrigger id="topic">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-policy">New Policy Inquiry</SelectItem>
                        <SelectItem value="renewal">Premium Payment / Renewal</SelectItem>
                        <SelectItem value="claims">Claims Related</SelectItem>
                        <SelectItem value="update-details">Update Policy Details</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required placeholder="How can we help you?" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">Submit Query</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}