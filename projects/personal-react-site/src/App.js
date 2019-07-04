import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";

class App extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/" component=""/>
                        <Route path="/" component=""/>
                    </Switch>
                    <Footer/>
                </div>
    }
}

export default App;