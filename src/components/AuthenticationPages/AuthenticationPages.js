import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

const AuthenticationPages = () => {
    const { user, googleLogin } = useContext(UserContext);

    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();


    // redirect user to the previous page, if no previous page available then redirect to profile page
    const location = useLocation();
    const backToPrevious = location.state?.from?.pathname || '/profile';
    const history = useHistory();
    user && history.push(backToPrevious);


    return (
        <Router>
            <section>
                {backToPrevious !== '/profile' &&
                    <h6 className="text-sm text-center font-bold text-red-500 my-8"
                    >You've to Login First to Visit {backToPrevious.slice(1, backToPrevious.length).toUpperCase()} Page</h6>
                }
                <Switch>
                    <Route exact path={path}>
                        <div className="flex flex-col justify-center items-center py-8 sm:flex-row">
                            <NavLink to={`${url}/login`}>
                                <button
                                    className="border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 py-2 px-6  m-4 hover:bg-green-700">
                                    Login using Email
                                </button>
                            </NavLink>
                            or
                            <NavLink to={`/authentication/register`}>
                                <button
                                    className="border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 py-2 px-6  m-4 hover:bg-green-700">
                                    Register using Email
                                </button>
                            </NavLink>
                        </div>

                    </Route>
                    <Route path={`${path}/login`}>
                        <Login />
                    </Route>
                    <Route path={`${path}/register`}>
                        <SignUp />
                    </Route>
                </Switch>
                <div className="flex justify-center my-12">
                    <button onClick={googleLogin}
                        className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-md">
                        Login with Google
                    </button>
                </div>
            </section>
        </Router>
    );
};

export default AuthenticationPages;