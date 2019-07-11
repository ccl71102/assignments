import React from "react";
import StatesList from "./StatesList.js";
import placeholderImage from "../images/default.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Calculator = props => {

    const { stateName, 
            places, 
            affordability, 
            isAffordable, 
            propertyValue, 
            yearlySalary, 
            handleSelectChange, 
            isStateSelected, 
            handleSubmit, 
            handleChange,
            lightMode } = props;

        
        let backgroundURL = placeholderImage;

    try {
        const mappedPlaces = places.map(place => ({
            state: place.State,
            id: place["ID State"]
        }));
    
        const index = Math.floor(Math.random() * mappedPlaces.length);
        let selectedId = "";
        const randomId = mappedPlaces[index].id;

        if(isStateSelected && stateName !== ""){
            selectedId = (mappedPlaces.find(item => item.state === stateName)).id;
            backgroundURL = `https://datausa.io/api/profile/geo/${selectedId}/splash`;
            localStorage.setItem("backgroundURL", backgroundURL);
        } else if(yearlySalary === "" && !localStorage.getItem("backgroundURL")){
            backgroundURL = `https://datausa.io/api/profile/geo/${randomId}/splash`;
            localStorage.setItem("backgroundURL", backgroundURL);
        } else if(yearlySalary === "" && localStorage.getItem("backgroundURL")){
            backgroundURL = `https://datausa.io/api/profile/geo/${randomId}/splash`;
            localStorage.setItem("backgroundURL", backgroundURL);
        } else if(yearlySalary !== "") {
            if(localStorage.getItem("backgroundURL"))
                backgroundURL = localStorage.getItem("backgroundURL");
            else {
                backgroundURL = `https://datausa.io/api/profile/geo/${randomId}/splash`;
                localStorage.setItem("backgroundURL", backgroundURL);
            }
        }
        else {

        }
    }
    catch {
        //might have failed because of a delay with the axios.get method - use default values
    }
    
    document.title = "Affordability Calculator - Calculator";

    const divStyle = {
        backgroundImage: `url(${backgroundURL})`
    };

    return  <div className={lightMode ? "transparent-wrapper-light" : "transparent-wrapper"} style={divStyle}>
                <div className="container-div">
                    <div className="content-div">
                        <h1 className="content-heading">Calculator</h1>
                        <form onSubmit={handleSubmit}>
                            <input 
                                className="calculator-form" 
                                type="text" 
                                placeholder="Yearly Income (USD)"
                                value={yearlySalary}
                                name="yearlySalary"
                                onChange={handleChange}
                                maxLength={16}
                                required
                            />
                            <select 
                                className="calculator-form" 
                                value={stateName || ""} 
                                onChange={handleSelectChange} 
                                name="stateName"
                                required>
                                    <StatesList places={places}/>
                            </select>
                            <button className="calculator-form">Submit</button>
                        </form>
                        <p className={propertyValue === "" ? "result-display-none calculator-results" : "result-display calculator-results"}>{`The median property value is $${propertyValue.toLocaleString()}. You can afford to spend $${Math.floor(affordability).toLocaleString()} on a property.`}</p>
                        <p className={propertyValue === "" ? "result-display-none calculator-results" : "result-display calculator-results"}>{isAffordable ? "You can afford to buy property here." : "You can't afford to buy property here."}</p>
                        <p className={propertyValue === "" ? "result-display-none calculator-results" : "result-display calculator-results"}>
                            <span>Click </span><Link to="/state-data" className={lightMode ? "links-light" : "links"}><FontAwesomeIcon icon={faInfoCircle}/> here</Link> to learn more about {stateName === "District of Columbia" ? "the" : ""} {stateName}.
                        </p>
                    </div>
                </div>
            </div>;
}

export default Calculator;