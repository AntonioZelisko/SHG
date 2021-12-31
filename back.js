const card = document.querySelectorAll("span");
const add = document.getElementById("add");
const launch = document.getElementById("launch");
const seedeck = document.getElementById("seedeck");
const deck = [];

//deck.push(input);
/*"BE alt",
    "BE",
    "BE",
    "BE",
    "white stone",
    "white stone",
    "white stone",
    "spirit",
    "sage",
    "sage",
    "sage",
    "consonnance",
    "consonnance",
    "consonnance",
    "melody",
    "ancient rule",
    "karma cut",
    "karma cut",
    "karma cut",
    "providence",
    */
add.addEventListener("click", () => {
    deck.push(input.value);
});

launch.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * deck.length);
    const rand1 = Math.floor(Math.random() * deck.length);
    const rand2 = Math.floor(Math.random() * deck.length);
    const rand3 = Math.floor(Math.random() * deck.length);
    card[1].innerHTML = deck[rand];
    card[2].innerHTML = deck[rand1];
    card[3].innerHTML = deck[rand2];
    card[4].innerHTML = deck[rand3];
});

seedeck.addEventListener("click", () => {
    card[0].innerHTML = deck
})