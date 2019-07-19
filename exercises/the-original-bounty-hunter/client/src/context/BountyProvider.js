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

    render(){
        return  <Provider value={{
                    bounties: this.state.bounties
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
