import React, { useContext, useRef } from 'react';
import { BookingsContext } from '../../contexts/BookingsContext';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';


// checkout page
const ConfirmBooking = () => {
    const { user } = useContext(UserContext);
    const { addBooking } = useContext(BookingsContext);
    const { cart, emptyCart } = useContext(CartContext);
    const formInputs = {
        name: useRef(),
        email: useRef(),
        country: useRef(),
        city: useRef(),
    }
    const handleSubmit = event => {
        event.preventDefault();
        const dateTime = Date.now();
        const name = formInputs.name.current.value;
        const email = formInputs.email.current.value;
        const country = formInputs.country.current.value;
        const city = formInputs.city.current.value;
        const { photoURL } = user;
        const bookingInfo = {
            name, email, dateTime, photoURL, country, city,
            bookings: cart, status: 'Pending'
        }
        addBooking(bookingInfo);
        emptyCart();
    }
    return (
        <section className="container mx-auto">
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h1 className="text-3xl text-green-600 font-extrabold lg:text-5xl">Checkout</h1>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="full-name"
                                                id="full-name"
                                                autoComplete="cc-name"
                                                ref={formInputs.name}
                                                defaultValue={user.displayName}
                                                required
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                ref={formInputs.email}
                                                defaultValue={user.email}
                                                readOnly={!!user.email}
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                ref={formInputs.country}
                                                required
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                ref={formInputs.city}
                                                required
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="cc-number" className="block text-sm font-medium text-gray-700">
                                                Credit Card Number
                                            </label>
                                            <input
                                                type="number"
                                                name="cc-number"
                                                id="cc-number"
                                                autoComplete="cc-number"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="cc-exp" className="block text-sm font-medium text-gray-700">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="date"
                                                name="cc-exp"
                                                id="cc-exp"
                                                autoComplete="cc-exp"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="cc-csc" className="block text-sm font-medium text-gray-700">
                                                CVC
                                            </label>
                                            <input
                                                type="number"
                                                name="cc-csc"
                                                id="cc-csc"
                                                autoComplete="cc-csc"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ConfirmBooking;