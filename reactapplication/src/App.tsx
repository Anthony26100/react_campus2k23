import './App.css';
import Navbar from './components/Navbar';
import MainCountry from './components/MainCountry';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CHOOSE YOUR COUNTRY'S</h1>
      <div className='contenaire'>
        <div className='countries'>
          <MainCountry />
        </div>
        <div className='tags'>
          <h2 className='title-h2'>TAGS COUNTRY'S</h2>
          <div className='tags-box'>
            ok
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
