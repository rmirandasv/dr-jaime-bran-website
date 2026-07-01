import Image from "next/image";

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

        <div className="mt-14 grid gap-8 border-t border-border pt-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border bg-muted sm:aspect-[4/5]">
              <Image
                src={siteContent.images.clinicInterior.src}
                alt={siteContent.images.clinicInterior.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/90">
                  {siteContent.contact.address}
                </p>
                <p className="mt-1 font-heading text-lg italic text-background">
                  {siteContent.contact.city}, {siteContent.contact.country}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="font-heading text-sm italic text-foreground/80">
                Te esperamos en la sala de espera.
              </p>
              <Button
                nativeButton={false}
                variant="outline"
                size="sm"
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

          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Horario
            </p>
            <ul className="mt-4 space-y-4 text-base">
              {siteContent.hours.map((schedule) => (
                <li
                  key={schedule.days}
                  className="flex items-baseline justify-between border-b border-border/70 pb-3 last:border-b-0"
                >
                  <span className="text-sm text-muted-foreground">
                    {schedule.days}
                  </span>
                  <span className="font-heading text-2xl italic text-foreground/85">
                    {schedule.time}
                  </span>
                </li>
              ))}
            </ul>

            <Separator className="my-8 bg-border" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              WhatsApp
            </p>
            <p className="mt-3 font-heading text-5xl leading-none tracking-[-0.01em]">
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
              {siteContent.contact.whatsappNote}. Respondemos por mensaje.
            </p>
            <div className="mt-6">
              <WhatsAppButton size="lg" label="Iniciar conversación" />
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-border" />

        <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            ¿Prefieres otro canal? Estamos disponibles durante el horario de
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
