// 1. Importa useState, useEffect y AnimatePresence
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react"; // <-- IMPORTANTE
import {
  ArrowDownCircleIcon,
  MegaphoneIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  BoltIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  CheckBadgeIcon, // (Importado para el modal)
} from "@heroicons/react/24/outline";
import Rocket3D from "../components/Rocket3D";
import ServiceModal from "../components/ServiceModal"; // <-- IMPORTA EL MODAL

// 2. Define los datos de los servicios
const servicesData = [
  {
    key: "social",
    icon: MegaphoneIcon,
    title: "Redes Sociales",
    description: "Gestión, estrategia de contenido y campañas de anuncios.",
    details: [
      "Auditoría completa de marca y competencia.",
      "Creación de calendarios de contenido (Grids y Copywriting).",
      "Gestión de campañas de pago (Facebook & Instagram Ads).",
      "Análisis de métricas y reportes mensuales de rendimiento.",
    ],
  },
  {
    key: "web",
    icon: ComputerDesktopIcon,
    title: "Soluciones Web",
    description: "Diseño y desarrollo de sitios web modernos y rápidos.",
    details: [
      "Diseño de interfaz de usuario (UI/UX) centrado en la conversión.",
      "Desarrollo con tecnologías modernas (React, Vite, Next.js).",
      "Optimización de velocidad (Core Web Vitals).",
      "Integración con CMS y plataformas de E-commerce.",
    ],
  },
  {
    key: "seo",
    icon: MagnifyingGlassIcon,
    title: "SEO & Marketing",
    description: "Posicionamos tu marca y creamos embudos de venta.",
    details: [
      "Investigación de Palabras Clave (Keyword Research).",
      "Optimización On-Page y SEO Técnico.",
      "Estrategias de Link Building y Marketing de Contenidos.",
      "Configuración y seguimiento con Google Analytics y Search Console.",
    ],
  },
];

