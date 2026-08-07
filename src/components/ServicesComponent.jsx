import "react";

const ServicesComponent = () => {
    return (
        <>
            <div className="services-content intro_div">
                <h2>
                    <i>Lo que podemos hacer por tí</i>
                </h2>
                <p className="green-text">
                    <strong>
                        Desarrollo web a medida en React o WordPress, con diseño
                        UX/UI optimizado para la conversión de visitas en
                        clientes.
                    </strong>
                </p>
                <p>
                    Diseño y desarrollo de tu web desde cero, adaptada a tus
                    necesidades y a las de tu negocio.
                </p>
                <p>
                    Utilizamos tecnologías modernas dentro del universo tech
                    (React, NodeJS, Express, MySQL, JavaScript Vanilla,
                    Flexbox...) para asegurarnos de que tu web además de
                    atractiva, tenga todas las funcionalidades que necesitas.
                </p>
                <br></br>
                <p>
                    <p className="green-text">
                        <strong>
                            <i>Ya tengo mi web... ¿y ahora?</i>
                        </strong>
                    </p>
                    <p>
                        No te preocupes, no te dejamos sol@. Analizamos el
                        comportamiento de tus clientes y optimizamos tu web para
                        que siempre esté al día y siga transformando las visitas
                        en contactos reales. (estadísticas de uso y visitas con
                        GA4 y Clarity para analizar los mapas de calor, dead
                        clicks, rage clicks, etc.).
                    </p>
                </p>
            </div>
        </>
    );
};

export default ServicesComponent;
