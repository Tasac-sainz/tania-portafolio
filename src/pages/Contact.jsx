import "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/app.css";
import "../styles/contact.css";

const Contact = () => {
    const [state, handleSubmit] = useForm("xjgakqrn");
    if (state.succeeded) {
        return <p>¡Gracias por contactar!</p>;
    }

    return (
        <>
            <Header />
            <p className="contact-text">
                En{" "}
                <strong>
                    <italic>Fenix Web Solutions</italic>
                </strong>{" "}
                {""}
                estamos para ayudarte a diseñar la web que tu negocio necesita,
                envíanos tus dudas, propuestas, etc., y enseguida contactaremos
                contigo...
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="name-data">
                    <label htmlFor="name" className="label">
                        Nombre y Apellidos
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="input"
                    />
                </div>

                <div className="email-data">
                    <label htmlFor="email" className="label">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="input"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <div className="message-data">
                    <label htmlFor="message" className="label">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="textarea-field"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="submit-btn"
                >
                    Enviar
                </button>
            </form>
            <Footer />
        </>
    );
};
export default Contact;
