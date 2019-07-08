import React from "react";
import placeholderImage from "../images/default.jpeg";
import statedata from "../statedata.json";

const StateData = props => {
    document.title = "State Data - Affordability Calculator";

    const {stateName, stateId, places} = props;

    let stateSelected = "";

    if(stateId !== "")
        stateSelected = places.find(item => item["ID State"] === stateId);
    else
        stateSelected = statedata.data[1]["ID State"]
    

    const mappedIds = places.map(item => item["ID State"]);
    const index = Math.floor(Math.random() * mappedIds.length);
    const randomId = mappedIds[index];

    let backgroundURL = placeholderImage;
    console.log(backgroundURL);
    if(typeof randomId !== "undefined"){
        if(stateName === ""){
                backgroundURL = "https://datausa.io/api/profile/geo/" + randomId + "/splash"
       }
      else{
          console.log(stateId)
                backgroundURL = "https://datausa.io/api/profile/geo/" + stateId+ "/splash"
            }
        }

    const divStyle = {
        backgroundImage: `url(${backgroundURL})`
    };

    return  <div className="container-div" style={divStyle}>
                <div className="content-div">
                    <h1>{stateSelected.State ? stateSelected.State : statedata.data[1]["State"] } Data</h1>
                    <p>Population: {stateSelected.Population ? 
                    stateSelected.Population : statedata.data[1]["Population"]}</p>
                    <p>Median Age: {stateSelected["Median Age"] ?
                    stateSelected["Median Age"] : statedata.data[1]["Median Age"]}</p>
                    <p>Poverty Rate: {stateSelected["Poverty Rate"]?
                    stateSelected["Poverty Rate"] * 100 : statedata.data[1]["Poverty Rate"] * 100}%</p>
                    <p>Household Ownership: {stateSelected["Household Ownership"] ? 
                    stateSelected["Household Ownership"] : statedata.data[1]["Household Ownership"]}</p>
                    <p>Average Commute Time: {stateSelected["Average Commute Time"]? 
                    stateSelected["Average Commute Time"] : statedata.data[1]["Average Commute Time"]} minutes</p>
                </div>
            </div>
}

export default StateData;