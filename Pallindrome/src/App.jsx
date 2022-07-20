import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [state, setState] = useState(null)

  const isPallindrome = (event) => {
    event.preventDefault()
    let userInput = document.getElementById('input').value.toLowerCase()   
    let splitWord = userInput.split('').reverse().join('')

    if (userInput === splitWord) {
      setState('true')
    } else {
      setState('false')
    }
  }

  return (
    <div className="App">
      <form action="submit">
        <input id="input" type="text" placeholder='Enter your word here'/>
        <button onClick={isPallindrome}>Submit</button>
      </form>
      <h1>Is your word a pallindrome? {state}</h1>
    </div>
  )
}

export default App
