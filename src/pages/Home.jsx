import "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Icons from "../components/Icons";
import AboutComp from "../components/AboutComponent";
import ProjectsComp from "../components/ProjectsComponent";
import ContactComp from "../components/ContactComponent";
import Footer from "../components/Footer";
import "../styles/app.css";

const Home = () => {
    return (
        <>
            <Header />
            <Intro />
            <Icons />
            <AboutComp />
            <ProjectsComp />
            <ContactComp />
            <Footer />
        </>
    );
};

export default Home;
