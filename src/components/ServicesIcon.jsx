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
                        <h3>Diseño web</h3>
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
                        <h3>Optimización CRO</h3>
                    </div>
                    <div className="service-back">
                        <p>
                            Analizo el comportamiento de tus clientes y optimizo
                            tu web para que siempre esté al día y siga
                            aumentando tu conversión.
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
                        <h3>Analytics CRO</h3>
                    </div>
                    <div className="service-back">
                        <p>
                            Utilizo herramientas de análisis para medir el
                            rendimiento de tu web y tomar decisiones informadas
                            sobre cómo mejorarla.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesIcon;
