const {parentPort} = require("node:worker_threads");

const start = Date.now();
while(Date.now() - start < 3000) {}

parentPort.postMessage("DONE");