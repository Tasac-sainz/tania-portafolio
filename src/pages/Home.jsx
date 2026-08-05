import "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Icons from "../components/Icons";
import ServicesComp from "../components/ServicesComponent";
import AboutComp from "../components/AboutComponent";
import ProjectsComp from "../components/ProjectsComponent";
import Footer from "../components/Footer";
import BtnContact from "../components/BtnContact";
import ProgrammingImg from "../images/programming.png";
import "../styles/app.css";

const Home = () => {
    return (
        <>
            <Header />
            <Intro />

            <img
                src={ProgrammingImg}
                alt="es una mujer de espaldas, programando"
                className="programming"
            />
            <Icons />
            <ServicesComp />
            <AboutComp />
            <ProjectsComp />
            <BtnContact />
            <Footer />
        </>
    );
};

export default Home;
