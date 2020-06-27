import React from 'react';
import "./style.css";

function TextArea(props){
    const{bio, width, value, placeholder, onChange} = props;
    return(
    <div className="main-text-area">
        <textarea type="textarea"
         name={bio} 
         style={{width : width || '60%'}}
         value={value}
         placeholder={placeholder}
         onChange={onChange}/>
    </div>
    )
}

export default TextArea