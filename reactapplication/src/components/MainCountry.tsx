import React, { useEffect, useState } from 'react'

interface Country {
  name: {
    common: string,
    official: string,
    nativeName: JSON
  }
  translations: {
    fra: {
      official: string,
      common: string
    }
  },
  flag: string
}

interface Props {
  selectCountries: string[];
  setSelectedCountries: React.Dispatch<React.SetStateAction<string[]>>;
}

function MainCountry(props: Props)
{
  const { selectCountries , setSelectedCountries } = props;

  const [countries, setCountries] = useState<Country[]>([]);
  

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all', {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(data => setCountries(data));
  });
  
  const handleCountrySelection = (countryName: string) => {
    if (selectCountries.includes(countryName)) {
      setSelectedCountries(selectCountries.filter((name) => name !== countryName));
    } else {
      setSelectedCountries([...selectCountries, countryName]);
    }
  };

  const countriesLists = countries.map((country: Country) => {
    return (
      <li className='countries-list' key={country.name.common}>
        <label>
          {country.flag}
          <input type="checkbox" checked={selectCountries.includes(country.name.common)} onClick={() => handleCountrySelection(country.name.common)} />
          {country.translations.fra.common}
        </label>
      </li>
    )
  })

  return (
    <div>
      <h2>Select Countries:</h2>
        <ul className='lists'>
          {countriesLists}
        </ul>
    </div>
  )
}

export default MainCountry;