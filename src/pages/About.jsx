import "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnContact from "../components/BtnContact";
import Photo from "../images/profile.png";
import "../styles/app.css";

const About = () => {
    return (
        <>
            <Header />
            <div className="about-content">
                <div className="photo-btn">
                    <div className="photo">
                        <img
                            src={Photo}
                            alt="profile photo"
                            className="profile-pic"
                        />
                    </div>
                    <BtnContact />
                </div>
                <div className="my-descr">
                    <p>
                        ¡Hola! Soy Tania, la responsable de Fénix Web Solutions.
                    </p>
                    <p>
                        Este proyecto nace de mi pasión por el desarrollo web,
                        el diseño y el márketing digital. <br></br>
                        <p>
                            Soy psicóloga desde hace más de 15 años y me encanta
                            la tecnología, por eso decidí unir ambas pasiones y
                            crear webs que no sólo se vean bien, sino que{" "}
                            <span style={{ color: "#268919" }}>
                                estén diseñadas para vender
                            </span>
                            .
                        </p>{" "}
                        <br></br>
                        Impulsar tu negocio y ayudarte a conseguir tus objetivos
                        es mi prioridad.
                        <br></br>{" "}
                    </p>
                    <p className="about-tech">
                        Utilizamos tecnologías modernas de desarrollo para que
                        tu web se adapte a cualquier dispositivo, mejorando así
                        la experiencia de usuario, lo que aumenta las
                        posibilidades de que tus visitantes se conviertan en
                        clientes. <br></br>
                        Aplicamos herramientas de analítica web y monitorización
                        de comportamiento de usuarios para que tu web esté
                        siempre actualizada y en continua mejora. <br></br>
                    </p>
                    Visita mis{" "}
                    <Link to="/projects" className="text-link">
                        proyectos
                    </Link>{" "}
                    {""}y verás todo lo que podemos hacer; Tú pones la idea y
                    yo, tu web. {""}
                    <Link to="/contact" className="text-link">
                        ¿Hablamos?
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
