import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Plane, Bus, Building2, Users, Shield, Compass, MapPin, Phone, Mail,
  MessageCircle, ArrowRight, Star, Check, Menu, X, Calendar, Sparkles,
  Briefcase, GraduationCap, Globe2,
} from "lucide-react";
import heroImg from "@/assets/hero-cartagena.jpg";
import heroImgIndias from "@/assets/hero-cartagena-indias.jpg";
import logoUrl from "@/assets/monarco-logo.png";
import destCartagena from "@/assets/dest-cartagena.jpg";
import destMedellin from "@/assets/dest-medellin.jpg";
import destEjeCafetero from "@/assets/dest-eje-cafetero.jpg";
import destBogota from "@/assets/dest-bogota.jpg";
import destSanAndres from "@/assets/dest-san-andres.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";
import gal6 from "@/assets/gal-6.jpg";
import gal7 from "@/assets/gal-7.jpg";
import gal8 from "@/assets/gal-8.jpg";
const galleryPhotos = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];


// Dominio de producción. Se usa para construir URLs absolutas (OG/canonical),
// que es lo que exigen los scrapers de WhatsApp/Facebook/Twitter.
const SITE_URL = "https://monarcovt.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monarco Viajes y Turismo — DMC Colombia | Experiencias Premium" },
      { name: "description", content: "Descubre Colombia con experiencias inolvidables. Agencia de viajes DMC con transporte, turismo receptivo, corporativo y viajes grupales. RNT 55541." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:title", content: "Monarco Viajes y Turismo — DMC Colombia" },
      { property: "og:description", content: "Turismo, transporte y experiencias premium en todo el país." },
      { property: "og:image", content: SITE_URL + heroImg },
      { name: "twitter:image", content: SITE_URL + heroImg },
    ],
  }),
  component: HomePage,
});

const WHATSAPP = "https://wa.me/573156798546?text=Hola%20Monarco%2C%20quiero%20cotizar%20un%20viaje";
const WHATSAPP_FLOTANTE = "https://wa.me/573156798546?text=Hola%20Monarco%2C%20quiero%20cotizar%20un%20viaje";

const destinos = [
  {
    name: "Cartagena", tag: "Ciudad Amurallada",
    img: destCartagena,
    activities: ["Alojamiento 3 Noches – 4 Días", "Traslado Aeropuerto – Hotel – Aeropuerto", "City Tour Cultural", "Full Day a Islas del Rosario", "Paseo Nocturno por la Bahía"],
  },
  {
    name: "Medellín", tag: "Ciudad de la Eterna Primavera",
    img: destMedellin,
    activities: ["Alojamiento 3 Noches – 4 Días", "Traslado Aeropuerto – Hotel – Aeropuerto", "Visita a la Ciudad", "Full Day a Peñol y Guatapé"],
  },
  {
    name: "Eje Cafetero", tag: "Paisaje Cultural Cafetero",
    img: destEjeCafetero,
    activities: ["Alojamiento 3 Noches – 4 Días", "Traslado Aeropuerto – Hotel – Aeropuerto", "Filandia, Valle del Cocora y Salento", "Recorrido cultura cafetera (RECUCA)", "Parque del Café", "Termales de Santa Rosa de Cabal"],
  },
  {
    name: "Bogotá", tag: "Capital Andina",
    img: destBogota,
    activities: ["Alojamiento 3 Noches – 4 Días", "Traslado Aeropuerto – Hotel – Aeropuerto", "Visita a la Ciudad", "Full Day a Catedral de Sal de Zipaquirá"],
  },
  {
    name: "San Andrés Islas", tag: "Mar de los Siete Colores",
    img: destSanAndres,
    activities: ["Alojamiento 3 Noches – 4 Días", "Traslado Aeropuerto – Hotel – Aeropuerto", "Vuelta a la Isla", "Full Day a Johnny Cay", "Tour Bahía Diurno"],
  },
];

const galeria = galleryPhotos;

const testimonios = [
  { name: "Laura Restrepo", role: "Viajera Cartagena", text: "El servicio fue impecable desde el aeropuerto hasta el último día. Las Islas del Rosario fueron mágicas. ¡100% recomendados!" },
  { name: "Carlos Mendoza", role: "Director de RRHH, Bavaria", text: "Organizaron nuestra convención corporativa en Medellín con un nivel de detalle excepcional. Logística perfecta." },
  { name: "Sofía & familia", role: "Eje Cafetero", text: "Cada experiencia superó nuestras expectativas. Los guías son expertos y el trato muy cálido. Volveremos sin dudarlo." },
];


