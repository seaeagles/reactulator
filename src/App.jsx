import { useState } from 'react'


import './App.css'

function App() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevInput, setPrevInput] = useState(null);
  const [hasDecimal, setHasDecimal] = useState(false);



  function handleClear() {
    setInput("0");
    setOperator(null);
    setPrevInput(null);
    setHasDecimal(false);
  }

  function handleClick(number) {
    if (input === "0" && number !== ".") {
      setInput(number.toString());
    } else if (input === "-0" && number !== ".") {
      setInput("-" + number.toString());
    } else if (input === "" && number === ".") {
      setInput("0.");
    } else if (input.includes(".") && number === ".") {
      return;
    } else {
      setInput(input.toString() + number.toString());
    }
  }

  function handleOperatorClick(operator) {
    setHasDecimal(false);
    if (prevInput === null) {
      setPrevInput(input);
    } else if (operator && prevInput && input) {
      // perform the previous operation and update the display
      const currentValue = parseFloat(input);
      let result;
      if (operator === "+") {
        result = parseFloat(prevInput) + currentValue;
      } else if (operator === "-") {
        result = parseFloat(prevInput) - currentValue;
      } else if (operator === "*") {
        result = parseFloat(prevInput) * currentValue;
      } else if (operator === "/") {
        result = parseFloat(prevInput) / currentValue;
      }
      setInput(result.toString());
      setPrevInput(result.toString());
    }
    setOperator(operator);
    setInput("0");
  }

  function handleEqualsClick() {
    if (prevInput === null) {
      return;
    }
    const currentValue = parseFloat(input);
    let result;
    if (prevInput === null) {
      return;
    } else if (operator === "+") {
      result = parseFloat(prevInput) + currentValue;
    } else if (operator === "-") {
      result = parseFloat(prevInput) - currentValue;
    } else if (operator === "*") {
      result = parseFloat(prevInput) * currentValue;
    } else if (operator === "/") {
      result = parseFloat(prevInput) / currentValue;
    }
    setPrevInput(null);
    setOperator(null);
    setInput(result.toString());
    setHasDecimal(result.toString().includes('.'));
  }

  function handleDecimalClick() {
    if (!hasDecimal) {
      setHasDecimal(true);
      setInput(input + ".");
    }
  }


  return (
    <div className="App">
      <h1>Reactulator JS</h1>
      <main className="calculator">
        <output className="screen" id="display">{input}</output>
        <div className="buttons container">
                <button className="num 0" id="zero" onClick={() => handleClick(0)}>0</button>
                <button className="num 1" id="one" onClick={() => handleClick(1)}>1</button>
                <button className="num 2" id="two" onClick={() => handleClick(2)}>2</button>
                <button className="num 3" id="three" onClick={() => handleClick(3)}>3</button>
                <button className="num 4" id="four" onClick={() => handleClick(4)}>4</button>
                <button className="num 5" id="five" onClick={() => handleClick(5)}>5</button>
                <button className="num 6" id="six" onClick={() => handleClick(6)}>6</button>
                <button className="num 7" id="seven" onClick={() => handleClick(7)}>7</button>
                <button className="num 8" id="eight" onClick={() => handleClick(8)}>8</button>
                <button className="num 9" id="nine" onClick={() => handleClick(9)}>9</button>
                <button className="op add" id="add" onClick={() => handleOperatorClick('+')}>+</button>
                <button className="op sub" id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
                <button className="op mult" id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
                <button className="op div" id="divide" onClick={() => handleOperatorClick('/')}>/</button>
                <button id="equals" className="op eq" onClick={() => handleEqualsClick()}>=</button>
                <button id="decimal" className="deci" onClick={() => handleClick('.')}>.</button>
                <button id="clear" className="eraser" onClick={handleClear}>CLEAR</button>
        </div>
    </main>
    </div>
  )
}

export default App
