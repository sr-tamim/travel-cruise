import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { BookingsContext } from '../../contexts/BookingsContext';

const MyBookings = () => {
    const { cart, addToCart, removeItems, removeItem } = useContext(BookingsContext);
    const totalCost = cart.reduce((previous, current) => previous + current.cost, 0);

    const handleQuantity = (method, place) => {
        method === 'plus' && addToCart(place);
        method === 'minus' && removeItem(place);
    }

    return (
        <section className="container mx-auto px-1">
            <h1 className="text-4xl lg:text-5xl text-green-600 font-extrabold my-6">My Bookings</h1>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="flex-grow px-4 lg:pl-8 lg:pr-18">
                    {
                        cart.filter((p, i) => cart.indexOf(p) === i)
                            .map(place => {
                                return <div className="flex flex-col sm:flex-row my-8"
                                    key={place.placeID}>
                                    <div className="w-full sm:w-56 h-36">
                                        <img className="object-cover w-full h-full" src={place.placePHOTO} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between px-4 py-2 sm:py-0">
                                        <h2 className="text-2xl font-bold text-green-600">{place.placeName}</h2>
                                        <h6 className="my-2">{place.duration} days trip</h6>

                                        <h6 className="flex items-center"
                                        >Quantity:
                                            <MinusIcon
                                                onClick={() => handleQuantity('minus', place)}
                                                className="inline h-6 w-6 text-white bg-green-500 p-1 mx-2 cursor-pointer
                                            shadow-md rounded" aria-hidden="true" />
                                            {cart.filter(p => p.placeID === place.placeID).length}
                                            <PlusIcon
                                                onClick={() => handleQuantity('plus', place)}
                                                className="inline h-6 w-6 text-white bg-green-500 p-1 mx-2 cursor-pointer
                                            shadow-md rounded" aria-hidden="true" />
                                        </h6>

                                        <div className="my-2 text-white text-sm">
                                            <NavLink to={`/places/${place.placeID}`}>
                                                <button className="bg-green-600 rounded px-4 py-2 mr-4">See Details</button>
                                            </NavLink>
                                            <button onClick={() => removeItems(place)}
                                                className="bg-green-600 rounded px-4 py-2">
                                                Remove</button>
                                        </div>
                                    </div>
                                </div>
                            })
                    }
                </div>
                <div className="py-12 px-8">
                    <h4 className="text-2xl lg:text-4xl text-green-700 font-bold text-center">
                        <strong>Total Cost:</strong> ${totalCost}</h4>
                    <div className="my-4">
                        <button className="w-full bg-green-700 text-white text-lg rounded-xl px-6 py-3">Confirm</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBookings;