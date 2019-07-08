import React from "react";
// import {withRouter} from "react-router";

const Home = props => {

    const {places} = props;
    document.title = "Home - Affordability Calculator";

    const mappedIds = places.map(item => item["ID State"]);
    const index = Math.floor(Math.random() * mappedIds.length);
    const randomId = mappedIds[index];

    const divStyle = {
        backgroundImage: "url(https://datausa.io/api/profile/geo/" + randomId + "/splash)",
    };

    return  <div className="home-container-div" style={divStyle}>
                <div className="home-content-div">
                    <h1>Title</h1>
                    <p>{places[index].State}</p>
                </div>
            </div>

}

export default Home;