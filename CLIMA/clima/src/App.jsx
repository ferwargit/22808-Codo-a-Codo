import { useEffect, useState } from "react";

import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";
import { getCityWeather } from "./services/weather";


const App = () => {
  // Le paso un objeto a la llamada
  // const countries = ajax({
  //   method: 'GET',
  //   url: 'https://restcountries.eu/rest/v3.1/all'
  // });

  // console.log(countries);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
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
  const countryHandler = async e => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null);
  }
    // const countryCode = e.currentTarget.value;
    // console.log(country);
    // const temp = await getCities(countryCode);
    // console.log(temp);
  const cityyHandler = async e => {
    e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));
    // const temp = e.currentTarget.value;
    // console.log(temp);

    // console.log(weather);
  }


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
          <select onChange={cityyHandler}>
            <option value="">Seleccionar</option>
            {cities.map(city => <option key={city.id}>{city.name}</option>)}
          </select>
        </div>
      )}

      <hr />

      {weather && (
        <div>
          <h2>Temperatura Actual: {weather.main.temp.toFixed()}°C</h2>
          <p>Temperatura Mínima: {weather.main.temp_min.toFixed()}°C</p>
          <p>Temperatura Máxima: {weather.main.temp_max.toFixed()}°C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          {/* <pre>
            {JSON.stringify(weather, null, 2)}
          </pre> */}
        </div>
      )}
    </>
  );
};

export default App;
