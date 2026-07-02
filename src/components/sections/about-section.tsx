import Image from "next/image";

import { siteContent } from "@/lib/site-content";

export function AboutSection() {
  const [firstParagraph, ...restParagraphs] = siteContent.about.paragraphs;
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirst = firstParagraph.slice(1);

  return (
    <section
      id="nosotros"
      aria-labelledby="about-title"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 lg:pt-32 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground/80">
              {siteContent.about.kicker}
            </p>
            <h2
              id="about-title"
              className="mt-6 font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-balance"
            >
              {siteContent.about.title}
            </h2>

            <figure className="mt-10 hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-muted">
                <Image
                  src={siteContent.images.aboutDetail.src}
                  alt={siteContent.images.aboutDetail.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Detalle · {siteContent.signature}
              </figcaption>
            </figure>
          </header>

          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              <span
                aria-hidden="true"
                className="float-left mr-3 mt-1 font-heading text-5xl font-medium leading-[0.85] text-primary"
              >
                {firstLetter}
              </span>
              {restOfFirst}
            </p>

            {restParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-lg leading-relaxed text-foreground/90"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Lo que cuidamos en cada visita
              </p>
              <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {siteContent.about.highlights.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <dt className="font-heading text-xl text-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="mt-10 lg:hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-muted">
                <Image
                  src={siteContent.images.aboutDetail.src}
                  alt={siteContent.images.aboutDetail.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Detalle · {siteContent.signature}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
