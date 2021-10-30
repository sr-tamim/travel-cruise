import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import Loading from '../Shared/Loading/Loading';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, userLoading } = useContext(UserContext);
    return (
        <>{
            userLoading ||
            <Route {...rest}
                render={({ location }) => user ? children :
                    (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: location }
                        }} />
                    )
                }
            />
        }</>
    );
};

export default PrivateRoute;