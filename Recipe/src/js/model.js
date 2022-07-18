import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJson } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
    page: 1,
    resultPerPage: 20,
  },
};

export const loadRecipe = async (id) => {
  try {
    const data = await getJson(`${API_URL}/${id}`);

    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};

export const loadSearchResult = async (query) => {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}/?search=${query}`);
    // console.log(data);

    state.search.result = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image_url,
        publisher: rec.publisher,
        sourceUrl: rec.source_url,
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPagenation = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.resultPerPage; //0
  const end = page * state.search.resultPerPage; //9
  return state.search.result.slice(start, end);
};

export const updateServings = (newServings) => {
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};
