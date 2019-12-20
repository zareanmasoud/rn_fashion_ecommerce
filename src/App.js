/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import NavigationContainer from 'screens/routes/container';
import {CartProvider} from './context/CartContext';

export default function App() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  const removeFromCart = () => {
    setCart(cart - 1);
  };
  return (
    <CartProvider value={{cart, addToCart, removeFromCart}}>
      <NavigationContainer />
    </CartProvider>
  );
}
