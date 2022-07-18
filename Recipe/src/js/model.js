import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJson } from "./helpers";
export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
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
