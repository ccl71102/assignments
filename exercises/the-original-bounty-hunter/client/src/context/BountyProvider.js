import React, { Component } from "react";
import axios from "axios";

const {Provider, Consumer} = React.createContext();

class BountyProvider extends Component {
    constructor(){
        super();
        this.state = {
            bounties: []
        }
    }

    componentDidMount(){

        axios.get("/bounty")
        .then(res => {
            console.log(res.data)
            this.setState({
                bounties: res.data
            })
        })
        .catch(err => console.log(err));
    }

    postBounty = newBounty => {
        axios.post("/bounty", newBounty)
        .then(res => {
            console.log(res.data);
            this.setState(prevState => ({
                bounties: [...prevState.bounties, res.data]
            }));
        })
        .catch(err => console.log(err));
    }

    deleteBounty = _id => {
        axios.delete("/bounty/"+_id)
        .then(res => {
            console.log(res.data);
            this.setState({
                bounties: this.state.bounties.filter(bounty => bounty._id !== _id)
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        return  <Provider value={{
                    bounties: this.state.bounties,
                    postBounty: this.postBounty,
                    deleteBounty: this.deleteBounty
                }}>
                {this.props.children}
                </Provider>
    }
}

export const withBounty = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
);

export default BountyProvider;
