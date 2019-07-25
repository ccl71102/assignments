import React from "react";
import BountyList from "./components/BountyList.js";
import BountyForm from "./components/BountyForm.js";
import { withBounty } from "./context/BountyProvider.js";

const App = props => {

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#484b52",
    color: "#ededdd"
  }
  return  <div style={divStyle}>
            <h1 style = {{fontFamily: "Roboto, sans-serif"}}>Bounty Tracker</h1>
            <BountyForm {...props}/>
            <BountyList {...props}/>
          </div>
}

export default withBounty(App);
