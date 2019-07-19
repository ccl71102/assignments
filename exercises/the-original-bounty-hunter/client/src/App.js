import React from "react";
import BountyList from "./components/BountyList.js";
import BountyForm from "./components/BountyForm.js";
import { withBounty } from "./context/BountyProvider.js";

const App = props => {

  return  <div>
            <BountyForm {...props}/>
            <BountyList {...props}/>
          </div>
  
}

export default withBounty(App);
