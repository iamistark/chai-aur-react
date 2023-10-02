import { useState } from 'react'
import Chai from './chai'

function App() {

  let [counter, setCounter]=useState(15)

  //let counter=15

  const addValue=()=>{
    if (counter < 20) {
      console.log("clicked", counter);
    
    counter=counter+1
    setCounter(counter)
  }
}

  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
  }
}
  
  return (
   <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer:{counter}</p>
   </>
  )
}

export default App
