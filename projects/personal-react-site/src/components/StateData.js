import React from "react";
import placeholderImage from "../images/default.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWikipediaW} from "@fortawesome/free-brands-svg-icons";
import { faCar, faUserFriends, faGem, faHourglassHalf, faBuilding, faDollarSign, faHouseDamage} from "@fortawesome/free-solid-svg-icons";

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
                        {/* <p className="state-data-results-grid-1"> */}
                            <span className="state-data-results-grid-1">
                                {stateSelected.Population ? 
                                <FontAwesomeIcon icon={faUserFriends}/> : ""}
                            </span>
                            <span className={"state-data-results-grid-2"}>
                                {stateSelected.Population ? 
                                ` Population: ${stateSelected.Population.toLocaleString()}` : "There is no data to display."}
                            </span>
                        {/* </p> */}
                        {/* <p className="state-data-results-grid-2"> */}
                            <span className="state-data-results-grid-3">
                                {stateSelected["Median Age"] ? 
                                <FontAwesomeIcon icon={faHourglassHalf}/> : ""}
                            </span>
                            <span className="state-data-results-grid-4">
                                {stateSelected["Median Age"] ?
                                ` Median Age: ${Math.round(stateSelected["Median Age"])} years` : ""}
                            </span>
                        {/* </p> */}
                        {/* <p className="state-data-results-grid-3"> */}
                            <span  className="state-data-results-grid-5">
                                {stateSelected["Poverty Rate"] ? 
                                <FontAwesomeIcon icon={faHouseDamage}/> : ""}
                            </span>
                            <span  className="state-data-results-grid-6">
                                {stateSelected["Poverty Rate"]?
                                ` Poverty Rate: ${(stateSelected["Poverty Rate"] * 100).toFixed(2)}%` : ""}
                            </span>
                        {/* </p> */}
                        {/* <p className="state-data-results-grid-4"> */}
                            <span  className="state-data-results-grid-7">
                                {stateSelected["Average Commute Time"] ? 
                                <FontAwesomeIcon icon={faCar}/> : ""}
                            </span>
                            <span className="state-data-results-grid-8">
                                {stateSelected["Average Commute Time"]? 
                                ` Average Commute Time: ${Math.round(stateSelected["Average Commute Time"])} minutes` : ""}
                            </span>
                        {/* </p> */}
                        {/* <p className="state-data-results-grid-5">  */}
                            <span className="state-data-results-grid-9">
                                {stateSelected["Household Ownership"] ? 
                                <FontAwesomeIcon icon={faBuilding}/> : ""}
                            </span>
                            <span className="state-data-results-grid-10">
                            {stateSelected["Household Ownership"] ? 
                            `Number of Homeowners: ${stateSelected["Household Ownership"].toLocaleString()}` : ""}
                            </span>
                        {/* </p> */}
                        {/* <p className="state-data-results-grid-6">  */}
                            <span className="state-data-results-grid-11">
                                {stateSelected["Average Wage"] ? 
                                <FontAwesomeIcon icon={faDollarSign}/> : ""}
                            </span>
                            <span className="state-data-results-grid-12">
                            {stateSelected["Average Wage"] ? 
                            `Average Wage: $${Math.floor(stateSelected["Average Wage"]).toLocaleString()}` : ""}
                            </span>
                        {/* </p> */}
                        {/* <p className="state-data-results-grid-7 extra-padding">  */}
                            <span className="state-data-results-grid-13 extra-padding">
                                {stateSelected["Property Value"] ? 
                                <FontAwesomeIcon icon={faGem}/> : ""}
                            </span>
                            <span className="state-data-results-grid-14 extra-padding">
                            {stateSelected["Property Value"] ? 
                            `Median Property Value: $${Math.floor(stateSelected["Property Value"]).toLocaleString()}` : ""}
                            </span>
                        {/* </p> */}
                        <p className={stateSelected["Property Value"] ? "result-display-inline state-data-results-grid-15" : "result-display-none state-data-results-grid-15"}>
                            Click <a className={lightMode ? "links-light" : "links"} href={wikipediaLink}>here</a> to visit {stateName === "District of Columbia" ? "the" : ""} {stateName}'s {<FontAwesomeIcon icon={faWikipediaW}/>} Wikipedia page.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
}

export default StateData;