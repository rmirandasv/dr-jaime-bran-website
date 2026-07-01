import Image from "next/image";

import { siteContent } from "@/lib/site-content";

export function ClinicGallerySection() {
  return (
    <section id="clinica" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestra clínica
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un espacio diseñado para brindarte comodidad y confianza en cada
            visita.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={siteContent.images.clinicExterior.src}
                alt={siteContent.images.clinicExterior.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">
              Entrada principal · {siteContent.contact.address}
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="relative aspect-[3/4] md:aspect-[4/3]">
              <Image
                src={siteContent.images.clinicInterior.src}
                alt={siteContent.images.clinicInterior.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">
              Sala de espera · Ambiente acogedor para toda la familia
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
