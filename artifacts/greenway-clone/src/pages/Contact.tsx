import { useState, type FormEvent } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/Sections";
import { Phone, Mail, MapPin, Check } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    for (const k of ["firstName", "lastName", "email", "company", "message"]) {
      if (!String(fd.get(k) || "").trim()) errs[k] = "Required";
    }
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  return (
    <Layout title="Contact Greenway Health" description="Talk with our team about an EHR, practice management, RCM, or AI solution for your ambulatory practice.">
      <PageHeader eyebrow="Contact" title="Let's talk about what your practice needs next." subtitle="Tell us about your practice and a Greenway specialist will be in touch within one business day." />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            {submitted ? (
              <div className="rounded-2xl border border-[hsl(var(--brand))]/30 bg-[hsl(var(--brand-soft))] p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--brand))] text-white"><Check className="h-7 w-7" /></div>
                <h2 className="text-2xl font-bold">Thanks — we got your message.</h2>
                <p className="mt-3 text-[hsl(var(--brand-deep))]">A Greenway specialist will reach out within one business day. In the meantime, explore the Knowledge Center for resources tailored to your specialty and practice size.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold">Request a demo or quote</h2>
                <p className="mt-2 text-sm text-muted-foreground">Required fields are marked with an asterisk.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "firstName", label: "First name *" },
                    { name: "lastName", label: "Last name *" },
                    { name: "email", label: "Work email *", type: "email" },
                    { name: "phone", label: "Phone" },
                    { name: "company", label: "Practice name *" },
                    { name: "title", label: "Title" },
                  ].map((f) => (
                    <label key={f.name} className="block">
                      <span className="text-sm font-medium">{f.label}</span>
                      <input name={f.name} type={f.type || "text"} className={`mt-1.5 block w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]/40 ${errors[f.name] ? "border-destructive" : "border-border"}`} />
                      {errors[f.name] && <span className="mt-1 block text-xs text-destructive">{errors[f.name]}</span>}
                    </label>
                  ))}
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-medium">Specialty</span>
                    <select name="specialty" className="mt-1.5 block w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm">
                      <option>Primary Care</option><option>OB-GYN</option><option>Pediatrics</option><option>Orthopedics</option><option>Cardiology</option><option>Surgery</option><option>FQHC / Public Health</option><option>Tribal Health</option><option>Other</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-medium">How can we help? *</span>
                    <textarea name="message" rows={4} className={`mt-1.5 block w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]/40 ${errors.message ? "border-destructive" : "border-border"}`} />
                    {errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message}</span>}
                  </label>
                </div>
                <button type="submit" className="btn-primary mt-6">Submit request</button>
                <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
              </form>
            )}
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl bg-[hsl(var(--brand-dark))] p-7 text-white">
              <h3 className="text-lg font-bold text-white">Talk to sales</h3>
              <p className="mt-2 text-sm text-white/80">For new business and demos.</p>
              <div className="mt-5 space-y-3 text-sm">
                <a href="tel:18772422443" className="flex items-center gap-3 text-white hover:underline"><Phone className="h-4 w-4 text-[hsl(var(--brand))]" /> 877-242-2443</a>
                <a href="mailto:sales@greenwayhealth.com" className="flex items-center gap-3 text-white hover:underline"><Mail className="h-4 w-4 text-[hsl(var(--brand))]" /> sales@greenwayhealth.com</a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="text-lg font-bold">Existing customers</h3>
              <p className="mt-2 text-sm text-muted-foreground">Already a Greenway client? Reach our client support team.</p>
              <a href="/client-support" className="btn-outline mt-4 text-xs">Go to Client Support</a>
            </div>
            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="text-lg font-bold">Headquarters</h3>
              <p className="mt-3 flex items-start gap-3 text-sm text-[hsl(var(--brand-deep))]">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--brand))]" />
                <span>4301 W Boy Scout Blvd, Suite 800<br />Tampa, FL 33607</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
