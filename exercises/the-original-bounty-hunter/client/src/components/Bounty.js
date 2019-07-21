import React from "react";

const Bounty = props => {

    console.log(props)
    const {firstName, lastName, living, bounty, type, imgUrl} = props;

    return  <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <img src={imgUrl} alt={`{firstName} {lastName}`}style={{height: 300}}></img>
                <p>Living: {living.toString()}</p>
                <p>Bounty: {bounty}</p>
                <p>Type: {type}</p>
            </div>
}

export default Bounty;