import { siteContent } from "@/lib/site-content";

export function AboutSection() {
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
          </header>

          <div className="lg:col-span-7 lg:pl-6">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              {siteContent.about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "first-letter:font-heading first-letter:text-5xl first-letter:font-medium first-letter:italic first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9]"
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
