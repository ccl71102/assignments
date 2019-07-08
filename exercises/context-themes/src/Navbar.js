import React from "react";

const Navbar = props => {
    return  <div className={"navbar-"+props.theme}>
                <a href="#">Home</a>
                <a href="#">Don't Go Here</a>
                <a href="#">Or Here</a>
            </div>;
}

export default Navbar;