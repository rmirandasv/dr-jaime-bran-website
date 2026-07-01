import Image from "next/image";

import { siteContent } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 lg:pt-28 lg:pb-20">
        <div className="flex flex-col gap-8 border-b border-background/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-background/60">
              Servicios
            </p>
            <h2
              id="services-title"
              className="mt-4 max-w-2xl font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-balance"
            >
              Una atención <span className="italic text-accent">completa</span>,
              de la primera consulta a la sonrisa final.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-background/70">
            Cada servicio se planifica según tu caso. Empezamos por escucharte
            y terminamos cuando estás conforme.
          </p>
        </div>

        <ol className="divide-y divide-background/15">
          {siteContent.services.map((service, index) => {
            const position = String(index + 1).padStart(2, "0");
            const visual =
              siteContent.serviceImages[
                service.id as keyof typeof siteContent.serviceImages
              ];

            return (
              <li
                key={service.id}
                className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 py-8 transition-colors sm:grid-cols-[5rem_5rem_1fr_auto] sm:gap-x-8 sm:py-10"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-2xl italic text-background/40 transition-colors group-hover:text-accent sm:text-3xl"
                >
                  {position}
                </span>

                <div className="relative aspect-square w-20 overflow-hidden rounded-sm border border-background/15 bg-background/5 sm:w-24">
                  {visual ? (
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 640px) 80px, 96px"
                      className="object-cover"
                    />
                  ) : null}
                </div>

                <div>
                  <h3 className="font-heading text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-background/70 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contacto"
                  aria-label={`Agendar ${service.title.toLowerCase()} por WhatsApp`}
                  className="col-span-2 inline-flex items-center gap-2 self-end text-sm font-medium text-background/80 underline-offset-[6px] transition-colors hover:text-accent hover:underline sm:col-span-1"
                >
                  Agendar
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
