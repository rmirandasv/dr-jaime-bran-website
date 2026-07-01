import { AboutSection } from "@/components/sections/about-section";
import { ClinicGallerySection } from "@/components/sections/clinic-gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ClinicGallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatingButton />
    </>
  );
}
