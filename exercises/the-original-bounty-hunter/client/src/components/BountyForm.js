import React, {Component} from "react";
// import axios from "axios";

class BountyForm extends Component {

    constructor(){
        super();
        this.state = {
            firstName: "", 
            lastName: "", 
            living: true, 
            bounty: 0, 
            type: "", 
            imgUrl: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const {firstName, lastName, living, bounty, type, imgUrl} = this.state

        const newBounty = {
            firstName: firstName,
            lastName: lastName,
            living: living,
            bounty: bounty,
            type: type,
            imgUrl: imgUrl
        }

        this.props.postBounty(newBounty);
    }

    handleClick = e => {

        const {name, checked} = e.target;
        this.setState({
            [name]: checked
        });
    }

    handleChange = e => {

        const {name, value} = e.target;
        this.setState({
            [name]: value
        }); 
    }

    render() {

            return  <div style = {{fontFamily: "Roboto, sans-serif"}}>
                        <form onSubmit={this.handleSubmit}>
                            <input style={{marginBottom: 5}}type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" required/>
                            <input style={{marginBottom: 5, marginLeft: 5}}type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" required/>
                            <input style={{marginBottom: 5, marginLeft: 5}}type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} placeholder="imgUrl"/>
                            <label> Living: </label>
                            <input style={{marginBottom: 5, marginLeft: 5}}type="checkbox" name="living" checked={this.state.living} onClick={this.handleClick} placeholder="Living"/>
                            <input style={{marginBottom: 5, marginLeft: 5}}type="number" name="bounty" value={this.state.bounty} onChange={this.handleChange} placeholder="Bounty" required/>
                            <select style={{marginBottom: 5, marginLeft: 5}} name="type" value={this.state.type} required onChange={this.handleChange}>
                                <option value="">-Select Alignment-</option>
                                <option value="jedi">Jedi</option>
                                <option value="sith">Sith</option>
                            </select>
                            <button style={{marginBottom: 5, marginLeft: 5}}>Submit</button>
                        </form>
                    </div>
    }
}

export default BountyForm;