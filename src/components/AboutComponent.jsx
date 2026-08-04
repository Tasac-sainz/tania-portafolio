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
                        <strong>
                            Código limpio + Psicología = Webs que convierten las
                            visitas en clientes.
                        </strong>
                    </p>
                    <p>
                        ¡Hola! Soy Tania, la responsable de Fénix Web Solutions.
                    </p>
                    <p>
                        No sólo programo tu web en React o WordPress: entiendo
                        cómo piensa tu cliente ideal. Con más de 15 años de
                        experiencia en psicología, aplico principios de
                        comportamiento humano y diseño UX para que las visitas
                        que entran a tu web no se vayan sin contactarte.
                    </p>
                    <p className="hidden-in-responsive">
                        Manejo tecnologías modernas dentro del universo tech
                        (React, NodeJS, Express, MySQL, JavaScript Vanilla,
                        Flexbox...) para asegurarnos de que tu web además de
                        atractiva, tenga todas las funcionalidades que
                        necesitas.
                    </p>
                    <p>
                        <strong>
                            <italic>
                                ¿Y ahora que ya tengo mi web... ¿Qué sigue?
                            </italic>
                        </strong>
                        <br></br>
                        No te preocupes, no te dejo sol@. Analizo el
                        comportamiento de tus clientes y optimizo tu web para
                        que siempre esté al día y siga aumentando tu conversión
                        (estadísticas de uso y visitas con GA4 y Clarity para
                        analizar los mapas de calor, dead clicks, rage clicks,
                        etc).
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
