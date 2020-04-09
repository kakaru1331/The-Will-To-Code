let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2}, { suit: "spades", card: 10}, { suit: "hearts", card: 4}]

let pickedCard1 = myDeck[pickCard(myDeck)]
console.log(`card: ${pickedCard1.card} ${ pickedCard1.suit}`);

let pickedCard2 = pickCard(15);
console.log(`card: ${pickedCard2.card} ${ pickedCard2.suit}`);
