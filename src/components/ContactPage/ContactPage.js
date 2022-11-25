import React, { useContext, useRef } from 'react';
import { UserContext } from '../../contexts/UserContext';

// contact with travel cruise form page
const ContactPage = () => {
    const { user } = useContext(UserContext);
    const formInputs = {
        name: useRef(),
        email: useRef(),
        message: useRef(),
    }
    const handleSubmit = event => {
        event.preventDefault();
        const name = formInputs.name.current.value;
        const email = formInputs.email.current.value;
        const message = formInputs.message.current.value;
        console.log(name, email, message);
        event.target.reset();
    }
    return (
        <section className="container mx-auto">
            <h1 className="text-4xl text-center lg:text-5xl text-green-600 font-extrabold my-12">Contact With Us</h1>
            <div className="max-w-4xl px-2 mx-auto my-12 md:mt-0">
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
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

                                <div className="col-span-6">
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

                                <div className="col-span-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        ref={formInputs.message}
                                        placeholder="type message here"
                                        className="mt-1 min-h-[8rem] focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
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
        </section>
    );
};

export default ContactPage;