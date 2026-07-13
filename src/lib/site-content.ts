export const siteContent = {
  name: "Clínica Odontológica Dr. Jaime Bran",
  doctorName: "Dr. Jaime Bran",
  tagline: "Cuidamos tu sonrisa",
  specialty: "Odontología general e infantil",
  description:
    "Desde limpiezas dentales hasta tratamientos avanzados, te ofrecemos un servicio integral y personalizado.",
  heroEyebrow: "Odontología · San Salvador",
  heroPromise:
    "Odontología general e infantil en San Salvador. Atención para niños y adultos.",
  heroAside:
    "Consultas, limpiezas, estética dental y odontología infantil. Citas por WhatsApp.",
  signature: "Dr. Jaime Bran · Odontólogo",
  about: {
    kicker: "Sobre nosotros",
    title: "Odontología familiar en San Salvador.",
    paragraphs: [
      "El Dr. Bran cuenta con un equipo profesional calificado y con amplia experiencia en odontología infantil, odontología general y estética dental.",
      "Ofrecemos consultas para niños y adultos, con diagnósticos claros y planes de tratamiento adaptados a cada paciente.",
    ],
    highlightsHeading: "Por qué elegirnos",
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
      title: "Odontología infantil",
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
  sections: {
    services: {
      kicker: "Servicios",
      title: "Tratamientos para toda la",
      titleAccent: "familia",
      description:
        "Desde la primera consulta hasta el seguimiento, cada servicio se explica con claridad antes de comenzar.",
    },
    clinic: {
      kicker: "La clínica",
      title: "Instalaciones cómodas y",
      titleAccent: "equipadas",
      description:
        "Contamos con sala de espera y consultorios preparados para diagnóstico, limpiezas y tratamientos odontológicos.",
    },
    contact: {
      kicker: "Contacto",
      title: "Agenda tu",
      titleAccent: "cita",
      locationNote: "Visítanos en nuestro horario de atención.",
    },
  },
  contact: {
    address: "57 Avenida Norte 13",
    city: "San Salvador",
    country: "El Salvador",
    whatsapp: "7888 2489",
    whatsappNote: "Solo mensajes por WhatsApp",
    mapsUrl:
      "https://www.waze.com/es/live-map/directions/sv/san-salvador-department/san-salvador/clinica-odontologica-dr.-jaime-bran?to=place.ChIJywY1qpgxY48Rawof3FH5vao",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=place_id:ChIJywY1qpgxY48Rawof3FH5vao&hl=es&z=16&output=embed",
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
    logo: {
      src: "/images/logo.png",
      alt: "Logo Clínica Odontológica Dr. Jaime Bran",
    },
    heroBg: {
      src: "/images/generated/image_001.jpg",
      alt: "Ambiente cálido del consultorio del Dr. Jaime Bran",
    },
    aboutDetail: {
      src: "/images/generated/about-detail.jpg",
      alt: "Instrumentos dentales sobre bandeja de madera, listos para la consulta",
    },
    clinicInterior: {
      src: "/images/clinic-interior.jpg",
      alt: "Sala de espera de la Clínica Odontológica Dr. Jaime Bran",
    },
    locationMap: {
      src: "/images/generated/location-map.jpg",
      alt: "Mapa estilizado de la ubicación de la clínica",
    },
  },
  serviceImages: {
    pediatric: {
      src: "/images/generated/service-pediatric.jpg",
      alt: "Juguete de madera con forma de diente sobre lino y eucalipto",
    },
    general: {
      src: "/images/generated/service-general.jpg",
      alt: "Espejo y sonda dental sobre bandeja de madera",
    },
    aesthetic: {
      src: "/images/generated/service-aesthetic.jpg",
      alt: "Modelos de porcelana de dientes sobre fondo cálido",
    },
    cleaning: {
      src: "/images/generated/service-cleaning.jpg",
      alt: "Gotas de agua sobre superficie verde salvia",
    },
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hola, me gustaría agendar una cita en la Clínica Odontológica Dr. Jaime Bran."
  );
  return `https://wa.me/50378882489?text=${text}`;
}
