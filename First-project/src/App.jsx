import { useState } from 'react'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(0);

  const addValue = () => {
    if(Counter === 20) setCounter(Counter), alert(`Maximum counted e.i., ${Counter}`)
    else setCounter(Counter + 1)
  }
  const removeValue = () => {
    if(Counter === 0) setCounter(Counter), alert("Counter can't be negative")
    else setCounter(Counter - 1)
  }

  return (
    <>
      <h1>Muntazir</h1>
      <h2>Counter value: {Counter}</h2>
      <button
      onClick={addValue}
      >Increase Value</button>
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
