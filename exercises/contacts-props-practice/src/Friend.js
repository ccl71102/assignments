import React from "react";
import Pet from "./Pet";
import PropTypes from "prop-types";

const Friend = props => {

    const mappedPets = props.pets.map( pet => 
    <Pet 
        key={pet.name + (Math.random() * 1000000)}
        name={pet.name}
        breed={pet.breed}
    />);

    return (
        <div style={
            {
                backgroundColor: "#9da093",
                border: "1px solid #FAFAFA",
                width: "200px",
                boxShadow: "2px 2px grey",
                textShadow: "1px 1px grey",
                margin: "10px auto",
                fontFamily: "sans-serif",
                textAlign: "center",
                color: "#FAFAFA"
            }
        }>
            <p>{props.name}</p>
            <p>Age: {props.age}</p>
            <p style = {
                {
                    backgroundColor: "#57594e",
                    margin: "0",
                    padding: "5px",
                    border: "1px solid #fafafa",
                    boxShadow: "2px 2px grey",
                    width: "190px"
                }
            }>Pets</p>
            {mappedPets}
        </div>
    );
}

Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    pets: PropTypes.array
}

export default Friend;