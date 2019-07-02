import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        color: "#ffffff"
    };
  }

  changeColor = () => {
    axios.get("http://www.colr.org/json/color/random")
    .then(res => {
        console.log(res.data.new_color);
        this.setState({color: "#"+res.data.new_color})
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    const divStyle = {
      height: 200,
      border: "1px solid black",
      boxShadow: "2px 2px grey",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 50,
      textShadow: "1px 1px grey",
      fontFamily: "sans-serif",
      backgroundColor: this.state.color
    }
    return <div onClick={this.changeColor}
                style={divStyle}>
                  Click Me
    </div>;
  }
}

export default App;
