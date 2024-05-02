"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

function navLogoutClick(evt) {
  console.debug("navLogoutClick", evt)
  putStoriesOnPage();
}
$navLogOut.on("click", navLogoutClick);

/** Show submit form on click submit */
function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  hidePageComponents();
  putStoriesOnPage();
  $submitForm.show();
}

$navSubmit.on("click", navSubmitClick);

function navMyStoriesClick(evt) {
  console.debug("navMyStoriesClick", evt)
  hidePageComponents();
  putMyStoriesOnPage()
}

$navMyStories.on("click", navMyStoriesClick)

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function navUserProfile() {
  console.debug("navUserProfile");
  hidePageComponents();
  $("#profile-name").text(currentUser.name);
  $("#profile-username").text(currentUser.username);
  $("#profile-account-date").text(currentUser.createdAt.split('T')[0]);
  $userProfile.show();
}

$navUserProfile.on("click", navUserProfile);

function navFavoriteStoriesClick() {
  console.debug("navFavoriteStories")
  hidePageComponents();
  putMyFavoriteStoriesOnPage()
}

$navFavoriteStories.on("click", navFavoriteStoriesClick)

// function updateNavOnLogout()
