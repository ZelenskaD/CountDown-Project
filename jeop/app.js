const base_API_URL = "https://rithm-jeopardy.herokuapp.com/api";

// Local running API because the herokuapp was broken and did not return any results.
// const base_API_URL = "http://localhost:3000/api";

// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
const NUM_CLUES = 5;

// Timeout function
function timeout(ms, errorMessage = "Operation timed out") {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(errorMessage)), ms)
  );
}

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCategoryIds() {
  try {
    const response = await Promise.race([
      axios.get(`${base_API_URL}/categories`, { params: { count: 14 } }),
      timeout(5000),
    ]);
    return response.data.map((cat) => cat.id);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
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
  try {
    // Use 'Promise.race' to race two Promises against each other:
    // 1. A promise returned by axios.get, which attempts to fetch category data from the API.
    // 2. A timeout promise created by calling the 'timeout' function, which will automatically reject after 5000 milliseconds.
    const res = await Promise.race([
      axios.get(`${base_API_URL}/category`, { params: { id: catId } }),
      timeout(5000),
    ]);

    // If the axios.get promise resolves first (i.e., the request completes before the timeout),
    // 'res' will contain the response from the API.
    // You can proceed to use 'res' for further processing, e.g., extracting and returning the desired data.h

    // Check if data and clues are present in the response
    if (!res.data || !res.data.clues) {
      throw new Error("Invalid data received");
    }

    const returnObject = {
      title: res.data.title,
      clues: res.data.clues.map((clue) => ({
        question: clue.question,
        answer: clue.answer,
        showing: null, // Initialize showing to null
      })),
    };

    return returnObject;
  } catch (error) {
    console.error("Error fetching category details:", error);
    throw error;
  }
}
// If either the axios.get request fails (e.g., due to network issues or server errors)
// or the timeout promise rejects first (i.e., the request takes longer than 5 seconds),
// this 'catch' block will execute, handling the error.
// You can log the error, throw it, or handle it as appropriate for your application's needs.

/** Saves the categories to the global variable categories. This is to reduce API calls
 *
 */
async function saveCategories() {
  try {
    const categoryIds = await getCategoryIds(); // Fetch category IDs

    // Fetch details for all categories
    const allCategoriesDetails = await Promise.all(
      categoryIds.map((catId) => getCategory(catId))
    );

    console.log(allCategoriesDetails);

    categories = allCategoriesDetails;
  } catch (error) {
    console.error("Error saving categories to global variable:", error);
    throw error;
  }
}

// Fisher-Yates shuffle algorithm.
function shuffleAndTake6() {
  for (let i = categories.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [categories[i], categories[j]] = [categories[j], categories[i]];
  }

  return categories.slice(0, 6);
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function fillTable() {
  const table = document.createElement("table");
  table.setAttribute("id", "jeopardy");
  table.classList.add("table", "fixed-size-table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const myCategories = shuffleAndTake6();

  // Setup header row for categories titles
  const headerRow = document.createElement("tr");
  myCategories.forEach((category) => {
    const th = document.createElement("th");
    th.textContent = category.title; // Set category title
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow); // Add header row to thead

  table.appendChild(thead); // Add thead to table
  table.appendChild(tbody); // Add tbody to table

  // Setup question rows, with adjustments for click handler integration
  for (let i = 0; i < NUM_CLUES; i++) {
    // Assuming 5 questions per category
    const row = document.createElement("tr");
    myCategories.forEach((category) => {
      const td = document.createElement("td");
      const clue = category.clues[i]; // Reference to the current clue object

      const span = document.createElement("span");
      span.innerHTML = '<i class="fa-solid fa-circle-question"></i>'; // Placeholder icon
      td.appendChild(span);

      // Adjusted to pass the current clue object and its td for state management
      td.addEventListener("click", handleClick(clue, td));
      row.appendChild(td);
    });
    tbody.appendChild(row);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  const board = document.getElementById("board");
  board.innerHTML = ""; // Clear previous game content
  board.appendChild(table); // Append the newly created table
  board.style.display = "block"; // Ensure the board is shown
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(clue, td) {
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

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView(text) {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    if (text === startGame.innerText) {
      startGame.innerText = "Loading...";
    } else if (text === restartGame.innerText) {
      restartGame.innerText = "Loading...";
    }
    spinner.style.display = "block"; // Show the spinner
  }
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    startGame.innerText = "Start!";
    restartGame.innerText = "Restart!";

    spinner.style.display = "none"; // Hide the spinner
  }
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart(buttonText) {
  const board = document.getElementById("board"); // Ensure this points to your board element
  try {
    showLoadingView(buttonText); // Show spinner

    // Check if categories is empty and call saveCategories if necessary
    if (!categories || categories.length === 0) {
      await saveCategories(); // This will populate the global `categories` variable
    }

    hideLoadingView(); // Hide spinner
    fillTable();

    board.style.display = "block"; // Show the board
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? "Bad Response from API Server."
      : "Something went wrong.";
    hideLoadingView(); // Ensure the spinner is hidden on error
    console.error("Error during setup and start:", error);
    displayErrorMessage(
      "An error occurred while setting up the board: " + message
    );
  }
}

/** Function for displaying an error alert via bootstrap.
 */
function displayErrorMessage(message) {
  // Find or create a container for the alert messages
  let alertContainer = document.getElementById("alert-container");
  if (!alertContainer) {
    alertContainer = document.createElement("div");
    alertContainer.id = "alert-container";
    document.body.prepend(alertContainer); // Prepend to the body or another suitable container
  }

  // Create the alert div and add Bootstrap classes for styling
  const alertDiv = document.createElement("div");
  alertDiv.className = "alert alert-danger alert-dismissible fade show";
  alertDiv.role = "alert";
  alertDiv.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

  // Append the alert to the container
  alertContainer.appendChild(alertDiv);

  // Optionally set a timeout to auto-dismiss the alert after some time
  setTimeout(() => {
    if (alertDiv) {
      alertDiv.remove();
    }
  }, 5000); // Auto-dismiss after 5 seconds
}

const startGame = document.getElementById("start");
const restartGame = document.getElementById("restart");

/** On click of start / restart button, set up game. */

document.addEventListener("DOMContentLoaded", async () => {
  if (startGame) {
    startGame.addEventListener("click", async () => {
      await setupAndStart(startGame.innerText);
    });
  }

  if (restartGame) {
    restartGame.addEventListener("click", async () => {
      await setupAndStart(restartGame.innerText);
    });
  }
});

/** On page load, add event handler for clicking clues */

// Implemented in `fillTable`
