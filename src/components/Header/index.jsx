import React from 'react';
import{
    Link,
} from "react-router-dom";
import "./style.css";

function Header(){

    return(
    <div className="main-header">

        <Link to="/todo">Todo</Link>
        <h3>Welcome John Doe</h3>
    </div>
    )
}

export default Header