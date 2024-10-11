const fs = require('node:fs');
const path = require('node:path');

const filePath = path.resolve(__dirname, './file.txt');

fs.writeFile(filePath, 'file content 2', {flag: 'a'}, error => {
    console.log('WRITE FILE END');
    if(error) {
        console.log(error);
    }
});

fs.readFile(filePath, 'utf-8', (error, data) => {
    console.log('READ FILE END');
    if(error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});

fs.writeFileSync(filePath, 'file content 1');
console.log('WRITE FILE SYNC END');

const data = fs.readFileSync(filePath, 'utf-8');
console.log('READ FILE SYNC END');
console.log(data);