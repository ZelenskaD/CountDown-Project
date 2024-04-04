"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, isMyStoryPage = false) {
  console.debug("generateStoryMarkup", story);

  let favStory;
  const hostName = story.getHostName();

  if (!currentUser) {
    favStory = false;
  } else {
    favStory = currentUser.isStoryInFavorites(story.storyId);
  }

  const starType = favStory ? "fas" : "far";
  const isStarHidden = !currentUser;

  console.log(isStarHidden);

  return $(`
      <li class ="story-item" id="${story.storyId}">
        ${
          isMyStoryPage
            ? `<span class="delete"><i class="fas fa-ban icon-hover"></i></span>`
            : ""
        }
        <span class="star" style="display:${isStarHidden ? "none" : "inline"};">
          <i class="${starType} fa-star"></i>
        </span>
        <div class="story-details">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        <div>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

function putMyFavoriteStoriesOnPage() {
  console.debug("putMyFavoriteStotiesOnPage");
  $favoriteStoriesList.empty();

  const favStories = currentUser.favorites;

  if (!favStories || favStories.length === 0) {
    $favoriteStoriesList.append("<h5>No favorites added!</h5>");
  } else {
    for (let story of favStories) {
      const $story = generateStoryMarkup(story);
      $favoriteStoriesList.append($story);
    }
  }

  $favoriteStoriesList.show();
}

function putMyStoriesOnPage() {
  console.debug("putMyStoriesOnPage");

  $myStoriesList.empty();

  const myStories = currentUser.ownStories;

  console.debug(myStories);

  if (!myStories || myStories.length === 0) {
    $myStoriesList.append("<h5>No stories added by user yet!</h5>");
  } else {
    for (let story of myStories) {
      const $story = generateStoryMarkup(story, true);
      $myStoriesList.append($story);
    }
  }

  $myStoriesList.show();
}

async function CreateNewStory(evt) {
  console.debug("CreateNewStory");
  evt.preventDefault();

  // get form inputs
  const title = $("#create-title").val();
  const url = $("#create-url").val();
  const author = $("#create-author").val();

  // get username from current user
  const username = currentUser.username;
  // create story data object
  const storyData = { title, url, author, username };

  // Call API to create new story
  const story = await storyList.addStory(currentUser, storyData);

  // Create HTML element for the story
  const $story = generateStoryMarkup(story);

  // add the story to the start of the story list html object <ol><li>....</ol>
  $allStoriesList.prepend($story);

  // hide the form and reset it
  $submitForm.slideUp("slow");
  $submitForm.trigger("reset");
}

$submitForm.on("submit", CreateNewStory);

async function setStoryAsFavorite(evt) {
  console.debug("setStoryAsFavorite", evt);
  const star = evt.currentTarget.children[0];
  const classList = star.classList;

  const storyId = evt.currentTarget.parentNode.id;
  const story = storyList.getStoryById(storyId);

  if (classList.contains("far")) {
    // "far" is the class when the story is not favorited
    classList.replace("far", "fas");
    await currentUser.addStoryToFavorites(story);
  } else {
    classList.replace("fas", "far");
    await currentUser.removeStoryFromFavoritesById(storyId);
  }

  star.classList = classList;
}

$allStoriesList.on("click", ".star", setStoryAsFavorite);
$favoriteStoriesList.on("click", ".star", setStoryAsFavorite);

async function deleteFromMyStories(evt) {
  console.debug("deleteFromMyStories", evt);
  const storyId = evt.currentTarget.parentNode.id;

  await storyList.deleteStory(currentUser, storyId);

  putMyStoriesOnPage();
}

$myStoriesList.on("click", ".delete", deleteFromMyStories);
