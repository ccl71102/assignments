import React from "react";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import {withTheme} from "./ThemeProvider.js";

const App = props => {
    return  <div>
                <Navbar theme={props.theme} 
                        changeTheme={props.changeTheme}/>
                <Home {...props}/>
                <Footer {...props}/>
            </div>
}

export default withTheme(App);