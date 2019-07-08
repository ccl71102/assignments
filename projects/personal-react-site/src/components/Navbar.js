import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalculator, faInfoCircle} from "@fortawesome/free-solid-svg-icons"


const Navbar = props => {
    return <div className="navbar">
                <Link to="/"><FontAwesomeIcon icon={faHome}/></Link>
                <Link to="/calculator"><FontAwesomeIcon icon={faCalculator}/></Link>
                <Link to="/state-data"><FontAwesomeIcon icon={faInfoCircle}/></Link>
           </div>
}

export default Navbar;