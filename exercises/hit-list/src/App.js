import React from "react";
import axios from "axios";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: []
        };
    }

    componentDidMount(){
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
        .then(res => {
            console.log(res.data);
            this.setState({people: res.data });
        })
        .catch(err => console.log(err));
    }

    render(){

        //I'm aware that writing everything down in one line is bad practice but I wanted to test out of I could pull it off.
        
        return <div style={{

        }}>
                    <div style={
                        {
                            height: 100,
                            backgroundColor: "black",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>
                        <p style={{
                                textAlign: "center",
                                fontFamily: "sans-serif",
                                fontSize: 50,
                                color: "#96483c",
                                textShadow: "1px 1px grey"
                            }}>Hit List</p>
                    </div>
                    <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyItems: "space-around",
                            flexWrap: "wrap",
                            padding: 20
                        }}>{this.state.people.map(person => 
                        <div key={person.name + Math.floor(Math.random() * 1000)}>
                            <p style={{
                                textAlign: "center",
                                fontFamily: "sans-serif",
                                fontSize: 30,
                                textShadow: "1px 1px grey"
                            }}>{person.name}</p>
                            {<img 
                                src={person.image} 
                                alt={person.name}
                                style={{
                                    height: 300,
                                    width: 300,
                                    objectFit: "cover",
                                    boxShadow: "1px 1px grey"
                                    }}> 
                            </img>}
                        </div>)}
                    </div>
                </div>
    }


}

export default App;