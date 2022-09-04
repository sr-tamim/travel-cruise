import axios from 'axios';
import { useEffect, useState } from 'react';

// this custom hook contains all of tour places info
const usePlaces = () => {
    const [places, setPlaces] = useState(null);
    useEffect(() => {
        axios.get('https://travel-cruise-server.netlify.app/.netlify/functions/server/places')
            .then(({ data }) => setPlaces(data))
            .catch(console.dir);
    }, [])

    const addTourPlace = (placeInfo) => {
        const newPlace = { ...placeInfo, placeID: places.length + 1 }
        axios.post('https://travel-cruise-server.netlify.app/.netlify/functions/server/places', newPlace)
            .then(() => alert('Tour Added Successfully'))
            .catch(console.dir);
    }
    return ({
        places, setPlaces, addTourPlace
    });
};

export default usePlaces;