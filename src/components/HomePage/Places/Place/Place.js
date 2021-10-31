import React from 'react';
import { ClockIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const buttonStyle = {
    background: 'linear-gradient(to right, #1B77BA, #8BC547)'
}


// single tour place container for all tour places section
const Place = ({ place }) => {
    const { placeID, placeName, placePHOTO, duration, country,
        shortDescription, cost } = place;
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-5 my-8">
            <div className="shadow-lg hover:shadow-2xl rounded-xl
            transform hover:-translate-y-4
            transition duration-500 p-6">
                <div className="h-56 w-full overflow-hidden relative">
                    <img className="min-h-full object-cover rounded-t-xl
                transform hover:scale-125 transition-transform duration-500"
                        src={placePHOTO} alt={placeName} />
                    <h6 className="absolute bottom-0 right-4 bg-green-700 bg-opacity-60
                    text-white font-extrabold px-6 py-2 rounded-t">
                        ${cost}</h6>
                </div>
                <div className="p-2">
                    <h3 className="text-3xl font-bold">{placeName}</h3>
                    <div className="flex justify-between text-sm lg:text-base my-2">
                        <p>Country: {country}</p>
                        <p className="flex items-center">
                            <ClockIcon className="h-6 w-6 text-green-500 mx-2" aria-hidden="true" /> {duration} days
                        </p>
                    </div>
                    <p className="text-gray-500 text-xs xl:text-sm my-4">
                        {shortDescription}</p>
                    <NavLink to={`/places/${placeID}`}>
                        <button className="w-full text-white text-lg font-bold py-2"
                            style={buttonStyle}>See Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Place;