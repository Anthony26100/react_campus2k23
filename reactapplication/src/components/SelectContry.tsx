import React, { useEffect, useState } from 'react'

export default function SelectCountry()
{
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(resp => resp.json())
      .then(data => setCountries(data));
  });

  return (
    <>
      <div>
        {countries}
      </div>
    </>
  )
}