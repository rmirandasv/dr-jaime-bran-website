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
              {siteContent.sections.clinic.kicker}
            </p>
            <h2
              id="clinic-title"
              className="mt-6 font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-balance"
            >
              {siteContent.sections.clinic.title}{" "}
              <span className="italic text-primary">
                {siteContent.sections.clinic.titleAccent}
              </span>
              .
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
              {siteContent.sections.clinic.description}
            </p>

            <div className="mt-10 hidden border-l border-border/80 pl-6 lg:block">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Ubicación
              </p>
              <p className="mt-3 font-heading text-xl leading-snug text-foreground">
                {siteContent.contact.address}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteContent.contact.city}, {siteContent.contact.country}
              </p>
            </div>
          </header>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-muted">
              <iframe
                src={siteContent.contact.mapsEmbedUrl}
                title={`Ubicación de ${siteContent.name} en ${siteContent.contact.city}`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {siteContent.contact.address}
              </p>
              <p className="font-heading text-sm italic text-foreground/85">
                {siteContent.contact.city}, {siteContent.contact.country}
              </p>
            </div>

            <div className="mt-10 border-l border-border/80 pl-6 lg:hidden">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Ubicación
              </p>
              <p className="mt-3 font-heading text-xl leading-snug text-foreground">
                {siteContent.contact.address}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteContent.contact.city}, {siteContent.contact.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
