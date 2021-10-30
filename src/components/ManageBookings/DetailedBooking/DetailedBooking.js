import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BookingsContext } from '../../../contexts/BookingsContext';
import Bookings from '../../Bookings/Bookings';

const DetailedBooking = ({ places }) => {
    const { id } = useParams();
    const { singleBookingDetails } = useContext(BookingsContext);
    const [bookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        singleBookingDetails(id)
            .then(({ data }) => setBookingDetails(data))
            .catch(console.dir);
    }, [id, singleBookingDetails]);


    return (bookingDetails &&
        <section className="container mx-auto">
            <h1 className="text-3xl text-green-600 my-8">
                <strong>Detailed booking of</strong> {bookingDetails.email}</h1>
            <Bookings places={bookingDetails.bookings} />
        </section>
    );
};

export default DetailedBooking;