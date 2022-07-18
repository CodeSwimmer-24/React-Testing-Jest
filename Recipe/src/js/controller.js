import "core-js/stable";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView.js";
import resultView from "./view/resultView.js";
import paginationView from "./view/paginationView.js";

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

    resultView.render(model.getPagenation());

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = (goToPage) => {
  resultView.render(model.getPagenation(goToPage));

  paginationView.render(model.state.search);
};

const controllerServings = () => {
  // Update the recipe servings (in state)
  model.updateServings(8);
  recipeView.render(model.state.recipe);
};

const select = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandelerUpdateServings(controllerServings);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandleClick(controlPagination);
};
select();
