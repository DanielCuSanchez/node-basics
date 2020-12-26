const axios = require("axios");

const getCoordenadas = async ( direccion ) => {
    const encodedURL = encodeURI(direccion);
	const instance = axios.create({
		baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodedURL}`,
		headers: {
			"x-rapidapi-key": "55be094e5dmsh12a50a78644aac8p178ee7jsn5c8c1dcb11c0",
		},
	});

    const response = await instance.get();
    const { status, data } = response;


    if (status != 200) {
        return new Error(`Error al buscar el lugar`);
    }
    const { location } = data;
    const { lat, lon, name } = location;
    return {
        lugar: name,
        lat,
        lon,
    };

};
module.exports = { getCoordenadas }
