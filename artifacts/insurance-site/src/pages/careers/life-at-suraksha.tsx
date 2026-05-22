import React from "react";

export default function LifeAtSuraksha() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6 text-primary text-center">Life at Suraksha</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16">
        A culture built on empathy, integrity, and excellence. We believe that happy employees create happy customers.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-4">Our Commitment to Diversity</h2>
          <p className="text-muted-foreground mb-6">
            We are proud to be an equal opportunity employer. Our strength lies in the diverse backgrounds, perspectives, and experiences of our team members across India. We actively promote an inclusive culture where everyone can thrive.
          </p>
          <h2 className="text-2xl font-serif font-bold mb-4 mt-8">Learning & Development</h2>
          <p className="text-muted-foreground">
            From comprehensive induction programs to leadership development pathways, we provide continuous learning opportunities. Our employees have access to industry certifications and skill-building workshops.
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-muted p-6 rounded-xl border-l-4 border-l-primary">
            <p className="italic text-muted-foreground mb-4">
              "Working at Suraksha Life has been incredibly rewarding. The supportive environment and focus on customer well-being align perfectly with my own values. I feel like I'm making a real difference."
            </p>
            <div className="font-bold">- Meera Reddy, Senior Branch Manager</div>
          </div>
          <div className="bg-muted p-6 rounded-xl border-l-4 border-l-secondary">
            <p className="italic text-muted-foreground mb-4">
              "The leadership here truly listens. The transparent communication and opportunities for rapid career progression have made this the best workplace I've experienced."
            </p>
            <div className="font-bold">- Rohan Das, Risk Analyst</div>
          </div>
        </div>
      </div>
    </div>
  );
}