import { Baby, Sparkles, Stethoscope, Syringe } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteContent } from "@/lib/site-content";

const serviceIcons = {
  pediatric: Baby,
  general: Stethoscope,
  aesthetic: Sparkles,
  cleaning: Syringe,
} as const;

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-muted-foreground">
            Atención integral para cuidar la salud bucal de toda tu familia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.services.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];

            return (
              <Card key={service.id} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-heading text-lg">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
