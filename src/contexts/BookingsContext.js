import React, { createContext } from 'react';
import useBookings from '../hooks/useBookings';

export const BookingsContext = createContext();
const BookingsContextProvider = ({ children }) => {
    const allContext = useBookings();
    return (
        <BookingsContext.Provider value={allContext}>
            {children}
        </BookingsContext.Provider>
    );
};

export default BookingsContextProvider;