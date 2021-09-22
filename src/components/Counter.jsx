import { useState } from 'react';

export function Counter(){
  const [ counter, setCounter ] = useState(0);

  function increment(props){
    setCounter(counter + props)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}