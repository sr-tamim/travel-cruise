import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/AuthenticationPages/Login/Login';
import HomePage from './components/HomePage/HomePage';
import PlaceDetails from './components/HomePage/Places/PlaceDetails/PlaceDetails';
import MyBookings from './components/MyBookings/MyBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Footer from './components/Shared/Footer/Footer';
import Loading from './components/Shared/Loading/Loading';
import Navbar from './components/Shared/Navbar/Navbar';
import BookingsContextProvider from './contexts/BookingsContext';
import PlacesContextProvider from './contexts/PlacesContext';
import { UserContext } from './contexts/UserContext';


function App() {
  const { userLoading } = useContext(UserContext);

  return (
    <div className="App">
      <BookingsContextProvider><PlacesContextProvider>
        {userLoading ? <Loading /> :
          <>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/home"><HomePage /></Route>
                <Route exact path="/"><HomePage /></Route>
                <Route path="/login"><Login /></Route>
                <PrivateRoute path="/places/:placeID"><PlaceDetails /></PrivateRoute>
                <PrivateRoute path="/profile"><Profile /></PrivateRoute>
                <PrivateRoute path="/mybookings"><MyBookings /></PrivateRoute>
              </Switch>
              <Footer />
            </Router>
          </>
        }
      </PlacesContextProvider></BookingsContextProvider>
    </div>
  );
}

export default App;
