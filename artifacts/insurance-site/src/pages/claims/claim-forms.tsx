import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const forms = [
  { name: "Death Claim Intimation Form", category: "Death Claim", size: "1.2 MB", desc: "Primary form to intimate a death claim." },
  { name: "Medical Attendant's Certificate", category: "Death Claim", size: "0.8 MB", desc: "To be filled by the attending physician." },
  { name: "Maturity Claim Form", category: "Maturity", size: "1.0 MB", desc: "For processing maturity benefits." },
  { name: "NEFT Mandate Form", category: "General", size: "0.5 MB", desc: "Required for electronic fund transfer." },
  { name: "KYC Update Form", category: "General", size: "0.6 MB", desc: "To update personal details and address." },
  { name: "Nominee Change Form", category: "Policy Servicing", size: "0.7 MB", desc: "To update or change the nominee." },
];

export default function ClaimForms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">Claim Forms & Downloads</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-12">
        Download the necessary forms required for processing your claims and policy servicing requests.
      </p>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Form Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {forms.map((form, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{form.name}</TableCell>
                <TableCell>{form.category}</TableCell>
                <TableCell className="text-muted-foreground">{form.desc}</TableCell>
                <TableCell>{form.size}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}