// 1. Sub Sum
function subSum(arr, start, end) {
  if (Array.isArray(arr) === false) {
    return NaN;
  }
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length - 1) {
    end = arr.length - 1;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += Number(arr[i]);
  }

  return sum;
}
// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(subSum([10, "twenty", 30, 40], 0, 2));
// console.log(subSum([], 1, 2));
// console.log(subSum("text", 0, 2));

// 2. Playing Cards
function playingCards(face, suit) {
  const faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (faces.includes(face) === false) {
    throw new Error("Invalid face: " + face);
  }
  if (Object.keys(suits).includes(suit) === false) {
    throw new Error("Invalid Suit: " + suit);
  }

  return {
    face,
    suit: suits[suit],
    toString() {
      return this.face + this.suit;
    },
  };
}
// const testOne = playingCards("A", "S");
// console.log(testOne.toString());
// const testTwo = playingCards("10", "H");
// console.log(testTwo.toString());
// const testThree = playingCards("9", "Y");
// console.log(testThree.toString());

// 3. Deck of Cards
function deckOfCards(cards) {
  //using previous global scope function from exercise 2 - playingCards()

  let result = [];

  for (let card of cards) {
    const face = card.slice(0, -1);
    const suit = card.slice(-1);
    try {
      result.push(playingCards(face, suit));
    } catch (error) {
      console.log(`Invalid card: ` + card);
      return;
    }
  }

  console.log(result.join(" "));
}
// deckOfCards(["AS", "10D", "KH", "2C"]);
// deckOfCards(["5S", "3D", "QD", "1C"]);
