import React from "react"
const Header = () => {


const headerstyle = {
    padding:"20px 0",
    lineHeight: "2em",
}

    return(
        <header style={headerstyle}>
         <h1>Simple Todo App</h1>
         <p>Please add todo items through input field</p>
        </header>
    )
}

export default Header