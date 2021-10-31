import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BookingsContext } from '../../../../contexts/BookingsContext';
import Bookings from '../../../Bookings/Bookings';

// detailed bookings info on a page
const DetailedBooking = () => {
    // get booking id from url
    const { id } = useParams();
    const { singleBookingDetails } = useContext(BookingsContext);

    const [bookingDetails, setBookingDetails] = useState(null);

    // get and set booking info from context api
    useEffect(() => {
        singleBookingDetails(id)
            .then(({ data }) => setBookingDetails(data))
            .catch(console.dir);
    }, [id, singleBookingDetails]);


    return (bookingDetails &&
        <section className="container mx-auto">
            <h1 className="text-3xl text-green-600 my-8">
                <strong>Detailed booking of</strong> {bookingDetails.email}</h1>

            {/* use bookings component for showing details */}
            <Bookings places={bookingDetails.bookings} />
        </section>
    );
};

export default DetailedBooking;