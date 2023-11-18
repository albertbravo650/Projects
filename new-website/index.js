console.log("Hello World");

let list1 = ["John", "Sally", "Sarah"];

let listButton = document.getElementById("listButton");
let listButton2 = document.getElementById("listButton2");

let list = document.getElementById("newList")
console.log(list, { list });

let pokemon = document.getElementById("newList2")
console.log(list, { list });

// listButton.addEventListener("click", displayList);
// listButton.addEventListener("click", function(){
//     displayList();
// })
listButton.addEventListener("click", () => {
    displayList();
});

let url = "https://pokeapi.co/api/v2/pokemon";

listButton2.addEventListener("click", () => {
    let promise = fetch(url).then((res) => {
    console.log(res);
    return res.json()
}).then((data) => {
    console.log(data.next);
    url = data.next;
    displayPokemon(data.results);
})
});

function displayList() {
    // list.innerHTML = "";
    for (let i = 0; i < list1.length; i++) {
        // create li
        let listItem = document.createElement("li");
        // set li content
        listItem.textContent = list1[i];
        // append li to the DOM
        list.append(listItem);
    }
    list1.push("Bob");
}

// https://pokeapi.co/api/v2/pokemon


// console.log(result);

function displayPokemon(pokemonList) {
    // pokemon.innerHTML = "";
    for (let i = 0; i < pokemonList.length; i++) {
        // create li
        let listItem = document.createElement("li");
        // set li content
        listItem.textContent = pokemonList[i].name;
        // append li to the DOM
        pokemon.append(listItem);
    }
}

// display images