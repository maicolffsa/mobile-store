import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Check local storage or API for initial cart count
    const initialCount = localStorage.getItem('cartCount') || 0;
    setCartCount(Number(initialCount));
  }, []);

  const addItemToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    localStorage.setItem('cartCount', cartCount + 1);
  };

  return { cartCount, addItemToCart };
};

export { useCart };