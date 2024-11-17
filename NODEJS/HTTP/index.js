const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home Page');
    }
    else if(req.url === '/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            propertyA : 'A',
            propertyB : 'B'
        }));
    }
    else if(req.url === '/html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(path.resolve(__dirname, './index.html')).pipe(res);
    }
    else if(req.url === '/template') {
        res.writeHead(200, {'Content-Type': 'text/html'});

        const name = 'Leon';
        let html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
        html = html.replace("{{name}}", name);
        res.end(html);
    }
    else {
        res.writeHead(404);
        res.end('Page not found');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
