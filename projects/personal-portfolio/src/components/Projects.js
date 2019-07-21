import React from "react";
import pacScreenshot from "../images/pac-screenshot.png";
import cssZenGardenScreenshot from "../images/css-zen-garden-screenshot.png";
import parkwatchScreenshot from "../images/parkwatch-screenshot.jpg";
import businessTimeScreenshot from "../images/business-time-screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    document.title = "Carlos Colon";

    return <div>
    <div className="transparent-wrapper">
        <div className="header-div">
            <h1 className="home-title">PROJECTS</h1>
            <h2 id="content" className="section-title table-of-content-title">CONTENTS</h2>
            <div className="table-of-content-div">
                <a className = "table-of-content-link" href="#property-affordability-calculator"><FontAwesomeIcon icon={faDotCircle}/> Property Affordability Calculator</a>
                <a className = "table-of-content-link" href="#css-zen-garden"><FontAwesomeIcon icon={faDotCircle}/> CSS Zen Garden</a>
                <a className = "table-of-content-link" href="#business-time"><FontAwesomeIcon icon={faDotCircle}/> Business Time Website</a>
                <a className = "table-of-content-link" href="#parkwatch-parking-meter-monitoring-system"><FontAwesomeIcon icon={faDotCircle}/> ParkWatch Parking Monitoring System</a>
            </div>
            <br/>
            <br/>
        </div>
        <div className="content-div">
            <div className="project-data-div" id="property-affordability-calculator">
                <a href="https://property-affordability-calculator.surge.sh/">
                    <h2 className="section-title">PROPERTY AFFORDABILITY CALCULATOR</h2>
                </a>
                <p>A React based single page application that determines whether the user can afford to live in a particular area based on their annual income. It also provides additional information about the area by retrieving information from an external API provided by datausa.io.</p>
                <p>Additional features include being fully responsive without relying on external libraries (developed with a mobile first approach), having different appearance themes that can be selected by the user, and a background that is updated in real time based on input data.</p>
                <a href="https://property-affordability-calculator.surge.sh/">
                    <img className= "project-screenshot" src={pacScreenshot} alt="property affordability calculator screenshot"/>
                </a>
            </div>
            <div className="project-data-div" id="css-zen-garden">
                <a href="https://css-zen-garden-colonlopezcarlos.surge.sh/">
                    <h2 className="section-title">CSS ZEN GARDEN</h2>
                </a>
                <p>A CSS/HTML based project that involved replicating the <a href="http://www.csszengarden.com/214/">CSS Zen Garden website</a> without simply copying the source code. Additionally, the site's responsiveness had to be mimicked.</p>
                <a href="https://css-zen-garden-colonlopezcarlos.surge.sh/">
                    <img className= "project-screenshot" src={cssZenGardenScreenshot} alt="css zen garden screenshot"/>
                </a>
            </div>
            <div className="project-data-div" id="business-time">
                <a href="https://business-time-colonlopezcarlos.surge.sh/">
                    <h2 className="section-title">BUSINESS TIME WEBPAGE</h2>
                </a>
                <p>The first static webpage project done at V School. The purpose was to build a responsive website for a fictional business from scratch using media queries. As a bonus, there's some light JavaScript functionality built in the Contact section, but whatever gets put in the form will vanish into the ether.</p>
                <a href="https://business-time-colonlopezcarlos.surge.sh/">
                    <img className= "project-screenshot" src={businessTimeScreenshot} alt="business time webpage screenshot"/>
                </a>
            </div>
            <div className="project-data-div" id="parkwatch-parking-meter-monitoring-system">
                <a href="https://www.slideshare.net/slideshow/embed_code/key/rg6HHu7JqDHSGH">
                    <h2 className="section-title">PARKWATCH PARKING METER MONITORING SYSTEM</h2>
                </a>
                <p>ParkWatch is a parking meter surveillance system designed to optimize parking meter operation by maintaining communications between parking meters, workstations, and handheld devices to determine the parking meters’ status. An alarm was added to the parking meter prototype to deter vandalism.</p>
                <p>The C# written workstation application’s implementation allowed users to monitor the current status of parking meters, add or remove parking meters from the system, adjust fares, view notifications generated by the system, and generate monthly status reports.</p>  
                <p className="video-links">A video demonstration of the prototype version of the project can be seen <a href="https://youtu.be/0m4rpoGSzsA">here</a> and <a href="https://youtu.be/4QlbxwkxNhE">here</a>.</p>         
                <a href="https://www.slideshare.net/slideshow/embed_code/key/rg6HHu7JqDHSGH">
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
                <br/>
            </div>
        </div>
    </div>
</div>
}

export default Projects;