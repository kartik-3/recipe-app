import React, { useContext, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { RecipeContext } from "./context/recipeContext.js";

import "./../css/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(45),
    marginRight: theme.spacing(45),
    display: "flex",
    flexWrap: "wrap",
  },
  btn: {
    marginTop: 10,
  },
}));

const AddRecipe = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();
  const [value, setValue] = useState("Controlled");
  const { recipes, createRecipe } = useContext(RecipeContext);
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeSteps, setRecipeSteps] = useState("");
  const [recipeImage, setRecipeImage] = useState("");

  const onSubmit = () => {
    const data = {
      name: recipeName,
      ingredients: recipeIngredients,
      steps: recipeSteps,
      imageURL: recipeImage,
    };
    console.log(data);
    createRecipe(data);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onRecipeNameChange = (e) => {
    console.log(e.target.value);
    setRecipeName(e.target.value);
  };

  const onRecipeIngredientsChange = (e) => {
    console.log(e.target.value);
    setRecipeIngredients(e.target.value);
  };

  const onRecipeStepsChange = (e) => {
    console.log(e.target.value);
    setRecipeSteps(e.target.value);
  };

  const onRecipeImageChange = (e) => {
    console.log(e.target.value);
    setRecipeImage(e.target.value);
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <TextField
              required
              name="recipe-name"
              id="recipe-name"
              label="Name"
              placeholder="Recipe name"
              fullWidth
              margin="dense"
              className={classes.textfield}
              onChange={onRecipeNameChange}
            />
            <TextField
              name="recipe-ingredients"
              id="recipe-ingredients"
              label="Ingredients"
              placeholder="Recipe ingredients"
              required
              multiline
              fullWidth
              margin="dense"
              className={classes.textfield}
              onChange={onRecipeIngredientsChange}
              // value={value}
              // onChange={handleChange}
              variant="outlined"
            />
            <TextField
              name="recipe-steps"
              id="recipe-steps"
              label="Steps"
              placeholder="Recipe steps"
              required
              multiline
              margin="dense"
              fullWidth
              className={classes.textfield}
              onChange={onRecipeStepsChange}
              // value={value}
              // onChange={handleChange}
              variant="outlined"
            />
            <TextField
              name="recipe-image"
              id="recipe-image"
              fullWidth
              label="Image URL"
              placeholder="Recipe image URL"
              onChange={onRecipeImageChange}
              className={classes.textfield}
            />
            <Button
              name="add-recipe-btn"
              id="add-recipe-btn"
              variant="contained"
              color="primary"
              type="submit"
              className={classes.btn}
              onClick={handleSubmit(onSubmit)}
              fullWidth
            >
              Add recipe
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