function StatCard({ prefix = "", num, suffix = "", label, desc, delay }: {
  prefix?: string; num: number; suffix?: string; label: string; desc: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, num, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="rounded-2xl bg-background/5 border border-background/10 p-7 lg:p-9 hover:bg-background/10 transition-colors duration-300"
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-secondary leading-none">
        {prefix}{count.toLocaleString("es-CO")}{suffix}
      </div>
      <div className="mt-5 h-0.5 w-12 bg-secondary/50" />
      <div className="mt-5 font-bold text-background text-lg">{label}</div>
      <p className="mt-2 text-sm text-background/55 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function HomePage() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("inicio");

  const navigate = (section: string) => {
    setView(section);
    setOpen(false);
    window.scrollTo({ top: 0 });
  };

  const navLinks = [
    { key: "inicio", label: "Inicio" },
    { key: "nosotros", label: "Nosotros" },
    { key: "servicios", label: "Servicios" },
    { key: "destinos", label: "Destinos" },
    { key: "galeria", label: "Galería" },
    { key: "testimonios", label: "Testimonios" },
    { key: "contacto", label: "Contacto" },
  ];

  const isHero = view === "inicio";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${isHero ? "bg-transparent" : "bg-background/95 shadow-sm border-b border-border/40"}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
          <button onClick={() => navigate("inicio")} className="flex items-center gap-2 shrink-0">
            <img src={logoUrl} alt="Monarco Viajes y Turismo" className="h-12 w-auto" />
          </button>
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-semibold ${isHero ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" : "text-foreground"}`}>
            {navLinks.map(({ key, label }) => (
              <button key={key} onClick={() => navigate(key)}
                className={`hover:text-primary transition ${view === key ? "text-primary" : ""}`}>
                {label}
              </button>
            ))}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow">
            Cotizar <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden backdrop-blur-xl bg-background/95 border-t border-border/40">
            <nav className="px-6 py-5 flex flex-col gap-4 text-sm font-medium">
              {navLinks.map(({ key, label }) => (
                <button key={key} onClick={() => navigate(key)}
                  className={`text-left capitalize hover:text-primary transition ${view === key ? "text-primary font-bold" : ""}`}>
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO + STATS — solo en inicio */}
      {isHero && <>
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cartagena de Indias Colombia" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: "contrast(1.12) saturate(1.15) brightness(1.04)" }} width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[oklch(0.18_0.03_50)] to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs font-semibold text-white border border-white/20 mb-6">
              <Sparkles className="h-3.5 w-3.5" /> DMC COLOMBIA · RNT 55541
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Descubre Colombia con <span className="text-gradient-sun italic font-medium">experiencias inolvidables</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
              Turismo, transporte y experiencias premium en todo el país. Diseñamos cada viaje con detalle, calidez caribeña y la confianza de una agencia colombiana.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => navigate("contacto")} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
                Cotizar ahora <ArrowRight className="h-4 w-4" />
              </button>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/60 px-7 py-4 text-sm font-bold text-white hover:bg-white/35 hover:border-white/80 transition shadow-[0_2px_16px_rgba(0,0,0,0.25)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <button onClick={() => navigate("destinos")} className="inline-flex items-center gap-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/70 px-7 py-4 text-sm font-bold text-secondary hover:bg-secondary/35 hover:border-secondary transition shadow-[0_2px_16px_rgba(0,0,0,0.25)]">
                Ver destinos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAND — parte del inicio */}
      <section className="py-24 px-5 sm:px-8 bg-foreground text-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 text-secondary text-xs font-bold uppercase tracking-[0.28em] mb-6">
                <div className="h-px w-8 bg-secondary" /> Nuestro Alcance
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-background leading-[1.05]">
                El valor de cada <span className="text-secondary italic font-medium">viaje</span>
              </h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-background/60 text-lg leading-relaxed lg:pb-2">
              Más que números, estas cifras representan la confianza de cada viajero que eligió descubrir Colombia con Monarco — con calidez, detalle y vocación de servicio.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard prefix="+" num={5}     suffix=""  label="Destinos"           desc="Cartagena, Medellín, Bogotá, Eje Cafetero, San Andrés y más destinos únicos por descubrir en Colombia." delay={0} />
            <StatCard prefix=""  num={500}   suffix="+" label="Viajeros Felices"   desc="Familias, empresas y grupos que eligieron Monarco para vivir Colombia a fondo." delay={0.12} />
            <StatCard prefix="+" num={5}     suffix=""  label="Años de Trayectoria" desc="Construyendo experiencias únicas con dedicación, calidez y vocación de servicio." delay={0.24} />
            <StatCard prefix=""  num={55541} suffix=""  label="RNT"                desc="Registro Nacional de Turismo avalado por el Ministerio de Comercio, Industria y Turismo de Colombia." delay={0.36} />
          </div>
        </div>
      </section>

      </>}

      {/* NOSOTROS */}
      {view === "nosotros" && <section className="pt-28 pb-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">Quiénes somos</div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Una agencia nacida del orgullo por <span className="text-gradient-sun italic font-medium">Colombia</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Monarco Viajes y Turismo nace del orgullo sentido por la región Caribe y nuestro país. Especializada en crear experiencias turísticas innovadoras, ágiles y personalizadas, ofrecemos servicios de alta calidad para viajeros nacionales e internacionales.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Estamos legalmente constituidos con Registro Nacional de Turismo N° <strong className="text-foreground">55541</strong> otorgado por el Ministerio de Comercio, Industria y Turismo de Colombia.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, t: "RNT 55541", d: "Legalmente constituidos" },
                { icon: Star, t: "Atención personalizada", d: "Cada detalle cuenta" },
                { icon: Globe2, t: "Turismo nacional & internacional", d: "Cobertura DMC" },
                { icon: Compass, t: "Experiencia comprobada", d: "Confianza y respaldo" },
              ].map(({icon: Icon, t, d}) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-sun grid place-items-center text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm">{t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img src={heroImgIndias} alt="Cartagena colonial" className="w-full h-[560px] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background border border-border p-5 shadow-glow max-w-[260px]">
              <div className="flex items-center gap-1 text-secondary mb-1">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm font-semibold">"Una experiencia 5 estrellas en Colombia."</p>
              <p className="text-xs text-muted-foreground mt-1">— Viajeros 2025</p>
            </div>
          </motion.div>
        </div>

        {/* Stats band */}
        <div className="mt-20 -mx-5 sm:-mx-8 bg-foreground px-5 sm:px-8 py-16">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard prefix="+" num={5}     suffix=""  label="Destinos"            desc="Cartagena, Medellín, Bogotá, Eje Cafetero, San Andrés y más." delay={0}    />
            <StatCard prefix=""  num={500}   suffix="+" label="Viajeros Felices"    desc="Familias, empresas y grupos que eligieron Monarco." delay={0.12} />
            <StatCard prefix="+" num={5}     suffix=""  label="Años de Trayectoria" desc="Construyendo experiencias con dedicación y calidez." delay={0.24} />
            <StatCard prefix=""  num={55541} suffix=""  label="RNT"                 desc="Avalados por el Ministerio de Comercio, Industria y Turismo." delay={0.36} />
          </div>
        </div>
      </section>}

      {/* SERVICIOS */}
      {view === "servicios" && <section className="pt-28 pb-28 px-5 sm:px-8 bg-background text-foreground relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-primary mb-6">Lo que hacemos</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.05]">
                Soluciones a la <span className="text-gradient-sun italic font-medium">medida</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:pb-2">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Desde un traslado al aeropuerto hasta una convención corporativa de alto nivel: diseñamos cada experiencia con detalle, calidez y profesionalismo.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary/60 text-secondary px-6 py-3 text-sm font-bold hover:bg-secondary hover:text-secondary-foreground transition">
                Cotizar servicio <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Bus,          title: "Transporte Especial y Turístico", items: ["Transporte empresarial y corporativo","Transfers aeropuerto–hotel","City tours","Vehículos a disposición","Traslados entre ciudades","Pasajeros de cruceros","Camionetas, vans, busetas y buses"] },
              { icon: Compass,      title: "Turismo Receptivo DMC",           items: ["Operación nacional en Colombia","Itinerarios curados por expertos","Cartagena, Eje Cafetero, San Andrés","Guías profesionales bilingües","Experiencias auténticas","Logística end-to-end"] },
              { icon: Briefcase,    title: "Turismo Corporativo",             items: ["Transporte corporativo","Reservas de alojamiento","Eventos empresariales","Convenciones y congresos","Lanzamientos de marca","Catering y bebidas"] },
              { icon: Users,        title: "Viajes Grupales",                 items: ["Viajes vacacionales / leisure","Salidas grupales garantizadas","Incentivos empresariales","Excursiones académicas","Viajes de fin de curso"] },
              { icon: GraduationCap,title: "Académicos & Escolares",          items: ["Salidas pedagógicas","Visitas a parques nacionales","Programas educativos","Acompañamiento profesional","Seguridad y respaldo"] },
              { icon: Shield,       title: "Servicios Adicionales",           items: ["Seguros de viaje","Guianza profesional","Turismo comunitario","Programas Cartagena & Bolívar","Asesoría 24/7"] },
            ].map(({ icon: Icon, title, items }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group relative rounded-2xl border border-foreground/10 bg-foreground p-8 hover:border-secondary/40 transition-all duration-300 overflow-hidden">

                {/* Ícono */}
                <div className="relative h-13 w-13 rounded-xl border border-secondary/30 bg-secondary/10 grid place-items-center text-secondary mb-6 group-hover:bg-secondary/20 transition">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Título + separador */}
                <h3 className="text-lg font-bold text-background mb-3 leading-snug">{title}</h3>
                <div className="h-px w-10 bg-secondary/40 mb-5 group-hover:w-16 transition-all duration-300" />

                {/* Lista */}
                <ul className="space-y-2">
                  {items.map(it => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-background/55">
                      <div className="h-1 w-1 rounded-full bg-secondary/60 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>}

      {/* DESTINOS */}
      {view === "destinos" && <section className="pt-28 pb-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-primary mb-6">Destinos DMC Colombia</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.05]">
                Cinco maneras de enamorarte de <span className="text-gradient-sun italic font-medium">Colombia</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="relative pl-6 border-l-2 border-primary/40 lg:pb-2">
              <span className="absolute -top-5 -left-2 text-7xl text-primary/20 font-serif leading-none select-none">"</span>
              <p className="text-foreground/85 text-lg leading-relaxed font-medium italic">
                Cada destino incluye alojamiento, traslados y experiencias curadas a la medida.
              </p>
              <p className="mt-3 text-muted-foreground text-sm tracking-wide">Personalizamos cualquier itinerario según tus intereses y fechas.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {destinos.map((d, i) => (
              <motion.article key={d.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-glow transition-all duration-500 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="text-xs uppercase tracking-widest text-white/80">{d.tag}</div>
                    <h3 className="text-3xl font-black text-white">{d.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" /> Plan incluye
                  </div>
                  <ul className="space-y-2 flex-1">
                    {d.activities.map(a => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`${WHATSAPP}%20-%20${encodeURIComponent(d.name)}`} target="_blank" rel="noopener"
                    className="mt-6 inline-flex items-center justify-between rounded-full bg-foreground text-background px-5 py-3 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition">
                    Cotizar {d.name} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>}

      {/* GALERÍA */}
      {view === "galeria" && <section className="pt-28 pb-28 px-5 sm:px-8 bg-background">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-primary mb-6">Galería</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.05]">
                Momentos que <span className="text-gradient-sun italic font-medium">inspiran</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="relative pl-6 border-l-2 border-primary/40 lg:pb-2">
              <span className="absolute -top-5 -left-2 text-7xl text-primary/20 font-serif leading-none select-none">"</span>
              <p className="text-foreground/85 text-xl sm:text-2xl leading-relaxed font-medium italic">
                Cada imagen es un destino, una experiencia y una historia real vivida con Monarco.
              </p>
              <p className="mt-3 text-muted-foreground text-sm tracking-wide">Colombia tiene mil colores — aquí están algunos.</p>
            </motion.div>
          </div>

          {/* Grid bento */}
          {(() => {
            const lugares = [
              "Cartagena de Indias", "Guatapé, Antioquia", "Valle del Cocora",
              "San Andrés Islas", "Costa Caribe", "Eje Cafetero", "Bogotá", "Colombia"
            ];
            const Photo = ({ src, label, className, delay }: { src: string; label: string; className?: string; delay: number }) => (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay }}
                className={`overflow-hidden rounded-2xl group relative ${className}`}>
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            );
            return (
              <div className="grid grid-cols-4 grid-rows-2 gap-4" style={{ height: "560px" }}>
                <Photo src={galeria[0]} label={lugares[0]} className="col-span-2 row-span-2" delay={0} />
                <Photo src={galeria[1]} label={lugares[1]} className="col-span-1" delay={0.08} />
                <Photo src={galeria[2]} label={lugares[2]} className="col-span-1" delay={0.12} />
                <Photo src={galeria[3]} label={lugares[3]} className="col-span-1" delay={0.16} />
                <Photo src={galeria[4]} label={lugares[4]} className="col-span-1" delay={0.20} />
              </div>
            );
          })()}

          {/* Segunda fila */}
          {(() => {
            const lugares = ["Costa Caribe", "Eje Cafetero", "Bogotá"];
            const Photo = ({ src, label, className, delay }: { src: string; label: string; className?: string; delay: number }) => (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay }}
                className={`overflow-hidden rounded-2xl group relative aspect-[4/3] ${className}`}>
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            );
            return (
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Photo src={galeria[5]} label={lugares[0]} delay={0.05} />
                <Photo src={galeria[6]} label={lugares[1]} delay={0.1} />
                <Photo src={galeria[7]} label={lugares[2]} delay={0.15} />
              </div>
            );
          })()}

          {/* CTA interno */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mt-16 rounded-3xl bg-foreground text-background px-8 sm:px-14 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-secondary text-xs font-bold uppercase tracking-[0.28em] mb-4">
                <div className="h-px w-6 bg-secondary" /> Tu próxima historia
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-background leading-tight">
                ¿Listo para crear recuerdos <span className="text-secondary italic font-medium">inolvidables</span> en Colombia?
              </h3>
              <p className="mt-3 text-background/55 text-sm leading-relaxed">
                Diseñamos tu viaje a la medida — con calidez caribeña, atención al detalle y la confianza de una agencia certificada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={WHATSAPP} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 text-sm font-bold hover:opacity-90 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <button onClick={() => navigate("contacto")}
                className="inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-7 py-3.5 text-sm font-bold hover:bg-background/10 transition">
                Cotizar viaje <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>}

      {/* TESTIMONIOS */}
      {view === "testimonios" && <section className="pt-28 pb-28 px-5 sm:px-8 bg-background">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-primary mb-6">Testimonios</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.05]">
                Lo que dicen nuestros <span className="text-gradient-sun italic font-medium">viajeros</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="relative pl-6 border-l-2 border-primary/40 lg:pb-2">
              <span className="absolute -top-5 -left-2 text-7xl text-primary/20 font-serif leading-none select-none">"</span>
              <p className="text-foreground/85 text-lg leading-relaxed font-medium italic">
                Cada experiencia es única y cada viajero merece ser escuchado.
              </p>
              <p className="mt-3 text-muted-foreground text-sm tracking-wide">Estas son algunas de las historias que nos llenan de orgullo.</p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-foreground/10 bg-foreground p-8 hover:border-secondary/40 transition-all duration-300 overflow-hidden">
                <div className="flex gap-1 text-secondary mb-5">
                  {[...Array(5)].map((_,j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-background/80 leading-relaxed text-sm">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-background/10">
                  <div className="h-px w-10 bg-secondary/40 mb-4 group-hover:w-16 transition-all duration-300" />
                  <div className="font-bold text-background">{t.name}</div>
                  <div className="text-xs text-background/50 mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>}

      {/* CONTACTO */}
      {view === "contacto" && <section className="pt-28 pb-28 px-5 sm:px-8 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(circle at 20% 20%, oklch(0.7 0.19 50) 0%, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.55 0.13 215) 0%, transparent 50%)"}} />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-4">Contacto</div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">Planifiquemos tu próxima <span className="text-gradient-sun italic font-medium">aventura</span></h2>
            <p className="mt-5 text-background/70 max-w-md">Escríbenos y recibe una cotización personalizada en menos de 24 horas.</p>

            <div className="mt-10">
              <div className="rounded-2xl bg-background/5 backdrop-blur border border-background/10 p-6">
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href="tel:+573156798546" className="inline-flex items-center gap-2 text-background/80 hover:text-secondary"><Phone className="h-4 w-4" />+57 315 6798546</a>
                  <a href="mailto:reservas@monarcovt.com" className="inline-flex items-center gap-2 text-background/80 hover:text-secondary"><Mail className="h-4 w-4" />reservas@monarcovt.com</a>
                </div>
                <a href="https://wa.me/573156798546" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-xs font-bold">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp directo
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-background/70">
              <MapPin className="h-4 w-4 text-secondary" /> Colombia · DMC con cobertura nacional
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }} className="rounded-3xl bg-background text-foreground p-8 shadow-glow">
            <h3 className="text-2xl font-bold mb-1">Cotiza tu viaje</h3>
            <p className="text-sm text-muted-foreground mb-6">Cuéntanos sobre tu plan ideal.</p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nombre completo" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:border-primary outline-none transition" />
                <input required type="email" placeholder="Email" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:border-primary outline-none transition" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Teléfono / WhatsApp" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:border-primary outline-none transition" />
                <select className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:border-primary outline-none transition">
                  <option>Destino de interés</option>
                  {destinos.map(d => <option key={d.name}>{d.name}</option>)}
                  <option>Otro / Múltiples</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Cuéntanos sobre tu viaje (fechas, número de personas, intereses)…" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:border-primary outline-none transition resize-none" />
              <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-4 font-bold text-sm hover:opacity-90 transition shadow-glow inline-flex items-center justify-center gap-2">
                Enviar cotización <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">Al enviar serás redirigido a WhatsApp para finalizar tu solicitud.</p>
            </div>
          </form>
        </div>
      </section>}

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80 px-5 sm:px-8 pt-14 pb-8">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10 pb-10">

          {/* Col 1 — Logo + descripción */}
          <div className="md:col-span-2">
            <img src={logoUrl} alt="Monarco" className="h-14 w-auto brightness-0 invert opacity-90 mb-4" />
            <p className="text-sm italic text-background/70 leading-relaxed mb-4 max-w-xs">
              Turismo, transporte y experiencias premium en todo Colombia. Calidez caribeña y confianza de una agencia local.
            </p>
            <p className="text-sm font-bold text-background">Monarco Viajes y Turismo</p>
            <p className="text-xs text-background/50 mt-1">RNT: 55541 · Colombia</p>
          </div>

          {/* Col 2 — Explora */}
          <div>
            <div className="font-bold text-background mb-4 text-sm">Explora</div>
            <ul className="space-y-2 text-sm">
              {[["nosotros","Nosotros"],["servicios","Servicios"],["destinos","Destinos"],["galeria","Galería"],["testimonios","Testimonios"],["contacto","Contacto"]].map(([k,l]) => (
                <li key={k}><button onClick={() => navigate(k)} className="hover:text-secondary transition">{l}</button></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto + redes */}
          <div>
            <div className="font-bold text-background mb-4 text-sm">Contacto</div>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Correo electrónico</p>
                <span>reservas@monarcovt.com</span>
              </li>
              <li>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Teléfono</p>
                <span>+57 315 6798546</span>
              </li>
              <li>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Código RNT</p>
                <span>55541 · Colombia</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Síguenos en nuestras redes sociales</p>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://www.instagram.com/monarcovt?igsh=NzA2MDJ1ZDV3dDMw", label: "Instagram", icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )},
                  { href: "https://www.facebook.com/share/18v6b2yWyr/", label: "Facebook", icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  )},
                  { href: "https://www.tiktok.com/@monarcovt?_r=1&_t=ZS-97ljtS0Eq3x", label: "TikTok", icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                    </svg>
                  )},
                  { href: "https://wa.me/573156798546?text=Hola%20Monarco%2C%20quiero%20cotizar%20un%20viaje", label: "WhatsApp", icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.571a.5.5 0 0 0 .608.663l5.9-1.528A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.36-.214-3.733.967.997-3.617-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1S21.9 6.534 21.9 12 17.466 21.9 12 21.9z"/>
                    </svg>
                  )},
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="h-10 w-10 rounded-full bg-background/10 hover:bg-secondary hover:text-foreground flex items-center justify-center text-background/70 transition-colors duration-200">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mx-auto max-w-7xl border-t border-background/10 pt-6 text-xs text-center space-y-2">
          <p className="text-secondary font-semibold tracking-wide">Diseñado y desarrollado por Eliecer Gomez</p>
          <p>© {new Date().getFullYear()} Monarco Viajes y Turismo. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a href={WHATSAPP_FLOTANTE} target="_blank" rel="noopener" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full grid place-items-center text-white shadow-glow hover:scale-110 transition"
        style={{ background: "#25D366" }}>
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
      </a>
    </div>
  );
}
