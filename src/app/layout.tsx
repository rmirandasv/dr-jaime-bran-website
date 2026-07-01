import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Odontológica Dr. Jaime Bran | San Salvador",
  description:
    "Odontología general e infantil en San Salvador. Cuidamos tu sonrisa con atención experta y personalizada. Agenda tu cita por WhatsApp.",
  openGraph: {
    title: "Clínica Odontológica Dr. Jaime Bran",
    description:
      "Odontología general e infantil. Cuidamos tu sonrisa. Agenda tu cita por WhatsApp.",
    locale: "es_SV",
    type: "website",
    images: [{ url: "/images/logo.png", alt: "Clínica Odontológica Dr. Jaime Bran" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
