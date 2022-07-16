import { async } from "regenerator-runtime";

export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Something is wrong ${data.message} (${response.status})`);
  }
  console.log(data);

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
};
