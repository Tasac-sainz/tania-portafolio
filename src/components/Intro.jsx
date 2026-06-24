import "react";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="intro_div">
            Reinventarse es volver a nacer pero con más sabiduría. <br></br>
            <br></br>
            En Fenix Web Solutions creamos la web perfecta para tí con las
            tecnologías más modernas y que mejor se adaptan a tu idea. <br></br>{" "}
            Y si ya tienes tu web pero quieres darle un nuevo enfoque o hacerle
            un lavado de cara más moderno, ¡estás en el sitio adecuado!{" "}
            <br></br>
            <br></br>
            Echa un ojo a los{" "}
            <Link to="/projects" className="text-link">
                proyectos
            </Link>{" "}
            y{" "}
            <Link to="/contact" className="text-link">
                contacta
            </Link>
            .{" "}
        </div>
    );
};

export default Intro;
