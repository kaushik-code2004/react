import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(5)

  //let counter = 5;

  function addValue(){
    //console.log(counter);
    //counter = counter+1; 
    if(counter < 20){
    setCounter(counter+1);
    }
  }

  function removevalue(){
   //counter = counter-1;
   if(counter > 0){
   setCounter(counter-1);
   }  
}  

return (
  
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
