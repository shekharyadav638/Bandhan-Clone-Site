import React from "react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary text-center">Insights & Resources</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-16">
        Expert advice, financial planning tips, and industry updates to help you make informed decisions for your family's future.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden hover-elevate">
            <div className="h-48 bg-muted w-full relative">
              {post.coverImage && (
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-muted-foreground">
                   [Image: {post.category}]
                </div>
              )}
            </div>
            <CardHeader>
              <div className="text-xs text-primary font-medium mb-2">{post.category}</div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline text-sm">Read Article →</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}