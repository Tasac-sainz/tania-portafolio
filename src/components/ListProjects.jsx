import "react";
import FeatureIcon from "../images/feature-icon.png";
import JSIcon from "../images/js-icon.png";
import ApiIcon from "../images/api-icon.png";
import SassIcon from "../images/sass-icon.png";
import FlexIcon from "../images/flexbox-icon.png";
import GitIcon from "../images/github-icon.png";
import WebIcon from "../images/web.png";
import Node from "../images/node-icon.png";
import Postman from "../images/postman-icon.png";
import React from "../images/react-icon.png";
import CSSicon from "../images/css-icon.png";
import MySQL from "../images/mysql-icon.png";

import "../styles/listprojects.css";

const ListProjects = () => {
    const techsIcons = {
        js: JSIcon,
        api: ApiIcon,
        sass: SassIcon,
        flex: FlexIcon,
        react: React,
        node: Node,
        postman: Postman,
        css: CSSicon,
        mysql: MySQL,
    };

    const projects = [
        {
            nameproj: "All for You",
            description:
                "Web de ecommerce desarrollada con JavaScript puro con diseño responsive, apto para el uso de distintos dispositivos.",
            features:
                "Productos de API Rest, opción de búsqueda y reset, gestión completa de carrrito de compra (añadir, aumentar, disminuir, vaciar...), suma de importe total, almacenamiento local del cliente...",
            techs: ["js", "api", "sass", "flex"],
            web: "https://tasac-sainz.github.io/tienda-online-all-for-you/",
            repo: "https://github.com/Tasac-sainz/tienda-online-all-for-you",
        },
        {
            nameproj: "Recetas Four for Love",
            description:
                "Web con recetas familiares en las que los usuarios pueden registrarse, añadir nuevas recetas y consultar sus propias recetas desde cualquier lugar del mundo. Desarrollada con React y NodeJS.",
            features:
                "Registro e inicio de sesión, creacción y consulta de recetas, almacenamiento local de usuario.",
            techs: ["react", "node", "postman", "mysql", "css"],
            web: "https://github.com/Tasac-sainz/recetas-four-for-love.git",
            repo: "https://github.com/Tasac-sainz/recetas-four-for-love",
        },
        {
            nameproj: "Cool Projects",
            description:
                "Proyecto Full Stack para publicar proyectos de desarrollo web y darles visibilidad añadiendo imágenes, tecnologías, descripción y datos de autoría, desarrollada con React y NodeJS, despliegue con Render.com",
            features:
                "Publicación de proyecto, consulta de listado de proyectos, vista de detalle con enlaces a la demo del proyecto y al perfil de GitHub de su autor/a.",
            techs: ["react", "node", "postman", "mysql", "css"],
            web: "https://cool-projects.onrender.com",
            repo: "https://github.com/Tasac-sainz/cool-projects",
        },
        {
            nameproj: "Buscador en API de Personajes de Harry Potter",
            description:
                "Este proyecto se orienta a la búsqueda de personajes de Harry Potter y visualización de cada persona en detalle a través de una API Rest. Desarrollada con React.",
            features:
                "Listado de personajes, búsqueda por tres posibles filtros: nombre, casa y género, limpieza de filtros y página de detalle de cada personaje.",
            techs: ["react", "api", "css"],
            web: "http://tasac-sainz.github.io/buscador_harry-potter/",
            repo: "https://github.com/Tasac-sainz/buscador_harry-potter",
        },
    ];
    return (
        <>
            <h1 className="project-title">Algunos de mis trabajos...</h1>
            <ul className="list-container">
                {projects.map((project, i) => (
                    <li className="card" key={i}>
                        <div className="title-card">
                            <div className="nameproj-cont">
                                {project.nameproj}
                            </div>
                            <div className="website-cont">
                                <a
                                    href={project.web}
                                    target="_blank"
                                    className="project-link"
                                >
                                    <img
                                        src={WebIcon}
                                        alt="ir al proyecto"
                                        className="git-icon"
                                    />
                                </a>
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    className="project-link"
                                >
                                    <img
                                        src={GitIcon}
                                        alt="ir a repo en GitHub"
                                        className="git-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="descrip-cont">
                            {project.description}
                        </div>
                        <div className="feature-cont">
                            <img
                                src={FeatureIcon}
                                alt="Funcionalidades"
                                className="listproject-icon"
                            />{" "}
                            {project.features}
                        </div>
                        <div className="techs-cont">
                            {project.techs &&
                                project.techs.map((tech, index) => (
                                    <img
                                        key={index}
                                        src={techsIcons[tech]}
                                        alt={tech}
                                        className="tech-icon"
                                    />
                                ))}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListProjects;
