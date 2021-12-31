const card = document.querySelectorAll("span");
const add = document.getElementById("add");
const launch = document.getElementById("launch");
const del = document.getElementById("delete");
const deck = [];

add.addEventListener("click", () => {
  deck.push(input.value);
  card[0].innerHTML = deck;
});

del.addEventListener("click", () => {
  deck.pop();
  card[0].innerHTML = deck;
});

launch.addEventListener("click", () => {
  const deckc = deck;
  const rand = Math.floor(Math.random() * deck.length);
  const r = deck.splice(rand);
  const rand1 = Math.floor(Math.random() * r.length);
  const r1 = deck.splice(rand1);
  const rand2 = Math.floor(Math.random() * r1.length);
  const r2 = deck.splice(rand2);
  const rand3 = Math.floor(Math.random() * r2.length);
  card[1].innerHTML = deck[rand];
  card[2].innerHTML = deck[rand1];
  card[3].innerHTML = deck[rand2];
  card[4].innerHTML = deck[rand3];
});
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
