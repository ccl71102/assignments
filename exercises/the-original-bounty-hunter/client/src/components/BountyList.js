import React from "react";
import Bounty from "./Bounty.js";

const BountyList = props => {

    console.log(props);
    const { bounties } = props;
    console.log(bounties);
    const mappedBounties = bounties.map(bounty => <Bounty key={bounty._id} {...bounty}/>);
    return <div>{mappedBounties}</div>
}

export default BountyList;