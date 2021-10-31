import React from 'react';
import SingleBooking from './SingleBooking/SingleBooking';

// show all tour bookings
const Bookings = ({ places, cart }) => {
    // this component is used on showing tour bookings in manage bookings page and cart details page that's why getting info from available props [ places or cart | only one is available always ]
    const items = places || cart; // get available bookings
    const totalCost = items.reduce((previous, current) => previous + current.cost, 0);

    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex-grow px-4 lg:pl-8 lg:pr-18">
                <SingleBooking places={places} cart={cart} />
            </div>
            <div className="p-8">
                <h4 className="text-2xl lg:text-4xl text-green-700 font-bold text-center sticky top-36">
                    <strong>Total Cost:</strong> ${totalCost}</h4>
            </div>
        </div>
    );
};

export default Bookings;