const axios = require('axios');

async function fetchData(endpoint) {
    try {
        const res = await axios.get(endpoint);
        return res.data;
    }
    catch(err) {
        throw new Error(`Error: Failed to fetch data from ${endpoint}: ${err.message}`);
    }
}

async function fetchAndCombine() {
    const endpoint1 = 'https://pokeapi.co/api/v2/pokemon/1/';
    const endpoint2 = 'https://swapi.dev/api/planets/1/';

    try {
        const [data1, data2] = await Promise.all([fetchData(endpoint1), fetchData(endpoint2)]);

        const combinedData = {
            pokemon: data1.name,
            planet: data2.name
        };
        return combinedData;
    }
    catch(err) {
        console.error(err);
    }
}

fetchAndCombine()
    .then((res) => {
        if(res) {
            console.log('Combined Data: ', res);
        }
        else {
            console.log('Failed to get fetch and combine data');
        }
    })
    .catch((err) => {
        console.error(err);
    })

