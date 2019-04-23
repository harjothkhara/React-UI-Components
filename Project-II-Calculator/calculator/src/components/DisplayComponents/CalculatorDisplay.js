import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
    return (
        <div>
            {props.solution}
        </div>
    )

}

export default CalculatorDisplay;