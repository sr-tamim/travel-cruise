import React, { createContext } from 'react';
import usePlaces from '../hooks/usePlaces';

// context api of tour places info
export const PlacesContext = createContext();
const PlacesContextProvider = ({ children }) => {
    const allContext = usePlaces();
    return (
        <PlacesContext.Provider value={allContext}>
            {children}
        </PlacesContext.Provider>
    );
};

export default PlacesContextProvider;