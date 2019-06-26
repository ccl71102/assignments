import React from "react";

const Button = props => {
    const buttonStyle = {
        textAlign: "center",
        boxShadow: "2px 2px #606060",
        fontSize: "80px",
        textShadow: "2px 2px #606060",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        border: "1px solid black",
        borderRadius: "5px",
        color: "#fafafa",
        backgroundColor: "#a0a0a0"
    }
    return <button onClick={props.method} style={buttonStyle}>{props.name}</button>
}

export default Button;