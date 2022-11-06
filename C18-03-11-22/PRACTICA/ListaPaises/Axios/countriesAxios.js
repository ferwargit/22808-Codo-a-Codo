const getCountriesForRegion = async (idRegion) => {
  const resCountries =
    // await axios(`http://dataservice.accuweather.com/locations/v1/countries/${idRegion}?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar`);

  resCountries.data.map((pais) => {
    console.log("Código de país: " + pais.ID + " País: " + pais.LocalizedName);
  });
};

getCountriesForRegion("EUR");

// regionCode = 'AFR'

// "http://dataservice.accuweather.com/locations/v1/countries/AFR?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar"
