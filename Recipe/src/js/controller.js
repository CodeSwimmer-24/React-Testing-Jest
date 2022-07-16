import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./view/recipeView.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
    console.log(err);
  }
};

// showRecipe();

["hashchange", "load"].forEach((e) =>
  window.addEventListener(e, controlRecipe)
);
// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);
