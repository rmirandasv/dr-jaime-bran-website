import { MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/lib/site-content";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
