import axios from 'axios';
import { useEffect, useState } from 'react';

const usePlaces = () => {
    const [places, setPlaces] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/places')
            .then(({ data }) => setPlaces(data))
            .catch(console.dir);
    }, [])

    const addTourPlace = (placeInfo) => {
        const newPlace = { ...placeInfo, placeID: places.length + 1 }
        axios.post('http://localhost:5000/places', newPlace)
            .then(() => alert('Tour Added Successfully'))
            .catch(console.dir);
    }
    return ({
        places, setPlaces, addTourPlace
    });
};

export default usePlaces;