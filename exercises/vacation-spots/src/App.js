import React from "react";
import Card from "./Card";

const App = () => {

    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ];
    
      const cards = vacationSpots.map( card => {
        return (
        <Card 
            key = {card.place + card.price} 
            place = {card.place}
            price = {card.price}
            timeToGo = {card.timeToGo}
        />
        );
      });

    return (
        <div>
            <h1 style = {
                {
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    textShadow: "1px 1px grey",
                    color: "#FAFAFA",
                    backgroundColor: "#6c6972",
                    padding: "10px",
                    border: "2px solid #FAFAFA",
                    boxShadow: "2px 2px grey"
                }
            }>Vacation Spots</h1>
            <div style={
                {
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap" 
                }
            }>{cards}</div>
        </div>
    );
};

export default App;