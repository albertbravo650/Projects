// const Stream = require('stream');
// const readableStream = new Stream.Readable();

// readableStream.push('ping!');
// readableStream.push('pong!');

const { Readable } = require('stream');

async function * generate() {
    yield 'hello';
    yield 'streams';
    yield 'hello';
    yield 'streams';
    yield 'hello';
    yield 'streams';
    yield 'hello';
    yield 'streams';
}

const readable = Readable.from(generate());

readable.on('data', (chunk) => {
    console.log(chunk);
});