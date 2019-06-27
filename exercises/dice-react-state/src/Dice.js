import React from "react";

const diceColor = diceRoll => {

    switch(diceRoll){
        case 1: 
            return "#9eb59d";
        case 2: 
            return "#90a4b2";
        case 3: 
            return "#a89a8f";
        case 4: 
            return "#9787a3";
        case 5: 
            return "#e5d8ae";
        case 6: 
            return "#703838";
        default: 
            return "#ffffff";
    }
}

const Dice = props => {

    const diceStyle = {
        width: "180px",
        height: "180px",
        border: "2px solid black",
        textAlign: "center",
        boxShadow: "2px 2px #606060",
        textShadow: "2px 2px #606060",
        margin: "0 auto",
        fontSize: "160px",
        fontFamily: "sans-serif",
        color: "#fafafa",
        borderRadius: "3px",
        backgroundColor: diceColor(props.roll),
        transition: diceColor(props.roll) + "500ms linear"
    }

    return (
        <div style={diceStyle}>{props.roll}</div>
    );
}

export default Dice;