import React from "react";

const SuperHero = props => {

    const {name, catchPhrase, imageName, sayCatchPhrase} = props;
    const styling = {
        width: "300px",
        boxShadow: "2px 2px grey",
        border: "1px solid grey"
    };
    
    const textStyling = {
        textAlign: "center",
        fontFamily: "sans-serif"
    }

    return (<div>
        <h2 style={textStyling} onClick={() => sayCatchPhrase(catchPhrase)}>{name}</h2>
        <img style={styling} onClick={() => sayCatchPhrase(catchPhrase)} src={imageName} alt={name}></img>
    </div>);

}

export default SuperHero;