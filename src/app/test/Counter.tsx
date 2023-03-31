'use client'; // この一文を追加することでClient Componentとなる

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => {
    setCount((prev) => prev + 1)
  };
  return (
    <>
      <h2>カウンター</h2>
      <div>Count: {count}</div>
      <button onClick={countUp}>+</button>
    </>
  )
}

export default Counter;