import { ajax } from '../tools/ajax.js';

export const getCities = async countryCode => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places',
    headers: {
      'X-RapidAPI-Key': '6109cdf567msh69d55e2da1f2e71p1acf4cjsn16b8011c56e6',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    },
    params: {
      limit: '10',
      type: 'CITY',
      country: countryCode ?? 'AR',
    }
  };
  return await ajax(optionsRequest);
}