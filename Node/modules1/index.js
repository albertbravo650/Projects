const circle = require('./circle.js');
console.log(`The area of a circle with radius 10 is ${circle.area(10)}`);
console.log(`The circumference of a circle with radius 10 is ${circle.circumference(10)}`);
console.log(`The volume of a sphere with radius 10 is ${circle.volume(10)}`);

const Square = require('./square.js');
const square1 = new Square(5);
console.log(`The area of square1 is ${square1.area(10)}`)