import React from "react";
import SuperHero from "./SuperHero";

const HeroList = props => {


    const mapped = props.heroArr.map(hero => 
    <SuperHero 
        key={String.fromCharCode((Math.random() * (90 - 65) + 65),(Math.random() * (90 - 65) + 65),(Math.random() * (90 - 65) + 65),(Math.random() * (90 - 65) + 65),(Math.random() * (90 - 65) + 65)) + (Math.floor(Math.random() * 10000))}
        name={hero.name}
        show={hero.show}
        catchPhrase={hero.catchPhrase}
        imageName = {hero.imageName}
        sayCatchPhrase = {props.sayCatchPhrase}
    />);

    const styling = {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "0 auto",
        fontFamily: "sans-serif",
        textShadow: "1px 1px grey",
        color: "#b07f54"
    }

    return <div style={styling}>
    <h1 style={styling}>Alleged Superheroes</h1>
    {mapped}</div>;

}

export default HeroList;