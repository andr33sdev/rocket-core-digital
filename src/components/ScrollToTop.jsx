import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    // Extrae el "pathname" (ej. /about) de la ubicación actual
    const { pathname } = useLocation();

    // Este 'Efecto' se dispara CADA VEZ que el 'pathname' cambia
    useEffect(() => {
        // Fuerza a la ventana a ir al inicio
        window.scrollTo(0, 0);
    }, [pathname]); // La dependencia es el pathname

    // Este componente no renderiza nada visual
    return null;
}

export default ScrollToTop;