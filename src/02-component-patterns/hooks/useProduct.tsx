import { useState } from 'react';

export function useProduct() {
  const [counter, setCounter] = useState(0);

  function increaseBy(value: number) {
    setCounter((prev) => Math.max(prev + value, 0));
  }

  return { counter, increaseBy };
}
