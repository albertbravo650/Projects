const axios = require('axios');

function fetchData() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
    // console.log('test1')

    return axios.get(apiURL)
        .then((res) => {
            const obj = res.data;
            console.log(obj.results);
            console.log(obj.results[0].name);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
};

fetchData();