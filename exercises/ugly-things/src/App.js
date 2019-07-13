import React, {Component} from 'react';
import {withTodo} from "./TodoProvider.js";
import Todo from "./Todo.js";

class App extends Component{

  constructor(){
    super();
    this.state = {
      title: "",
      description: "",
      imgUrl: ""
    }
  }

  componentDidMount(){
    this.props.getTodos();
  }

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.postTodo({
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    });
  }

  render(){

    const {todos} = this.props;

    const mappedTodos = todos.map(todo => <Todo key={todo._id+todo.title} {...todo} deleteTodo={this.props.deleteTodo}/>)

    return  <div>
                <form onSubmit={this.handleSubmit}>
                  <input 
                    type="text" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleChange}
                    placeholder="title"
                    required
                  />
                  <input 
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="description"
                    required
                  />
                  <input
                    type="text"
                    name="imgUrl"
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                    placeholder="imgUrl"
                    required
                  />
                  <button>Post</button>
                </form>
                {mappedTodos}
            </div>
  }

  
}

export default withTodo(App);
