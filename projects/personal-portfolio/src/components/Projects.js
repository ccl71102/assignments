import React from "react";
import pacScreenshot from "../images/pac-screenshot.png";
import cssZenGardenScreenshot from "../images/css-zen-garden-screenshot.png";
import parkwatchScreenshot from "../images/parkwatch-screenshot.jpg";
import businessTimeScreenshot from "../images/business-time-screenshot.png";
import fspScreenshot from "../images/full-stack-pizza-screenshot.png";
import guitarScreenshot from "../images/guitar-stack-screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

/* 
    I should create a Project component and pass down the info as props
    because this page is starting to get crowded.
*/ 

const Projects = () => {

    return  <div>
                <div className="transparent-wrapper">
                    <div className="header-div">
                        <h1 className="home-title" id="table-of-content">PROJECTS</h1>
                        <h2 id="content" className="section-title table-of-content-title">CONTENTS</h2>
                        <div className="table-of-content-div">
                            <a className = "table-of-content-link" href="#guitar-stack"><FontAwesomeIcon icon={faDotCircle}/> Guitar Stack</a>
                            <a className = "table-of-content-link" href="#full-stack-pizza"><FontAwesomeIcon icon={faDotCircle}/> Full Stack Pizza</a>
                            <a className = "table-of-content-link" href="#property-affordability-calculator"><FontAwesomeIcon icon={faDotCircle}/> Property Affordability Calculator</a>
                            <a className = "table-of-content-link" href="#css-zen-garden"><FontAwesomeIcon icon={faDotCircle}/> CSS Zen Garden</a>
                            <a className = "table-of-content-link" href="#business-time"><FontAwesomeIcon icon={faDotCircle}/> Business Time Website</a>
                            <a className = "table-of-content-link" href="#parkwatch-parking-meter-monitoring-system"><FontAwesomeIcon icon={faDotCircle}/> ParkWatch Parking Monitoring System</a>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div className="content-div">
                    <div className="project-data-div" id="guitar-stack">
                            <a href="https://guitarstack.herokuapp.com/">
                                <h2 className="section-title">GUITAR STACK</h2>
                            </a>
                            <p>A guitar teaching tool; Guitar Stack is a full stack single page application that includes a metronome, a tuner, and the means to search and save guitar tabs per user account.</p>
                            <a className= "source-code-link" href="https://github.com/ccl71102/guitar-app"><FontAwesomeIcon icon={faGithub}/> Project Source Code</a>
                            <a href="https://guitarstack.herokuapp.com/">
                                <img className= "project-screenshot" src={guitarScreenshot} alt="guitar stack screenshot"/>
                            </a>
                            <a className="top-link" href="#table-of-content"><FontAwesomeIcon icon={faArrowCircleUp}/> Back to Top</a>
                        </div>
                        <div className="project-data-div" id="full-stack-pizza">
                            <a href="https://fullstackpizza.herokuapp.com/">
                                <h2 className="section-title">FULL STACK PIZZA</h2>
                            </a>
                            <p>A full stack single page application for a fictional pizzeria built with a combination of React, CSS, HTML for the front-end, and Node.js and MongoDB for the back-end.</p>
                            <p>Features include:</p>
                            <ul>
                                <li>Being able to use the menu to filter options based on size and cost.</li>
                                <li>Add pizzas to a cart or just order one and head straight to checkout.</li>
                                <li>Modify the amount of pizzas of the same type in the cart or remove them altogether.</li>
                                <li>A confirmation page with all the order details before placing an order.</li>
                                <li>A cart whose contents persist if the user leaves and returns to the site.</li>
                            </ul>
                            <a className= "source-code-link" href="https://github.com/ccl71102/full-stack-group-project"><FontAwesomeIcon icon={faGithub}/> Project Source Code</a>
                            <a href="https://fullstackpizza.herokuapp.com/">
                                <img className= "project-screenshot" src={fspScreenshot} alt="full stack pizza screenshot"/>
                            </a>
                            <a className="top-link" href="#table-of-content"><FontAwesomeIcon icon={faArrowCircleUp}/> Back to Top</a>
                        </div>
                        <div className="project-data-div" id="property-affordability-calculator">
                            <a href="https://property-affordability-calculator.surge.sh/">
                                <h2 className="section-title">PROPERTY AFFORDABILITY CALCULATOR</h2>
                            </a>
                            <p>A React based single page application that determines whether the user can afford to live in a particular area based on their annual income. It also provides additional information about the area by retrieving information from an external API provided by datausa.io.</p>
                            <p>Additional features include being fully responsive without relying on external libraries (developed with a mobile first approach), having different appearance themes that can be selected by the user, and a background that is updated in real time based on input data.</p>
                            <a className= "source-code-link" href="https://github.com/ccl71102/assignments/tree/master/projects/personal-react-site"><FontAwesomeIcon icon={faGithub}/> Project Source Code</a>
                            <a href="https://property-affordability-calculator.surge.sh/">
                                <img className= "project-screenshot" src={pacScreenshot} alt="property affordability calculator screenshot"/>
                            </a>
                            <a className="top-link" href="#table-of-content"><FontAwesomeIcon icon={faArrowCircleUp}/> Back to Top</a>
                        </div>
                        <div className="project-data-div" id="css-zen-garden">
                            <a href="https://css-zen-garden-colonlopezcarlos.surge.sh/">
                                <h2 className="section-title">CSS ZEN GARDEN</h2>
                            </a>
                            <p>A CSS/HTML based project that involved replicating the <a href="http://www.csszengarden.com/214/">CSS Zen Garden website</a> without simply copying the source code. Additionally, the site's responsiveness had to be mimicked.</p>
                            <a className= "source-code-link" href="https://github.com/ccl71102/assignments/tree/master/projects/css-zen-garden"><FontAwesomeIcon icon={faGithub}/> Project Source Code</a>
                            <a href="https://css-zen-garden-colonlopezcarlos.surge.sh/">
                                <img className= "project-screenshot" src={cssZenGardenScreenshot} alt="css zen garden screenshot"/>
                            </a>
                            <a className="top-link" href="#table-of-content"><FontAwesomeIcon icon={faArrowCircleUp}/> Back to Top</a>
                        </div>
                        <div className="project-data-div" id="business-time">
                            <a href="https://business-time-colonlopezcarlos.surge.sh/">
                                <h2 className="section-title">BUSINESS TIME WEBSITE</h2>
                            </a>
                            <p>The first static website project done at V School. The purpose was to build a responsive website for a fictional business from scratch using media queries. As a bonus, there's some light JavaScript functionality built in the Contact section, but whatever gets put in the form will vanish into the ether.</p>
                            <a className= "source-code-link" href="https://github.com/ccl71102/assignments/tree/master/projects/business-time"><FontAwesomeIcon icon={faGithub}/> Project Source Code</a>
                            <a href="https://business-time-colonlopezcarlos.surge.sh/">
                                <img className= "project-screenshot" src={businessTimeScreenshot} alt="business time website screenshot"/>
                            </a>
                            <a className="top-link" href="#table-of-content"><FontAwesomeIcon icon={faArrowCircleUp}/> Back to Top</a>
                        </div>
                        <div className="project-data-div" id="parkwatch-parking-meter-monitoring-system">
                            <a href="https://www.slideshare.net/slideshow/embed_code/key/rg6HHu7JqDHSGH">
                                <h2 className="section-title">PARKWATCH PARKING METER MONITORING SYSTEM</h2>
                            </a>
                            <p>ParkWatch is a parking meter surveillance system designed to optimize parking meter operation by maintaining communications between parking meters, workstations, and handheld devices to determine the parking meters’ status. An alarm was added to the parking meter prototype to deter vandalism.</p>
                            <p>The workstation application’s implementation allowed users to monitor the current status of parking meters, add or remove parking meters from the system, adjust fares, view notifications generated by the system, and generate monthly status reports.</p>  
                            <p className="video-links">A video demonstration of the prototype version of the project can be seen <a href="https://youtu.be/0m4rpoGSzsA">here</a> and <a href="https://youtu.be/4QlbxwkxNhE">here</a>.</p>         
                            <a style={
                                        {   
                                            marginTop: "60px", 
                                            marginBottom: "40px"
                                        }
                                    } href="https://www.slideshare.net/slideshow/embed_code/key/rg6HHu7JqDHSGH">
                                <img className= "project-screenshot" src={parkwatchScreenshot} alt="parkwatch project documentation screenshot"/>
                            </a>
                            <br/>
                            <div className="video-container">
                                <div className="video-responsive">
                                    <iframe title="ParkWacth Demo #1 (Handheld Device)" width="560" height="315" src="https://www.youtube.com/embed/0m4rpoGSzsA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <br/>
                            <div className="video-container">
                                <div className="video-responsive">
                                    <iframe title="ParkWatch Demo #2 (All Components)" width="560" height="315" src="https://www.youtube.com/embed/4QlbxwkxNhE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <a className="top-link" href="#table-of-content"><FontAwesomeIcon icon={faArrowCircleUp}/> Back to Top</a>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>;
}

export default Projects;