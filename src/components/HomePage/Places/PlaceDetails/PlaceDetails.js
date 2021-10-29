import React from 'react';
import { useParams } from 'react-router';

const PlaceDetails = () => {
    const { placeID } = useParams();
    console.log(placeID);
    return (
        <div>

        </div>
    );
};

export default PlaceDetails;