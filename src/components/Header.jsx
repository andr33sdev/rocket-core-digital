import { useLocation } from "react-router-dom";
// 1. Importa HashLink en lugar de Link
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/RocketHorizontal.svg";

// 2. Actualizamos el array de links para que apunten a los IDs (#)
const navLinks = [
  { to: "/#", label: "Home" }, // Apunta a la raíz
  { to: "/#services", label: "Services" }, // Apunta a /#services
  { to: "/#process", label: "Process" }, // Apunta a /#process
  { to: "/about", label: "About" }, // Esta sigue siendo una página separada
];

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Lógica 'isActive' actualizada
  // Ahora comprueba tanto el pathname como el hash (la parte #)
  const isActive = (path) => {
    const [pathname, hash] = path.split("#");

    // Si es "/about", solo comprueba el pathname
    if (path === "/about") {
      return location.pathname === "/about";
    }

    // Si es "Home", comprueba / o /#
    if (path === "/#") {
      return (location.pathname === "/" || location.pathname === "/home") && !location.hash;
    }

    // Si es un hash link (ej. /#services), comprueba el hash
    return (location.pathname === "/" || location.pathname === "/home") && location.hash === `#${hash}`;
  };

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- (Variantes de Animación - Sin cambios) ---
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    visible: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.05 },
    },
  };
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className={`
        text-white px-6 md:px-24 fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? "py-3 bg-[#254a7c]/80 backdrop-blur-lg border-b border-b-[#4173b1]/50 shadow-xl"
          : "py-5 bg-transparent border-b border-b-transparent"
        }
      `}
    >
      <nav className="flex justify-between items-center">
        {/* Logo (ahora usa HashLink también) */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <HashLink to="/#" className="text-2xl font-bold">
            <img src={logo} alt="Rocket Core Digital" className="w-36" />
          </HashLink>
        </motion.div>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* --- Menú de Navegación (Desktop) --- */}
        <ul className="hidden md:flex gap-5 items-center">
          {navLinks.map((link) => (
            <motion.li key={link.to} className="relative">
              {/* 4. Cambiamos <Link> por <HashLink> */}
              <HashLink
                smooth // <-- Esta prop hace el scroll suave
                to={link.to}
                className={`px-3 py-2 rounded-lg block transition-colors duration-300
                  ${isActive(link.to)
                    ? "text-velez-gold font-semibold"
                    : "text-white hover:text-white/80"
                  }
                `}
              >
                {link.label}
              </HashLink>

              {isActive(link.to) && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-velez-gold"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Botón de Contacto (Desktop) */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
        >
          <HashLink
            to="/contact"
            className="bg-velez-gold text-velez-blue-700 font-bold py-2 px-5 rounded-full text-sm hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            ¡Contáctanos!
          </HashLink>
        </motion.div>
      </nav>

      {/* --- Menú de Navegación (Móvil) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className={`md:hidden absolute top-0 left-0 w-full bg-[#254a7c]/95 backdrop-blur-xl
              flex flex-col items-center shadow-xl pt-24 pb-10`}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.to}
                className="w-full text-center"
                variants={mobileItemVariants}
              >
                {/* 4. Cambiamos <Link> por <HashLink> */}
                <HashLink
                  smooth
                  to={link.to}
                  className={`py-3 block text-lg ${isActive(link.to) ? "text-velez-gold font-semibold" : "text-white"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </HashLink>
              </motion.li>
            ))}

            {/* Botón de Contacto (Móvil) */}
            <motion.li
              className="w-full text-center mt-6"
              variants={mobileItemVariants}
            >
              <HashLink
                to="/contact"
                className="bg-velez-gold text-velez-blue-700 font-bold py-3 px-8 rounded-full inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                ¡Contáctanos!
              </HashLink>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;