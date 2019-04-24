import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
    return (
        <div className = {props.displayStyle}>
            <p>{props.result}</p>
        </div>
    )

}

export default CalculatorDisplay;