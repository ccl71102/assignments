import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Footer = props => {

    const {lightMode, toggleLightMode} = props;

    return  <div className={lightMode ? "footer-light" : "footer"}>
                <a className="tooltip" href="https://www.linkedin.com/in/colonlopezcarlos/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <span className={lightMode ? "tooltiptext-light-bottom" : "tooltiptext-bottom"}>My LinkedIn Profile</span>
                </a>
                <a className="tooltip" href="https://github.com/ccl71102">
                    <FontAwesomeIcon icon={faGithub}/>
                    <span className={lightMode ? "tooltiptext-light-bottom" : "tooltiptext-bottom"}>My Github Profile</span>
                </a>
                <span className="tooltip theme-toggle" onClick={toggleLightMode}>
                    <span>{lightMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}</span>
                    <span className={lightMode ? "tooltiptext-light-bottom" : "no-side-padding tooltiptext-bottom"}>{lightMode ? "Enable Cool Mode" : "Enable Warm Mode"}</span>
                </span>
            </div>;
}

export default Footer;