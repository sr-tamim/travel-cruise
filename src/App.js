import './App.css';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Shared/Navbar/Navbar';
import useFirebase from './useFirebase';


function App() {
  useFirebase();

  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
