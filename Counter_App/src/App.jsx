
import { IoIosRefresh } from "react-icons/io";
import Button from '@mui/material/Button';
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
  }
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

 let reset = () => {
  if (count === 0) return;
  let current = count;
  const interval = setInterval(() => {
    current -= 1;
    setCount(current);
    if (current <= 0) {
      clearInterval(interval);
      setCount(0);
    }
  }, 70); 
};

  return (
    <>
     <div className='app'>
      {/* outer card */}
      <div className='container'>
        <div className='right_ref'>
            <IoIosRefresh  onClick={reset}/>
          </div>
        {/* inner card */}
        <div className='total_amount_card' style={{backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)'}}>
          

          <div className="count_number">{count}</div>
        </div>

        <div className='btn_container'>
        <Button variant="contained" onClick={increment}>Increment</Button>
        <Button variant="contained" onClick={decrement}>Decrement</Button>
        </div>
       
      </div>
     </div>
    </>
  )
}

export default App
