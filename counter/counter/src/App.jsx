import { useState } from 'react';
import './App.css'

function App() {
 let [counter, setcounter] = useState(0);
  const increment = () => {
    if(counter >= 10){
      alert("Counter cannot be greater than 10");
      return;
    }
    setcounter(counter + 1);
  }

  const decrement = () => {
    if(counter <= 0){
      alert("Counter cannot be less than 0");
      return;
    }
    setcounter(counter - 1);
  }

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )

}


export default App
