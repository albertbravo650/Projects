const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/data', (req, res) => {
    // res.send({message: 'Server is running'});
    const data = {message: 'Hello from the API'};
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});