import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faJava, faCss3Alt, faHtml5, faReact, faNodeJs, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faTerminal, faDatabase } from "@fortawesome/free-solid-svg-icons";
import me from "../images/carlos.png";

const Home = () => {

    return  <div>
                <div className="transparent-wrapper">
                    <div className="header-div">
                        <h1 className="home-title">CARLOS COLON</h1>
                    </div>
                    <div className="content-div">
                    <div className="about-grid">
                        <div className="center-portrait">
                            <img className="portrait" src={me} alt="Carlos"/>
                        </div>
                        <h2 className="section-title content-grid-1">ABOUT ME</h2>
                        <div className="content-grid-2">
                            <p>I am a problem solver who takes pride in being able to grasp new concepts with ease, being resourceful, having a wide breadth of technological knowledge, and figuring out how to use it to achieve results.</p> 
                            <p>From a humble beginning working with C and Java, I have expanded my toolset to include JavaScript (React, Node.js), C#, C++, PowerScript, SQL, and MongoDB.</p> 
                            <p>When I am not programming or solving problems, I enjoy exploring the outdoors, road trips, motorsports, and playing all sorts of instruments; mainly guitar, bass, and drums.</p>
                        </div>
                        <h2 className="section-title content-grid-3">SKILLS</h2>
                        <div className="skills-grid">   
                            <div className="content-grid-4">
                                <span className="icon-column-1"><FontAwesomeIcon icon={faJs}/></span>
                                <span className="text-column-1"> JavaScript </span> 
                                <span className="icon-column-1"> <FontAwesomeIcon icon={faHtml5}/></span>
                                <span className="text-column-1"> HTML </span> 
                                <span className="icon-column-1"> <FontAwesomeIcon icon={faCss3Alt}/></span>
                                <span className="text-column-1"> CSS </span> 
                                <span className="icon-column-1"> <FontAwesomeIcon icon={faReact}/></span>
                                <span className="text-column-1"> React </span> 
                                <span className="icon-column-1"> <FontAwesomeIcon icon={faNodeJs}/></span>
                                <span className="text-column-1"> Node.js </span> 
                                <span className="icon-column-1"><FontAwesomeIcon icon={faJava}/></span>
                                <span className="text-column-1"> Java </span>
                                <span className="icon-column-1"><FontAwesomeIcon icon={faMicrosoft}/></span>
                                <span className="text-column-1"> C# </span> 
                                <span className="icon-column-1" style={{fontSize: 16}}><FontAwesomeIcon icon={faTerminal}/></span>
                                <span className="text-column-1">C++</span> 
                                <span className="icon-column-1" style={{fontSize: 16}}><FontAwesomeIcon icon={faTerminal}/></span>
                                <span className="text-column-1">C</span> 
                                <span className="icon-column-1" style={{fontSize: 16}}><FontAwesomeIcon icon={faTerminal}/></span>
                                <span className="text-column-1">PowerScript</span>
                                <span className="icon-column-1"><FontAwesomeIcon icon={faDatabase}/></span>
                                <span className="text-column-1">SQL</span>
                                <span className="icon-column-1"><FontAwesomeIcon icon={faDatabase}/></span>
                                <span className="text-column-1">MongoDB</span>
                            </div>
                        </div>
                            <h2 className="section-title content-grid-5">RESUME</h2>
                            <div className="content-grid-6">
                                <a href="https://docs.google.com/document/d/1IfxbXoNi467XQRiKuXsmNbpRq7bQdJs9CesBeaQw12A/"><FontAwesomeIcon icon={faDownload}/> View Here (Google Docs)</a>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>;
}

export default Home;