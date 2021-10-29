import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/AuthenticationPages/Login/Login';
import HomePage from './components/HomePage/HomePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import UserContextProvider from './contexts/UserContext';
import useFirebase from './hooks/useFirebase';


function App() {
  useFirebase();

  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home"><HomePage /></Route>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/login"><Login /></Route>
            <PrivateRoute path="/profile"><Profile /></PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
