import React from "react";
import Dice from "./Dice";

const DiceBox = props => {

    const mappedDice = props.numArr.map( dice => <Dice roll = {dice} color={dice.color}/>)

    const divStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "50px auto"
    }
    return (
    <div style={divStyle}>
        {mappedDice}
    </div>
    );
}

export default DiceBox;