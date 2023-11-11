const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/css'));
// console.log(__dirname + '/public')

// Store the satellite altitude data
let altitudeData = [];

// Middleware to fetch satellite data every 10 seconds
setInterval(async () => {
    try {
        const response = await axios.get('https://api.cfast.dev/satellite');
        const altitude = response.data.altitude;

        // Store the altitude data for the last 5 minutes
        altitudeData.push(altitude);
        console.log(altitudeData)
        if (altitudeData.length > 29) {
            altitudeData.shift(); // Remove the oldest data point
        }
    } 
    catch (error) {
        console.error('Error fetching satellite data:', error);
    }
}, 10000); // Fetch data every 10 seconds

// Middleware to calculate statistics
app.use((req, res, next) => {
    // const now = Date.now();
    // const fiveMinutesAgo = now - 5 * 60 * 1000;

    // Filter altitude data for the last 5 minutes
    // const recentAltitudeData = altitudeData.filter((altitude) => altitude.timestamp >= fiveMinutesAgo);

    if (altitudeData.length === 0) {
        console.log('test');
        res.locals.stats = {
            min: null,
            max: null,
            average: null,
        };
    } 
    else if(altitudeData.length > 0) {
        console.log('test2');
        console.log("data", altitudeData);
        let altitudeMin = Math.min(...altitudeData);
        let altitudeMax = Math.max(...altitudeData);
        let altitudeAverage = altitudeData.reduce((sum, altitude) => sum + altitude, 0) / altitudeData.length;
        console.log(altitudeMin);
        res.locals.stats = {
            min: altitudeMin,
            max: altitudeMax,
            average: altitudeAverage,
        };
    }

    next();
});

// /stats endpoint
app.get('/stats', (req, res) => {
    const stats = res.locals.stats;
    console.log(stats);
    // res.json(stats);
    res.render('index2', stats)
});

// Health check logic
let healthMessage = 'Altitude is A-OK';

function updateHealthMessage(altitude) {
    if (altitude < 170) {
        healthMessage = 'WARNING: RAPID ORBITAL DECAY IMMINENT';
    } 
    else if (altitude >= 160 && healthMessage === 'WARNING: RAPID ORBITAL DECAY IMMINENT') {
        healthMessage = 'Sustained Low Earth Orbit Resumed';
        setTimeout(() => {
            healthMessage = 'Altitude is A-OK';
        }, 60000); // Reset message after 1 minute
    } 
    else {
        healthMessage = 'Altitude is A-OK';
    }
}

// /health endpoint
app.get('/health', (req, res) => {
    console.log("Latest altitude:", altitudeData[altitudeData.length-1]);
    updateHealthMessage(altitudeData[altitudeData.length-1]);
    const data = {
        message: healthMessage,
    }
    // res.send(healthMessage);
    console.log(data);
    res.render('index', data);
});

// home endpoint
app.get('/', (req, res) => {
    // const currentAltitude = altitudeData[altitudeData.length - 1];
    res.render('indexHome');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
