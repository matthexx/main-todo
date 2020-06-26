import React from 'react';
import "./style.css";

function TextInput(props){
    const{name, width, height, value, placeholder, onChange} = props;
    return(
    <div className="main-input">
        <input type="text"
         name={name} 
         style={{width : width || '80%', height : height || '60px'}}
         value={value}
         placeholder={placeholder}
         onChange={onChange}/>
    </div>
    )
}

export default TextInput