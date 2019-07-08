import React from "react";
import StatesList from "./StatesList.js";

const Calculator = props => {

    const {stateName, places, yearlySalary, handleSubmit, handleChange} = props;

    document.title = "Calculator - Affordability Calculator";
    const divStyle = {

    };
    return  <div className="calculator-container-div" style={divStyle}>
                <div className="calculator-content-div">
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
                        <select name="stateName">
                            <StatesList places={places}/>
                        </select>
                        <button>Submit</button>
                    </form>
                </div>
            </div>;
}

export default Calculator;