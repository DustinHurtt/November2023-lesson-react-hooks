
import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
        setCount((prev) => prev +1);
      }, 1000);
  }

  

//   setInterval(() => {
//     setCount(count + 1);
//   }, 1000);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
      <button onClick={startTimer} >Start Timer</button>
    </div>
  );
}

export default Timer;
