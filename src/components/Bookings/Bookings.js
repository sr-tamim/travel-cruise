import React from 'react';
import SingleBooking from './SingleBooking/SingleBooking';

const Bookings = ({ places }) => {
    const totalCost = places.reduce((previous, current) => previous + current.cost, 0);

    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex-grow px-4 lg:pl-8 lg:pr-18">
                <SingleBooking places={places} />
            </div>
            <div className="p-8">
                <h4 className="text-2xl lg:text-4xl text-green-700 font-bold text-center sticky top-36">
                    <strong>Total Cost:</strong> ${totalCost}</h4>
            </div>
        </div>
    );
};

export default Bookings;