import React from "react";
import placeholderImage from "../images/default.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWikipediaW} from "@fortawesome/free-brands-svg-icons";
import { faCar, faUserFriends, faGem, faChild, faBuilding, faDollarSign} from "@fortawesome/free-solid-svg-icons";

const StateData = props =>{

    document.title = "Affordability Calculator - State Data";

    const {stateName, stateId, places, lightMode} = props;

    let stateSelected = "";

    if(stateId !== "")
        stateSelected = places.find(item => item["ID State"] === stateId);

    const mappedIds = places.map(item => item["ID State"]);
    const index = Math.floor(Math.random() * mappedIds.length);
    const randomId = mappedIds[index];

    let backgroundURL = placeholderImage;
    if(typeof randomId !== "undefined"){
        if(stateName === "")
            backgroundURL = "https://datausa.io/api/profile/geo/" + randomId + "/splash";
      else
            backgroundURL = "https://datausa.io/api/profile/geo/" + stateId+ "/splash";

    }

    const divStyle = {
        backgroundImage: `url(${backgroundURL})`
    };

    let wikipediaLink = `https://en.wikipedia.org/wiki/${stateName.replace(" ","_")}`;

    return  <div className={lightMode ? "transparent-wrapper-light" : "transparent-wrapper"} style={divStyle}>
                <div className="container-div">
                <div className="content-div">
                    <h1 className={stateSelected.State ? "content-heading less-padding" : "content-heading extra-padding"}>{stateSelected.State ? stateSelected.State : "No Data Available" }</h1>
                    <div className="state-data-results">
                        <p className="state-data-results-grid-1">
                            <span>
                                {stateSelected.Population ? 
                                <FontAwesomeIcon icon={faUserFriends}/> : ""}
                            </span>
                            <span className={stateSelected.Population ? "" : "center-data-span"}>
                                {stateSelected.Population ? 
                                ` Population: ${stateSelected.Population.toLocaleString()}` : "There is no data to display."}
                            </span>
                        </p>
                        <p className="state-data-results-grid-2">
                            <span>
                                {stateSelected["Median Age"] ? 
                                <FontAwesomeIcon icon={faChild}/> : ""}
                            </span>
                            <span>
                                {stateSelected["Median Age"] ?
                                ` Median Age: ${Math.round(stateSelected["Median Age"])} years` : ""}
                            </span>
                        </p>
                        <p className="state-data-results-grid-3">
                            <span>
                                {stateSelected["Poverty Rate"] ? 
                                <FontAwesomeIcon icon={faGem}/> : ""}
                            </span>
                            <span>
                                {stateSelected["Poverty Rate"]?
                                ` Poverty Rate: ${(stateSelected["Poverty Rate"] * 100).toFixed(2)}%` : ""}
                            </span>
                        </p>
                        <p className="state-data-results-grid-4">
                            <span>
                                {stateSelected["Average Commute Time"] ? 
                                <FontAwesomeIcon icon={faCar}/> : ""}
                            </span>
                            <span>
                                {stateSelected["Average Commute Time"]? 
                                ` Average Commute Time: ${Math.round(stateSelected["Average Commute Time"])} minutes` : ""}
                            </span>
                        </p>
                        <p className="state-data-results-grid-5"> 
                            <span>
                                {stateSelected["Household Ownership"] ? 
                                <FontAwesomeIcon icon={faBuilding}/> : ""}
                            </span>
                            <span>
                            {stateSelected["Household Ownership"] ? 
                            `Number of Homeowners: ${stateSelected["Household Ownership"].toLocaleString()}` : ""}
                            </span>
                        </p>
                        <p className="state-data-results-grid-6"> 
                            <span>
                                {stateSelected["Average Wage"] ? 
                                <FontAwesomeIcon icon={faDollarSign}/> : ""}
                            </span>
                            <span>
                            {stateSelected["Average Wage"] ? 
                            `Average Wage: $${Math.floor(stateSelected["Average Wage"]).toLocaleString()}` : ""}
                            </span>
                        </p>
                        <p className="state-data-results-grid-7 extra-padding"> 
                            <span>
                                {stateSelected["Property Value"] ? 
                                <FontAwesomeIcon icon={faDollarSign}/> : ""}
                            </span>
                            <span>
                            {stateSelected["Property Value"] ? 
                            `Median Property Value: $${Math.floor(stateSelected["Property Value"]).toLocaleString()}` : ""}
                            </span>
                        </p>
                        <p className={stateSelected["Property Value"] ? "result-display-inline state-data-results-grid-8" : "result-display-none state-data-results-grid-8"}>
                            Click <a className={lightMode ? "links-light" : "links"} href={wikipediaLink}>here</a> to visit {stateName === "District of Columbia" ? "the" : ""} {stateName}'s {<FontAwesomeIcon icon={faWikipediaW}/>} Wikipedia page.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
}

export default StateData;