import React, { createContext } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const allContext = useCart();
    return (
        <CartContext.Provider value={allContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;