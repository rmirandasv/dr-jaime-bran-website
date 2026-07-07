import Image from "next/image";

import { siteContent } from "@/lib/site-content";

import { WhatsAppButton } from "../whatsapp-button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-foreground text-background"
    >
      <Image
        src={siteContent.images.heroBg.src}
        alt={siteContent.images.heroBg.alt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[85%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent lg:via-foreground/40 lg:to-transparent"
      />

      <div className="mx-auto flex min-h-[88svh] max-w-6xl flex-col px-4 pt-12 pb-16 sm:px-6 lg:pt-16 lg:pb-20">
        <div className="flex items-center justify-between border-b border-background/20 pb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-background/80">
          <p>{siteContent.heroEyebrow}</p>
          <p className="hidden sm:block">{siteContent.name}</p>
        </div>

        <div className="grid flex-1 content-end gap-10 pt-16 pb-12 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
              {siteContent.specialty}
            </p>

            <h1
              id="hero-title"
              className="mt-6 max-w-3xl font-heading text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.95] tracking-[-0.02em] text-balance text-background"
            >
              Cuidamos tu{" "}
              <span className="italic text-accent">sonrisa</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/85">
              {siteContent.heroPromise}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <WhatsAppButton size="lg" />
              <a
                href="#servicios"
                className="group inline-flex items-center gap-2 text-sm font-medium text-background underline-offset-[6px] hover:underline"
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

          <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-end">
            <div className="rounded-sm border border-background/15 bg-foreground/35 p-5 backdrop-blur-[2px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-background/70">
                {siteContent.signature}
              </p>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-background/90">
                {siteContent.heroAside}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-background/70">
              Horario · Citas por WhatsApp
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-background/90">
              {siteContent.hours.map((schedule) => (
                <li key={schedule.days} className="flex gap-3">
                  <span className="text-background/65">{schedule.days}</span>
                  <span className="font-medium">{schedule.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
