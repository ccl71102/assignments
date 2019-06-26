import React from "react";
import Box from "./Box";
import Button from "./Button";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            box1Color: "black",
            box2Color: "black",
            box3Color: "black",
            box4Color: "black"
        };
    }

    toggle = () => {
        let newColor;

        switch(this.state.box1Color){
            case "black":
                newColor = "white";
                break;
            case "white":
                newColor = "black";
                break;
            default:
                newColor = "black";
                break;
                
        }
        this.setState(
            {
                box1Color: newColor,
                box2Color: newColor,
                box3Color: newColor,
                box4Color: newColor
            }
        );
    }

    turnBottomLeftBlue = () => {
        this.setState({
            box3Color: "#406299"
        });
    }

    turnBottomRightBlue = () => {
        this.setState(
            {
                box4Color: "#406299"
            }
        );
    }

    turnPurple = () => {

        this.setState(
            {
                box1Color: "#4b425b",
                box2Color: "#4b425b"
            }
        );
    }

    sequenceYellow = () => {

        this.setState(
            {
                box1Color: "#d1b945"
            }
        );  
    }

    sequenceRed = () => {
        this.setState(
            {
                box2Color: "#7a2222"
            }
        );
    }

    sequenceOrange = () => {
        this.setState(
            {
                box3Color: "#d39b41"
            }
        );
    }

    sequenceGreen = () => {
        this.setState(
            {
                box4Color: "#2c3f26"
            }
        );
    }



    render = () =>{
        const divStyle = {
            display: "flex",
            flexDirecton: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            margin: "50px auto"
        };

        return <div>
                    <div style={divStyle}>
                        <Box color={this.state.box1Color}
                            title={"D"}/>
                        <Box color={this.state.box2Color}
                            title={"J"}/>
                        <Box color={this.state.box3Color}
                            title={"-"}/>
                        <Box color={this.state.box4Color}
                            title={"React"}/>
                    </div>
                    <div style={divStyle}>
                        <Button 
                            method={this.toggle}
                            name={"Toggle"}/>
                        <Button 
                            method={this.turnPurple}
                            name={"Turn First Two Purple"}/>
                        <Button 
                            method={this.turnBottomLeftBlue}
                            name={"Change Third Blue"}/>
                        <Button 
                            method={this.turnBottomRightBlue}
                            name={"Change Fourth Blue"}/>
                        <Button 
                            method={this.sequenceYellow}
                            name={"Yellow Sequence"}/>
                        <Button 
                            method={this.sequenceRed}
                            name={"Red Sequence"}/>
                        <Button 
                            method={this.sequenceOrange}
                            name={"Orange Sequence"}/>
                        <Button 
                            method={this.sequenceGreen}
                            name={"Green Sequence"}/>
                    </div>
                </div>;
    }
}

export default App;