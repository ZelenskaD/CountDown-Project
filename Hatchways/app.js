document.getElementById("addMemeBtn").addEventListener("click", function () {
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const imageURL = document.getElementById("imageSpace").value;

  const memeContainer = document.getElementById("memeContainer");
  memeContainer.innerHTML = "";
  const img = new Image();
  img.src = imageURL;
  memeContainer.appendChild(img);

  const topTextDiv = document.createElement("div");
  topTextDiv.textContent = topText;
  topTextDiv.className = "text";
  topTextDiv.id = "topTextDiv";
  memeContainer.appendChild(topTextDiv);

  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.textContent = bottomText;
  bottomTextDiv.className = "text";
  bottomTextDiv.id = "bottomTextDiv";
  memeContainer.appendChild(bottomTextDiv);
});
