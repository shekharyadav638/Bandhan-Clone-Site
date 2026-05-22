import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <section className="container-x py-24 md:py-32 text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">We couldn't find that page.</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          The page you were looking for may have moved. Try the homepage or the Knowledge Center to find what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/knowledge-center" className="btn-outline">Visit Knowledge Center</Link>
          <Link href="/contact" className="btn-outline">Contact us</Link>
        </div>
      </section>
    </Layout>
  );
}
