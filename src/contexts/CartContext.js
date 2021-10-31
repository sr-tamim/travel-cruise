import React, { createContext } from 'react';
import useCart from '../hooks/useCart';

// context api of user cart info
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