import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CheckIcon, ClockIcon } from '@heroicons/react/outline';
import { CartContext } from '../../../../contexts/CartContext';

const buttonStyle = {
    background: 'linear-gradient(to right, #1B77BA, #8BC547)'
}

// show all details of a tour place in a page
const PlaceDetails = () => {
    const { placeID } = useParams();
    const [placeDetails, setPlaceDetails] = useState(null);
    useEffect(() => {
        axios.get(`https://travel-cruise.netlify.app/.netlify/functions/server/place/${placeID}`)
            .then(({ data }) => setPlaceDetails(data))
            .catch(console.dir)
    }, [placeID])

    const { addToCart } = useContext(CartContext);

    return (
        placeDetails &&
        <section>
            <div className="h-96">
                <img className="h-full w-full object-cover" src={placeDetails.placePHOTO} alt="" />
            </div>
            <div className="container mx-auto p-2 flex flex-col lg:flex-row justify-between">
                <div className="my-6">
                    <h1 className="flex items-end w-full
                    text-4xl md:text-6xl font-bold text-green-600">
                        {placeDetails.placeName}
                        <small className="text-sm md:text-base text-gray-700 inline-flex items-center mx-4 md:my-1">
                            <ClockIcon className="h-6 w-6 text-green-500 mx-2" aria-hidden="true" />
                            {placeDetails.duration} days trip
                        </small>
                    </h1>
                    <div className="flex flex-wrap my-2 px-1 text-gray-500">
                        <span className="mr-4"><strong>Country: </strong>
                            {placeDetails.country}</span>
                        <span className="mr-4"><strong>Capital: </strong>
                            {placeDetails.capitalCity}</span>
                        <span className="mr-4"><strong>Currency: </strong>
                            {placeDetails.currency}</span>
                        <span className="mr-4"><strong>Languages: </strong>
                            {placeDetails.languages.join(', ')}</span>
                    </div>
                    <p className="max-w-4xl text-justify text-gray-600 my-6 px-2">{placeDetails.description}</p>
                </div>
                <div className="flex flex-col-reverse my-6 lg:flex-col lg:px-12">
                    <div className="my-6">
                        <button className="w-full text-white text-lg font-bold px-8 py-2 rounded-md"
                            style={buttonStyle} onClick={() => addToCart(placeDetails)}
                        >Book Now</button>
                    </div>
                    <div className="text-5xl font-extrabold text-green-600 text-center">
                        ${placeDetails.cost}
                    </div>
                    <div className="my-10 pl-4">
                        <ul>
                            {placeDetails.features.map((feature, i) => <li
                                className="flex items-center" key={i}>
                                <CheckIcon className="h-7 w-7 text-green-500" aria-hidden="true" />{feature}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaceDetails;