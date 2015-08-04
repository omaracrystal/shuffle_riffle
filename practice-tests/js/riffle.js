// add scripts

console.log("sanity check!");


/*
1. Shuffle the cards
2. Cut the deck into halves - `half1` and `half2`
3. Generate random number based on the size of each half
4. Using the random number, pull out cards from each half, adding them to a new array
5. Repeat steps 2 and 3 until the two halves are empty.
6. Return the new array
*/


// GLOBALS

var cardArray = [
  "H1", "H2", "H3",  "H4",  "H5",  "H6", "H7",
  "H8", "H9", "H10", "H11", "H12", "H13",
  "C1", "C2", "C3",  "C4",  "C5",  "C6", "C7",
  "C8", "C9", "C10", "C11", "C12", "C13",
  "S1", "S2", "S3",  "S4",  "S5",  "S6", "S7",
  "S8", "S9", "S10", "S11", "S12", "S13",
  "D1", "D2", "D3",  "D4",  "D5",  "D6", "D7",
  "D8", "D9", "D10", "D11", "D12", "D13"
];


// HELPER FUNCTIONS

function shuffleCards(arr) {

  // *** Given an array of cards, return a shuffled array *** //

  var shuffledArray = [];
  var usedRandomNumbers = [];
  var max = arr.length;

  // continue until array is empty
  while (arr.length) {
    // generate random number
    var randomNumber = Math.floor(Math.random() * (max-0));
    // test to see if you've used that random number before
    if (usedRandomNumbers.indexOf(randomNumber) === -1) {
      // pop off a single card
      shuffledArray[randomNumber] = arr.pop();
      // add used random number to array
      usedRandomNumbers.push(randomNumber);
    }
  }

  // return the shuffled array
  return shuffledArray;
}

function createHalves(arr) {

  // *** Given an array of cards, shuffled or unshuffled, return two halves *** //

  var halfArray = [];

  // cards 0 to 26
  var firstHalf = arr.splice(26);
  // cards 27 to 52
  var secondHalf = arr;

  // add halves to array
  halfArray.push(firstHalf);
  halfArray.push(secondHalf);

  // return array of arrays
  return halfArray;
}

function riffleCards(arrOfArrays) {

  // *** Given halves of cards, return an array of "riffled" cards *** //

  var riffledCardArray = [];
  var deckChoice = Math.floor(Math.random()*2); // 0 or 1
  var half1 = arrOfArrays[0];
  var half2 = arrOfArrays[1];

  // continue until BOTH halves are empty
  while (half1.length || half2.length) {
    // if deckChoice is 0, use half1
    if (deckChoice===0) {
      // if deckchoice is 0, reassign to 1 - WHY?
      deckChoice = 1;

      // needs refactoring
        // not DRY (functional, modular)
      var tempArray1 = half1.splice(0, Math.floor(Math.random()*26));
      for (var i = 0; i < tempArray1.length; i++) {
        riffledCardArray.push(tempArray1[i]);
      }

    } else if(deckChoice===1) {
      // if deckchoice is 1, reassign to 0 - WHY?
      deckChoice = 0;

      // needs refactoring
      var tempArray2 = half2.splice(0, Math.floor(Math.random()*26));
      for (var j = 0; j < tempArray2.length; j++) {
        riffledCardArray.push(tempArray2[j]);
      }
    }
  }
  // return dat riffled array!
  return riffledCardArray;
}


// INVOCATION

var intialShuffled = shuffleCards(cardArray);
var splitDeckArray = createHalves(intialShuffled);
var riflledDeck = riffleCards(splitDeckArray);

// console.log(riflledDeck);

// // what's a quick and dirty way to test this?
// if (riflledDeck[2] !==  cardArray[2]) {
//   console.log("Shuffled!");
// } else {
//   console.log("Not Shuffled!");
// }


module.exports = {
  shuffleCards: shuffleCards,
  cardArray: cardArray
};

