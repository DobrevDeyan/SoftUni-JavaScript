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
  //using previous global scope function from exercise 2
  const deck = [];

  for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i].split("");
    const [face, suit] = [
      cardData.slice(0, -1).join(""),
      cardData[cardData.length - 1],
    ];

    try {
      deck.push(playingCards(face, suit).toString());
    } catch (e) {
      console.log(`Invalid card: ${cards[i]}`);
      return;
    }
  }

  // return deck.join(" ");
  console.log(deck.join(" "));
}
// deckOfCards(["AS", "10D", "KH", "2C"]);
// deckOfCards(["5S", "3D", "QD", "1C"]);
