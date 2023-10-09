import { useState } from "react"


function App() {

  let [counter, farzanaCounter] = useState(15)
 const addValue = ()=> {
  counter = counter+1;
  farzanaCounter(counter)
 }

 const removeValue = () =>{
  counter =counter-1;
  farzanaCounter(counter);
 }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
