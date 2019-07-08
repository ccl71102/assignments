import React from "react";

const StatesList = props => {

    const {places} = props;

    return places.map(place => <option key={place["ID State"]} value={place.State}>{place.State}</option>)
}

export default StatesList;