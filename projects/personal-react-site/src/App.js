import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.js";
import Calculator from "./components/Calculator.js";
import StateData from "./components/StateData.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "./css/style.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            stateName: "",
            stateId: "",
            places: [],
            yearlySalary: "",
            affordability: "",
            isAffordable: false,
            isStateSelected: false,
            propertyValue: "",
            lightMode: false
        };
    }

    /*  stateSelect gets called at the same time anything related to the form changes in an attempt to keep
        things synchronized. It doesn't seem to work as intended at times, 
    */

    stateSelected = () => this.setState({isStateSelected: this.state.stateName === "" ? false : true});

    toggleLightMode = () => this.setState(prevState => ({lightMode: !prevState.lightMode}));

    handleSelectChange = e => {
        
        const {name, value} = e.target;

        /*  If the default option from the dropdown menu gets reselected the app will throw an error
            when you use the find method since it won't find anything

            The fallback option is to just reset everything to default values to go back to the original
            functionality.
        */

        try {
            this.setState({
                [name]: value,
                stateId: this.state.places.find(item => item.State === value)["ID State"],
                propertyValue: ""
            },this.stateSelected);

        } catch {
            this.setState({
                stateName: "",
                stateId: "",
                propertyValue: ""
            },this.stateSelected);
        }
    }

    handleChange = e => {
        const {name, value} = e.target;

        if(!isNaN(value))
            this.setState({
                [name]: value
            },this.stateSelected);
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.stateName !== "") {

            const newAff = Math.abs(Number(this.state.yearlySalary * 5.139));
            const propValue = Number(this.state.places.find(item => item.State === this.state.stateName)["Property Value"]);

            this.setState({
                affordability: newAff,
                isAffordable: (newAff >= propValue),
                propertyValue: propValue
                // yearlySalary: ""
            });
        }  
    }

    componentDidMount() {
        axios.get("https://datausa.io/api/data?drilldowns=State&measures=Property%20Value,Population,Median%20Age,Poverty%20Rate,Household%20Ownership,Average%20Commute%20Time,Average%20Wage&year=latest&order=State&sort=asc")
        .then(res => this.setState({places: res.data.data}))
        .catch(err => console.log(err));

        console.log("Application initialized");
    }

    render(){

        return  <div className="main-container">
                    <Navbar 
                        lightMode={this.state.lightMode}
                    />
                    <Switch>
                        <Route exact path="/" render={routerProps => 
                            <Home   {...routerProps} 
                                    {...this.state}
                            /> 
                        }/>
                        <Route path="/calculator" render={routerProps => 
                            <Calculator {...routerProps} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                                handleSelectChange={this.handleSelectChange}
                                {...this.state}
                            /> 
                        }/>
                        <Route path="/state-data" render={routerProps => 
                            <StateData {...routerProps} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                                handleSelectChange={this.handleSelectChange}
                                {...this.state}
                            /> 
                        }/>
                    </Switch>
                    <Footer   
                        lightMode={this.state.lightMode} 
                        toggleLightMode={this.toggleLightMode}
                    />
                </div>;
    }
}

export default App;