const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');

const getInfo = async(location) => {
  try {
    const coords = await place.getPlace(location);
    const temp = await weather.getWeather(coords.lat, coords.lng);

    return `The temperature of ${coords.place} is ${temp}°C`;
  } catch {
    return `Could not get weather for place ${location}`
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);