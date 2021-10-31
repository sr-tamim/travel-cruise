import React, { useContext, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import DeleteModal from '../../ConfirmModal/DeleteModal';

// single booking component for all bookings page
const SingleBooking = ({ places, cart }) => {
    const items = places || cart;

    /* there can be multiple same item if user added one place more than once in cart */
    // remove duplicate items
    const removedDuplicates = [];
    for (const place of items) {
        removedDuplicates.filter(p => p._id === place._id).length === 0 && removedDuplicates.push(place);
    }

    // these functions and variables are used only in cart details page
    const { addToCart, removeItems, removeItem } = useContext(CartContext);
    const handleQuantity = (method, place) => {
        method === 'plus' && addToCart(place);
        method === 'minus' && removeItem(place);
    }

    // delete confirmation functionality
    const [openModal, setOpenModal] = useState(false);
    const [deletePlace, setDeletePlace] = useState(null);
    const handleDelete = (place) => {
        setDeletePlace(place);
        setOpenModal(true);
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

                    {/* quantity plus minus functions only be shown in cart details page */}
                    <h6 className="flex items-center"
                    >Quantity:
                        {cart && <MinusIcon
                            onClick={() => handleQuantity('minus', place)}
                            className="inline h-6 w-6 text-white bg-green-500 p-1 mx-2 cursor-pointer
                                            shadow-md rounded" aria-hidden="true" />
                        }
                        {items.filter(p => p.placeID === place.placeID).length}

                        {cart && <PlusIcon
                            onClick={() => handleQuantity('plus', place)}
                            className="inline h-6 w-6 text-white bg-green-500 p-1 mx-2 cursor-pointer
                                            shadow-md rounded" aria-hidden="true" />
                        }
                    </h6>

                    <div className="my-2 text-white text-sm">
                        <NavLink to={`/places/${place.placeID}`}>
                            <button className="bg-green-600 rounded px-4 py-2 mr-4">See Details</button>
                        </NavLink>

                        {/* remove item button only be shown in cart details page */}
                        {cart && <>
                            <button onClick={() => handleDelete(place)}
                                className="bg-green-600 rounded px-4 py-2">
                                Remove</button>
                            <DeleteModal state={{ openModal, setOpenModal }}
                                confirmFunction={() => removeItems(deletePlace)} />
                        </>
                        }
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default SingleBooking;