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
  }
}

function MainCountry()
{
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all', {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(data => setCountries(data));
  });

  const countriesLists = countries.map((country: Country) => {
    return (
      <li key={country.name.common}>
        <label>
        <input type="checkbox" />
          {country.translations.fra.common}
        </label>
      </li>
    )
  })

  return (
    <ul>
      {countriesLists}
    </ul>
  )
}

export default MainCountry;