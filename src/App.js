
import { useState } from 'react';
import './App.css';




function App() {
  const [counter, setCounter] = useState(0)

  const increase = () =>{
  setCounter(counter +1)
  }
  const decrease = () =>{
    if (counter > 0) {
      setCounter(counter -1)
    }
  
  }




  return (
    <div className='App'>
    <button onClick={increase}>+</button>
    <h1>{counter}</h1>
    <button onClick={decrease}>-</button>
      
    </div>
    
      
   
  );
}

export default App;
