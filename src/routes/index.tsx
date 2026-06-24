import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Plane, Bus, Building2, Users, Shield, Compass, MapPin, Phone, Mail,
  MessageCircle, ArrowRight, Star, Check, Menu, X, Calendar, Sparkles,
  Briefcase, GraduationCap, Globe2,
} from "lucide-react";
import heroAsset from "@/assets/hero-cartagena.jpg.asset.json";
import logoAsset from "@/assets/monarco-logo.asset.json";
import destCartagenaAsset from "@/assets/dest-cartagena.jpg.asset.json";
import destMedellin from "@/assets/dest-medellin.jpg";
import destEjeCafetero from "@/assets/dest-eje-cafetero.jpg";
import destBogota from "@/assets/dest-bogota.jpg";
import destSanAndresAsset from "@/assets/dest-san-andres.jpg.asset.json";

const CDN_BASE = "https://id-preview--ef8306f5-85da-4c8e-bd16-0aec8c65cb92.lovable.app";
const toCdn = (u: string) => (u.startsWith("/__l5e/") ? CDN_BASE + u : u);
const heroImg = toCdn(heroAsset.url);
const destCartagena = toCdn(destCartagenaAsset.url);
const destSanAndres = toCdn(destSanAndresAsset.url);
const logoUrl = toCdn(logoAsset.url);
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";
import gal6 from "@/assets/gal-6.jpg";
import gal7 from "@/assets/gal-7.jpg";
import gal8 from "@/assets/gal-8.jpg";
const galleryPhotos = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monarco Viajes y Turismo — DMC Colombia | Experiencias Premium" },
      { name: "description", content: "Descubre Colombia con experiencias inolvidables. Agencia de viajes DMC con transporte, turismo receptivo, corporativo y viajes grupales. RNT 55541." },
      { property: "og:title", content: "Monarco Viajes y Turismo — DMC Colombia" },
      { property: "og:description", content: "Turismo, transporte y experiencias premium en todo el país." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const WHATSAPP = "https://wa.me/573168634645?text=Hola%20Monarco%2C%20quiero%20cotizar%20un%20viaje";
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

function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-transparent">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img src={logoAsset.url} alt="Monarco Viajes y Turismo" className="h-12 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            <a href="#nosotros" className="hover:text-secondary transition">Nosotros</a>
            <a href="#servicios" className="hover:text-secondary transition">Servicios</a>
            <a href="#destinos" className="hover:text-secondary transition">Destinos</a>
            <a href="#galeria" className="hover:text-secondary transition">Galería</a>
            <a href="#testimonios" className="hover:text-secondary transition">Testimonios</a>
            <a href="#contacto" className="hover:text-secondary transition">Contacto</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow">
            Cotizar <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden backdrop-blur-xl bg-background/80 border-t border-border/40">
            <nav className="px-6 py-5 flex flex-col gap-4 text-sm font-medium">
              {["nosotros","servicios","destinos","galeria","testimonios","contacto"].map(s => (
                <a key={s} href={`#${s}`} onClick={() => setOpen(false)} className="capitalize">{s}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cartagena Colombia al atardecer" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
                Cotizar ahora <ArrowRight className="h-4 w-4" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-4 text-sm font-bold text-white hover:bg-white/20 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="#destinos" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/40 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition">
                Ver destinos
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[["5","Destinos"],["500+","Viajeros felices"],["RNT","55541"]].map(([n,l]) => (
                <div key={l as string}>
                  <div className="text-3xl sm:text-4xl font-black text-white">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-28 px-5 sm:px-8">
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
              <img src={heroImg} alt="Cartagena colonial" className="w-full h-[560px] object-cover" loading="lazy" />
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
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-28 px-5 sm:px-8 bg-muted/40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">Servicios</div>
            <h2 className="text-4xl sm:text-5xl font-black">Soluciones turísticas a la medida</h2>
            <p className="mt-4 text-muted-foreground">Desde un traslado al aeropuerto hasta una convención corporativa: lo diseñamos todo.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Bus, title: "Transporte Especial y Turístico", items: ["Transporte empresarial y corporativo","Transfers aeropuerto–hotel","City tours","Vehículos a disposición","Traslados entre ciudades","Pasajeros de cruceros","Camionetas, vans, busetas y buses"] },
              { icon: Compass, title: "Turismo Receptivo DMC", items: ["Operación nacional en Colombia","Itinerarios curados por expertos","Cartagena, Eje Cafetero, San Andrés","Guías profesionales bilingües","Experiencias auténticas","Logística end-to-end"] },
              { icon: Briefcase, title: "Turismo Corporativo", items: ["Transporte corporativo","Reservas de alojamiento","Eventos empresariales","Convenciones y congresos","Lanzamientos de marca","Catering y bebidas"] },
              { icon: Users, title: "Viajes Grupales", items: ["Viajes vacacionales / leisure","Salidas grupales garantizadas","Incentivos empresariales","Excursiones académicas","Viajes de fin de curso"] },
              { icon: GraduationCap, title: "Académicos & Escolares", items: ["Salidas pedagógicas","Visitas a parques nacionales","Programas educativos","Acompañamiento profesional","Seguridad y respaldo"] },
              { icon: Shield, title: "Servicios Adicionales", items: ["Seguros de viaje","Guianza profesional","Turismo comunitario","Programas Cartagena & Bolívar","Asesoría 24/7"] },
            ].map(({icon: Icon, title, items}, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-3xl bg-card border border-border p-7 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <div className="h-14 w-14 rounded-2xl bg-sun grid place-items-center text-white mb-5 group-hover:scale-110 transition">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map(it => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINOS */}
      <section id="destinos" className="py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">Destinos DMC Colombia</div>
              <h2 className="text-4xl sm:text-5xl font-black">Cinco maneras de enamorarte de Colombia</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Cada destino incluye alojamiento, traslados y experiencias curadas. Personalizamos cualquier itinerario a la medida.</p>
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
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-28 px-5 sm:px-8 bg-muted/40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">Galería</div>
            <h2 className="text-4xl sm:text-5xl font-black">Momentos Monarco</h2>
            <p className="mt-4 text-muted-foreground">Playas, ciudades, tours y experiencias que cuentan historias.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galeria.map((src, i) => (
              <motion.div key={`${src}-${i}`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl group aspect-square">
                <img src={src} alt="Paisaje turístico de Colombia" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">Testimonios</div>
            <h2 className="text-4xl sm:text-5xl font-black">Lo que dicen nuestros viajeros</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-glow transition">
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_,j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-28 px-5 sm:px-8 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(circle at 20% 20%, oklch(0.7 0.19 50) 0%, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.55 0.13 215) 0%, transparent 50%)"}} />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-4">Contacto</div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">Planifiquemos tu próxima <span className="text-gradient-sun italic font-medium">aventura</span></h2>
            <p className="mt-5 text-background/70 max-w-md">Escríbenos y recibe una cotización personalizada en menos de 24 horas.</p>

            <div className="mt-10 space-y-5">
              {[
                { name: "Dionisio Iriarte Quiros", role: "Gerente General", phone: "+57 316 8634645", email: "gerente@monarcovt.com", wa: "573168634645" },
                { name: "Katrin Mendoza Martinez", role: "Directora Comercial", phone: "+57 315 6798546", email: "comercial@monarcovt.com", wa: "573156798546" },
              ].map(p => (
                <div key={p.email} className="rounded-2xl bg-background/5 backdrop-blur border border-background/10 p-6">
                  <div className="font-bold text-lg">{p.name}</div>
                  <div className="text-sm text-secondary">{p.role}</div>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <a href={`tel:${p.phone.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 text-background/80 hover:text-secondary"><Phone className="h-4 w-4" />{p.phone}</a>
                    <a href={`mailto:${p.email}`} className="inline-flex items-center gap-2 text-background/80 hover:text-secondary"><Mail className="h-4 w-4" />{p.email}</a>
                  </div>
                  <a href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-xs font-bold">
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp directo
                  </a>
                </div>
              ))}
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
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80 border-t border-background/10 px-5 sm:px-8 py-12">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logoAsset.url} alt="Monarco" className="h-14 w-auto brightness-0 invert opacity-90 mb-4" />
            <p className="text-sm max-w-md">Agencia de viajes y turismo DMC Colombia. Experiencias premium con calidez caribeña. RNT 55541.</p>
          </div>
          <div>
            <div className="font-bold text-background mb-4 text-sm">Explora</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#nosotros" className="hover:text-secondary">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-secondary">Servicios</a></li>
              <li><a href="#destinos" className="hover:text-secondary">Destinos</a></li>
              <li><a href="#galeria" className="hover:text-secondary">Galería</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-background mb-4 text-sm">Contacto</div>
            <ul className="space-y-2 text-sm">
              <li>gerente@monarcovt.com</li>
              <li>comercial@monarcovt.com</li>
              <li>+57 316 8634645</li>
              <li>Colombia · RNT 55541</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-background/10 text-xs flex flex-wrap justify-between gap-4">
          <span>© {new Date().getFullYear()} Monarco Viajes y Turismo. Todos los derechos reservados.</span>
          <span>Hecho con orgullo en Colombia 🇨🇴</span>
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
