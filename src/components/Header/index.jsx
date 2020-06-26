import React from 'react';
import{
    Link,
    } from "react-router-dom";
import "./style.css";

function Header(props){

    return(
    <div className="main-header">

        <Link to="/todo">Todo</Link>
      {props.user ? <h3>Welcome {props.user}</h3> : ''} 
    </div>
    )
}

export default Header