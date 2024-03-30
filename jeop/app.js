const base_API_URL = "https://rithm-jeopardy.herokuapp.com/api";
const table = document.getElementById("jeopardy");

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  const res = await axios.get(`${base_API_URL}/categories`, {
    params: { count: 14 },
  });

  const shuffledCat = shuffle(res.data);
  const selectedCategories = shuffledCat.slice(0, 6);
  const categoryIds = selectedCategories.map((category) => category.id);

  console.log(categoryIds);

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

  console.log(returnObject);

  return returnObject;
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

async function fillTable() {
  // Clear existing content
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // Fetch category IDs
  const categories = await getCategoryIds();

  // Fetch details for all categories
  const allCategoriesDetails = await Promise.all(
    categories.map((catId) => getCategory(catId))
  );

  // Create the header row with category titles
  const headerRow = document.createElement("tr");
  allCategoriesDetails.forEach((cat) => {
    const catHead = document.createElement("th");
    catHead.textContent = cat.title;
    headerRow.appendChild(catHead);
  });
  thead.appendChild(headerRow);

  // Determine the maximum number of questions
  const maxQuestions = Math.max(
    ...allCategoriesDetails.map((cat) => cat.clues.length)
  );

  // Fill tbody with placeholders for questions
  for (let i = 0; i < maxQuestions; i++) {
    const row = document.createElement("tr");
    allCategoriesDetails.forEach((cat) => {
      const cell = document.createElement("td");
      cell.textContent = "?"; // Initial placeholder
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  }
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
// const categories = await getCategoryIds();

// const allClues = categories.map((cat) => getCategory(cat));

// console.log(allClues);
// const catHead = document.createElement("th");

// const questions = document.createElement("tr");

// const header = document.createElement("tr");
// categories.forEach((category) => {
//   const th = document.createElement("th");
//   th.textContent = category.title;
//   header.appendChild(th);
// });
// thead.appendChild(header);

// for (let i = 0; i < numberQuest; i++) {
//   const questions = document.createElement("tr");
//   categories.forEach((category) => {
//     const td = document.createElement("td");
//     td.textContent = "?"; //add spaan
//     questions.appendChild(td);
//   });
//   tbody.appendChild(questions);
// }

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
  const spinner = document.getElementById("spinner");
  table.style.display = "none";
  spinner.style.display = "block";
}

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

async function setupAndStart() {
  showLoadingView(); // Show loading spinner

  await fillTable(); // Populate the table with categories and questions

  hideLoadingView(); // Hide loading spinner after the table is filled
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
const startGame = document.getElementById("start");
const restartGame = document.getElementById("restart");

document.addEventListener("DOMContentLoaded", (event) => {
  if (startGame) {
    startGame.addEventListener("click", async function () {
      console.log("Game started!");
      await setupAndStart(); // Setup and start the game
    });
  }

  if (restartGame) {
    restartGame.addEventListener("click", async function () {
      console.log("Game restarted!");
      await setupAndStart(); // Restart the game
    });
  }
});
