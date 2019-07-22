import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import { Switch, Route} from "react-router-dom";

const App = () => {
  
  return    <div>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
              <Footer/>
            </div>

}

export default App;