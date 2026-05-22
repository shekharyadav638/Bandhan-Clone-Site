import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Financials() {
  const quarters = [
    { period: "Q3 FY 2023-24", revenue: "₹3,450 Cr", pat: "₹245 Cr", aum: "₹45,600 Cr" },
    { period: "Q2 FY 2023-24", revenue: "₹3,210 Cr", pat: "₹210 Cr", aum: "₹43,200 Cr" },
    { period: "Q1 FY 2023-24", revenue: "₹2,980 Cr", pat: "₹185 Cr", aum: "₹41,500 Cr" },
    { period: "Q4 FY 2022-23", revenue: "₹4,100 Cr", pat: "₹320 Cr", aum: "₹39,800 Cr" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">Financial Highlights</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-12">
        Consistently delivering strong financial performance through prudent underwriting and operational efficiency.
      </p>

      <div className="border rounded-lg overflow-hidden max-w-4xl mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quarter / Period</TableHead>
              <TableHead>Total Revenue</TableHead>
              <TableHead>Profit After Tax (PAT)</TableHead>
              <TableHead>AUM</TableHead>
              <TableHead className="text-right">Results</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quarters.map((q, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{q.period}</TableCell>
                <TableCell>{q.revenue}</TableCell>
                <TableCell>{q.pat}</TableCell>
                <TableCell>{q.aum}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">PDF</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}