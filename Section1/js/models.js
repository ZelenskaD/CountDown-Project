"use strict";

const BASE_URL = "https://hack-or-snooze-v3.herokuapp.com";

class Story {
  constructor({ storyId, title, author, url, username, createdAt }) {
    this.storyId = storyId;
    this.title = title;
    this.author = author;
    this.url = url;
    this.username = username;
    this.createdAt = createdAt;
  }

  getHostName() {
    return new URL(this.url).hostname;
  }
}

class StoryList {
  constructor(stories) {
    this.stories = stories;
  }

  static async getStories() {
    const response = await axios.get(`${BASE_URL}/stories`);
    const stories = response.data.stories.map((story) => new Story(story));
    return new StoryList(stories);
  }

  async addStory(user, { title, author, url }) {
    const response = await axios.post(`${BASE_URL}/stories`, {
      token: user.loginToken,
      story: { title, author, url },
    });
    const newStory = new Story(response.data.story);
    this.stories.unshift(newStory);
    user.ownStories.unshift(newStory);
    return newStory;
  }
}

class User {
  constructor(
    { username, name, createdAt, favorites = [], ownStories = [] },
    token
  ) {
    this.username = username;
    this.name = name;
    this.createdAt = createdAt;
    this.favorites = favorites.map((s) => new Story(s));
    this.ownStories = ownStories.map((s) => new Story(s));
    this.loginToken = token;
  }

  static async signup(username, password, name) {
    const response = await axios.post(`${BASE_URL}/signup`, {
      user: { username, password, name },
    });
    return new User(response.data.user, response.data.token);
  }

  static async login(username, password) {
    const response = await axios.post(`${BASE_URL}/login`, {
      user: { username, password },
    });
    return new User(response.data.user, response.data.token);
  }

  static async loginViaStoredCredentials(token, username) {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      params: { token },
    });
    return new User(response.data.user, token);
  }

  isFavorite(story) {
    return this.favorites.some((s) => s.storyId === story.storyId);
  }

  async addFavorite(story) {
    this.favorites.push(story);
    await this._addOrRemoveFavorite("add", story);
  }

  async removeFavorite(story) {
    this.favorites = this.favorites.filter((s) => s.storyId !== story.storyId);
    await this._addOrRemoveFavorite("remove", story);
  }

  async _addOrRemoveFavorite(newState, story) {
    const method = newState === "add" ? "POST" : "DELETE";
    await axios({
      url: `${BASE_URL}/users/${this.username}/favorites/${story.storyId}`,
      method: method,
      data: { token: this.loginToken },
    });
  }
}
