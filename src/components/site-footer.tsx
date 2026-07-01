import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-background/60">
              {siteContent.heroEyebrow}
            </p>
            <p className="mt-4 font-heading text-3xl leading-tight tracking-[-0.01em]">
              {siteContent.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70">
              {siteContent.specialty}. {siteContent.contact.city},{" "}
              {siteContent.contact.country}.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-background/60">
              Navegación
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteContent.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-background/85 underline-offset-[6px] transition-colors hover:text-accent hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-background/60">
              Síguenos
            </p>
            <a
              href={siteContent.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-background/85 underline-offset-[6px] hover:text-accent hover:underline"
            >
              Facebook →
            </a>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-background/60">
              Contacto
            </p>
            <p className="mt-2 text-sm text-background/85">
              <a
                href={`https://wa.me/50378882489`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                WhatsApp · {siteContent.contact.whatsapp}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteContent.name}. Todos los derechos reservados.
          </p>
          <p className="font-heading italic">
            {siteContent.signature}
          </p>
        </div>
      </div>
    </footer>
  );
}
