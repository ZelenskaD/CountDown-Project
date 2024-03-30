console.log("Let's get this party started!");

const gifContainer = document.querySelector("#gifContainer");
const input = document.querySelector("#search");

function addGif(res) {
  const numResults = res.data.length;
  if (numResults > 0) {
    const rdmIdx = Math.floor(Math.random() * numResults);

    const newCol = document.createElement("div");
    newCol.classList.add("col-md-4", "col-12", "mb-4");

    const newGif = document.createElement("img");
    newGif.src = res.data[rdmIdx].images.original.url;
    newGif.classList.add("w-100");

    newCol.appendChild(newGif);

    gifContainer.appendChild(newCol);
  }
}

document.querySelector("form").addEventListener("submit", async function (evt) {
  evt.preventDefault();

  const searchTerm = input.value.trim(); //remove whitespaces!!
  if (input.value.length === 0) {
    alert("OOPS! YOU FORGOT TO WRITE YOUR SEARCH ITEM!");
    return;
  }
  input.value = "";

  try {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
      },
    });
    addGif(response.data);
  } catch (error) {
    console.error("There has been a problem with your GET operation:", error);
  }
});

document.querySelector("#remove").addEventListener("click", function () {
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});
