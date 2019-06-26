import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitterSquare, faGithub} from "@fortawesome/free-brands-svg-icons";


const Footer = () => <div className="footer-top">
                        <div className="footer-div">
                            <div>
                                <a  className = "icons" href="about:home"><FontAwesomeIcon icon={faTwitterSquare}/></a>
                            </div>
                            <div>
                                <a className = "icons" href="about:home"><FontAwesomeIcon icon={faFacebook}/></a>
                            </div>
                            <div>
                            <a className = "icons" href="about:home"><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                        <div className="footer-div">
                            <p className="copyright">Copyright © Your Website 2019</p>
                        </div>
                    </div>

export default Footer;