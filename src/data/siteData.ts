export const siteData = {
  brand: {
    name: "POWERGYM",
    highlight: "POWER",
    tagline:
      "Transforma tu cuerpo y mente con nosotros. Ofrecemos los mejores equipos, entrenadores profesionales y un ambiente motivador para ayudarte a alcanzar tus objetivos fitness.",
  },
  whatsapp: {
    href: "https://wa.me/1234567890",
  },
  navigation: [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#clases", label: "Clases" },
    { href: "#entrenadores", label: "Entrenadores" },
    { href: "#precios", label: "Precios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ],
  hero: {
    title: "TRANSFORMA",
    highlight: "TU CUERPO",
    subtitle:
      "El mejor gimnasio con equipos de última generación y entrenadores profesionales",
    primaryCta: { href: "#contacto", label: "ÚNETE HOY" },
    secondaryCta: { href: "#servicios", label: "CONOCE MÁS" },
  },
  services: {
    title: "NUESTROS",
    highlight: "SERVICIOS",
    subtitle: "Ofrecemos todo lo que necesitas para alcanzar tus objetivos fitness",
    items: [
      {
        icon: "fas fa-dumbbell",
        title: "Entrenamiento Personalizado",
        description:
          "Programas diseñados específicamente para tus necesidades y objetivos.",
      },
      {
        icon: "fas fa-heartbeat",
        title: "Cardio Zone",
        description:
          "Área equipada con las mejores máquinas cardiovasculares para quemar calorías.",
      },
      {
        icon: "fas fa-weight",
        title: "Área de Pesas",
        description: "Equipos profesionales para desarrollar fuerza y masa muscular.",
      },
      {
        icon: "fas fa-swimming-pool",
        title: "Piscina",
        description:
          "Clases de natación y aquagym en nuestra piscina climatizada.",
      },
      {
        icon: "fas fa-spa",
        title: "Spa y Sauna",
        description:
          "Relájate después del entrenamiento en nuestro área de bienestar.",
      },
      {
        icon: "fas fa-utensils",
        title: "Asesoría Nutricional",
        description:
          "Planificación alimenticia personalizada para complementar tu entrenamiento.",
      },
    ],
  },
  classes: {
    title: "NUESTRAS",
    highlight: "CLASES",
    subtitle: "Variedad de clases grupales para todos los niveles",
    cta: { href: "#", label: "VER TODAS LAS CLASES" },
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Crossfit",
        name: "Crossfit",
        schedule: "Lunes, Miércoles, Viernes",
        time: "8:00 AM - 9:00 AM",
      },
      {
        image:
          "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Yoga",
        name: "Yoga",
        schedule: "Martes, Jueves",
        time: "7:00 AM - 8:00 AM",
      },
      {
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Spinning",
        name: "Spinning",
        schedule: "Lunes a Viernes",
        time: "6:00 PM - 7:00 PM",
      },
      {
        image:
          "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Boxeo",
        name: "Boxeo",
        schedule: "Martes, Jueves, Sábado",
        time: "5:00 PM - 6:00 PM",
      },
    ],
  },
  trainers: {
    title: "NUESTROS",
    highlight: "ENTRENADORES",
    subtitle: "Profesionales certificados para guiarte en tu transformación",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Entrenador 1",
        name: "Carlos Méndez",
        specialty: "Especialista en Crossfit",
      },
      {
        image:
          "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Entrenador 2",
        name: "Laura Gómez",
        specialty: "Especialista en Yoga",
      },
      {
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Entrenador 3",
        name: "Javier Rodríguez",
        specialty: "Especialista en Hipertrofia",
      },
    ],
    socialLinks: [
      { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
      { href: "#", icon: "fab fa-instagram", label: "Instagram" },
      { href: "#", icon: "fab fa-twitter", label: "Twitter" },
    ],
  },
  pricing: {
    title: "NUESTROS",
    highlight: "PLANES",
    subtitle: "Elige el plan que mejor se adapte a tus necesidades",
    items: [
      {
        name: "BÁSICO",
        price: "$29",
        period: "/ mes",
        popular: false,
        features: [
          { label: "Acceso a área de pesas", available: true },
          { label: "Acceso a cardio", available: true },
          { label: "Clases grupales", available: false },
          { label: "Entrenador personal", available: false },
          { label: "Acceso a piscina", available: false },
        ],
      },
      {
        name: "ESTÁNDAR",
        price: "$49",
        period: "/ mes",
        popular: true,
        features: [
          { label: "Acceso a área de pesas", available: true },
          { label: "Acceso a cardio", available: true },
          { label: "Clases grupales", available: true },
          { label: "Entrenador personal", available: false },
          { label: "Acceso a piscina", available: true },
        ],
      },
      {
        name: "PREMIUM",
        price: "$79",
        period: "/ mes",
        popular: false,
        features: [
          { label: "Acceso a área de pesas", available: true },
          { label: "Acceso a cardio", available: true },
          { label: "Clases grupales", available: true },
          { label: "Entrenador personal", available: true },
          { label: "Acceso a piscina", available: true },
        ],
      },
    ],
    ctaLabel: "ELEGIR PLAN",
  },
  testimonials: {
    title: "OPINIONES DE",
    highlight: "CLIENTES",
    subtitle: "Lo que dicen nuestros miembros sobre nosotros",
    items: [
      {
        rating: 5,
        quote:
          '"Desde que me uní a PowerGym, mi vida ha cambiado completamente. Los entrenadores son profesionales y el ambiente es increíble. He logrado resultados que nunca pensé posibles."',
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        alt: "Cliente 1",
        name: "María González",
        since: "Miembro desde 2020",
      },
      {
        rating: 4.5,
        quote:
          '"El mejor gimnasio de la ciudad. Las instalaciones son impecables y siempre están limpias. Las clases de spinning son mi favorita, el instructor es muy motivador."',
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        alt: "Cliente 2",
        name: "Juan Pérez",
        since: "Miembro desde 2021",
      },
      {
        rating: 5,
        quote:
          '"El plan nutricional personalizado combinado con el entrenamiento me ha ayudado a perder 15kg en 3 meses. Estoy más saludable y feliz que nunca. ¡Gracias PowerGym!"',
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        alt: "Cliente 3",
        name: "Ana Martínez",
        since: "Miembro desde 2022",
      },
    ],
  },
  contact: {
    title: "CONTÁC",
    highlight: "TANOS",
    subtitle: "Estamos aquí para responder cualquier pregunta que tengas",
    info: [
      {
        icon: "fas fa-map-marker-alt",
        title: "Dirección",
        detail: "Calle Fitness 123, Ciudad Deportiva",
      },
      {
        icon: "fas fa-phone-alt",
        title: "Teléfono",
        detail: "+1 234 567 890",
      },
      {
        icon: "fas fa-envelope",
        title: "Email",
        detail: "info@powergym.com",
      },
      {
        icon: "fas fa-clock",
        title: "Horario",
        detail: "Lunes a Viernes: 6:00 AM - 10:00 PM",
        detailSecondary: "Sábado y Domingo: 8:00 AM - 8:00 PM",
      },
    ],
    selectOptions: [
      { value: "membresia", label: "Membresía" },
      { value: "clases", label: "Clases" },
      { value: "entrenador", label: "Entrenador Personal" },
      { value: "nutricion", label: "Asesoría Nutricional" },
      { value: "otro", label: "Otro" },
    ],
  },
  map: {
    src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.98731792453988!3d40.75798597138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  footer: {
    quickLinks: [
      { href: "#inicio", label: "Inicio" },
      { href: "#servicios", label: "Servicios" },
      { href: "#clases", label: "Clases" },
      { href: "#entrenadores", label: "Entrenadores" },
      { href: "#precios", label: "Precios" },
      { href: "#contacto", label: "Contacto" },
    ],
    hours: [
      { label: "Lunes - Viernes", value: "6:00 AM - 10:00 PM" },
      { label: "Sábado", value: "8:00 AM - 8:00 PM" },
      { label: "Domingo", value: "8:00 AM - 6:00 PM" },
    ],
    newsletter: {
      title: "Newsletter",
      description: "Suscríbete para recibir promociones y consejos fitness.",
    },
    copyright: "© 2025 PowerGym. Todos los derechos reservados.",
  },
};
