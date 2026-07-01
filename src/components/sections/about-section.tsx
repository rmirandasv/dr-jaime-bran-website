import { CheckCircle2 } from "lucide-react";

import { siteContent } from "@/lib/site-content";

const highlights = [
  "Equipo profesional calificado",
  "Amplia experiencia clínica",
  "Atención personalizada",
  "Ambiente cómodo para niños y adultos",
];

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {siteContent.about.title}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
