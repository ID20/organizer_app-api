import React from "react"
class Todoitem extends React.Component{

    componentWillUnmount(){
    alert("item to be deleted");
    }

    render(){
     
        const completedstyle={
         fontStyle: "italic",
         textDecoration: "line-through",
         color: "#d35e0f",
         opacity: 0.4,
        }
        
        const {completed, id, title} = this.props.todo;

        return (
            <div>
        <li className="todo-item"><input type="checkbox" checked={completed} onChange={()=> this.props.handlechangeprops(id)}/><button onClick={() => this.props.deleteItem(id)}>delete</button>
        <span style={completed ? completedstyle : null}>{title}</span>
        </li>
               
               </div>
        )
    }
}
export default Todoitem