import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Bookings from '../Bookings/Bookings';
import DeleteModal from '../ConfirmModal/DeleteModal';

// show user's all bookings
const MyBookings = () => {
    const { cart, emptyCart } = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className="container mx-auto px-1">
            <div className="flex flex-col lg:flex-row justify-between my-8">
                <h1 className="text-4xl text-center lg:text-5xl text-green-600 font-extrabold my-6">My Bookings</h1>
                <div className="mx-auto lg:mt-16 lg:mx-8">

                    <button onClick={() => setOpenModal(true)}
                        className="bg-green-700 text-white text-sm rounded-md px-6 py-3 mr-4">Empty Cart</button>

                    <NavLink to="/booking/confirm">
                        <button className="bg-green-700 text-white text-sm rounded-md px-6 py-3">Confirm Bookings</button>
                    </NavLink>
                </div>
            </div>
            <Bookings cart={cart} />
            <DeleteModal state={{ openModal, setOpenModal }}
                confirmFunction={emptyCart} />
        </section>
    );
};

export default MyBookings;