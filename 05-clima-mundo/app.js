require('dotenv').config()
const { argv } = require('./config');
const {  getCoordenadas } = require('./coordenadas')
const { getClima } = require('./clima')


const getInfo = async( direccion )=> {
    const coordenadas = await getCoordenadas(direccion);
    const { lat, lon } = coordenadas;
    const respuesta = await getClima(lat, lon);
    return{
        lugar: respuesta.name,
        latitud: lat,
        longitud: lon,
        clima: {
            viento: respuesta.wind,
            lluvia: respuesta.rain || '',
            nublado: respuesta.clouds
        }
    }
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)