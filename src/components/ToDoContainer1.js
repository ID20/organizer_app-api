import React from "react"
import TodoList from "./ToDoList"
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
class TodoContainer1 extends React.Component{
    state = {
        todos: [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false
          }
        ]
       };

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
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
      };

      addItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
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

export default TodoContainer1