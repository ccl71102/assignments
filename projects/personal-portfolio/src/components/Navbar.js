import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClipboardList, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return <div className="navbar">
        <Link to="/"><FontAwesomeIcon icon={faHome}/> HOME</Link>
        <Link to="/projects"><FontAwesomeIcon icon={faClipboardList}/> PROJECTS</Link>
        <a href="#contact"><FontAwesomeIcon icon={faAddressCard}/> CONTACT</a>
    </div>;
}

export default Navbar;