import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <div>
            <button className = {props.buttonStyle}> {props.text}</button>
        </div>
    )
}

export default NumberButton;
