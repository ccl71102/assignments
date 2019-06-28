import React from "react";
import HeroList from "./HeroList";
import data from "./data.json";

class App extends React.Component {

    sayCatchPhrase = phrase => {
        alert(phrase);
    }


    render(){

        const styling = {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            margin: "0 auto"
        }

        
        return (
        <div style={styling}>
            <HeroList 
                heroArr={data} 
                sayCatchPhrase={this.sayCatchPhrase}/>
        </div>
        );
    }
}

export default App;