import Image from "next/image";

import { siteContent } from "@/lib/site-content";

export function ClinicGallerySection() {
  return (
    <section
      id="clinica"
      aria-labelledby="clinic-title"
      className="bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6 lg:pt-32 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground/80">
              La clínica
            </p>
            <h2
              id="clinic-title"
              className="mt-6 font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-balance"
            >
              Un espacio pensado para que te sientas{" "}
              <span className="italic text-primary">en casa</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75">
              Cada detalle — desde la sala de espera hasta el consultorio —
              está pensado para que la visita sea tranquila, breve y clara.
            </p>
          </header>

          <div className="grid gap-4 lg:col-span-7 lg:grid-cols-7 lg:grid-rows-2">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted lg:col-span-7 lg:aspect-[16/9] lg:row-span-1">
              <Image
                src={siteContent.images.clinicExterior.src}
                alt={siteContent.images.clinicExterior.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-sm bg-background/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur">
                Entrada · {siteContent.contact.address}
              </figcaption>
            </figure>

            <figure className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted lg:col-span-3 lg:aspect-auto lg:row-span-1">
              <Image
                src={siteContent.images.clinicInterior.src}
                alt={siteContent.images.clinicInterior.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </figure>

            <div className="flex flex-col justify-center rounded-sm border border-border/60 bg-background p-6 lg:col-span-4 lg:p-8">
              <p className="font-heading text-xl italic leading-snug text-foreground">
                &ldquo;Llegar, respirar, sentarse. Empezamos cuando estés
                listo.&rdquo;
              </p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {siteContent.signature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
