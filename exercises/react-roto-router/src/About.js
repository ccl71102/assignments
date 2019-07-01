import React from "react";

const About = () => {

    const divStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/9/90/Beaver_dam_J%C3%A4mtland.JPG')"
    }

    const containerDiv = {
        backgroundColor: "#303030",
        opacity: "0.8",
        margin: "50px auto",
        padding: "20px"

    }

    const h1Style = {
        color: "#f2efed",
        textShadow: "2px 2px #242221",
        fontFamily: "sans-serif",
        textAlign: "center"
    }

    const pStyle = {
        width: 600,
        color: "#f2efed",
        textShadow: "1px 1px #242221",
        fontFamily: "sans-serif",
        textAlign: "justify",
        textIndent: 20,
        lineHeight: 1.6
    }

    const imgStyle = {
        width: 600,
        border: "1px solid #383635",
        boxShadow: "2px 2px #615f5e"
    }

    return <div style={divStyle}>
                <div style={containerDiv}>
                    <h1 style={h1Style}>We Give A Dam About Your Dams</h1>
                    <p style={pStyle}>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
                    </p>
                    <img style={imgStyle} alt = "a beaver swimming" src="https://www.gannett-cdn.com/-mm-/21e9b6c90326cf73ec17a38f54a73276752f0c3d/c=0-52-1000-614/local/-/media/Binghamton/2014/10/08/1012beaver.jpg?width=3200&height=1680&fit=crop">
                    </img>
                    <p style={pStyle}>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                </div>
            </div>;
}

export default About;