import Image from "next/image";

import { siteContent } from "@/lib/site-content";

import { WhatsAppButton } from "../whatsapp-button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative bg-background"
    >
      <div className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {siteContent.heroEyebrow}
          </p>
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:block">
            {siteContent.name}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7 lg:pr-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground/80">
            {siteContent.specialty}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-heading text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.96] tracking-[-0.02em] text-balance text-foreground"
          >
            Cuidamos tu{" "}
            <span className="italic text-primary">sonrisa</span>
            <span className="text-muted-foreground/60">,</span>
            <br />
            <span className="text-foreground">una visita a la vez.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {siteContent.heroPromise}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppButton size="lg" />
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-[6px] hover:underline"
            >
              Conoce nuestros servicios
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-muted lg:aspect-[3/4]">
            <Image
              src={siteContent.images.clinicExterior.src}
              alt={siteContent.images.clinicExterior.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
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

          <div className="mt-4 hidden border-t border-border/70 pt-3 lg:block">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              {siteContent.signature}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Horario · Citas por WhatsApp
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-foreground">
            {siteContent.hours.map((schedule) => (
              <li key={schedule.days} className="flex gap-3">
                <span className="text-muted-foreground">{schedule.days}</span>
                <span className="font-medium">{schedule.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
