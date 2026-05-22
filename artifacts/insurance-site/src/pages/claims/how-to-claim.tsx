import React from "react";

export default function HowToClaim() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">How to File a Claim</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-12">
        Follow these simple steps to ensure your claim is processed quickly and efficiently.
      </p>

      <div className="space-y-12 max-w-4xl">
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Intimation</h3>
            <p className="text-muted-foreground">Notify us about the claim as soon as possible. You can do this online, via our toll-free number, or by visiting any Suraksha Life branch. Keep the policy number and details of the event ready.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Documentation</h3>
            <p className="text-muted-foreground">Submit the required documents depending on the type of claim (death, maturity, health). You can download the necessary forms from our Claim Forms section.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Processing</h3>
            <p className="text-muted-foreground">Our dedicated claims team will review the submitted documents. We may reach out if any additional information or clarification is required.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Decision and Settlement</h3>
            <p className="text-muted-foreground">Once the claim is approved, the settlement amount will be transferred directly to the nominee's registered bank account via NEFT within the stipulated turnaround time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}