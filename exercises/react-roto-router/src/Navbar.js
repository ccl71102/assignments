import React from "react";
import { Link, withRouter} from "react-router-dom";

const Navbar = () => {

    const navStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#454240",
        height: "50px",
        boxShadow: "1px 1px #242221",
        border: "1px solid #e3ddda"
    }

    const linkStyle = {
        textDecoration: "none",
        fontFamily: "sans-serif",
        color: "#e3ddda",
        fontSize: "26px",
        textShadow: "1px 1px #242221"
    }

    return  <nav style={navStyle}>
                <Link style={linkStyle} to="/">Home</Link>
                <Link style={linkStyle} to="/about">About</Link>
                <Link style={linkStyle} to="/services">Services</Link>
            </nav>;
}

export default withRouter(Navbar);