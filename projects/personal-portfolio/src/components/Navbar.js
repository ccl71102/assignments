import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClipboardList, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = props => {

    return (
        <div className="navbar">
            <NavLink to="/" className="navlink" activeClassName={props.location.pathname === "/" ? "active" : ""}><FontAwesomeIcon icon={faHome}/> HOME</NavLink>
            <NavLink to="/projects" className="navlink" activeClassName={props.location.pathname === "/projects" ? "active" : ""}><FontAwesomeIcon icon={faClipboardList}/> PROJECTS</NavLink>
            <NavLink to="/contact" className="navlink" activeClassName={props.location.pathname === "/contact" ? "active" : ""}><FontAwesomeIcon icon={faAddressCard}/> CONTACT</NavLink>        
        </div>
    );
}

export default withRouter(Navbar);