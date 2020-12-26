const axios = require('axios')

//API https://openweathermap.org/current

const API_KEY = process.env.API_KEY

const getClima = async (lat, lon)=>{
   const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
   return resp.data;
}

module.exports = { getClima }