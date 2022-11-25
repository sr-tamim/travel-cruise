import React, { useContext } from 'react';
import { PlacesContext } from '../../../contexts/PlacesContext';
import Place from './Place/Place';

// all tour places section
const Places = () => {
    const { places } = useContext(PlacesContext);
    return (
        <section>
            <h1 className="text-5xl text-center text-green-600 font-extrabold">Places to Visit</h1>
            <h5 className="text-gray-500 text-center font-semibold my-4">
                <q>The world is a book and those who do not
                    travel read only one page.</q>
                {" "}― Augustine of Hippo
            </h5>
            <div className="container flex flex-wrap mx-auto"
            >{places &&
                places.map(place => <Place key={place.placeID} place={place} />)
                }</div>
        </section>
    );
};

export default Places;