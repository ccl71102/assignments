import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return <div className="footer">
        <a href="https://www.linkedin.com/in/colonlopezcarlos/"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://github.com/ccl71102"><FontAwesomeIcon icon={faGithub}/></a>    
    </div>
}

export default Footer;