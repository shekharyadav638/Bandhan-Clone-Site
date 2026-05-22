import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnnualReports() {
  const reports = [
    { year: "2023-24", title: "Resilience & Growth", size: "8.5 MB" },
    { year: "2022-23", title: "Building for Tomorrow", size: "7.2 MB" },
    { year: "2021-22", title: "Navigating Challenges", size: "6.8 MB" },
    { year: "2020-21", title: "Digital Transformation", size: "5.5 MB" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary">Annual Reports</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-12">
        Detailed insights into our operations, financial performance, and strategic initiatives over the years.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reports.map((report, i) => (
          <Card key={i} className="hover-elevate flex flex-col">
            <div className="h-40 bg-muted flex items-center justify-center border-b">
              <span className="text-3xl font-serif font-bold text-muted-foreground/50">{report.year}</span>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{report.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto pt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{report.size}</span>
              <Button variant="secondary" size="sm">Download</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}