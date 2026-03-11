import "react";
import GitIcon from "../images/git-icon.png";
import LinkedIcon from "../images/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="a-footer">
                Home
            </Link>
            <a href="https://github.com/Tasac-sainz" target="_blank">
                <img
                    src={GitIcon}
                    alt="visitar perfil en Git Hub"
                    className="my-git"
                />
            </a>
            <a
                href="https://linkedin.com/in/tania-sainz-developer"
                target="_blank"
            >
                <img
                    src={LinkedIcon}
                    alt="visitar perfil en Linked In"
                    className="my-git"
                />
            </a>
            <p className="p-footer">kaski...keep coding</p>
        </div>
    );
};

export default Footer;
