import React, {useContext} from 'react';

const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = CartContext.Provider;

export default CartContext;
