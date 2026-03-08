import "react";
import { Link } from "react-router-dom";

import Photo from "../images/profile.png";
import "../styles/app.css";

const AboutComponent = () => {
    return (
        <>
            <div className="about-content">
                <div className="photo">
                    <img
                        src={Photo}
                        alt="profile photo"
                        className="profile-pic"
                    />
                </div>
                <div className="my-descr">
                    <p>
                        ¡Hola! Soy Tania, la responsable de Fénix Web Solutions.
                    </p>
                    <p>
                        Este proyecto nace de mi pasión por el desarrollo web,
                        el diseño y el márketing digital; además, soy psicóloga
                        desde hace 15 años por lo que sé bien cómo llegar a tus
                        clientes...
                    </p>
                    <p className="hidden-in-responsive">
                        Manejo tecnologías modernas dentro del universo tech
                        (React, JavaScript, Flexbox...) para asegurarnos de que
                        tu web además de atractiva, tenga todas las
                        funcionalidades que necesitas.
                    </p>
                    Visita {""}
                    <Link to="/projects" className="text-link">
                        mis proyectos
                    </Link>{" "}
                    {""}y verás todo lo que podemos hacer; Tú pones la idea y
                    yo, tu web. {""}
                    <Link to="/contact" className="text-link">
                        ¿Hablamos?
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AboutComponent;
