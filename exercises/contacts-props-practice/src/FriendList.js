import React from "react";
import Friend from "./Friend";
import PropTypes from "prop-types";

const FriendList = () => {
    
    const friends = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "sphynx cat"
            },{
              name: "tiger",
              breed: "sphynx cat"
            },{
              name: "oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ];
    
        const mappedFriends = friends.map( friend => 
        <Friend 
            key = {friend.name + (Math.random() * 1000000)} 
            name = {friend.name}
            age = {friend.age}
            pets = {friend.pets}
        />);
        
        return (
        <div>
            <h1 style={
                {
                    backgroundColor: "#c0c1bb",
                    border: "1px solid #fafafa",
                    color: "#fafafa",
                    textShadow: "1px 1px grey",
                    textAlign: "center",
                    padding: "5px",
                    fontFamily: "sans-serif",
                    boxShadow: "1px 1px grey"
                }
            }>Friends with Pets</h1>
            <div style={
                {
                display: "flex",
                flexWrap: "flex",
                justifyContent: "space-around",
                width: "100%",
                margin: "0"
                }
            }>
                {mappedFriends}
            </div>
        </div>
        );

}

FriendList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    pets: PropTypes.array
}

export default FriendList;