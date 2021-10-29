import './App.css';
import useFirebase from './useFirebase';


function App() {
  useFirebase();

  return (
    <div className="App">
      <h1 className="text-sm">Travel Cruise</h1>
    </div>
  );
}

export default App;
