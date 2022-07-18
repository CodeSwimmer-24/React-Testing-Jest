import "core-js/stable";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView.js";
import resultView from "./view/resultView.js";

const controlRecipe = async () => {
  try {
    // 1.)Loading Recipe

    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    // 2.) Rendering Recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(`We could not find this recipe!`);
  }
};

// showRecipe();

const controlSearchResult = async () => {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResult(query);
    console.log(model.state.search.result);

    resultView.render(model.state.search.result);
  } catch (err) {
    console.log(err);
  }
};

const select = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResult);
};
select();
