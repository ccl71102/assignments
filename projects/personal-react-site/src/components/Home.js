import React from "react";
import placeholderImage from "../images/default.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank, faInfoCircle, faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = props => {

    document.title = "Property Affordability Calculator - Home";

    const {stateName, stateId, places, lightMode} = props;
    const mappedIds = places.map(item => item["ID State"]);
    const index = Math.floor(Math.random() * mappedIds.length);
    const randomId = mappedIds[index];

    let backgroundURL = placeholderImage;

    if(typeof randomId !== "undefined"){
        if(stateName === "")
            backgroundURL = "https://datausa.io/api/profile/geo/" + randomId + "/splash";
        else
            backgroundURL = "https://datausa.io/api/profile/geo/" + stateId+ "/splash";
    }

    const divStyle = {
        backgroundImage: `url(${backgroundURL})`
    };

    return  <div className={lightMode ? "transparent-wrapper-light" : "transparent-wrapper"} style={divStyle}>
                <div className="container-div">
                    <div className="content-div">
                        <h1 className="content-heading">Property Affordability Calculator</h1>
                        <p className={lightMode ? "piggy-bank-icon-light" : "piggy-bank-icon"}><FontAwesomeIcon icon={faPiggyBank}/></p>
                        <p className="home-paragraph">This app is used to <Link className={lightMode ? "links-light" : "links"} to="/calculator"><FontAwesomeIcon icon={faCalculator}/> calculate</Link> whether you can afford property in a given state based on your annual salary. It also provides additional <Link to="/state-data"  className={lightMode ? "links-light" : "links"}><FontAwesomeIcon icon={faInfoCircle}/> information</Link> about the state.</p>
                        <p className="home-paragraph">However, the true purpose of this app is serve as a tech demo for some of the features I have learned by using React and JavaScript. If you're curious about how it all works, you can view the source code <a  className={lightMode ? "links-light" : "links"} href="https://github.com/ccl71102/assignments/tree/master/projects/personal-react-site"><FontAwesomeIcon icon={faGithub}/> here</a>.</p>
                    </div>
                </div>
            </div>;
}

export default Home;