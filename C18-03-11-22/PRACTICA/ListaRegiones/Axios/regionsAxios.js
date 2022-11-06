const getRegions = async () => {

  try {
    
    // const resRegions = await axios(`http://dataservice.accuweather.com/locations/v1/regions?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar`);

    resRegions.data.map((region) => {
      // console.log(region);
      console.log('ID: ' + region.ID + ' Region: ' + region.LocalizedName);
    });




  } catch (error) {
    console.log(error);
  }
}

getRegions();
