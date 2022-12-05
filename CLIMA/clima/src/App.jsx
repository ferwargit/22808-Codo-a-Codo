import { useEffect, useState } from "react";

import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";


const App = () => {
  // Le paso un objeto a la llamada
  // const countries = ajax({
  //   method: 'GET',
  //   url: 'https://restcountries.eu/rest/v3.1/all'
  // });

  // console.log(countries);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  // La llamada se hace cuando se monta el componente.
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
      // console.log(countries);
    })();
  }, []);

  // console.log(countries);

  // Capturo el valor de option que se selecciono
  // Cada vez que selecciono ejecuto el countryHandler
  const countryHandler = async e => e.currentTarget.value &&
    setCities(await getCities(e.currentTarget.value));
    // const countryCode = e.currentTarget.value;
    // console.log(country);
    // const temp = await getCities(countryCode);
    // console.log(temp);

  return (
    <>
      <div>
        <label>Elige un país: </label>
        <select onChange={countryHandler}>
          <option value="">Seleccionar</option>
          {countries.map(country => <option key={country.cca2} value={country.cca2}>{country.name.common}</option>)}
        </select>
      </div>

      {cities.length > 0 && (
        <div>
          <label>Elige una ciudad: </label>
          <select>
            {cities.map(city => <option key={city.id}>{city.name}</option>)}
          </select>
        </div>
      )}
    </>
  );
};

export default App;
