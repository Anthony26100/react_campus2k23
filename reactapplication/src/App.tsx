import './App.css';
import Navbar from './components/Navbar';
import MainCountry from './components/MainCountry';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CHOOSE YOUR COUNTRY'S</h1>
      <MainCountry />
    </div>
  );
}

export default App;
