import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  label?: string;
};

export function WhatsAppButton({
  className,
  size = "lg",
  variant = "default",
  label = "Agendar cita por WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        />
      }
      size={size}
      variant={variant}
      className={cn(
        "gap-2 bg-accent font-medium text-accent-foreground shadow-sm hover:bg-accent/90 hover:text-accent-foreground",
        className
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </Button>
  );
}
