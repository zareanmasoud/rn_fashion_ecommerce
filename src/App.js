/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import NavigationContainer from 'screens/routes/container';
// eslint-disable-next-line import/no-extraneous-dependencies
// import ScreenContentFrame from 'lib/components/ScreenContentFrame';
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
    // <ScreenContentFrame>
    <CartProvider value={{cart, addToCart, removeFromCart}}>
      <NavigationContainer />
    </CartProvider>
    // </ScreenContentFrame>
  );
}
