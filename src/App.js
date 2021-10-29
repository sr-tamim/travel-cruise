import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/AuthenticationPages/Login/Login';
import HomePage from './components/HomePage/HomePage';
import PlaceDetails from './components/HomePage/Places/PlaceDetails/PlaceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Footer from './components/Shared/Footer/Footer';
import Loading from './components/Shared/Loading/Loading';
import Navbar from './components/Shared/Navbar/Navbar';
import PlacesContextProvider from './contexts/PlacesContext';
import UserContextProvider from './contexts/UserContext';
import useFirebase from './hooks/useFirebase';


function App() {
  const { userLoading } = useFirebase();

  return (
    <div className="App">
      <PlacesContextProvider><UserContextProvider>
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
              </Switch>
              <Footer />
            </Router>
          </>
        }
      </UserContextProvider></PlacesContextProvider>
    </div>
  );
}

export default App;
