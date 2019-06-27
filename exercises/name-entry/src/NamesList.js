import React from "react";

const NamesList = props => {

    const {names} = props;

    const mapped = names.map(name => <h2>{name}</h2>);

    return <div>{mapped}</div>
}

export default NamesList;