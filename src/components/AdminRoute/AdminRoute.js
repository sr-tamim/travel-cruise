import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

// privatize pages only for logged in users
const AdminRoute = ({ children, ...rest }) => {
    const { user, loadingUserOnReload } = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(null)

    user && checkAdmin(user.email)
    function checkAdmin(email) {
        axios.post('https://travel-cruise-srt-server.herokuapp.com/isAdmin', { email })
            .then(({ data }) => setIsAdmin(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            {/* loading spinner while load firebase user info */}
            {loadingUserOnReload ? <div
                className="w-screen h-screen flex justify-center items-center">
                <LoadingSpinner />
            </div> :
                user && isAdmin === false ?
                    <section>
                        <div className='text-2xl text-center text-gray-500 font-bold'>You are not an admin</div>
                        <img src={`/images/adminpages/${window.location.pathname.split('/').slice(-1).pop()}.png`} alt='' className='mx-auto' />
                    </section>
                    : <Route {...rest}
                        render={({ location }) => user ? children :
                            (
                                <Redirect to={{
                                    pathname: '/authentication/login',
                                    state: { from: location }
                                }} />
                            )
                        }
                    />
            }</>
    );
};

export default AdminRoute;