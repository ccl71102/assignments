import React from "react";

function Box(props) {
    return (
        <div className = {props.classBox} 
            style={{
                backgroundColor: props.color
            }}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    );
}

export default Box;