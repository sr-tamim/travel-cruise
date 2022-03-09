// import necessary files, modules and components
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import AddTour from './components/AdminPages/AddTour/AddTour';
import DetailedBooking from './components/AdminPages/ManageBookings/DetailedBooking/DetailedBooking';
import ManageBookings from './components/AdminPages/ManageBookings/ManageBookings';
import Subscribers from './components/AdminPages/Subscribers/Subscribers';
import ConfirmBooking from './components/ConfirmBooking/ConfirmBooking';
import ContactPage from './components/ContactPage/ContactPage';
import HomePage from './components/HomePage/HomePage';
import PlaceDetails from './components/HomePage/Places/PlaceDetails/PlaceDetails';
import Places from './components/HomePage/Places/Places';
import MyBookings from './components/MyBookings/MyBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import BookingsContextProvider from './contexts/BookingsContext';
import CartContextProvider from './contexts/CartContext';
import PlacesContextProvider from './contexts/PlacesContext';
import UserContextProvider from './contexts/UserContext';
import AuthenticationPages from './components/AuthenticationPages/AuthenticationPages';
import MakeAdmin from './components/AdminPages/MakeAdmin/MakeAdmin';


function App() {

  return (
    <div className="App">
      {/* firebase user info context */}
      <UserContextProvider><CartContextProvider><PlacesContextProvider>
        {/* tour bookings related information context */}
        <BookingsContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/"><HomePage /></Route>
              <Route path="/home"><HomePage /></Route>
              <Route path="/tours"><Places /></Route>
              <Route path="/about"><AboutPage /></Route>
              <Route path="/authentication"><AuthenticationPages /></Route>

              {/* private routes */}
              <PrivateRoute path="/contact"><ContactPage /></PrivateRoute>
              <PrivateRoute path="/places/:placeID"><PlaceDetails /></PrivateRoute>
              <PrivateRoute path="/profile"><Profile /></PrivateRoute>
              <PrivateRoute path="/mybookings"><MyBookings /></PrivateRoute>
              <PrivateRoute path="/subscribers"><Subscribers /></PrivateRoute>
              <PrivateRoute path="/makeadmin"><MakeAdmin /></PrivateRoute>

              <PrivateRoute path="/manage/bookings"><ManageBookings /></PrivateRoute>
              <PrivateRoute path="/manage/booking/:id"><DetailedBooking /></PrivateRoute>
              <PrivateRoute path="/booking/confirm"><ConfirmBooking /></PrivateRoute>
              <PrivateRoute path="/addtour"><AddTour /></PrivateRoute>
            </Switch>
            <Footer /> {/* footer */}
          </Router>
        </BookingsContextProvider>
      </PlacesContextProvider></CartContextProvider></UserContextProvider>
    </div>
  );
}

export default App;
