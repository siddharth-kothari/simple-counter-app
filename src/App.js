
import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    
  }
  return (
    <div className="App flex flex-col items-center justify-center mt-40">
      <h1 className='text-2xl text-white font-extrabold '>Simple Counter App</h1>
      <div className='flex mt-5 items-end'>
        <button onClick={decrement} className='text-black text-2xl font-semibold bg-white pr-2 pl-2 h-8 text-center '>-</button>
        <h1 className='text-white font-semibold text-3xl mr-3 ml-3'>{counter}</h1>
        <button onClick={increment} className='text-black text-2xl font-semibold bg-white pr-2 pl-2 h-8 text-center'>+</button>
      </div>

    </div>
  );
}

export default App;
