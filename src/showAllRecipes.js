import React, { useEffect, useState, useContext } from "react";
import RecipeCard from "./card";
import { RecipeContext } from "./context/recipeContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
}));

const ShowAllRecipes = () => {
  const classes = useStyles();
  const [recipeList, setRecipeList] = useState([]);
  const { recipes, getRecipes } = useContext(RecipeContext);

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    setRecipeList(recipes);
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center" alignContent="center">
        {recipeList.map((currentRecipe) => {
          return (
            <>
              <Grid item xs={3}>
                <RecipeCard recipe={currentRecipe}></RecipeCard>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

// const showWrapper = () => {
//   return ()
// }

export default ShowAllRecipes;
