const buffer = new Buffer.from('Vishwas');

console.log(buffer.toString());
console.log(buffer); // hexadecimal representation
console.log(buffer.toJSON());

buffer.write('Codevolution');

console.log(buffer.toString()); // only first 7 characters are stored
console.log(buffer); // hexadecimal representation
console.log(buffer.toJSON());