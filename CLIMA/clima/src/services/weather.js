import { ajax } from '../tools/ajax.js';

export const getCityWeather = async city => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      q: city,
      appid: '3ddea520b50e1e9f35af8b57e4807dbe',
      units: 'metric',
    }
  };
  return await ajax(optionsRequest);
}