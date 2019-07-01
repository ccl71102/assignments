import React from "react";

const Home = () => {

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
                    <h1 style={h1Style}>Beaver Dam Building Corporation</h1>
                    <p style={pStyle}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                    </p>
                    <img style={imgStyle} alt = "a beaver" src="https://www.calgaryzoo.com/blog/wp-content/uploads/2017/05/iStock-463463153-1024x935.jpg">
                    </img>
                    <p style={pStyle}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                </div>
            </div>;
}

export default Home;