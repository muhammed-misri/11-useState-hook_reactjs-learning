import React, { useState } from "react";

function App() {
  // const state = Rreact.useState();
  // without using useState is import statment
  const state = useState(123);
  // state here return the value of useState function.

  console.log(state);
  // gives us an array with two items
  // ... [undefined, ƒ bound dispatchAction()]
  // the first item is undefined
  // ... and the second item is a function

  // useState(123)
  // ... now 123 is our starting state (initial state)
  // [123, ƒ bound dispatchAction()]
  // console.log(state[0]); == 123

  // -------------------------------------------------
  // const state = useState(1111);
  // const [count] = useState(1111);
  // console.log(count);
  // 1111
  // to update count value we can use second item (method)
  // const [count, setCount] = useState(1111);
  const [count, setCount] = useState(0);

  // -------------------------------------------------

  function increase() {
    // setCount(12);
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      {/* 12 */}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

// Destructuring Example
/*
const [red, green, blue] = [9, 132, 227]
console.log(blue);


*/
