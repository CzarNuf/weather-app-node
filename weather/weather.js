const axios = require('axios');

getWeather = async(lat, lng) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=077626b77b21550a06474a2517acd41a&units=metric`)
  return resp.data.main.temp;

}

module.exports = {
  getWeather
}