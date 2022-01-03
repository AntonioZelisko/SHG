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

/*function gener(deckc){
  const deckc = deck;
  for (j = 1; j < card.length; j++) {
    const rand = Math.floor(Math.random() * deckc.length);
    card[j].innerHTML = deckc[rand];
    deckc.splice(rand,1);
  }
}
*/
launch.addEventListener("click", () => {
 // gener(deckc);
  const deckc = deck;
  for (j = 1; j < card.length; j++) {
    const rand = Math.floor(Math.random() * deckc.length);
    card[j].innerHTML = deckc[rand];
    deckc.splice(rand,1);
   /* if (card[0] == undefined){
    if (card[card.length-1]==true){
     return deckc = deck;
    } */
   // if ((card[j].innerHTML = deckc[rand])) {
     /* for (i = 0; i < deckc.length; i++) {
       if (deckc[i] == deckc[rand]) {
          deckc.replace(deckc[rand]-1)
         if (deckc[rand]===undefined){
            deckc.splice(0,1);
          }
        //  deckc.splice(0,1);
        }
     // }
      // return j+1*/
    
    //deckc.splice(deckc[rand],deckc[i])
    // deckc.delete(deckc[rand])
    /*for (i = 0; i < deckc.length; i++) {
      
      if ((deckc[i] == deckc[rand])) {
        
       // deckc.splice(deckc[rand],deckc[i]);
      } } */
}
  

  /*for (let i=0;i<deck.length;i++){
  if(deck[i]=rand){
    deck[i].pop();
  }
}
  var index = deck.indexOf(deck[rand]);
  deck.splice(index, 1); 
  const deckc1 = deckc.splice(0, rand);
  const rand1 = Math.floor(Math.random() * deckc1.length);
  /*const roo = deckc.splice(rand);
  const  r1 = deckc.splice(rand1);
  const rand2 = Math.floor(Math.random() * r1.length);
  const r2 = deckc.splice(rand2);
  const rand3 = Math.floor(Math.random() * r2.length);
  */

  // var index = deckc.indexOf(deckc[rand]);
  /* card[1].innerHTML = deckc[Math.floor(rand)];
  deckc = deckc.delete(rand);
  card[2].innerHTML = deckc[rand1];
  card[3].innerHTML =
    deckc[
      (index) => {
        Math.floor(Math.random() * deckc.splice(index, 1).length);
      }
    ];

  card[4].innerHTML = deckc[Math.floor(Math.random() * deckc.length)];*/

});
/*
if (gener(deckc)=true){
return deckc = deck;
}
*/
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
// rmettre à zero l'array à la fin du addevent
