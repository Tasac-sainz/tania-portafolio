import "react";
import { Link } from "react-router-dom";
import Photo from "../images/profile.png";
import "../styles/app.css";

const AboutComponent = () => {
    return (
        <>
            <div className="about-content">
                {/* <div className="photo photo-home">
                    <img
                        src={Photo}
                        alt="profile photo"
                        className="profile-pic "
                    />
                </div> */}
                <div className="my-descr">
                    <h2 className="title-about-home">
                        <Link to="/about">
                            <i>¿Qué es Fenix Web Solutions?</i>
                        </Link>
                    </h2>
                    <p className="green-text">
                        <strong>
                            Código limpio + Psicología = Webs que convierten las
                            visitas en clientes.
                        </strong>
                    </p>
                    <p>
                        No sólo programamos tu web: también entendemos cómo
                        piensa tu cliente ideal. <br></br>
                        Con más de 15 años de experiencia en psicología,
                        aplicamos principios de comportamiento y diseño UX para
                        que las visitas que entran a tu web no se vayan sin
                        contactarte.
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
