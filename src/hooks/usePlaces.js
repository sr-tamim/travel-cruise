import axios from 'axios';
import { useEffect, useState } from 'react';

const usePlaces = () => {
    const [places, setPlaces] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/places')
            .then(({ data }) => setPlaces(data))
            .catch(console.dir);
    }, [])
    return ({
        places, setPlaces
    });
};

export default usePlaces;