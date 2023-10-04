// assign the fs module
const fs = require('fs');

// a function to copy data from one file to another using asynchronous callbacks
// streams allow support for large files by utilizing 'chunk' system
function copyFile(sourcePath, destinationPath, callback) {
    const readStream = fs.createReadStream(sourcePath);
    // will create copy if file doesn't exist, or overwrite data if file already exists
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.on('error', (err) => {
        callback(err);
    });

    writeStream.on('error', (err) => {
        callback(err);
    })

    writeStream.on('finish', () => {
        callback(null);
    })

    readStream.pipe(writeStream);
}

// example

const sourcePath = './Projects/Node/streams1/files/file2.txt'; // replace with source path
const destinationPath = './Projects/Node/challenges/file2copy3.txt'; // replace with destination path

copyFile(sourcePath, destinationPath, (err) => {
    if(err) {
        console.error('Error:', err);
    }
    else {
        console.log('File successfully copied!');
    }
});

