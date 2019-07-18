import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClipboardList} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return <div className="navbar">
        <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
        <Link to="/projects"><FontAwesomeIcon icon={faClipboardList}/> Projects</Link>
        {/* <Link to="/contact"><FontAwesomeIcon icon={faAddressCard}/> Contact</Link> */}
    </div>
}

export default Navbar;