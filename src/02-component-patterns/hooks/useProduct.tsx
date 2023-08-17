import { useState, useEffect } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export function useProduct({ product, onChange, value = 0 }: useProductArgs) {
  const [counter, setCounter] = useState(value);

  function increaseBy(value: number) {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange?.({ count: newValue, product });
  }

  useEffect(
    function () {
      setCounter(value);
    },
    [value]
  );

  return { counter, increaseBy };
}
