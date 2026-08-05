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
                        Soy psicóloga desde hace más de 15 años y me encanta la
                        tecnología, por eso decidí unir ambas pasiones y crear
                        webs que no sólo se vean bien, sino que estén diseñadas
                        para vender. <br></br>
                        <br></br>
                        Impulsar tu negocio y ayudarte a conseguir tus objetivos
                        es mi prioridad.
                        <br></br>{" "}
                    </p>
                    <p className="about-tech">
                        Utilizamos tecnologías modernas de desarrollo web
                        (React, JavaScript, Flexbox...) para asegurarnos de que
                        tu web además de atractiva, tenga todas las
                        funcionalidades que necesitas y se adapte a cualquier
                        dispositivo. <br></br>
                        Con GA4 y otras herramientas de analítica web,
                        monitorizamos el comportamiento de tus clientes para que
                        tu web esté siempre al día y en continua mejora.{" "}
                        <br></br>
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

            <Footer />
        </>
    );
};

export default About;
