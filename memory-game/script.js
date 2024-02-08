document.addEventListener("DOMContentLoaded", startGame); // Start the game when the DOM is fully loaded

const gameContainer = document.getElementById("game");

const COLORS = [
  "slateBlue",
  "royalBlue",
  "paleVioletRed",
  "salmon",
  "seaGreen",
  "slateBlue",
  "royalBlue",
  "paleVioletRed",
  "salmon",
  "seaGreen",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clickedCards = [];
let score = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  console.log(clickedCards.length);
  if (clickedCards.length < 2) {
    const color = event.target.className;
    if (!event.target.hasAttribute("id")) {
      event.target.id = Math.random();
    }
    console.log("you just clicked", event.target);
    event.target.style.backgroundColor = color;
    clickedCards.push(event.target);
    if (clickedCards.length === 2) {
      const cardOne = clickedCards[0];
      const cardTwo = clickedCards[1];
      const cardOneColor = cardOne.className;
      const cardTwoColor = cardTwo.className;
      const cardOneId = cardOne.id;
      const cardTwoId = cardTwo.id;
      if (cardOneColor !== cardTwoColor || cardOneId === cardTwoId) {
        console.log("not matched");
        setTimeout(function () {
          cardOne.style.backgroundColor = "rgb(167, 222, 246)";
          cardTwo.style.backgroundColor = "rgb(167, 222, 246)";
          clickedCards = [];
        }, 1000);
      } else if (cardOneColor === cardTwoColor && cardOneId !== cardTwoId) {
        console.log("matched");
        score += 1;
        document.getElementById("scoreDisplay").innerText = `Score: ${score}`;
        clickedCards = [];
      }
    }
  }
}

function startGame() {
  document.getElementById("startBtn").addEventListener("click", startGame);
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  let shuffledColors = shuffle(COLORS.slice());

  // when the DOM loads
  createDivsForColors(shuffledColors);
}

function setupGame() {
  const gameContainer = document.getElementById("game");
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  let shuffledItems = shuffle(COLORS);
  createDivsForColors(shuffledItems);
  score = 0;
}

document.getElementById("resetBtn").addEventListener("click", setupGame);

document.addEventListener("DOMContentLoaded", setupGame);
