import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddTour from './components/AddTour/AddTour';
import Login from './components/AuthenticationPages/Login/Login';
import ConfirmBooking from './components/ConfirmBooking/ConfirmBooking';
import HomePage from './components/HomePage/HomePage';
import PlaceDetails from './components/HomePage/Places/PlaceDetails/PlaceDetails';
import DetailedBooking from './components/ManageBookings/DetailedBooking/DetailedBooking';
import ManageBookings from './components/ManageBookings/ManageBookings';
import MyBookings from './components/MyBookings/MyBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Footer from './components/Shared/Footer/Footer';
import Loading from './components/Shared/Loading/Loading';
import Navbar from './components/Shared/Navbar/Navbar';
import BookingsContextProvider from './contexts/BookingsContext';
import CartContextProvider from './contexts/CartContext';
import PlacesContextProvider from './contexts/PlacesContext';
import { UserContext } from './contexts/UserContext';


function App() {
  const { userLoading } = useContext(UserContext);

  return (
    <div className="App">
      <CartContextProvider><PlacesContextProvider>
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
                <BookingsContextProvider>
                  <PrivateRoute path="/manage/bookings"><ManageBookings /></PrivateRoute>
                  <PrivateRoute path="/manage/booking/:id"><DetailedBooking /></PrivateRoute>
                  <PrivateRoute path="/booking/confirm"><ConfirmBooking /></PrivateRoute>
                  <PrivateRoute path="/addtour"><AddTour /></PrivateRoute>
                </BookingsContextProvider>
              </Switch>
              <Footer />
            </Router>
          </>
        }
      </PlacesContextProvider></CartContextProvider>
    </div>
  );
}

export default App;
