import React from 'react';
import './style.css';

function Button(props){
    const {value, onClick, disabled} = props;
    return(
        <div className="main-button">
            <input 
                className={disabled ? 'btn-disabled' : 'btn-default'}
                type="button"
                value={value}
                onClick={onClick}
                disabled={disabled}
            />
        </div>
    )
}

export default Button;