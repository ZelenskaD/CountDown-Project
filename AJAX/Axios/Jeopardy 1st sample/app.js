const startGame = document.getElementById("start");
const restartGame = document.getElementById("restart");
const tableSet = document.getElementById("board");

document.addEventListener("DOMContentLoaded", (event) => {
  if (startGame) {
    startGame.addEventListener("click", function () {
      console.log("Game started!");
      tableSet.style.display = "table";
    });
  }

  if (restartGame) {
    restartGame.addEventListener("click", function () {
      console.log("Game restarted!");
    });
  }
});

let categories = [];
async function getCategory() {
  const res = await axios.get(
    "https://rithm-jeopardy.herokuapp.com/api/categories?count=100"
  );
  const resShuff = shuffle(res.data);
  console.log(resShuff);
  return resShuff.slice(0, 6);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
