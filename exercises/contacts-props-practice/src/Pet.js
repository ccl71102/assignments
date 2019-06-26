import React from "react";
import PropTypes from "prop-types";

const Pet = props => {
    return (
        <div style={
            {
                border: "1px solid #FAFAFA",
                backgroundColor: "#cfd1c8",
                width: "200px",
                boxShadow: "2px 2px grey",
                textShadow: "1px 1px grey",
                margin: "0",
                fontFamily: "sans-serif"
            }
        }>
            <p>{props.name}</p>
            <p>Breed: {props.breed}</p>
        </div>
    );
}

Pet.propTypes = {
    name: PropTypes.string,
    breed: PropTypes.string
}

export default Pet;