import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalculator, faInfoCircle} from "@fortawesome/free-solid-svg-icons"


const Navbar = props => {
    const {lightMode} = props;

    return <div className={lightMode ? "navbar-light" : "navbar"}>
                <Link className="tooltip" to="/">
                    <FontAwesomeIcon icon={faHome}/>
                    <span className={lightMode ? "tooltiptext-light" : "tooltiptext"}>Home</span>
                </Link>
                <Link className="tooltip" to="/calculator">
                    <FontAwesomeIcon icon={faCalculator}/>
                    <span className={lightMode ? "tooltiptext-light" : "tooltiptext"}>Calculator</span>
                </Link>
                <Link className="tooltip" to="/state-data">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    <span className={lightMode ? "tooltiptext-light" : "tooltiptext"}>State Information</span>
                </Link>
           </div>
}

export default Navbar;