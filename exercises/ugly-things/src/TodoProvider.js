import React, { Component } from "react";
import axios from "axios";

const {Provider, Consumer} = React.createContext();

class TodoProvider extends Component {

    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    getTodos = () => {
        axios.get("https://api.vschool.io/carloscolon/todo")
        .then(res => {
            console.log(res.data)
            this.setState({
                todos: res.data
            });
        })
        .catch(err => console.log(err));

    }

    postTodo = todo => {
        axios.post("https://api.vschool.io/carloscolon/todo", todo)
        .then(res => {
            console.log(res.data)
            this.setState(prevState => ({
                todos: [...prevState.todos, todo]
            }));
        })
        .catch(err => console.log(err));
    }

    putTodo = todo => {
        axios.put("https://api.vschool.io/carloscolon/todo/"+todo._id, todo)
        .then(res => {
            console.log(res.data);
            this.setState(prevState => ({
                todos: [...prevState.todos, todo]
            }));
        })
        .catch(err => console.log(err));
    }

    deleteTodo = id => {
        axios.delete("https://api.vschool.io/carloscolon/todo/"+id)
        .then(res => {
            console.log(res.data);
            this.setState(prevState => ({
                todos: [...prevState.todos.filter(todo => todo._id !== id)]
            }));
        })
        .catch(err => console.log(err));
    }



    render(){
        return  <Provider value={{
                    todos: this.state.todos,
                    getTodos: this.getTodos,
                    putTodo: this.putTodo,
                    deleteTodo: this.deleteTodo,
                    postTodo: this.postTodo
                }}>
                    {this.props.children}
                </Provider>;
    }
}

export default TodoProvider;

export const withTodo = Component => props => {
    return  <Consumer>
                {value => <Component {...value} {...props}/>}
            </Consumer>;
}
