const path = require("node:path");

console.log('File name: ' + __filename);
console.log('Directory name: ' + __dirname);

console.log("\nbasename");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log("\nextname");
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log("\nparse");
console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log("\nformat");
console.log(path.format(path.parse(__filename)));
console.log(path.format(path.parse(__dirname)));

console.log("\nisAbsolute");
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("./index.js"));

console.log("\njoin");
console.log(path.join('folder1', 'folder2', 'index.html'));
console.log(path.join('/folder1', 'folder2', 'index.html'));
console.log(path.join('/folder1', '/folder2', 'index.html'));
console.log(path.join('/folder1', '/folder2', '../index.html'));
console.log(path.join(__dirname, "index.html"));

console.log("\nresolve");
console.log(path.resolve('folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', '/folder2', 'index.html'));
console.log(path.resolve('/folder1', '/folder2', '../index.html'));
console.log(path.resolve(__dirname, "index.html"));