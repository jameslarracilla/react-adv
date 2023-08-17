import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  function onProductCountChange({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) {
    setShoppingCart((prev) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  }

  return { shoppingCart, onProductCountChange };
}
