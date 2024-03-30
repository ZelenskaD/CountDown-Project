// const base_API_URL = "https://rithm-jeopardy.herokuapp.com/api";

// create setup and start function

// Local running API because the herokuapp was broken and did not return any results.
const base_API_URL = "http://localhost:3000/api";

const startGame = document.getElementById("start");
const restartGame = document.getElementById("restart");
/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCategoryIds() {
  const res = await axios.get(`${base_API_URL}/categories`, {
    params: { count: 14 },
  });

  const shuffledCat = shuffle(res.data);
  const selectedCategories = shuffledCat.slice(0, 6);
  const categoryIds = selectedCategories.map((category) => category.id);

  return categoryIds;
}

/**
 * Fisher-Yates (also known as the Knuth) shuffle algorithm
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  const res = await axios.get(`${base_API_URL}/category`, {
    params: { id: catId },
  });

  const returnObject = {
    title: res.data.title,
    clues: res.data.clues.map((clue) => ({
      question: clue.question,
      answer: clue.answer,
      showing: null,
    })),
  };

  return returnObject;
}

async function getAllCategoryDetails() {
  const categories = await getCategoryIds();

  // Fetch details for all categories
  const allCategoriesDetails = await Promise.all(
    categories.map((catId) => getCategory(catId))
  );

  console.log(allCategoriesDetails);

  return allCategoriesDetails;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// async function fillTable() {
//   const thead = table.querySelector("thead");
//   const tbody = table.querySelector("tbody");
//   // Clear existing content
//   thead.innerHTML = "";
//   tbody.innerHTML = "";

async function fillTable(allCategoriesDetails) {
  jeopardyObjectToDOM(allCategoriesDetails);
  const board = document.getElementById("board");
  board.style.display = "block"; // Ensure the board is shown
}

function attachClickEventsToQuestions() {
  const questionCells = table.querySelectorAll("tbody td");
  questionCells.forEach((cell) => {
    cell.addEventListener("click", function () {
      // Logic to toggle between showing question, answer, or doing nothing
      // This would likely involve checking the `showing` property
      // and updating both the display and the `showing` state accordingly
    });
  });
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  let spinner = document.getElementById("spinner");
  if (!spinner) {
    // If the spinner doesn't exist, create it
    spinner = document.createElement("div");
    spinner.setAttribute("id", "spinner");
    // Example using Bootstrap spinner
    spinner.innerHTML =
      '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';
    document.body.appendChild(spinner);
  }
  spinner.style.display = "block"; // Show the spinner

  // Center the spinner on the screen
  spinner.style.position = "fixed";
  spinner.style.top = "50%";
  spinner.style.left = "50%";
  spinner.style.transform = "translate(-50%, -50%)";
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.style.display = "none"; // Hide the spinner
  }
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO

function jeopardyObjectToDOM(categories) {
  const table = document.createElement("table");
  table.setAttribute("id", "jeopardy"); // Ensure this ID matches your table container ID
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Setup header row for categories titles
  const headerRow = document.createElement("tr");
  categories.forEach((category) => {
    const th = document.createElement("th");
    th.textContent = category.title; // Set category title
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow); // Add header row to thead

  table.appendChild(thead); // Add thead to table
  table.appendChild(tbody); // Add tbody to table

  // Setup question rows, with adjustments for click handler integration
  for (let i = 0; i < 5; i++) {
    // Assuming 5 questions per category
    const row = document.createElement("tr");
    categories.forEach((category) => {
      const td = document.createElement("td");
      const clue = category.clues[i]; // Reference to the current clue object

      const span = document.createElement("span");
      span.innerHTML = '<i class="fa-solid fa-circle-question"></i>'; // Placeholder icon
      td.appendChild(span);

      // Adjusted to pass the current clue object and its td for state management
      td.addEventListener("click", createClickHandler(clue, td));
      row.appendChild(td);
    });
    tbody.appendChild(row);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  const board = document.getElementById("board"); // Ensure this ID matches your main container for the game
  board.innerHTML = ""; // Clear previous game content
  board.appendChild(table); // Append the newly created table
  board.style.display = "block"; // Ensure the board is shown
}

function createClickHandler(clue, td) {
  return function () {
    // First check if the clue's showing state is null (not shown yet)
    if (clue.showing === null) {
      // Show the question
      td.innerHTML = clue.question;
      clue.showing = "question"; // Update state to indicate the question is shown
    } else if (clue.showing === "question") {
      // The question was shown, now show the answer and update the background
      td.innerHTML = clue.answer;
      clue.showing = "answer"; // Update state to indicate the answer is shown
      td.style.backgroundColor = "green";
      td.style.color = "white";
    }
    // If the state is "answer", we do nothing to avoid further updates
  };
}

async function setupAndStart() {
  const board = document.getElementById("board"); // Ensure this points to your board element
  board.innerHTML = "";
  showLoadingView(); // Show spinner
  const myCategories = await getAllCategoryDetails();
  hideLoadingView(); // Hide spinner
  fillTable(myCategories);
  board.style.display = "block"; // Show the board
}

document.addEventListener("DOMContentLoaded", async (event) => {
  if (startGame) {
    startGame.addEventListener("click", async () => {
      await setupAndStart();
    });
  }

  if (restartGame) {
    restartGame.addEventListener("click", async () => {
      await setupAndStart();
    });
  }
});
