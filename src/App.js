import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/AuthenticationPages/Login/Login';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Shared/Navbar/Navbar';
import UserContextProvider from './contexts/UserContext';
import useFirebase from './hooks/useFirebase';
import navBackChange from "./utilities/navBackChange";


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
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
