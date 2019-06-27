import React from "react";
import Form from "./Form";
import NamesList from "./NamesList";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            names: []
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit = event => {
        event.preventDefault();
      
        this.setState(prevState => ({
            name: "",
            names: [...prevState.names, this.state.name] 
        }))

    }

    render() {
        return <div>
            <Form
            name = "name"
            placeholder = "Name"
            value = {this.state.name}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}/>
            <h1>{this.state.name}</h1>
            <NamesList names={this.state.names}/>
        </div>
    }
}

export default App;