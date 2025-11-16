import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Importa Link aquí

// 1. Animación del Fondo (Backdrop)
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

// 2. Animación del Modal (Deslizándose desde abajo)
const modalVariants = {
    hidden: { opacity: 0, y: "10%" }, // Empieza 10% abajo
    visible: {
        opacity: 1,
        y: "0%",
        transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
    },
    exit: { opacity: 0, y: "10%", transition: { duration: 0.2 } },
};

// 3. Animación en Cascada (Stagger) para el CONTENIDO
const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2, // Empieza después de que el modal aparezca
            staggerChildren: 0.07, // 0.07s entre cada item
        },
    },
};

// 4. Animación de cada item del contenido
const contentItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

function ServiceModal({ service, closeModal }) {
    // Evita que el clic en el modal cierre el modal (solo el fondo)
    const handleModalClick = (e) => e.stopPropagation();

    return (
        // El Fondo (Backdrop)
        <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
        >
            {/* La Ventana del Modal */}
            <motion.div
                className="w-full max-w-2xl bg-velez-blue-700/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-velez-gold/20 overflow-hidden
                   border-t-4 border-velez-gold max-h-[90vh] flex flex-col" // <-- 3. Estilo Premium
                variants={modalVariants}
                // initial, animate y exit son heredados de AnimatePresence en Home.jsx
                onClick={handleModalClick}
            >
                {/* Contenedor de Contenido (para el scroll interno) */}
                <div className="overflow-y-auto">
                    {/* Botón de Cerrar (Mejorado) */}
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                    >
                        <XMarkIcon className="h-7 w-7" />
                    </button>

                    {/* * ===========================================
            * CONTENEDOR DE ANIMACIÓN EN CASCADA
            * ===========================================
          */}
                    <motion.div
                        variants={contentContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Encabezado del Modal (con ícono y título) */}
                        <motion.div
                            className="p-8 md:p-12 pb-6 flex items-center gap-5"
                            variants={contentItemVariants}
                        >
                            <div className="flex-shrink-0 w-20 h-20 bg-velez-blue-700/50 rounded-full flex items-center justify-center shadow-inner border border-white/10">
                                <service.icon className="h-10 w-10 text-velez-gold" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-extrabold text-white">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-white/80 mt-1">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Contenido del Modal (Detalles) */}
                        <div className="px-8 md:px-12 pb-10">
                            <motion.h3
                                className="text-xl font-semibold text-velez-gold mb-4"
                                variants={contentItemVariants}
                            >
                                ¿Qué incluye este servicio?
                            </motion.h3>
                            <ul className="space-y-3">
                                {service.details.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3"
                                        variants={contentItemVariants}
                                    >
                                        <CheckBadgeIcon className="h-6 w-6 text-velez-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-white/90">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div variants={contentItemVariants}>
                                <Link
                                    to="/contact"
                                    className="mt-8 block w-full text-center bg-velez-gold text-velez-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105"
                                    onClick={closeModal}
                                >
                                    Me interesa este servicio
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* Fin del contenedor de cascada */}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ServiceModal;