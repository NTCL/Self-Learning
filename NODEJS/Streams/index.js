const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const filePath = path.resolve(__dirname, './file.txt');

fs.writeFileSync(filePath, 'Hello World');

const readableStream = fs.createReadStream(filePath, {
    encoding: 'utf-8',
    highWaterMark: 2
});

const file2Path = path.resolve(__dirname, './file2.txt');

const writeableStream = fs.createWriteStream(file2Path);

readableStream.on('data', (chunk) => {
    console.log('READ CHUNK: ' + chunk);
    writeableStream.write(chunk);
});

const file3Path = path.resolve(__dirname, './file3.txt');
// read from readable stream and pipe data to writable stream
readableStream.pipe(fs.createWriteStream(file3Path));

const compressedFile3Path = path.resolve(__dirname, './file3.txt.gz');
// read from readable stream and pipe data to transform stream
// read from transform stream and pipe data to writable stream
readableStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream(compressedFile3Path));