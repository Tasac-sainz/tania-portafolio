import "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Photo from "../images/profile.png";
import "../styles/app.css";

const About = () => {
    return (
        <>
            <Header />
            <div className="about-content">
                <div className="photo">
                    <img
                        src={Photo}
                        alt="profile photo"
                        className="profile-pic"
                    />
                </div>
                <div className="my-descr">
                    ¡Hola! Soy Tania, la responsable de Fénix Web Solutions.{" "}
                    <br></br>
                    Este proyecto nace de mi pasión por el desarrollo web, el
                    diseño y el márketing digital; además, soy psicóloga desde
                    hace 15 años por lo que sé bien cómo llegar a tus
                    clientes... <br></br>
                    <br></br>
                    Manejo tecnologías modernas dentro del universo tech (React,
                    JavaScript, Flexbox...) para asegurarnos de que tu web
                    además de atractiva, tenga todas las funcionalidades que
                    necesitas. <br></br>
                    <br></br>
                    Visita{" "}
                    <Link to="/projects" className="descrip-link">
                        mis proyectos
                    </Link>{" "}
                    y verás todo lo que podemos hacer; Tú pones la idea y yo, tu
                    web.
                    <br></br>
                    <br></br>
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
