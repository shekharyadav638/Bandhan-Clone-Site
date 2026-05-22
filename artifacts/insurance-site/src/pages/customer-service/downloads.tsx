import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const downloadsList = [
  { name: "Suraksha Term Protect Brochure", category: "Product Brochure", size: "2.5 MB" },
  { name: "Suraksha Savings Plus Brochure", category: "Product Brochure", size: "1.8 MB" },
  { name: "Policy Setup Form", category: "Policy Servicing", size: "0.5 MB" },
  { name: "Fund Switch Request Form", category: "Policy Servicing", size: "0.4 MB" },
  { name: "KYC Details Update Form", category: "Policy Servicing", size: "0.6 MB" },
  { name: "Death Claim Form A", category: "Claims", size: "1.2 MB" },
  { name: "Maturity Claim Discharge Voucher", category: "Claims", size: "0.8 MB" },
  { name: "Annual Report 2023-24", category: "Financials", size: "5.4 MB" },
  { name: "Grievance Redressal Form", category: "Customer Service", size: "0.3 MB" },
];

export default function Downloads() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = downloadsList.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">Downloads</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-12">
        Access all our brochures, forms, and reports in one place.
      </p>

      <div className="mb-8 max-w-md">
        <Input 
          placeholder="Search for forms or brochures..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-full"
        />
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-muted-foreground">{item.size}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Download</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  No documents found matching "{searchTerm}"
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}