// using the http node module to create a server

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 4000

// const server = http.createServer((req,res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World, how are you? :)\n')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })


// practicing call backs

// (() => {
//     console.log("this is the start");

//     setTimeout(() => {
//         console.log("Callback 1")
//     }, 1000);

//     console.log("this is just a message");

//     setTimeout(() => {
//         console.log("Callback 2")
//     }, 5000);

//     console.log("this is the end");
// })();


// using the fs node module to read a file and path node module to resolve a path

// const fs = require('fs');
// const path = require('path');
// const absolutePath = path.resolve('Projects/Node', 'file.txt');
// console.log(absolutePath);

// fs.readFile(absolutePath, 'utf-8', (err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }

//     console.log(data);
// })


// using the util node module with fs and path

const util = require('util');

const obj = {name: 'Albert', age: 27};
const inspectResult = util.inspect(obj);
console.log(inspectResult);

const formattedString = util.format('Hello %s %s!', 'Albert', 'Bravo');
console.log(formattedString);

const fs = require('fs');
const path = require('path');
const readFileAsync = util.promisify(fs.readFile);
const absolutePath = path.resolve('Projects/Node', 'file.txt');

readFileAsync(absolutePath, 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })
