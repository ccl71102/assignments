import React from "react";
import PropTypes from "prop-types";

const getColor = destination => {

    switch(destination.toLowerCase()){
        case "spring":
            return "#798c74";
        case "summer":
            return "#ba9360";
        case "fall":
            return "#663838";
        case "winter":
            return "#586982";
        default:
            return "#756a8c";
    }
}

const getSigns = cost => {
    if(cost <= 500)
        return "$";
    else if (cost <= 1000)
        return "$$";
    else if (cost > 1000)
        return "$$$";
}

const Card = props => {

    const color = getColor(props.timeToGo);
    const dollarSigns = getSigns(props.price);

    return (
        <div style = { 
            {
                backgroundColor: color,
                color: "#FAFAFA",
                fontFamily: "sans-serif",
                textAlign: "center",
                width: "200px",
                boxShadow: "2px 2px grey",
                textShadow: "1px 1px grey",
                border: "2px solid #FAFAFA"
            }
        }>
            <h2>{props.place}</h2>
            <p>Cost ({dollarSigns}): ${props.price}.00</p>
            <p>Season: {props.timeToGo}</p>
        </div>
    );
}

Card.propTypes = {
    place: PropTypes.string.isRequired,
    price: PropTypes.number,
    timeToGo: PropTypes.string
}

export default Card;