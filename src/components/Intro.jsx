import "react";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="intro_div">
            Webs modernas que no sólo se ven bien:{" "}
            <strong>están diseñadas para vender</strong>. <br></br>
            <br></br>
            En Fenix Web Solutions creamos la web perfecta para tí con las
            tecnologías más modernas y que mejor se adaptan a tu idea. <br></br>{" "}
            <br></br>
            Combinamos desarrollo técnico con psicología del consumidor para
            crear la web que tu negocio necesita para atraer clientes y
            analizamos su funcionamiento para que tu sitio web esté siempre al
            día y en continua mejora. <br></br> <br></br>
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
