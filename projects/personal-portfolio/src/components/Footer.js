import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return <div className="footer" id="contact">
        <span  style={{marginTop: 15}} id="contact-span">CONTACT INFO</span>
        <a href="https://www.linkedin.com/in/colonlopezcarlos/"><FontAwesomeIcon icon={faLinkedin}/> colonlopezcarlos</a>
        <a href="https://github.com/ccl71102"><FontAwesomeIcon icon={faGithub}/> ccl71102</a>    
        <span style={{marginBottom: 15}}><FontAwesomeIcon icon={faGoogle}/> colonlopezcarlos -at- gmail -dot- com</span>
    </div>
}

export default Footer;