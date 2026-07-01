import { Clock, MapPin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getWhatsAppUrl, siteContent } from "@/lib/site-content";

import { WhatsAppButton } from "../whatsapp-button";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estamos listos para atenderte. Agenda tu cita y da el primer paso
            hacia una sonrisa saludable.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border bg-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading text-xl">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <address className="not-italic text-muted-foreground">
                <p className="font-medium text-foreground">
                  {siteContent.contact.address}
                </p>
                <p>
                  {siteContent.contact.city}, {siteContent.contact.country}
                </p>
              </address>
              <Button
                nativeButton={false}
                variant="outline"
                render={
                  <a
                    href={siteContent.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Cómo llegar con Waze
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading text-xl">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                Horario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {siteContent.hours.map((schedule) => (
                  <li
                    key={schedule.days}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{schedule.days}</span>
                    <span className="font-medium text-foreground">
                      {schedule.time}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-border bg-card">
          <CardContent className="flex flex-col items-center gap-6 py-8 text-center sm:flex-row sm:text-left">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <MessageCircle className="size-7" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-heading text-xl font-semibold text-foreground">
                WhatsApp {siteContent.contact.whatsapp}
              </p>
              <p className="text-sm text-muted-foreground">
                {siteContent.contact.whatsappNote}
              </p>
            </div>
            <WhatsAppButton />
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          ¿Prefieres escribirnos directamente?{" "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Abrir chat de WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
