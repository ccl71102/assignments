import React from "react";

const Bounty = props => {

    console.log(props)
    const {firstName, lastName, living, bounty, type} = props;

    return  <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Living: {living.toString()}</p>
                <p>Bounty: {bounty}</p>
                <p>Type: {type}</p>
            </div>
}

export default Bounty;