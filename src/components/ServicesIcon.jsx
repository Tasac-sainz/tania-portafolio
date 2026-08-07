import React from "react";
import WebDesign from "../images/web-design.jpg";
import DesignCRO from "../images/design_CRO.png";
import CROAnalytics from "../images/CRO-analytics.jpg";
import "../styles/services-icon.css";

const ServicesIcon = () => {
    return (
        <div className="services-contain">
            {/* Tarjeta 1 */}
            <div className="service-item">
                <div className="service-inner">
                    <div className="service-front">
                        <img
                            src={WebDesign}
                            alt="web design"
                            className="service-img"
                        />
                        <h3>Creación de Página Web</h3>
                    </div>
                    <div className="service-back">
                        <p>
                            Diseño y desarrollo de tu web desde cero, adaptada a
                            tus necesidades y a las de tu negocio.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="service-item">
                <div className="service-inner">
                    <div className="service-front">
                        <img
                            src={DesignCRO}
                            alt="CRO design"
                            className="service-img"
                        />
                        <h3>Diseño + Mantenimiento + Optimización CRO</h3>
                    </div>
                    <div className="service-back">
                        <p>
                            Servicio <strong>recomendado</strong>: incluye
                            diseño inicial, mantenimiento y optimización
                            periódica para mejorar la experiencia de usuario y
                            aumentar tus clientes (conversiones) a través de GA4
                            y Clarity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="service-item">
                <div className="service-inner">
                    <div className="service-front">
                        <img
                            src={CROAnalytics}
                            alt="CRO analytics"
                            className="service-img"
                        />
                        <h3>Optimización y análisis web</h3>
                    </div>
                    <div className="service-back">
                        <p>
                            Si ya tienes tu web, te ayudamos a optimizarla y
                            analizamos su rendimiento para introducir los
                            cambios necesarios para que tus visitas se
                            conviertan en clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesIcon;
