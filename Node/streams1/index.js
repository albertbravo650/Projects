import * as fs from 'fs';

async function logChunks(readable) {
    for await(const chunk of readable) {
        console.log(chunk);
    }
}

const readable = fs.createReadStream('c:/Users/abdua/ABCoding/Projects/Node/streams1/files/test.txt', {encoding: 'utf-8'});
logChunks(readable);