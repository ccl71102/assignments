import React from "react";

const BountyForm = props => {

    const { firstName, lastName, living, bounty, type, imgUrl } = props;

    const submit = e => {

    }

    const change = e => {

    }

    return  <div>
                <form onSubmit={submit}>
                    <input type="text" name="firstName" value={firstName} onChange={change} placeholder="First Name"/>
                    <input type="text" name="lastName" value={lastName} onChange={change} placeholder="Last Name"/>
                    <input type="text" name="imgUrl" value={imgUrl} onChange={change} placeholder="imgUrl"/>
                    <input type="checkbox" name="living" checked={living} onChange={change} placeholder="Living"/>
                    <input type="number" name="bounty" value={bounty} onChange={change} placeholder="Bounty"/>
                    <input type="radio" name="type" value={type === "jedi" ? true : false} onChange={change}/>
                    <input type="radio" name="type" value={type === "sith" ? true : false} onChange={change}/>
                </form>
            </div>
}

export default BountyForm;