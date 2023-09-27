// const obj = /e/.exec("The best things in life are free!");
// console.log(obj);

// [
//     'e',
//     index: 2,
//     input: 'The best things in life are free!',
//     groups: undefined
//   ]



// 4. RegEx Exercise 1: Find the Time
// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there's no need 
// to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

function regexp(string) {
    let result = string.match(/\s\b[0-9][0-9]:[0-9][0-9]\s/g);

    console.log(result);

    return result;
}

regexp("Breakfast at 09:00 in the room 123:456.");