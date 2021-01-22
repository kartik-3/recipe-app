import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

const EditRecipe = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();
  const [value, setValue] = React.useState("Controlled");
  const onSubmit = (data) => {
    alert(data);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <TextField
              required
              id="recipe-name"
              label="Name"
              placeholder="Recipe name"
              fullWidth
              margin="dense"
              className={classes.textfield}
            />
            <TextField
              id="recipe-ingredients"
              label="Ingredients"
              placeholder="Recipe ingredients"
              required
              multiline
              fullWidth
              margin="dense"
              className={classes.textfield}
              // value={value}
              // onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="recipe-steps"
              label="Steps"
              placeholder="Recipe steps"
              required
              multiline
              margin="dense"
              fullWidth
              className={classes.textfield}
              // value={value}
              // onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="recipe-image"
              fullWidth
              label="Image URL"
              placeholder="Recipe image URL"
              className={classes.textfield}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
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

export default EditRecipe;
