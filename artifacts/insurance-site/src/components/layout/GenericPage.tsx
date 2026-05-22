import React from "react";

export default function GenericPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-serif font-bold mb-6 text-primary">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
        <div className="mt-12 p-8 bg-card rounded-lg border shadow-sm text-left">
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground italic">
            This is a placeholder page for {title}. In a real application, this would contain rich, detailed content specific to this section. All our policies are designed with the utmost care for our policyholders.
          </p>
        </div>
      </div>
    </div>
  );
}