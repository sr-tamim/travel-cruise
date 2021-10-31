import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../contexts/UserContext';

// firebase login page
const Login = () => {
    const { user, googleLogin } = useContext(UserContext);

    // redirect user to the previous page, if no previous page available then redirect to profile page
    const location = useLocation();
    const backToPrevious = location.state?.from?.pathname || '/profile';
    const history = useHistory();
    user && history.push(backToPrevious);

    // only google login functionality added
    return (
        <section className="flex justify-center flex-col">
            {backToPrevious !== '/profile' &&
                <h6 className="text-sm text-center font-bold text-red-500 my-8"
                >You've to Login First to Visit {backToPrevious.slice(1, backToPrevious.length).toUpperCase()} Page</h6>
            }
            <h1 className="text-3xl text-green-600 lg:text-5xl font-extrabold text-center">Sign In</h1>
            <div className="flex justify-center my-12">
                <button onClick={googleLogin}
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-md">
                    Login with Google
                </button>
            </div>
        </section>
    );
};

export default Login;