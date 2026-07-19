import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Enable Hot Module Replacement (Parcel)
if (module.hot) {
  module.hot.accept();
}

// Load and render the selected recipe
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // Update search results and bookmarks selection
    resultsView.update(model.getSearcResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // Load recipe data
    await model.loadRecipe(id);

    // Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

// Load and render search results
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    // Render first page of results
    resultsView.render(model.getSearcResultsPage());

    // Render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

// Handle pagination button clicks
const controlPagination = function (goToPage) {
  resultsView.render(model.getSearcResultsPage(goToPage));
  paginationView.render(model.state.search);
};

// Update recipe servings
const controlServings = function (newServing) {
  model.updateServings(newServing);

  // Update only the changed DOM elements
  recipeView.update(model.state.recipe);
};

// Add or remove bookmark
const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookMark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }

  // Update bookmark button
  recipeView.update(model.state.recipe);

  // Render bookmarks list
  bookmarksView.render(model.state.bookmarks);
};

// Render bookmarks from localStorage on page load
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

// Upload a new recipe
const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    // Render uploaded recipe
    recipeView.render(model.state.recipe);

    // Render updated bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Update URL without reloading the page
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Show success message
    addRecipeView.renderMessage();

    // Close modal after a short delay
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

// Initialize application
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.generateRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
