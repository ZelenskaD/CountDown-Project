// Assuming $navSubmitStory, $navFavorites, $navMyStories, and $navLogin are defined correctly at the top.

// Event listener for submitting stories
$navSubmitStory.on("click", function (evt) {
  console.debug("navSubmitStory", evt);
  hidePageComponents();
  $submitForm.show();
});

// Event listener for showing favorites
$("#nav-fav").on("click", function (evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
});

// Event listener for showing user's own stories
$("#nav-stories").on("click", function (evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
});

// Event listener for toggling login/signup forms
$navLogin.on("click", function (evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.toggle();
  $signupForm.toggle();
});

// Update nav bar on login
function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show(); // Assuming this is a class on your nav bar links
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
