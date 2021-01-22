import React, { useReducer } from "react";
import { RecipeContext } from "./recipeContext.js";
import { RecipeReducer } from "./recipeReducer.js";
import allRecipes from "./../../data/recipes";

export const RecipeState = ({ children }) => {
  const [state, dispatch] = useReducer(RecipeReducer, {
    recipes: [],
    recipeById: {},
  });

  const getRecipes = () => {
    dispatch({
      type: "GET_RECIPES",
      payload: localStorage.getItem("recipes")
        ? JSON.parse(localStorage.getItem("recipes"))
        : allRecipes,
    });
  };

  const createRecipe = (data) => {
    const oldData = JSON.parse(localStorage.getItem("recipes"));
    //   ? JSON.parse(localStorage.getItem("recipes"))
    //   : allRecipes;
    // console.log(typeof oldData);
    // console.log(oldData);
    oldData.push(data);
    // console.log(oldData);
    localStorage.setItem("recipes", oldData);
    dispatch({
      type: "CREATE_RECIPE",
      payload: data,
    });
  };

  return (
    <RecipeContext.Provider value={{ getRecipes, createRecipe, ...state }}>
      {children}
    </RecipeContext.Provider>
  );
};
