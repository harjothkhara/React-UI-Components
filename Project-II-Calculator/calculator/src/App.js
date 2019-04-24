import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>

    <div className = "container">
      <CalculatorDisplay result ="25" displayStyle="display" />
      <ActionButton text = "clear" buttonStyle="action" />
      <NumberButton text ={"\u00F7"} buttonStyle="symbol" />
      <NumberButton text ="7" buttonStyle="number" />
      <NumberButton text ="8" buttonStyle="wide number" />
      <NumberButton text ="9" buttonStyle="wide number" />
      <NumberButton text ={"\u00D7"} buttonStyle="symbol" />
      <NumberButton text ="4" buttonStyle="number" />
      <NumberButton text ="5" buttonStyle="wide number" />
      <NumberButton text ="6" buttonStyle="wide number" />
      <NumberButton text ={"\u2212"} buttonStyle="symbol" />
      <NumberButton text ="1" buttonStyle="number" />
      <NumberButton text ="2" buttonStyle="wide number" />
      <NumberButton text ="3" buttonStyle="wide number" />
      <NumberButton text ="+" buttonStyle="symbol" />
      <NumberButton text ="0" buttonStyle="action" />
      <NumberButton text ="=" buttonStyle="symbol" />
    </div>
  );
};

export default App;
