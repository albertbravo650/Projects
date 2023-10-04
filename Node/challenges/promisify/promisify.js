const util = require('util');
const fs = require('fs');
const path = require('path');
const readFileAsync = util.promisify(fs.readFile);
const absolutePath = path.resolve('Projects/Node/challenges', 'file2copy3.txt');

readFileAsync(absolutePath, 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })