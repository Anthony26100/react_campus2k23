import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import MainCountry from './components/MainCountry';

function App() {
  const [selectCountries, setSelectedCountries] = useState<string[]>([]);

  return (
    <div className="App">
      <Navbar />
      <h1>CHOOSE YOUR COUNTRY'S</h1>
      <div className='contenaire'>
        <div className='countries'>
          <MainCountry selectCountries={selectCountries} setSelectedCountries={setSelectedCountries} />
        </div>
        <div className='tags'>
          <h3>Selected Countries:</h3>
          <div className='tags-box'>
            {selectCountries}
            <div>
              {selectCountries.length > 0 && (

                  <button>valid</button>

              ) }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
