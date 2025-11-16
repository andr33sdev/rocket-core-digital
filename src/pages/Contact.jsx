import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import ContactForm from "../components/ContactForm";

function Contact() {
    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2, type: "spring" },
        },
    };

    return (
        /*
          * ===========================================
          * CAMBIO CLAVE: Contenedor Raíz
          * 'h-screen' fuerza la altura al 100%
          * 'overflow-hidden' prohíbe el scroll de la PÁGINA
          * ===========================================
        */
        <div className="w-full text-white relative h-screen overflow-hidden">
            <div className="starfield absolute top-0 left-0 w-full h-full z-0">
                <div id="stars-sm" />
                <div id="stars-md" />
                <div id="stars-lg" />
            </div>

            {/*
        * ===========================================
        * CAMBIO CLAVE: Contenedor de Contenido
        * Ajustamos padding para centrarlo mejor
        * 'h-full' para que use toda la altura
        * ===========================================
      */}
            <div className="relative z-10 flex items-center justify-center w-full h-full pt-10 px-6">

                {/*
          * ===========================================
          * CAMBIO CLAVE: Tarjeta de Contacto
          * 'max-h-full' -> la tarjeta no puede ser más alta que el contenedor
          * 'overflow-y-auto' -> si el contenido es más alto, la TARJETA hace scroll
          * ===========================================
        */}
                <motion.div
                    className="w-full max-w-lg bg-velez-blue-700/50 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg text-center max-h-full overflow-y-auto"
                    variants={cardVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <EnvelopeIcon className="h-16 w-16 text-velez-gold mx-auto mb-6" />

                    <h1 className="text-4xl font-extrabold text-white mb-4">
                        ¡Hablemos!
                    </h1>

                    <p className="text-white/80 mb-8">
                        ¿Listo para despegar? Completa el formulario y nos
                        pondremos en contacto
                    </p>

                    <ContactForm />

                    <p className="text-white/80 mt-8 text-sm">
                        O contáctanos directamente a{" "}
                        <a
                            href="mailto:contact@rocketcoredigital.com"
                            className="font-semibold text-velez-gold hover:text-yellow-400 transition-colors"
                        >
                            contact@rocketcoredigital.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;