import React from "react";

const Box = props => {

    const boxStyle = {
        width: "200px",
        height: "120px",
        border: "1px solid grey",
        margin: "0 auto",
        paddingTop: "50px",
        boxShadow: "2px 2px grey",
        backgroundColor: props.color,
        color: "#e1e1e1",
        textAlign: "center",
        fontSize: "50px",
        textShadow: "2px 2px grey",
        fontFamily: "sans-serif"
    }

    return <div style = {boxStyle}>
        {props.title}
    </div>
}

export default Box;