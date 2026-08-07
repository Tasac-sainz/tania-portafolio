import "react";
import Header from "../components/Header";
import ListProjects from "../components/ListProjects";
import BtnContact from "../components/BtnContact";
import Footer from "../components/Footer";
import "../styles/app.css";

const Projects = () => {
    return (
        <>
            <Header />
            <p className="projects-text">
                He seleccionado algunos de mis proyectos más destacados para que
                puedas conocer mi forma de trabajar. <br></br>
                <br></br>
                Encontrarás tanto proyectos personales que me han ayudado a
                crecer como desarrolladora, como trabajos realizados para mis
                clientes. ¿Tu web será la próxima en nuestro <i>escaparate</i>?
            </p>
            <ListProjects />
            <BtnContact />
            <Footer />
        </>
    );
};

export default Projects;
