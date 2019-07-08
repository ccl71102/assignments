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
            stateId: "",
            places: [],
            yearlySalary: "",
            affordability: 0,
            isAffordable: false,
            isStateSelected: false
        };
    }


    stateSelected = () => {
        if(this.state.stateName === "")
            this.setState({isStateSelected: false})
        else   
            this.setState({
                isStateSelected: true,
            })
    }


    handleSelectChange = e => {
        
        const {name, value} = e.target;

        console.log(name)
        console.log(value)
        console.log(this.state.places.find(item => item.State === value)["ID State"])

        this.setState({
            [name]: value,
            stateId: this.state.places.find(item => item.State === value)["ID State"]
        },this.stateSelected);

        console.log("handleSelectChange")
        console.log(this.state.stateName)
        console.log(this.state.stateId)
    }

    handleChange = e => {
        const {name, value} = e.target;

        if(!isNaN(value))
            this.setState({
                [name]: value
            },this.stateSelected);

            console.log(name)
            console.log(value)
            console.log(this.state.yearlySalary)
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.yearlySalary)

        this.setState({
            affordability: this.state.yearlySalary * 5.139,
            isAffordable: this.state.yearlySalary * 5.139 >= this.state.places.find(item => item.State === this.state.stateId) ? true : false
        })

        console.log(this.state.affordability)
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
                                stateName={this.state.stateName}
                                stateId={this.state.stateId}
                                handleSelectChange={this.handleSelectChange}
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
                                stateId={this.state.stateId}
                                handleSelectChange={this.handleSelectChange}
                            /> 
                        }/>
                        <Route path="/state-data" render={routerProps => 
                            <StateData {...routerProps} 
                                places={this.state.places} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                                stateName={this.state.stateName}
                                isStateSelected={this.state.isStateSelected}
                                stateId={this.state.stateId}
                                handleSelectChange={this.handleSelectChange}
                            /> 
                        }/>
                    </Switch>
                    <Footer/>
                </div>
    }
}

export default App;