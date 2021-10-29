import './App.css';
import HomePage from './components/HomePage/HomePage';
import useFirebase from './useFirebase';


function App() {
  useFirebase();

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
