// let name = "Albert Bravo";
// let age = 28;

// console.log(`My name is ${name} and I am ${age} year(s) old.`);

// if(age || age === 0) {
//     console.log(`The value of the age variable is ${age}.`);
// } else {
//     console.log("Age does not exist.");
// }

// let testBool = !!false;
// console.log(testBool);

// let fName = Symbol('First Name');
// let fName2 = Symbol('First Name');
// let lName = Symbol('Last Name');

// console.log(fName.description);
// console.log(lName);
// console.log(fName===fName2);
// console.log(typeof fName);

let list = {
    0: "Albert",
    1: "Bravo",
    length: 2,
    [Symbol.isConcatSpreadable]: false
}

let message = ["Hello"].concat(list);

console.log(message);