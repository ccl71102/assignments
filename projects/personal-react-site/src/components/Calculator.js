import React from "react";
import StatesList from "./StatesList.js";
import placeholderImage from "../images/default.jpeg";

const Calculator = props => {

    const {stateName, places, yearlySalary, handleSelectChange, isStateSelected, handleSubmit, handleChange} = props;

    const mappedPlaces = places.map(place => ({
        state: place.State,
        id: place["ID State"]
    }));

    let selectedId = "";
    let backgroundURL = placeholderImage;
    switch(isStateSelected){
        case true:  selectedId = (mappedPlaces.find(item => item.state === stateName)).id;
                    console.log(selectedId);
                    backgroundURL = `https://datausa.io/api/profile/geo/${selectedId}/splash`
                    break;
        default:
                break;
    }
    

    document.title = "Calculator - Affordability Calculator";

    const divStyle = {
        backgroundImage: `url(${backgroundURL})`
    };


    return  <div className="container-div" style={divStyle}>
                <div className="content-div">
                    <h1>Calculator</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Yearly Income"
                            value={yearlySalary}
                            name="yearlySalary"
                            onChange={handleChange}
                            required
                        />
                        <select onChange={handleSelectChange} 
                                name="stateName">
                            <StatesList places={places}/>
                        </select>
                        <button>Submit</button>
                    </form>
                </div>
            </div>;
}

export default Calculator;