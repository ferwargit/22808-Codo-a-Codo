import { useEffect, useState } from "react";
import { getCountries } from "./services/countries";

const App = () => {
  // Le paso un objeto a la llamada
  // const countries = ajax({
  //   method: 'GET',
  //   url: 'https://restcountries.eu/rest/v3.1/all'
  // });

  // console.log(countries);
  const [countries, setCountries] = useState([]);
  // La llamada se hace cuando se monta el componente.
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
      // console.log(countries);
    })();
  }, []);

  console.log(countries);

  return (
    <>
      <div>
        <label htmlFor="">Elige un país </label>
        <select name="">
          {countries.map(country => <option key={country.cca2}>{country.name.common}</option>)}
        </select>
      </div>
    </>
  );
};

export default App;
