import React from "react";
import DiceBox from "./DiceBox";
import Button from "./Button";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            numArr: [
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1)
                ],
                color: "#ffffff"
        }
    }

    rollDice = () => {
        this.setState({
            numArr: [
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1)
            ],
            color: "#ffffff"
        });
    }

    render(){

        const buttonDivStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap"
        }

        return  <div>
                    <div>
                        <DiceBox numArr = {this.state.numArr} color = {this.state.color}/>
                    </div>
                    <div style = {buttonDivStyle}>
                        <Button method = {this.rollDice} name = {"Let's Roll"}/>
                    </div>
                </div>;
    }
}

export default App;