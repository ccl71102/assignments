import React from "react";

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#454240",
        padding: 10
    }

    const pStyle = {
        textAlign: "center",
        fontFamily: "sans-serif",
        color: "#d6d2d0",
        fontSize: "12px",
        textShadow: "1px 1px #363331"
    }

    return  <footer style={footerStyle}>
                <p style={pStyle}>Copyright 2019 Beaver Dam Building Corporation | All Rights Relinquished</p>
            </footer>;
}

export default Footer;