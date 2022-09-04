import { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

// this custom hook contains all of tour booking info
export default function useBookings() {
    const history = useHistory();

    const [allBookings, setAllBookings] = useState(null);
    function getAllBookings() {
        axios.get(`https://travel-cruise-server.netlify.app/.netlify/functions/server/bookings`)
            .then(({ data }) => setAllBookings(data))
            .catch(console.dir);
    }
    useEffect(getAllBookings, []);

    function addBooking(bookingInfo) {
        axios.post('https://travel-cruise-server.netlify.app/.netlify/functions/server/bookings', bookingInfo)
            .then(history.push('/'))
            .catch(console.dir);
    }

    function deleteBooking(id) {
        axios.delete(`https://travel-cruise-server.netlify.app/.netlify/functions/server/bookings/${id}`)
            .then(({ data }) => data.deletedCount === 1 && getAllBookings())
            .catch(console.dir);
    }

    function setStatus(status, id) {
        axios.post(`https://travel-cruise-server.netlify.app/.netlify/functions/server/booking/update/${id}`, { status })
            .then(({ data }) => data.modifiedCount === 1 && getAllBookings())
            .catch(console.dir);
    }

    function singleBookingDetails(id) {
        return axios.get(`https://travel-cruise-server.netlify.app/.netlify/functions/server/booking/${id}`)
    }


    return {
        allBookings, setAllBookings, addBooking, deleteBooking, setStatus, singleBookingDetails
    }
}