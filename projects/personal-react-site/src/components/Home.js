import React from "react";
import placeholderImage from "../images/default.jpeg";
// import {withRouter} from "react-router";

const Home = props => {

    
    document.title = "Home - Affordability Calculator";

    const {stateName, stateId, places} = props;
    const mappedIds = places.map(item => item["ID State"]);
    const index = Math.floor(Math.random() * mappedIds.length);
    const randomId = mappedIds[index];

    let backgroundURL = placeholderImage;
    console.log(backgroundURL);
    if(typeof randomId !== "undefined"){
        if(stateName === ""){
                backgroundURL = "https://datausa.io/api/profile/geo/" + randomId + "/splash"
       }
      else{
          console.log(stateId)
                backgroundURL = "https://datausa.io/api/profile/geo/" + stateId+ "/splash"
            }
        }

    const divStyle = {
        backgroundImage: `url(${backgroundURL})`
    };

    return  <div className="container-div" style={divStyle}>
                <div className="content-div">
                    <h1>Title</h1>
                </div>
            </div>

}

export default Home;