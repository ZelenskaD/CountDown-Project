const button = document.getElementById("addMeme");
button.addEventListener("click", function () {
  const inputElement = document.getElementById("topText");
  console.log("Top Text Value: " + inputElement.value);
  console.log("Len: " + inputElement.value.length);

  const inptBottom = document.getElementById("bottomText");
  console.log("Bottom Text Value:" + inptBottom.value);
  console.log("Len:" + inptBottom.value.length);

  const inptUrl = document.getElementById("image");
  console.log("Image URL:" + inptUrl.value);
  console.log("Len:" + inptUrl.value.length);

  if (
    inputElement.value.length === 0 ||
    inptBottom.value.length === 0 ||
    inptUrl.value.length === 0
  ) {
    alert(" Oops..Empty field! Please fill out every field");
  } else {
    createDivsForMemes(inputElement.value, inptBottom.value, inptUrl.value);
    clearInput();
  }
});

function createDivsForMemes(topTextValue, bottomTextValue, imageUrl) {
  let memeDiv = document.createElement("div");
  memeDiv.className = "meme";
  memeDiv.style.backgroundImage = `url('${imageUrl}')`;
  memeDiv.style.backgroundSize = "100% 100%";
  memeDiv.style.backgroundRepeat = "no-repeat";
  memeDiv.style.backgroundPosition = "center";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "X";
  deleteBtn.setAttribute("aria-label", "Delete meme");
  deleteBtn.style.cssText = `
  position: absolute;
  top: 1px;
  right: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  border: 2px solid black; 
  color: FF8C00;
  background-color: #FFD700;
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

  deleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    memeDiv.remove();
  });

  let topText = document.createElement("div");
  topText.className = "text";
  topText.style.fontFamily = "'Poor Story', system-ui, 'Roboto Slab', serif";

  let tText = document.createElement("h1");
  tText.textContent = topTextValue;

  let filler = document.createElement("div");
  filler.className = "filler";

  let bottomText = document.createElement("div");
  bottomText.className = "text";
  bottomText.style.fontFamily = "'Poor Story', system-ui, 'Roboto Slab', serif";

  let bText = document.createElement("h1");
  bText.textContent = bottomTextValue;

  topText.appendChild(tText);
  bottomText.appendChild(bText);

  memeDiv.appendChild(deleteBtn);
  memeDiv.appendChild(topText);
  memeDiv.appendChild(filler);
  memeDiv.appendChild(bottomText);

  let container = document.getElementById("memeContainer");
  container.appendChild(memeDiv);

  document.body.appendChild(memeDiv);
}

function clearInput() {
  const formInput = document.getElementsByClassName("myForm");
  for (let field of formInput) {
    field.value = "";
  }
}
