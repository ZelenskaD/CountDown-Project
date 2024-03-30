const input = document.querySelector("#fruitInput"); // select input el with id #fruitInput
const suggestions = document.querySelector(".suggestions ul"); //unordered list el within an el with class "sugg"
const ulBlock = document.querySelector("#block"); //el with id#block

document.addEventListener("DOMContentLoaded", () => {
  //when the dom content is loaded
  input.addEventListener("input", () => {
    // event list to input el for input events (user types) (which means the event will be triggered whenever the input field's value changes )

    const text = input.value.toLowerCase(); //get current value of input el and convert it to lowercase

    const filteredFruits = search(text); //Filtered the fruits array based on the input text (search func with 'text' var as its arg)

    suggestions.innerHTML = ""; //clear sugg ->>> by setting innerHTML property  to an empty string

    if (filteredFruits.length === 0) {
      //no filt fru -> hide sugg block
      ulBlock.style.display = "none";
    } else {
      ulBlock.style.display = "block"; //otherwise -> show sugg block
    }

    filteredFruits.forEach((fruit) => {
      //Iterate through each filtered fruit
      const li = document.createElement("li"); //list item el
      const boldElement = document.createElement("b"); //bold el

      boldElement.textContent = text; //Set the text content of the bold element to the input text

      li.innerHTML = fruit.replace(text, "<b>" + text + "</b>"); //replace input text with the input text wrapped in a bold

      suggestions.appendChild(li); // Append the list item to the suggestions list

      li.addEventListener("mouseover", () => {
        // for highlight the list item
        li.style.backgroundColor = "#FAF0E6";
      });
      li.addEventListener("mouseout", () => {
        //remove the highlight from the list item
        li.style.removeProperty("background-color");
      });
    });

    console.log("User is typing ...");
  });
});

const fruits = [
  "Apple🍎",
  "Apricot🍑",
  "Avocado 🥑",
  "Banana🍌",
  "Bilberry🫐",
  "Blackberry🍇",
  "Blackcurrant🫐",
  "Blueberry🫐",
  "Boysenberry🍇",
  "Currant🫐",
  "Cherry🍒",
  "Coconut🥥",
  "Cranberry🍒",
  "Cucumber🥒",
  "Custard apple🍏",
  "Damson🟣",
  "Date🌴",
  "Dragonfruit🐉",
  "Durian🐡",
  "Elderberry🍇",
  "Feijoa🍈",
  "Fig🌰",
  "Gooseberry🍈",
  "Grape🍇",
  "Raisin🌰",
  "Grapefruit🍊",
  "Guava🥭🍉",
  "Honeyberry🍒",
  "Huckleberry🫐",
  "Jabuticaba🫐",
  "Jackfruit🍈",
  "Jambul🌲",
  "Juniper berry🫐",
  "Kiwifruit🥝",
  "Kumquat🍊",
  "Lemon🍋",
  "Lime🍈",
  "Loquat🌳",
  "Longan🫒",
  "Lychee🍑",
  "Mango🥭",
  "Mangosteen🥭",
  "Marionberry🫐",
  "Melon🍈",
  "Cantaloupe🍈",
  "Honeydew🍈🍯",
  "Watermelon🍉",
  "Miracle fruit🌰",
  "Mulberry🍇",
  "Nectarine🍊",
  "Nance🍊",
  "Olive🫒",
  "Orange🍊",
  "Clementine🍊",
  "Mandarine🍊",
  "Tangerine🍊",
  "Papaya🥭",
  "Passionfruit🥭",
  "Peach🍑",
  "Pear🍐",
  "Persimmon🍅",
  "Plantain🍌",
  "Plum🟣",
  "Pineapple🍍",
  "Pomegranate🍅",
  "Pomelo🍈",
  "Quince🍋",
  "Raspberry🍓",
  "Salmonberry🍓",
  "Rambutan🏵",
  "Redcurrant🍒",
  "Salak🌰",
  "Satsuma🍊",
  "Soursop🍈",
  "Star fruit⭐",
  "Strawberry🍓",
  "Tamarillo🍒",
  "Tamarind🥜",
  "Yuzu🍋",
];

function search(str) {
  if (str.length === 0 || str === " ") {
    // Check if input string = empty or consists of only whitespace
    return []; //If so, return an empty array, indicating no matching fruits
  } else {
    const lowerStr = str.toLowerCase(); // Convert the input string to lowercase to perform a case-insensitive search
    const fruitsLowerCase = fruits.map((fruit) => fruit.toLowerCase()); //fruits name in arr = lowerCase()
    const fruitsMatch = fruitsLowerCase.filter(
      (
        fruit // Filter the lowercase fruit names to find those that include the lowercased input string
      ) => fruit.includes(lowerStr)
    );

    return fruitsMatch; // Return fruit names that match the input (str)
  }
}

function searchHandler(e) {
  e.preventDefault(); // Function to handle search input (prevent default behavior)
}

function useSuggestion(e) {
  // Function to use a suggestion when clicked
  input.value = e.target.textContent; // Set the value of the input to the text content of the clicked suggestion

  suggestions.innerHTML = ""; // Clear  suggestions list HTML content

  ulBlock.style.display = "none"; // Hide sugg block
}

suggestions.addEventListener("click", useSuggestion);
