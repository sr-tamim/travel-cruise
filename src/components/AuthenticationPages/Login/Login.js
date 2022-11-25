import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

// firebase login page
const Login = () => {
    const { authLoading, loginEmail, usrError, setUsrError } = useContext(UserContext);

    // clear authentication error
    useEffect(() => setUsrError(null), [setUsrError])

    const formInputs = {
        email: useRef(),
        password: useRef()
    }
    const handleSubmit = event => {
        event.preventDefault()
        const { email, password } = formInputs
        loginEmail(email.current.value, password.current.value)
        event.target.reset();
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-green-600 lg:text-5xl font-extrabold text-center">Sign In</h1>
            <div className="max-w-2xl px-2 mx-auto my-12 md:mt-4">
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="email-address" className="block text-sm font-semibold text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        ref={formInputs.email}
                                        required
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="password"
                                        ref={formInputs.password}
                                        required
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end flex-wrap px-4 py-4 bg-gray-50 sm:px-6">
                            {usrError && <div
                                className="text-red-500 text-lg capitalize font-semibold mx-8">
                                {usrError}</div>
                            }
                            {authLoading && <LoadingSpinner className="mx-8" width="w-10" height="h-10" />}
                            <button
                                type="submit"
                                className="py-2 px-6 border border-transparent shadow-sm font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="text-center">
                Don't have account? <NavLink to="/authentication/register"
                    className="text-green-600 font-semibold hover:underline"
                >Register</NavLink>
            </div>
        </div>
    );
};

export default Login;