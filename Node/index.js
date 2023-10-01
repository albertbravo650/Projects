// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req,res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World, how are you? :)\n')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

(() => {
    console.log("this is the start");

    setTimeout(() => {
        console.log("Callback 1")
    }, 1000);

    console.log("this is just a message");

    setTimeout(() => {
        console.log("Callback 2")
    }, 5000);

    console.log("this is the end");
})();