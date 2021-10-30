import React, { useContext } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';

const SingleBooking = ({ places }) => {
    const { cart, addToCart, removeItems, removeItem } = useContext(CartContext);
    const removedDuplicates = [];
    for (const place of places) {
        removedDuplicates.filter(p => p._id === place._id).length === 0 && removedDuplicates.push(place);
    }

    const handleQuantity = (method, place) => {
        method === 'plus' && addToCart(place);
        method === 'minus' && removeItem(place);
    }

    return (
        <>
            {removedDuplicates.map(place => <div className="flex flex-col sm:flex-row my-8"
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
            </div>)}
        </>
    );
};

export default SingleBooking;