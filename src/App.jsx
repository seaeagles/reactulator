import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>JS + React: Calculator</h1>
      <main class="calculator">
        <output class="screen" id="display">12</output>
        <div class="buttons container">
                <button class="num 0" id="zero">0</button>
                <button class="num 1" id="one">1</button>
                <button class="num 2" id="two">2</button>
                <button class="num 3" id="three">3</button>
                <button class="num 4" id="four">4</button>
                <button class="num 5" id="five">5</button>
                <button class="num 6" id="six">6</button>
                <button class="num 7" id="seven">7</button>
                <button class="num 8" id="eight">8</button>
                <button class="num 9" id="nine">9</button>
                <button class="op add" id="add">+</button>
                <button class="op sub" id="subtract">-</button>
                <button class="op mult" id="multiply">x</button>
                <button class="op div" id="divide">/</button>
                <button id="equals" class="op eq">=</button>
                <button id="decimal" class="deci">.</button>
                <button id="clear" class="eraser" onClick="eraser()">CLEAR</button>
        </div>
    </main>
    </div>
  )
}

export default App
