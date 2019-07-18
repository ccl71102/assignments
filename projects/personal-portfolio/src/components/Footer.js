import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return <div className="footer">
        <span id="contact-span">CONTACT INFO</span>
        <a href="https://www.linkedin.com/in/colonlopezcarlos/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn Profile</a>
        <a href="https://github.com/ccl71102"><FontAwesomeIcon icon={faGithub}/> Github Profile</a>    
        <span>colonlopezcarlos -at- gmail -dot- com</span>
    </div>
}

export default Footer;