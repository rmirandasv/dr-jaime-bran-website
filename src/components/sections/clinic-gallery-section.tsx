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

            <figure className="mt-10 hidden border-l border-border/80 pl-6 lg:block">
              <blockquote className="font-heading text-2xl italic leading-snug text-foreground">
                &ldquo;Llegar, respirar, sentarse. Empezamos cuando estés
                listo.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {siteContent.signature}
              </figcaption>
            </figure>
          </header>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-muted">
              <Image
                src={siteContent.images.locationMap.src}
                alt={siteContent.images.locationMap.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {siteContent.contact.address}
              </p>
              <p className="font-heading text-sm italic text-foreground/80">
                {siteContent.contact.city}, {siteContent.contact.country}
              </p>
            </div>

            <figure className="mt-10 border-l border-border/80 pl-6 lg:hidden">
              <blockquote className="font-heading text-xl italic leading-snug text-foreground">
                &ldquo;Llegar, respirar, sentarse. Empezamos cuando estés
                listo.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {siteContent.signature}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
