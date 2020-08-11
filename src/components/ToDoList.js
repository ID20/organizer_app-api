import React from "react"
import ToDoitem from "./ToDoitem";
class TodoList extends React.Component{
    render(){
        return(
            <div>
                {this.props.todos.map(todo => (
                  <ToDoitem key={todo.id} todo={todo} handlechangeprops={this.props.handlechangeprops} deleteItem={this.props.deleteItem}/>
                ))}
            </div>
        )
    }
}
export default TodoList;