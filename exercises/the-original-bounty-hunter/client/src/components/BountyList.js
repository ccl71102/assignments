import React from "react";
import Bounty from "./Bounty.js";

const BountyList = props => {

    const { bounties, deleteBounty } = props;

    const mappedBounties = bounties.map(bounty => <Bounty key={bounty._id} {...bounty} deleteBounty={deleteBounty}/>);
    
    return <div>{mappedBounties}</div>
}

export default BountyList;