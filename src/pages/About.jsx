import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    SparklesIcon,
    CheckBadgeIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// Re-usamos las mismas variantes de animación de Home.jsx
const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: delay },
    },
});

function About() {
    return (
        <div className="w-full text-white relative">
            {/* --- FONDO DE ESTRELLAS (z-0) --- */}
            <div className="starfield absolute top-0 left-0 w-full h-full z-0">
                <div id="stars-sm" />
                <div id="stars-md" />
                <div id="stars-lg" />
            </div>

            {/* ======================================= */}
            {/* SECCIÓN 1: HERO DE "ABOUT"              */}
            {/* ======================================= */}
            <section className="relative z-10 pt-48 pb-24 text-center overflow-hidden">
                <div className="container mx-auto px-6 md:px-24">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants()}
                    >
                        <SparklesIcon className="h-16 w-16 text-velez-gold mx-auto mb-6" />
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                            Somos Creadores, Estrategas
                            <br />y Socios en tu Éxito.
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            En Rocket Core Digital, no solo construimos sitios web; creamos
                            experiencias. Creemos que cada marca tiene una historia única que
                            merece ser contada de una forma inolvidable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ======================================= */}
            {/* SECCIÓN 2: MISIÓN & VALORES             */}
            {/* ======================================= */}
            <section id="mission" className="py-24 relative z-10">
                <div className="container mx-auto px-6 md:px-24 flex flex-col md:flex-row gap-16 items-center">
                    {/* Columna Izquierda: Misión */}
                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants(0.2)}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Nuestra Misión
                        </h2>
                        <p className="text-white/80 text-lg mb-6">
                            Impulsar a marcas visionarias a alcanzar su máximo potencial en el
                            universo digital. Combinamos la creatividad humana con la precisión
                            de la tecnología para lanzar proyectos que no solo se ven bien,
                            sino que generan resultados medibles.
                        </p>
                        <p className="text-white/80 text-lg">
                            Tu éxito es nuestro combustible.
                        </p>
                    </motion.div>

                    {/* Columna Derecha: Valores (Tarjeta Flotante) */}
                    <motion.div
                        className="md:w-1/2 w-full bg-velez-blue-700/50 backdrop-blur-sm p-8 rounded-xl shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants(0.4)}
                    >
                        <h3 className="text-2xl font-semibold text-velez-gold mb-6">
                            Nuestros Valores Fundamentales
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckBadgeIcon className="h-6 w-6 text-velez-gold flex-shrink-0 mt-0.5" />
                                <span className="text-white/90">
                                    <strong className="text-white">Innovación:</strong> Nunca nos
                                    conformamos. Siempre estamos explorando nuevas fronteras.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckBadgeIcon className="h-6 w-6 text-velez-gold flex-shrink-0 mt-0.5" />
                                <span className="text-white/90">
                                    <strong className="text-white">Transparencia:</strong>
                                    Comunicación clara y honesta. Eres parte de la tripulación.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckBadgeIcon className="h-6 w-6 text-velez-gold flex-shrink-0 mt-0.5" />
                                <span className="text-white/90">
                                    <strong className="text-white">Resultados:</strong> La estética
                                    importa, pero los resultados mandan.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ======================================= */}
            {/* SECCIÓN 3: LLAMADA A LA ACCIÓN (CTA)    */}
            {/* ======================================= */}
            <section id="cta-about" className="py-32 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants()}
                >
                    <RocketLaunchIcon className="h-16 w-16 text-velez-gold mx-auto mb-6" />
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        ¿Listo para tu despegue?
                    </h2>
                    <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
                        Ya conoces nuestra historia. Ahora, déjanos ayudarte a contar la
                        tuya.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-velez-gold text-velez-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105"
                    >
                        ¡Hablemos de tu Proyecto!
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

export default About;