function Home() {
  // 3. Define el estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 4. Efecto para bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Función de limpieza
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // --- (Las variantes de animación no cambian) ---
  const heroContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: i * 0.2 },
    }),
  };
  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    // 5. Agrega 'relative' aquí para que el modal 'fixed' funcione bien
    <div className="w-full text-white relative">
      {/* --- FONDO DE ESTRELLAS (z-0) --- */}
      <div className="starfield absolute top-0 left-0 w-full h-full z-0">
        <div id="stars-sm" />
        <div id="stars-md" />
        <div id="stars-lg" />
      </div>

      {/* --- SECCIÓN 1: HERO (z-10) --- */}
      <section className="h-screen w-full flex flex-col md:flex-row items-center relative overflow-hidden">
        {/* ... (Contenido del Hero sin cambios) ... */}
        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 px-6 md:px-24"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Tu Socio Estratégico en
            <br />
            <span className="text-velez-gold">Marketing Digital</span>
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="text-lg text-white/90 max-w-xl mb-10"
          >
            Desde la gestión de redes sociales hasta soluciones web a medida.
            Hacemos que tu marca despegue. 🚀
          </motion.p>
          <motion.div variants={heroItemVariants}>
            <Link
              to="/contact"
              className="bg-velez-gold text-velez-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Comienza tu Proyecto
            </Link>
          </motion.div>
        </motion.div>
        <div className="hidden md:block md:w-1/2 md:h-full z-10">
          <Rocket3D />
        </div>
        <motion.a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20
                     text-white/70 hover:text-velez-gold transition-colors duration-300
                     flex items-center justify-center p-2 rounded-full border-2 border-white/50 hover:border-velez-gold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 300 }}
        >
          <ArrowDownCircleIcon className="h-10 w-10" />
        </motion.a>
      </section>

      {/* --- SECCIÓN 2: SERVICIOS (z-10) --- */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6 md:px-24 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants()}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants(0.2)}
          >
            Soluciones integrales para asegurar tu presencia en línea.
          </motion.p>

          {/*
            * ===========================================
            * CAMBIO CLAVE: Grid de Servicios Dinámico
            * Mapeamos sobre el array 'servicesData'
            * ===========================================
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.key}
                className="bg-velez-blue-700/50 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-velez-gold/20 transition-all duration-300 cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants(0.3 + index * 0.1)} // Delay escalonado
                onClick={() => openModal(service)} // <-- ABRE EL MODAL
              >
                <service.icon className="h-12 w-12 text-velez-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-velez-gold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: NUESTRO PROCESO (z-10) --- */}
      <section id="process" className="py-24 relative z-10">
        {/* ... (Contenido de la Sección 3 sin cambios) ... */}
        <div className="container mx-auto px-6 md:px-24 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants()}
          >
            Nuestro Proceso de Despegue
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants(0.2)}
          >
            Seguimos 4 fases clave para garantizar el éxito de tu proyecto.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(0.3)}
            >
              <div className="mb-4">
                <div className="w-24 h-24 bg-velez-blue-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <BeakerIcon className="h-12 w-12 text-velez-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Descubrir</h3>
              <p className="text-white/80">
                Analizamos tu marca, objetivos y competencia.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(0.5)}
            >
              <div className="mb-4">
                <div className="w-24 h-24 bg-velez-blue-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <ClipboardDocumentListIcon className="h-12 w-12 text-velez-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Definir</h3>
              <p className="text-white/80">
                Creamos un plan de acción y una hoja de ruta clara.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(0.7)}
            >
              <div className="mb-4">
                <div className="w-24 h-24 bg-velez-blue-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <BoltIcon className="h-12 w-12 text-velez-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Ejecutar</h3>
              <p className="text-white/80">
                Diseñamos, creamos contenido y desarrollamos tu web.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(0.9)}
            >
              <div className="mb-4">
                <div className="w-24 h-24 bg-velez-blue-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <RocketLaunchIcon className="h-12 w-12 text-velez-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Lanzar</h3>
              <p className="text-white/80">
                ¡Todo listo! Tu proyecto despega y medimos resultados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ======================================= */}
      {/* SECCIÓN 4: TESTIMONIOS                  */}
      {/* ======================================= */}
      <section id="testimonials" className="py-24 relative z-10">
        <div className="container mx-auto px-6 md:px-24 text-center">
          {/* Titular */}
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants()}
          >
            Lo Que Dicen Nuestros Clientes
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-white/80 max-w-xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants(0.2)}
          >
            Nuestra mayor satisfacción es el éxito de quienes confían en nosotros.
          </motion.p>

          {/* Grid de Testimonios (2 columnas en desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Testimonio 1 */}
            <motion.div
              className="bg-velez-blue-700/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(0.3)}
            >
              <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-velez-gold mb-4" />
              <p className="text-white text-lg italic mb-6">
                "El equipo de Rocket Core transformó nuestra presencia online. El
                nuevo sitio web y su estrategia de redes sociales duplicaron
                nuestros leads en 3 meses."
              </p>
              <div className="flex items-center gap-3">
                {/* Puedes añadir una imagen aquí si quieres <img ... /> */}
                <div className="w-12 h-12 bg-velez-gold rounded-full flex items-center justify-center font-bold text-velez-blue-700 text-xl">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-white">Juan Silva</h4>
                  <p className="text-white/70">CEO de TechSolutions</p>
                </div>
                <div className="flex ml-auto">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </motion.div>

            {/* Testimonio 2 */}
            <motion.div
              className="bg-velez-blue-700/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(0.5)}
            >
              <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-velez-gold mb-4" />
              <p className="text-white text-lg italic mb-6">
                "Increíble atención al detalle. Entendieron
                nuestra marca a la perfección y el cohete 3D que
                propusieron es simplemente espectacular. 100% recomendados."
              </p>
              <div className="flex items-center gap-3">
                {/* Puedes añadir una imagen aquí si quieres <img ... /> */}
                <div className="w-12 h-12 bg-velez-gold rounded-full flex items-center justify-center font-bold text-velez-blue-700 text-xl">
                  MA
                </div>
                <div>
                  <h4 className="font-bold text-white">Maria Aguilera</h4>
                  <p className="text-white/70">Fundadora de Nova Estudio</p>
                </div>
                <div className="flex ml-auto">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/*
        * ===========================================
        * CAMBIO CLAVE: Renderizado del Modal
        * Usamos AnimatePresence para animar la salida
        * ===========================================
      */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <ServiceModal service={selectedService} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;