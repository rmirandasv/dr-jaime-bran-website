import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getWhatsAppUrl, siteContent } from "@/lib/site-content";

import { WhatsAppButton } from "../whatsapp-button";

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6 lg:pt-32 lg:pb-32">
        <header className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground/80">
            Contacto
          </p>
          <h2
            id="contact-title"
            className="mt-6 font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-[-0.02em] text-balance"
          >
            ¿Listos para verte?{" "}
            <span className="italic text-primary">Escríbenos</span>.
          </h2>
        </header>

        <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-border pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Visítanos
            </p>
            <address className="mt-4 not-italic font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-4xl">
              {siteContent.contact.address}
              <br />
              <span className="text-foreground/70 italic">
                {siteContent.contact.city}, {siteContent.contact.country}
              </span>
            </address>
            <div className="mt-8">
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                render={
                  <a
                    href={siteContent.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="gap-2"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Cómo llegar con Waze
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Horario
            </p>
            <ul className="mt-4 space-y-3 text-base">
              {siteContent.hours.map((schedule) => (
                <li
                  key={schedule.days}
                  className="flex flex-col border-b border-border/70 pb-3 last:border-b-0"
                >
                  <span className="font-medium text-foreground">
                    {schedule.days}
                  </span>
                  <span className="font-heading text-2xl italic text-foreground/80">
                    {schedule.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteContent.contact.whatsappNote}.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              WhatsApp
            </p>
            <p className="mt-4 font-heading text-4xl leading-none tracking-[-0.01em] sm:text-5xl">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-[6px] hover:underline"
              >
                {siteContent.contact.whatsapp}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Respondemos por mensaje. Más rápido que una llamada.
            </p>
            <div className="mt-6">
              <WhatsAppButton size="lg" label="Iniciar conversación" />
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-border" />

        <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            ¿Prefieres llamarnos? Estamos disponibles durante el horario de
            atención.
          </p>
          <a
            href={siteContent.contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-[6px] hover:underline"
          >
            Síguenos en Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
