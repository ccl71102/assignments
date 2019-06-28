import React from "react";
import BadgeForm from "./BadgeForm.js";
import Badge from "./Badge.js";

const BadgeList = props => {

    
    const mappedBadges = props.badges.map(badge => 
    <Badge
        key={badge.lastName + (Math.random() * 1000)}
        firstName= {badge.firstName}
        lastName= {badge.lastName}
        email= {badge.email}
        placeOfBirth= {badge.placeOfBirth}
        phone= {badge.phone}
        favoriteFood= {badge.favoriteFood} 
        description = {badge.description}  
        backgroundColor = {props.colors[Math.floor(Math.random() * 9)]}
    />);

    return <div>
        <BadgeForm
                firstName= {props.firstName}
                lastName= {props.lastName}
                email= {props.email}
                placeOfBirth= {props.placeOfBirth}
                phone= {props.phone}
                favoriteFood= {props.favoriteFood}
                description = {props.description}
                disabled= {props.disabled}
                handleChange= {props.handleChange}
                handleSubmit= {props.handleSubmit} 
        />
        <div>{mappedBadges}</div>
    </div>
}

export default BadgeList;