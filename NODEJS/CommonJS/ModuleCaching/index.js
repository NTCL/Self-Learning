console.log('Export Object');

const object = require('./ExportObject');
console.log(object.getName()); // name
object.setName('new name');
console.log(object.getName()); // new name

const newObject = require('./ExportObject'); // use cached object
console.log(newObject.getName()); // new name

console.log('Export Class');

const Class = require('./ExportClass');

const object2 = new Class('name');
console.log(object2.getName()); // name
object2.setName('new name');
console.log(object2.getName()); // new name

const newObject2 = new Class('another name'); // a new object
console.log(newObject2.getName()); // another name