const input = document.querySelector("#fruitInput");
const suggestions = document.querySelector(".suggestions ul");
const ulBlock = document.querySelector("#block");

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("input", () => {
    const text = input.value.toLowerCase();

    const filteredFruits = search(text);

    suggestions.innerHTML = "";

    if (filteredFruits.length === 0) {
      ulBlock.style.display = "none";
    } else {
      ulBlock.style.display = "block";
    }

    filteredFruits.forEach((fruit) => {
      const li = document.createElement("li");
      const boldElement = document.createElement("b");

      boldElement.textContent = text;

      li.innerHTML = fruit.replace(text, "<b>" + text + "</b>");

      suggestions.appendChild(li);
      li.addEventListener("mouseover", () => {
        li.style.backgroundColor = "#FAF0E6";
      });
      li.addEventListener("mouseout", () => {
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
    return [];
  } else {
    const lowerStr = str.toLowerCase();
    const fruitsLowerCase = fruits.map((fruit) => fruit.toLowerCase());
    const fruitsMatch = fruitsLowerCase.filter((fruit) =>
      fruit.includes(lowerStr)
    );

    return fruitsMatch;
  }
}

function searchHandler(e) {
  e.preventDefault();
}

function useSuggestion(e) {
  input.value = e.target.textContent;
  suggestions.innerHTML = "";
  ulBlock.style.display = "none";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
