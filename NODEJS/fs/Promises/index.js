const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.resolve(__dirname, './file.txt');

fs.writeFile(filePath, 'file content 1')
.then(() => fs.readFile(filePath, 'utf-8'))
.then(data => console.log(data))
.catch((error) => console.log(error));