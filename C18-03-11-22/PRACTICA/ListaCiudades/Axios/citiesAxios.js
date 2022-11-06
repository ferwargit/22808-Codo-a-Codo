const getPaises = async (numPaises) => {
  try {
    // const resCities = await axios(`http://dataservice.accuweather.com/locations/v1/topcities/${numPaises}?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar`);

    
      // console.log(resCities.data);

      resCities.data.map((ciudad) => {
        //console.log(ciudad);
        console.log("País: " + ciudad.Country.LocalizedName);
        console.log("Ciudad: " + ciudad.LocalizedName);
        console.log("Latitud: " + ciudad.GeoPosition.Latitude);
        console.log("Longitud: " + ciudad.GeoPosition.Longitude);
        console.log("Elevación: " + ciudad.GeoPosition.Elevation.Metric.Value + " " + ciudad.GeoPosition.Elevation.Metric.Unit);
      })
    
  } catch (error) {
    console.log(error);
  }
}
getPaises(50);