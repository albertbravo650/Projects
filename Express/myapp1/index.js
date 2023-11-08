const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('GET request');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.post('/', (req, res) => {
    res.send('Got a POST request!');
    console.log('POST request');
})