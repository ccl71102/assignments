import React, { Component } from "react";

class Bounty extends Component {


     deleteBounty = _id => {
        this.props.deleteBounty(_id);
     }

    render() {
        console.log(this.props)
        const {_id, firstName, lastName, living, bounty, type, imgUrl} = this.props;


        const divStyle = {
            backgroundImage: `url(${imgUrl})`, 
            height: 200,
            width: 500,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            textShadow: "1px 1px black"
        }

        const textStyle = {
            paddingLeft: "10px",
            paddingTop: 5,
            fontFamily: "Roboto, sans-serif"
        }

        return  <div style={divStyle}>
                    <p style={textStyle}>Name: {firstName} {lastName}</p>
                    <p style={textStyle}>Status: {living ? "Alive" : "Dead"}</p>
                    <p style={textStyle}>Bounty: {bounty}</p>
                    <p style={textStyle}>Type: {type}</p>
                    <button onClick={() => this.deleteBounty(_id)}>Delete</button>
                </div>
    }
}

export default Bounty;