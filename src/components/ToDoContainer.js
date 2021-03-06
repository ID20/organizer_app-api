import React from "react"
import TodoList from "./ToDoList"
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "../App.css";

class TodoContainer extends React.Component{
    
    state = {
        todos: [],
        show: false,
       };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => this.setState({todos:response.data}) );
    }
       handlechange = (id) => {
           this.setState({
             todos: this.state.todos.map(todo =>{
               if(todo.id===id)
               todo.completed=!todo.completed;
             return todo;
             })
           })
       };
       
       deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        })
        )};

      addItem = (title) => {
        axios.post("https://jsonplaceholder.typicode.com/todos",{
            title:title,
            completed: false,
        })
        .then(response =>
            this.setState({
               todos: [...this.state.todos,response.data], 
            }))
      }


    render(){
        return(
            <div className="container"> 
                <Header />
                <InputTodo addItem={this.addItem}/>
                <TodoList todos={this.state.todos} handlechangeprops={this.handlechange} deleteItem={this.deleteItem} />
            </div>
        )
    }

}

export default TodoContainer