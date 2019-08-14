import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClipboardList, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/" className="navlink" activeClassName="active"><FontAwesomeIcon icon={faHome}/> HOME</NavLink>
            <NavLink to="/projects" className="navlink" activeClassName="active"><FontAwesomeIcon icon={faClipboardList}/> PROJECTS</NavLink>
            <a className="navlink" href="#contact"><FontAwesomeIcon icon={faAddressCard}/> CONTACT</a>
        </div>
    );
}

export default withRouter(Navbar);