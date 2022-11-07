const getWeather = async (id) => {
  try {
    // const resWeather = await axios(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${id}?apikey=40Aisy46Ev9fA1Rf1ZXUtok5s5EJ2bNs&language=es-ar`);


    console.log(resWeather.data);



  } catch (error) {
    console.log(error);
  }
}

getWeather('7894');