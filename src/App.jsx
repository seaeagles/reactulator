import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>JS + React: Calculator</h1>
      <main class="calculator">
        <output class="screen"></output>
        <div class="buttons container">
            <section class="numbers">
                <button class="num 1">1</button>
                <button class="num 2">2</button>
                <button class="num 3">3</button>
                <button class="num 4">4</button>
                <button class="num 5">5</button>
                <button class="num 6">6</button>
                <button class="num 7">7</button>
                <button class="num 8">8</button>
                <button class="num 9">9</button>
            </section>
            <section class="operations">
                <button class="op add">+</button>
                <button class="op sub">-</button>
                <button class="op mult">*</button>
                <button class="op div">/</button>
                <button class="op eq">=</button>
            </section>

        </div>
    </main>
    </div>
  )
}

export default App
