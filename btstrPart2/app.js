$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Function to open the modal
function openModal() {
  $("#exampleModal").modal("show");
}

// Function to close the modal
function closeModal() {
  $("#exampleModal").modal("hide");
}

// Add event listener to open the modal
const openModalBtn = document.getElementById("openModalBtn");
openModalBtn.addEventListener("click", openModal);

// Add event listener to close the modal when the close button is clicked
const closeModalBtn = document.querySelector(".btn-close");
closeModalBtn.addEventListener("click", closeModal);
