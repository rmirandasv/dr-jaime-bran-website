import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {siteContent.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siteContent.specialty} · {siteContent.contact.city},{" "}
            {siteContent.contact.country}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href={siteContent.contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Síguenos en Facebook
          </a>
          <p className="text-xs text-muted-foreground">
            © {year} {siteContent.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
