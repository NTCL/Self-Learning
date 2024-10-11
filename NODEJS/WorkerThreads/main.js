const http = require('node:http');
const {Worker} = require("node:worker_threads");
const path = require('node:path');

const filePath = path.resolve(__dirname, './worker.js');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home page');
    }
    else if (req.url === '/slow-page') {
        const worker = new Worker(filePath);
        worker.on("message", (msg) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Slow page: ' + msg);
        });
    }
});

server.listen(3000, () => console.log('Server is running on port 3000'));