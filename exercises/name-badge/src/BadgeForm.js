import React from "react";

const BadgeForm = props => {

    const {
        firstName,
        lastName,
        email,
        placeOfBirth,
        phone,
        favoriteFood,
        description,
        disabled,
        handleChange,
        handleSubmit
    } = props;

    const divStyle = {
        width: 455,
        border: "1px solid black",
        boxShadow: "2px 2px grey",
        fontFamily: "sans-serif"

    }

    const inputStyle = {
       margin: 10,
       fontFamily: "sans-serif"
    }

    const textareaStyle = {
        margin: 10,
        outline: "none",
        resize: "none",
        overflow: "auto",
        fontFamily: "sans-serif"

    }

    return <div style={divStyle}>
        <form onSubmit={handleSubmit}>
            <input 
                name="firstName"
                onChange={handleChange}
                value={firstName}
                type="text"
                placeholder="First Name"
                style = {inputStyle}
                spellCheck = {true}
                required
            />
            <input 
                name="lastName"
                onChange={handleChange}
                value={lastName}
                type="text"
                placeholder="Last Name"
                style = {inputStyle}
                spellCheck = {true}
                required
            />
            <input 
                name="email"
                onChange={handleChange}
                value={email}
                type="email"
                placeholder="Email"
                style = {inputStyle}
                required
            />
            <input 
                name="placeOfBirth"
                onChange={handleChange}
                value={placeOfBirth}
                type="text"
                placeholder="Place of Birth"
                style = {inputStyle}
                spellCheck = {true}
                required
            />
            <input 
                name="phone"
                onChange={handleChange}
                value={phone}
                type="text"
                placeholder="Phone (555) 555-5555"
                style = {inputStyle}
                maxLength = "10"
                required
            />
            <input 
                name="favoriteFood"
                onChange={handleChange}
                value={favoriteFood}
                type="text"
                placeholder="Favorite Food"
                style = {inputStyle}
                spellCheck = {true}
                required
            />
            <textarea
                name="description"
                onChange={handleChange}
                value={description}
                type="textarea"
                placeholder="Tell us about yourself"
                style = {textareaStyle}
                cols="68"
                rows="6"
                spellCheck = {true}
                required
            />
            <button style={inputStyle} disabled={disabled}>Submit</button>
        </form>
    </div>

}

export default BadgeForm;