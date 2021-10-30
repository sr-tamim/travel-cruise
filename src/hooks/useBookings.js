import { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

export default function useBookings() {
    const history = useHistory();

    const [allBookings, setAllBookings] = useState(null);
    function getAllBookings() {
        axios.get(`https://travel-cruise-srt-server.herokuapp.com/bookings`)
            .then(({ data }) => setAllBookings(data))
            .catch(console.dir);
    }
    useEffect(getAllBookings, []);

    function addBooking(bookingInfo) {
        axios.post('https://travel-cruise-srt-server.herokuapp.com/bookings', bookingInfo)
            .then(history.push('/'))
            .catch(console.dir);
    }

    function deleteBooking(id) {
        axios.delete(`https://travel-cruise-srt-server.herokuapp.com/bookings/${id}`)
            .then(({ data }) => data.deletedCount === 1 && getAllBookings())
            .catch(console.dir);
    }

    function setStatus(status, id) {
        axios.post(`https://travel-cruise-srt-server.herokuapp.com/booking/update/${id}`, { status })
            .then(({ data }) => data.modifiedCount === 1 && getAllBookings())
            .catch(console.dir);
    }

    function singleBookingDetails(id) {
        return axios.get(`https://travel-cruise-srt-server.herokuapp.com/booking/${id}`)
    }


    return {
        allBookings, setAllBookings, addBooking, deleteBooking, setStatus, singleBookingDetails
    }
}