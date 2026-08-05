import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;

// este componente se encarga de que al cambiar de ruta, la página se desplace hacia arriba automáticamente. Se utiliza en el archivo App.jsx para que funcione en todas las rutas.
