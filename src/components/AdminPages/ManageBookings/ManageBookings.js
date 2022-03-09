import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BookingsContext } from '../../../contexts/BookingsContext';
import DeleteModal from '../../ConfirmModal/DeleteModal';
import { UserIcon } from '@heroicons/react/outline';
import { UserContext } from '../../../contexts/UserContext';

// all months name for showing date info
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];



const ManageBookings = () => {
    const { userIsAdmin } = useContext(UserContext);

    // get all tour bookings info from context
    const { allBookings, deleteBooking, setStatus } = useContext(BookingsContext);

    // save bookings info in a state
    const [bookings, setBookings] = useState(null);

    // change this components bookings info state every time context's booking info changes and do some tweaks
    useEffect(() => {
        // set null if not available
        const newBookings = !allBookings ? null
            : allBookings.map(info => {
                const { _id, name, email, photoURL: image, bookings,
                    country, city, status, dateTime } = info;
                // change some info of booking info 
                // [ image to photoURL, transform date millisecond to object ]
                return {
                    _id, name, email, image, bookings, country, city, status, dateTime: new Date(dateTime)
                }
            })
        setBookings(newBookings);
    }, [allBookings])

    // delete confirmation functionality
    const [openModal, setOpenModal] = useState(false);
    const [deletionID, setDeletionID] = useState(null);
    const handleDelete = (bookingID) => {
        setDeletionID(bookingID);
        setOpenModal(true);
    }

    // manage all tour bookings
    return (bookings &&
        <section className="container mx-auto w-full">
            <h1 className="text-3xl text-green-600 font-extrabold text-center
            my-8 lg:text-5xl">Manage Bookings</h1>
            <div className="my-8 w-full px-2">
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Bookings
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Address
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Time
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {bookings.map((booking) => (
                                            <tr key={booking.email}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
                                                            {booking.image ?
                                                                <img className="w-full" src={booking.image} alt="" />
                                                                : <UserIcon className="block h-7 w-7 text-white p-1" aria-hidden="true" />
                                                            }
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                                                            <div className="text-sm text-gray-500">{booking.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{booking.bookings.length} bookings</div>
                                                    <NavLink to={`/manage/booking/${booking._id}`}
                                                        className="inline-block text-xs text-black bg-green-100 px-3 py-1 mt-1">Details</NavLink>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{booking.country}</div>
                                                    <div className="text-sm text-gray-500">{booking.city}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                                                        booking.status === "Approved" ? "bg-green-100 text-green-800"
                                                            : "bg-red-100 text-red-800"].join(' ')}>
                                                        {booking.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {booking.dateTime.getDate()}{" "}
                                                        {months[booking.dateTime.getMonth()]}{" "}
                                                        {booking.dateTime.getFullYear()}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {booking.dateTime.toLocaleTimeString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex flex-col">
                                                        {booking.status !== 'Approved' ?
                                                            <button
                                                                onClick={() => setStatus('Approved', booking._id)}
                                                                className="text-white bg-green-500 my-1 py-1 px-3 rounded-md"
                                                            >Approve</button>
                                                            : <button
                                                                onClick={() => setStatus('Pending', booking._id)}
                                                                className="text-white bg-green-500 my-1 py-1 px-3 rounded-md"
                                                            >Refuse</button>
                                                        }
                                                        <button
                                                            onClick={() => handleDelete(booking._id)}
                                                            className={`text-white my-1 py-1 px-3 rounded-md ${userIsAdmin ? 'bg-green-500' : 'bg-green-700'}`}
                                                            disabled={!userIsAdmin}
                                                        >Delete</button>

                                                        <DeleteModal state={{ openModal, setOpenModal }}
                                                            confirmFunction={() => deleteBooking(deletionID)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageBookings;