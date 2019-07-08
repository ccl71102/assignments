import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.js";
import Calculator from "./components/Calculator.js";
import StateData from "./components/StateData.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "./css/style.css";

//GET request
// https://datausa.io/api/data?drilldowns=State&measures=Property%20Value,Population,Median%20Age,Poverty%20Rate,Household%20Ownership,Average%20Commute%20Time&year=latest&order=State&sort=asc


class App extends Component{
    constructor(){
        super();
        this.state = {
            stateName: "",
            places: [],
            yearlySalary: "",
            isStateSelected: false
        };
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    componentDidMount() {
        axios.get("https://datausa.io/api/data?drilldowns=State&measures=Property%20Value,Population,Median%20Age,Poverty%20Rate,Household%20Ownership,Average%20Commute%20Time&year=latest&order=State&sort=asc")
        .then(res => {
            this.setState({
                places: res.data.data
            })
        })
        .catch(err => console.log(err));
    }

    render(){

        const styling = {
            display: "grid",
            gridTemplateColumns: "1fr",
            width: "100%"
        }
        return  <div style={styling}>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" render={routerProps => 
                            <Home {...routerProps} 
                                places={this.state.places}
                                isStateSelected={this.state.isStateSelected}
                            /> 
                        }/>
                        <Route path="/calculator" render={routerProps => 
                            <Calculator {...routerProps} 
                                places={this.state.places} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                                stateName={this.state.stateName}
                                isStateSelected={this.state.isStateSelected}
                                yearlySalary={this.state.yearlySalary}
                            /> 
                        }/>
                        <Route path="/state-data" render={routerProps => 
                            <StateData {...routerProps} 
                                places={this.state.places} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                                stateName={this.state.stateName}
                                isStateSelected={this.state.isStateSelected}
                            /> 
                        }/>
                    </Switch>
                    <Footer/>
                </div>
    }
}

export default App;