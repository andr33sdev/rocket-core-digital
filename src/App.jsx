import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* El fondo de 'App.jsx' ahora solo actúa como fallback.
        Home y otras páginas controlarán sus propios fondos.
      */}
      <div className="bg-[#3567a5] font-sans w-full min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta Raíz */}
            <Route path="/home" element={<Home />} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Una ruta "catch-all" por si no encuentra la página */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;