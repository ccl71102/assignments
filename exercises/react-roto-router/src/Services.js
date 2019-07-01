import React from "react";

const Services = () => {

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
                    <h1 style={h1Style}>The Best Dam Building Projects Around</h1>
                    <p style={pStyle}>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.
                    </p>
                    <img style={imgStyle} alt = "a beaver swimming" src="https://www.advancedsciencenews.com/wp-content/uploads/2018/11/beaver-3709599_1920-1.jpg">
                    </img>
                    <p style={pStyle}>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources. Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p>
                </div>
            </div>;
}

export default Services;