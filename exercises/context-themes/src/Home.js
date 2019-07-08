import React from "react";

const Home = props => {
    return <div className={`navbar-${props.theme}`}>
            <button onClick={props.changeTheme}>Click Me</button>
    </div>;
}

export default Home;