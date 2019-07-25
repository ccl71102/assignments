import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import { Switch, Route, withRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js"

const Scroll = withRouter(ScrollToTop);

const App = () => {
  
  return    <div>
              <Navbar/>
              <Scroll>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/projects" component={Projects}/>
                </Switch>
              </Scroll>
              <Footer/>
            </div>

}

export default App;