import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

  constructor(){
    super();
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
    .then(res => {
      console.log(res.data.Results[22].Mfr_CommonName);
      console.log("");
      console.log(res.data.Results);
    })
    .catch(err => {
      console.log(err)
    });
  }

  render() {
      return <div></div>
  }
}

export default App;
