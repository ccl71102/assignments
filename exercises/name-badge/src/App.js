import React from "react";
import BadgeList from "./BadgeList.js";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            description: "",
            disabled: true,
            badges: []
        };
    }

    checkType = e => {
        switch(e.target.type){
            case "checkbox":
            return e.target.checked;
            default:
            return e.target.value;
        }
    }

    /*setState is an asynchronous function but you can
    pass another function as a parameter so that it handles
    the following checks correctly
    */

    checkButtonStatus = () => {
        const {
            firstName,
            lastName,
            email,
            placeOfBirth,
            phone,
            favoriteFood,
            description} = this.state;

        if(firstName.length > 2 &&
            lastName.length > 2 &&
            email.length > 2 &&
            placeOfBirth.length > 2 &&
            phone.length > 9 &&
            favoriteFood.length > 2 &&
            description.length > 2)
            this.setState({disabled: false});
        else
            this.setState({disabled: true});
    }

    handleChange = e => {

        switch(e.target.name)
        {
            case "phone":
                if(isNaN(e.target.value) || (e.target.value.includes(".")))
                    return;
                else 
                    this.setState({
                        [e.target.name]: this.checkType(e)
                    }, this.checkButtonStatus);
                break;
            default: 
            this.setState({
                [e.target.name]: this.checkType(e)
            }, this.checkButtonStatus); 
            break;
        }  
    }

    handleSubmit = e => {
        e.preventDefault();

        const badge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: "("+this.state.phone.substring(0,3)+
            ") "+this.state.phone.substring(3,6)+
            "-"+this.state.phone.substring(6,10),
            favoriteFood: this.state.favoriteFood,
            description: this.state.description,
            disabled: this.state.disabled
        };

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            description: "",
            disabled: false,
            badges: [...prevState.badges,badge]
        }), this.checkButtonStatus);

    }

    render(){
    const divStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        marginTop: 100
    }

    return <div style={divStyle}>
                <BadgeList 
                    firstName= {this.state.firstName}
                    lastName= {this.state.lastName}
                    email= {this.state.email}
                    placeOfBirth= {this.state.placeOfBirth}
                    phone= {this.state.phone}
                    favoriteFood= {this.state.favoriteFood}
                    description = {this.state.description}
                    disabled={this.state.disabled}
                    handleChange= {this.handleChange}
                    handleSubmit= {this.handleSubmit}
                    badges= {this.state.badges}
                    colors={[
                        "#8a1d1d",
                        "#e0a65a",
                        "#7a9163",
                        "#76b5a9",
                        "#537282",
                        "#5f608c",
                        "#6b5d78",
                        "#8a7185",
                        "#ad7b91"
                    ]}
                />
            </div>
    }
}

export default App;