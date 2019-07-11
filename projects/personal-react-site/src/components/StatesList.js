import React from "react";

const StatesList = props => {

    const {places} = props;

    const mappedPlaces = places.map(place => <option key={place["ID State"]} value={place.State}>{place.State}</option>);
    mappedPlaces.unshift(<option key={100} value="">-Select State-</option>);


    return mappedPlaces;
}

export default StatesList;