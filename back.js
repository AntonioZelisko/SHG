const card = document.querySelectorAll("span");
const deck = [
  "BE alt",
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
];

const rand = Math.floor(Math.random() * deck.length);
const rand1 = Math.floor(Math.random() * deck.length);
const rand2 = Math.floor(Math.random() * deck.length);
const rand3 = Math.floor(Math.random() * deck.length);

card[0].innerHTML = deck[rand];
card[1].innerHTML = deck[rand1];
card[2].innerHTML = deck[rand2];
card[3].innerHTML = deck[rand3];
