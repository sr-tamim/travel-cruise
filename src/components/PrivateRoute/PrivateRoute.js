import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

// privatize pages only for logged in users
const PrivateRoute = ({ children, ...rest }) => {
    const { user, loadingUserOnReload } = useContext(UserContext);
    return (
        <>
            {/* loading spinner while load firebase user info */}
            {loadingUserOnReload ? <div
                className="w-screen h-screen flex justify-center items-center">
                <LoadingSpinner />
            </div> :
                <Route {...rest}
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

export default PrivateRoute;