const crypto = require('node:crypto');

console.log("SYNC");

const syncCalls = 3;
const syncStart = Date.now();
for (let i = 0; i < syncCalls; i ++) {
    crypto.pbkdf2Sync('password', 'salt', 100000, 512 ,'sha512');
    console.log(`Hash ${i + 1}: `,  Date.now() - syncStart);
}

console.log("ASYNC");

const asyncCalls = 9;
const asyncStart = Date.now();
for (let i = 0; i < asyncCalls; i ++) {
    crypto.pbkdf2('password', 'salt', 100000, 512 ,'sha512', () => {
        console.log(`Hash ${i + 1}: `, Date.now() - asyncStart);
    });
}