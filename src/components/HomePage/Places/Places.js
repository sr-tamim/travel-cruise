import React, { useContext } from 'react';
import { PlacesContext } from '../../../contexts/PlacesContext';
import Place from './Place/Place';


const Places = () => {
    const { places } = useContext(PlacesContext);
    return (
        <section>
            <h1 className="text-5xl text-center text-green-600 font-extrabold">Places to Visit</h1>
            <div className="container flex flex-wrap mx-auto"
            >{places &&
                places.map(place => <Place key={place.placeID} place={place} />)
                }</div>
        </section>
    );
};

export default Places;