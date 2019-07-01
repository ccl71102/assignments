import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const App = () => {

    return <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/services" component={Services}></Route>
                </Switch>
                <Footer/>
            </div>;
}

export default App;