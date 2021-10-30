import React, { useContext, useRef } from 'react';
import { PlacesContext } from '../../contexts/PlacesContext';

const AddTour = () => {
    const { addTourPlace } = useContext(PlacesContext);
    const formInputs = {
        placeName: useRef(),
        shortDescription: useRef(),
        description: useRef(),
        cost: useRef(),
        duration: useRef(),
        features: useRef(),
        country: useRef(),
        city: useRef(),
        capitalCity: useRef(),
        currency: useRef(),
        languages: useRef(),
        placePHOTO: useRef()
    }

    const handleSubmit = event => {
        event.preventDefault();
        const tourInfo = {};
        Object.keys(formInputs).forEach(key => {
            tourInfo[key] = formInputs[key].current.value;
        });
        tourInfo.features = tourInfo.features.split(',');
        tourInfo.languages = tourInfo.languages.split(',');
        addTourPlace(tourInfo);
        event.target.reset();
    }

    return (
        <section className="container mx-auto">
            <h1 className="text-3xl font-extrabold text-green-600 text-center my-12 lg:text-5xl">Add New Tour/Trip</h1>
            <div className="my-8 px-2">
                <div className="max-w-6xl mx-auto mt-5 md:mt-0">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 md:col-span-4">
                                        <label htmlFor="tour-name" className="block text-sm font-medium text-gray-700">
                                            Tour Name
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-name"
                                            id="tour-name"
                                            ref={formInputs.placeName}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-3 md:col-span-2">
                                        <label htmlFor="tour-duration" className="block text-sm font-medium text-gray-700">
                                            Tour Duration <small>(days)</small>
                                        </label>
                                        <input
                                            type="number"
                                            name="tour-duration"
                                            id="tour-duration"
                                            ref={formInputs.duration}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-3 md:col-span-2">
                                        <label htmlFor="tour-cost" className="block text-sm font-medium text-gray-700">
                                            Tour Cost <small>$</small>
                                        </label>
                                        <input
                                            type="number"
                                            name="tour-cost"
                                            id="tour-cost"
                                            ref={formInputs.cost}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 md:col-span-2">
                                        <label htmlFor="tour-country" className="block text-sm font-medium text-gray-700">
                                            Tour Country
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-country"
                                            id="tour-country"
                                            ref={formInputs.country}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 md:col-span-2">
                                        <label htmlFor="tour-city" className="block text-sm font-medium text-gray-700">
                                            Tour City
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-city"
                                            id="tour-city"
                                            ref={formInputs.city}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 xl:col-span-1">
                                        <label htmlFor="tour-capital" className="block text-sm font-medium text-gray-700">
                                            Tour Country Capital City
                                        </label>
                                        <input
                                            type="text"
                                            id="tour-capital"
                                            name="tour-capital"
                                            ref={formInputs.capitalCity}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>


                                    <div className="col-span-6 sm:col-span-3 xl:col-span-1">
                                        <label htmlFor="tour-currency" className="block text-sm font-medium text-gray-700">
                                            Tour Country Currency
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-currency"
                                            id="tour-currency"
                                            ref={formInputs.currency}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6 xl:col-span-4">
                                        <label htmlFor="tour-photoURL" className="block text-sm font-medium text-gray-700">
                                            Tour Cover Photo URL
                                        </label>
                                        <input
                                            type="url"
                                            name="tour-photoURL"
                                            id="tour-photoURL"
                                            ref={formInputs.placePHOTO}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-3">
                                        <label htmlFor="tour-languages" className="block text-sm font-medium text-gray-700">
                                            Tour Country Languages <small>(multiple features separated by comma)</small>
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-languages"
                                            id="tour-languages"
                                            ref={formInputs.languages}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-3">
                                        <label htmlFor="tour-features" className="block text-sm font-medium text-gray-700">
                                            Included features <small>(multiple features separated by comma)</small>
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-features"
                                            id="tour-features"
                                            ref={formInputs.features}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="tour-short-desc" className="block text-sm font-medium text-gray-700">
                                            Short Description
                                        </label>
                                        <textarea
                                            name="tour-short-desc"
                                            id="tour-short-desc"
                                            ref={formInputs.shortDescription}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        ></textarea>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="tour-description" className="block text-sm font-medium text-gray-700">
                                            Long Description
                                        </label>
                                        <textarea
                                            type="number"
                                            name="tour-description"
                                            id="tour-description"
                                            ref={formInputs.description}
                                            required
                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Add Tour
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddTour;