const fs = require('fs');
// const readableStream = fs.createReadStream('c:/Users/abdua/ABCoding/Projects/Node/streams1/files/file1.txt');

// console.log(__dirname);

const writableStream = fs.createWriteStream('./Projects/Node/streams1/files/file2.txt');

// readableStream.setEncoding('utf-8');
writableStream.write('hello, ');
writableStream.end('world!');

writableStream.on('finish', () => {
    console.log('Data has been written to the file.');
})


// readableStream.on('data', function(chunk) {
//     writableStream.write(chunk);
//     // console.log(readableStream);
// })