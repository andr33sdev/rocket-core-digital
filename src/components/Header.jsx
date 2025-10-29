import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/RocketHorizontal.svg";

function Header() {
  const location = useLocation(); // Hook para obtener la ruta actual
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const isActive = (path) => location.pathname === path; // Verifica si la ruta coincide

  return (
    <header className="text-white border-b-1 border-b-[#4173b1] py-3 px-6 md:px-24 fixed top-0 left-0 w-full z-10 bg-[#254a7c]">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="Rocket Core Digital" className="w-36" />
        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
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

        {/* Menú de navegación */}
        <ul
          className={`md:flex gap-5 absolute md:static top-16 left-0 w-full md:w-auto bg-[#254a7c]/90 md:bg-transparent flex-col md:flex-row items-center md:items-center transition-all duration-300 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="w-full text-center">
            <Link
              to="/home"
              className={`hover:bg-[#2e5a91] px-5 py-3 rounded-lg block ${
                isActive("/home") ? "bg-[#2e5a91] font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/services"
              className={`hover:bg-[#2e5a91] px-5 py-3 rounded-lg block ${
                isActive("/services") ? "bg-[#2e5a91] font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/projects"
              className={`hover:bg-[#2e5a91] px-5 py-3 rounded-lg block ${
                isActive("/projects") ? "bg-[#2e5a91] font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/about"
              className={`hover:bg-[#2e5a91] px-5 py-3 rounded-lg block ${
                isActive("/about") ? "bg-[#2e5a91] font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/contact"
              className={`hover:bg-[#2e5a91] px-5 py-3 rounded-lg block ${
                isActive("/contact") ? "bg-[#2e5a91] font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;