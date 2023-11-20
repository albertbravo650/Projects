let foods = ["pizza", "pasta", "tacos", "iceCream", "chocolate"];

foods.push("hamburger");
console.log(foods);
foods.pop();
console.log(foods);
foods.unshift("hamburger");
console.log(foods);
foods.shift();
console.log(foods);

foods.forEach((food, index, array) => {
    console.log(food, index, array);
})

let foodsCopy = foods.map((food, index, array) => {
    console.log(food, index, array);
    return `index: ${index} food: ${food}`;
})
console.log(foodsCopy);

let filteredFoods = foods.filter((food, index) => {
    if(index%2==1) {
        return false;
    }
    return true;
})

console.log(filteredFoods);
console.log(foods.includes("steak"));
console.log(foods.join(", test fjdkgj "));

let string1 = "a, b, c, d";

console.log(string1.split(","));

let findResult = foods.find((food) => {
    if(food==="chips") {
        return true;
    }
    return false;
})

console.log(findResult);

let foodMap = foods.map((food, index) => {
    return {
        name: food,
        id: index,
        number: Math.random()
    }
})

console.log(foodMap);
