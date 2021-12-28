import axios from 'axios';
import React, { useRef, useState } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef()
    const [status, setStatus] = useState(null)
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://travel-cruise-srt-server.herokuapp.com/users', {
            email: emailRef.current.value, role: 'admin'
        }).then(({ data }) => data.matchedCount ? setStatus({ message: 'successful' }) : data.error && setStatus({ error: data.error }))
    }
    return (
        <section className="container mx-auto">
            <div className="max-w-2xl px-2 mx-auto my-12 md:mt-4">
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        ref={emailRef}
                                        required
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end flex-wrap px-4 py-4 bg-gray-50 sm:px-6">
                            {status && <div
                                className="text-red-500 text-lg capitalize font-medium">
                                {status?.error}</div>
                            }
                            {status && <div
                                className="text-green-500 text-lg capitalize font-medium mx-8">
                                {status?.message}</div>}
                            <button
                                type="submit"
                                className="py-2 px-6 border border-transparent shadow-sm font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Make Admin
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;