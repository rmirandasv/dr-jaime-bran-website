"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#inicio"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Inicio"
        >
          <Image
            src={siteContent.images.logo.src}
            alt={siteContent.images.logo.alt}
            width={120}
            height={72}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden font-heading text-sm leading-tight tracking-tight sm:block">
            <span className="block">Dr. Jaime Bran</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Odontología
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 underline-offset-[6px] transition-colors hover:text-foreground hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegación móvil"
        className={cn(
          "border-t border-border/70 bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-base text-foreground/90 last:border-b-0 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
