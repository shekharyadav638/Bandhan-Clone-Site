import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Disclosures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">Public Disclosures</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-12">
        Regulatory filings and public disclosures in compliance with IRDAI guidelines.
      </p>

      <div className="border rounded-lg overflow-hidden max-w-3xl mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Disclosure Type</TableHead>
              <TableHead>Period</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Public Disclosure (L-Forms)</TableCell>
              <TableCell>Q3 FY 2023-24</TableCell>
              <TableCell className="text-right"><Button variant="outline" size="sm">View</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Public Disclosure (L-Forms)</TableCell>
              <TableCell>Q2 FY 2023-24</TableCell>
              <TableCell className="text-right"><Button variant="outline" size="sm">View</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Stewardship Policy</TableCell>
              <TableCell>FY 2023-24</TableCell>
              <TableCell className="text-right"><Button variant="outline" size="sm">View</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Dividend Distribution Policy</TableCell>
              <TableCell>FY 2023-24</TableCell>
              <TableCell className="text-right"><Button variant="outline" size="sm">View</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}