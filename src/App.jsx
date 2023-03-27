import { useState } from 'react'


import './App.css'

function App() {
  const [input, setInput] = useState(0);

  function handleClear() { 
      setInput(0)
  }

  function handleClick(number) {
    // Multiply the current value by 10, to shift the digits to the left, which creates placeholder for the new digit. Then, by adding the clicked number, we insert the new digit into the ones place.
    setInput(input * 10 + number);
  }


  // const CalculatorOperations = {
  //   '/': (prevValue, nextValue) => prevValue / nextValue,
  //   '*': (prevValue, nextValue) => prevValue * nextValue,
  //   '+': (prevValue, nextValue) => prevValue + nextValue,
  //   '-': (prevValue, nextValue) => prevValue - nextValue,
  //   '=': (prevValue, nextValue) => nextValue
  // }


  return (
    <div className="App">
      <h1>JS + React: Calculator</h1>
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
                <button className="op add" id="add">+</button>
                <button className="op sub" id="subtract">-</button>
                <button className="op mult" id="multiply">x</button>
                <button className="op div" id="divide">/</button>
                <button id="equals" className="op eq">=</button>
                <button id="decimal" className="deci">.</button>
                <button id="clear" className="eraser" onClick={handleClear}>CLEAR</button>
        </div>
    </main>
    </div>
  )
}

export default App
