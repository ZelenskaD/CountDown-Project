document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addMeme").addEventListener("click", function () {
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const imageURL = document.getElementById("imageLink").value;
    const imageDisplayArea = document.getElementById("imageDisplay");

    imageDisplayArea.innerHTML = ""; //clear old img

    const img = new Image();
    img.src = imageURL;
    img.alt = "User provided image";
    img.width = 500;
    img.onload = function () {
      imageDisplayArea.appendChild(img); // Add new img
    };

    const overlayContainer = document.createElement("div");
    overlayContainer.style.position = "absolute";
    overlayContainer.style.top = "0";
    overlayContainer.style.left = "0";
    overlayContainer.style.width = "500px";
    overlayContainer.style.height = img.height + "px";
    imageDisplayArea.style.position = "relative";
    imageDisplayArea.appendChild(overlayContainer);

    if (topText) {
      const topTextDiv = document.createElement("div");
      topTextDiv.textContent = topText;
      topTextDiv.style.position = "absolute";
      topTextDiv.style.top = "10px";
      topTextDiv.style.width = "100%";
      topTextDiv.style.textAlign = "center";
      topTextDiv.style.color = "white";
      topTextDiv.style.fontWeight = "bold";
      topTextDiv.style.fontSize = "2em";
      imageDisplayArea.appendChild(topTextDiv);
    }

    if (bottomText) {
      const bottomTextDiv = document.createElement("div");
      bottomTextDiv.textContent = bottomText;
      bottomTextDiv.style.position = "absolute";
      bottomTextDiv.style.bottom = "0";
      bottomTextDiv.style.left = "0";
      bottomTextDiv.style.width = "100%";
      bottomTextDiv.style.textAlign = "center";
      bottomTextDiv.style.color = "white";
      bottomTextDiv.style.fontWeight = "bold";
      bottomTextDiv.style.fontSize = "2em";
      imageDisplayArea.appendChild(bottomTextDiv);
    }
  });
});
