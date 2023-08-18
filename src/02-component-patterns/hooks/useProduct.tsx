import { useState, useEffect, useRef } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export function useProduct({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  function increaseBy(value: number) {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange?.({ count: newValue, product });
  }

  function reset() {
    setCounter(initialValues?.count || value);
  }
  useEffect(
    function () {
      if (!isMounted.current) return;
      setCounter(value);
    },
    [value]
  );

  useEffect(function () {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
}
