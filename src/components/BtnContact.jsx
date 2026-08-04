import React from "react";
import { Link } from "react-router-dom";

const BtnContact = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="submit-btn in-all about"
        >
            <Link to="/contact" className="link-to">
                <p className="icon-text">Contactar</p>
            </Link>
        </button>
    );
};

export default BtnContact;
