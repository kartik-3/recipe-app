export const RecipeReducer = (state, { type, payload }) => {
    console.log(payload)
    console.log(state)
  switch (type) {
    case "GET_RECIPES":
      return { ...state, recipes: payload };
    case "GET_RECIPE":
      return { ...state, recipeById: payload };
    case "CREATE_RECIPE":
      return { ...state, recipes: [...state.recipes, payload] };
    case "DELETE_RECIPE":
      return { ...state, recipes };
    case "EDIT_RECIPE":
      return { ...state, recipes };
    default:
      return state;
  }
};
