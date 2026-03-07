import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../images/burger.png";
import Fenix from "../images/fenix_redondo_blanco.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="div_nav">
                <img
                    src={Burger}
                    alt="burger menu"
                    className="burger"
                    onClick={toggleMenu}
                />
                <div className={menuOpen ? "nav_links open" : "nav_links"}>
                    <Link
                        to="/"
                        className="header_nav"
                        onClick={() => setMenuOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/about"
                        className="header_nav"
                        onClick={() => setMenuOpen(false)}
                    >
                        Sobre mí
                    </Link>
                    <Link
                        to="/projects"
                        className="header_nav"
                        onClick={() => setMenuOpen(false)}
                    >
                        Proyectos
                    </Link>
                    <Link
                        to="/contact"
                        className="header_nav"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contacto
                    </Link>
                </div>
                <Link to="/contact">
                    <img src={Fenix} alt="logo fenix" className="fenix" />
                </Link>
            </nav>
            <h1 className="web-title">Fenix Web Solutions</h1>
            <h2 className="web-subtitle">Tu página web, sin complicaciones</h2>
        </>
    );
};
export default Header;
