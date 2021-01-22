import React, { useEffect, useState } from "react";
import allRecipes from "./../data/recipes";
import RecipeCard from "./card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
}));

const App = () => {
  const classes = useStyles();
  const [recipes, setRecipe] = useState(
    localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes"))
      : allRecipes
  );
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(allRecipes));
  }, recipes);
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center" alignContent="center">
        {recipes.map((currentRecipe) => {
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

export default App;
