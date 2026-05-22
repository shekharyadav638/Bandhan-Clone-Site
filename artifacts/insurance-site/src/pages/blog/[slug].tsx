import React from "react";
import { useParams, Link } from "wouter";
import { blogPosts } from "@/data/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link href="/blog" className="text-primary hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/blog" className="text-primary hover:underline text-sm font-medium mb-8 inline-block">← Back to Insights</Link>
      <div className="mb-8">
        <div className="text-sm text-primary font-medium mb-4">{post.category}</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
      
      <div className="w-full h-[400px] bg-muted mb-12 rounded-xl overflow-hidden relative">
         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
           [Image Placeholder: {post.title}]
         </div>
      </div>

      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p className="lead text-xl text-foreground font-medium mb-8">{post.excerpt}</p>
        <p>{post.content}</p>
        <p>This is a placeholder for the full article content. In a complete implementation, this would contain multiple sections with rich formatting, headings, and detailed insights on the topic of {post.category.toLowerCase()}.</p>
        <h3>Conclusion</h3>
        <p>Always consult with a qualified financial advisor before making significant decisions regarding your life insurance and investment portfolio.</p>
      </div>
    </article>
  );
}