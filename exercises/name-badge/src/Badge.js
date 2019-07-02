import React from "react";

const Badge = props => {


    const {
        firstName,
        lastName,
        email,
        placeOfBirth,
        phone,
        favoriteFood,
        description,
        backgroundColor
    } = props;

    const divStyle = {
        border: "1px solid black",
        boxShadow: "2px 2px grey",
        width: 455,
        marginTop: 30,
        fontFamily: "sans-serif"
    }

    const inputStyle = {
        margin: 10,
        fontFamily: "sans-serif"
     }

    const titleStyle = {
        border: "1px solid black",
        textShadow: "1px 1px grey",
        color: "#fafafa",
        backgroundColor: backgroundColor,
        fontFamily: "sans-serif"
    }

    const textareaStyle = {
        margin: 10,
        outline: "none",
        resize: "none",
        overflow: "auto",
        fontFamily: "sans-serif"
    }

    const flexDiv = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }

    return <div style={divStyle}>
        <p style={titleStyle}>Badge: </p>
            <div style={flexDiv}>
                <span style={inputStyle}> Name: {firstName + " " + lastName}</span>
                <span style={inputStyle}>Phone: {phone}</span>
            </div>
            <div style={flexDiv}>
                <span style={inputStyle}>Place of Birth: {placeOfBirth}</span>
                <span style={inputStyle}>Favorite Food: {favoriteFood}</span>
            </div>
            <p style={inputStyle}>Email: {email}</p>
            <textarea 
                style={textareaStyle}
                readOnly="readonly"
                cols="68"
                rows="6">{description}
            </textarea>
        </div>

}

export default Badge;