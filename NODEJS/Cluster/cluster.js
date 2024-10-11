const cluster = require('node:cluster');
const http = require('node:http');

cluster.schedulingPolicy = cluster.SCHED_RR; // for windows

if(cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else {
    console.log(`Worker ${process.pid} is running`);
    const server = http.createServer((req, res) => {
        if(req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
        }
        else if (req.url === '/slow-page') {
            const start = Date.now();
            while(Date.now() - start < 3000) {}
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Slow page');
        }
    });

    server.listen(3000, () => console.log('Server is running on port 3000'));
}