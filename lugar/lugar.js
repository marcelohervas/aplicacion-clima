const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'bbb2a72f00msh1362724251f4ba3p1c1b17jsn949dfe730826'
        }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];

    return {
        direccion: data.name,
        lat: data.lat,
        lng: data.lon
    }
}

module.exports = {
    getLugarLatLng
}