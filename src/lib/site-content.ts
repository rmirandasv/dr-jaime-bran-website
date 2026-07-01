export const siteContent = {
  name: "Clínica Odontológica Dr. Jaime Bran",
  doctorName: "Dr. Jaime Bran",
  tagline: "Cuidamos tu sonrisa",
  specialty: "Odontología general e infantil",
  description:
    "Desde limpiezas dentales hasta tratamientos avanzados, te ofrecemos un servicio integral y personalizado.",
  heroEyebrow: "Odontología · San Salvador",
  heroPromise:
    "Una atención dental cuidada, personal y honesta para vos y tu familia.",
  signature: "Dr. Jaime Bran · Odontólogo",
  about: {
    kicker: "Sobre nosotros",
    title: "Una práctica pensada para cada miembro de la familia.",
    paragraphs: [
      "El Dr. Bran cuenta con un equipo profesional calificado y con amplia experiencia en odontopediatría, odontología general y estética dental.",
      "¡Sonrisas radiantes empiezan aquí! Consulta general e infantil con atención experta y personalizada para que tú y tu familia luzcan con confianza.",
    ],
    highlights: [
      { label: "Equipo profesional", detail: "Calificado y cercano" },
      { label: "Experiencia clínica", detail: "Años de práctica" },
      { label: "Atención personalizada", detail: "Planes a la medida" },
      { label: "Ambiente familiar", detail: "Niños y adultos bienvenidos" },
    ],
  },
  services: [
    {
      id: "pediatric",
      title: "Odontopediatría",
      description:
        "Atención dental especializada para niños en un ambiente cómodo y amigable.",
    },
    {
      id: "general",
      title: "Odontología general",
      description:
        "Consultas, diagnósticos y tratamientos para mantener tu salud bucal en óptimas condiciones.",
    },
    {
      id: "aesthetic",
      title: "Estética dental",
      description:
        "Tratamientos para mejorar la apariencia de tu sonrisa con resultados naturales.",
    },
    {
      id: "cleaning",
      title: "Limpiezas y tratamientos avanzados",
      description:
        "Desde limpiezas dentales hasta procedimientos avanzados con tecnología moderna.",
    },
  ],
  contact: {
    address: "57 Avenida Norte 13",
    city: "San Salvador",
    country: "El Salvador",
    whatsapp: "7888 2489",
    whatsappNote: "Solo mensajes por WhatsApp",
    mapsUrl:
      "https://www.waze.com/es/live-map/directions/sv/san-salvador-department/san-salvador/clinica-odontologica-dr.-jaime-bran?to=place.ChIJywY1qpgxY48Rawof3FH5vao",
    facebookUrl:
      "https://www.facebook.com/p/Cl%C3%ADnica-Odontol%C3%B3gica-Dr-Jaime-Bran-61556467850854/",
  },
  hours: [
    { days: "Jueves – Viernes", time: "08:00 – 15:00" },
    { days: "Sábado", time: "08:00 – 12:00" },
  ],
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Clínica", href: "#clinica" },
    { label: "Contacto", href: "#contacto" },
  ],
  images: {
    logo: { src: "/images/logo.png", alt: "Logo Clínica Odontológica Dr. Jaime Bran" },
    clinicExterior: {
      src: "/images/clinic-exterior.jpg",
      alt: "Entrada de la Clínica Odontológica Dr. Jaime Bran en San Salvador",
    },
    clinicInterior: {
      src: "/images/clinic-interior.jpg",
      alt: "Sala de espera de la Clínica Odontológica Dr. Jaime Bran",
    },
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hola, me gustaría agendar una cita en la Clínica Odontológica Dr. Jaime Bran."
  );
  return `https://wa.me/50378882489?text=${text}`;
}
