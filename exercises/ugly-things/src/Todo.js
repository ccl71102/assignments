import React, { Component } from "react";


class Todo extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    delete = id => {
        this.props.deleteTodo(id);
    }

    render(){

    const {title, description, imgUrl, _id} = this.props;

    return  <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <img style={{width: 500}}src={imgUrl} alt={description}/>
                <button onClick={() => {}}>Edit</button>
                <button onClick={() => this.delete(_id)}>Delete</button>
            </div>
    }
}

export default Todo;