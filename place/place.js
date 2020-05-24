const axios = require('axios');

const getPlace = async(location) => {

  const encodedUrl = encodeURI(location);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    timeout: 10000,
    headers: {
      'x-rapidapi-key': '4602926647msh9cc4e34768641e5p1013c3jsnd3798bac8864'
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`There are no results for ${location}`)
  }

  const data = resp.data.Results[0];
  let { name: place, lat, lon: lng } = data;

  return {
    place,
    lat,
    lng
  }
}

module.exports = {
  getPlace
}