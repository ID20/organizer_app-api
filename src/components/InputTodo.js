import React, {Component } from "react"
class InputToDo extends Component{

    state = {
        title: ""
    };

    onChange = (e) =>{
        this.setState({
            title: e.target.value
        });
    };

    onSubmit =(e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="form-container">
            <input className="input-text" type='text' placeholder="Add tasks" value={this.state.title} onChange={this.onChange}></input>
            <input className="input-submit" type='submit' value="submit" ></input>
            </form>
        )
    
}
}
export default InputToDo