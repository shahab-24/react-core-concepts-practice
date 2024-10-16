import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0)

  const handleAddToCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const handleReduce = () => {
    const newCount = count - 1;
    if(newCount >= 0){
      setCount(newCount)
      return;
    }
    
  }

  return (
    <div style={{border: '2px red solid', borderRadius: "15px" , padding: '10px', margin: "10px"}}>
    <h2>Count: <span>  {count}</span></h2>
    <button onClick={handleAddToCount}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Counter;