const getAreasPais = async (idPais) => {

  try {
    // const resAreasPais = await axios(`http://dataservice.accuweather.com/locations/v1/adminareas/${idPais}?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar`);

    resAreasPais.data.map(pais => {
      console.log(pais.LocalizedName);
    })


  } catch (error) {
    console.log(error);
  }
}

getAreasPais('AL');



"http://dataservice.accuweather.com/locations/v1/adminareas/AR?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar"