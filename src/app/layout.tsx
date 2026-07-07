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
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Clínica Odontológica Dr. Jaime Bran | San Salvador",
  description:
    "Odontología general e infantil en San Salvador. Cuidamos tu sonrisa con atención experta y personalizada. Agenda tu cita por WhatsApp.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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
