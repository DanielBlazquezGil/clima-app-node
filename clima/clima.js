const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6b253b249c104ecc6f1735882310192d&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}