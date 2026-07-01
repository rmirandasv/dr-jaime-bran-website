import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/lib/site-content";

import { WhatsAppButton } from "../whatsapp-button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col gap-6">
          <Badge variant="secondary" className="w-fit">
            {siteContent.specialty}
          </Badge>
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteContent.tagline}
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              {siteContent.description}
            </p>
          </div>
          <WhatsAppButton />
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
          <Image
            src={siteContent.images.clinicExterior.src}
            alt={siteContent.images.clinicExterior.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
