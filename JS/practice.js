// const obj1 = {name: "Albert Bravo", age: 27};;

// console.log(obj1.age);

// const o = new Object();
// console.log(o);
// o.Number2 = 26;
// console.log(o);
// o.Number3 = "hello";
// console.log(o);

// class Animal {
//   constructor(name, size, tame) {
//     this.name = name;
//     this.size = size;
//     this.tame = tame;
//   }

//   speak() {
//     return `${this.name} has spoken. ${this.name} is tame: ${this.tame}`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, size, tame, wild) {
//     super(name, size, tame);
//     this.wild = wild;
//   }

//   bark() {
//     return `${this.name} has barked. ${this.name} is wild: ${this.wild}`;
//   }
// }

// const doggie = new Animal("Scooby", "Medium", true);
// doggie.tame = false;
// console.log(doggie.speak());

// const doggie2 = new Dog("Scrappy", "Small", true, false);
// console.log(doggie2.bark());

// let user = {};
// user.name = "John";
// console.log(user);
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

// let num1 = 80;
// num1 = 10;
// console.log(num1, Math.floor(num1), Math.max(num1, 10, 25, 50, 46));

// const d = new Date();
// console.log(d.getMinutes());

// function isEmpty(obj) {
//   for(key in obj) {
//     return false;
//   };
//   return true;
// }

// let fruits = {};
// console.log(isEmpty(fruits));
// fruits["1"] = "apple";
// console.log(isEmpty(fruits));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function sum(obj) {
//   let sum = 0;
//   for(let key in obj) {
//     sum += obj[key];
//   };
//   return sum;
// }

// console.log(sum(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     if(typeof(obj[key])==="number") {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// };

// console.log(multiplyNumeric(menu));

let a = {x: 20, y: 50};
let b = Object.create(a);
// b.x = 30;
console.log(b.x);