import React from "react";
import { Link } from "react-router-dom";

const BtnContact = () => {
    return (
        <Link to="/contact" className="submit-btn in-all">
            Contactar
        </Link>
    );
};

export default BtnContact;
