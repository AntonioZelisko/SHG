const card = document.querySelectorAll("span");
const add = document.getElementById("add");
const launch = document.getElementById("launch");
const del = document.getElementById("delete");
const deck = [];
var deckc = [];
for (i = 1; i < card.length; i++) {
  card[i].innerHTML = "Carte " + `${i}`;
}
add.addEventListener("click", () => {
  deck.push(input.value);
  card[0].innerHTML = deck;
});
del.addEventListener("click", () => {
  deck.pop();
  card[0].innerHTML = deck;
});
launch.addEventListener("click", () => {
  for (i = 0; i < deck.length; i++) {
    deckc[i] = deck[i];
  }
  for (j = 1; j < card.length; j++) {
    const rand = Math.floor(Math.random() * deckc.length);
    card[j].innerHTML = deckc[rand];
    deckc.splice(rand, 1);
  }
});