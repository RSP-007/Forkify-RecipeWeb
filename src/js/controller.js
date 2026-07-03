import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const controlRecipe = async function () {
  //1. Loading recipe
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(id);

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);

    //2. Rendering recipe
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.generateRender(controlRecipe);
};
init();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
