import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Your Counter</h1>
      <p>Your counter value is {count} </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Counter
      </button>
      <button onClick={increment}>Increment +1</button>
    </div>
  );
}
 