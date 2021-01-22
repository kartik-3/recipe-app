import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AddIcon from "@material-ui/icons/Add";

import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddRecipe from "./addRecipe";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  foodButton: {
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
  addRecipeText: {
    fontSize: 16,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(false);

  const handleMouseOver = () => {
    setIsShow(true);
  };

  const handleMouseOut = () => {
    setIsShow(false);
  };

  return (
    <>
      <Router>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.foodButton}
                color="inherit"
                aria-label="food-icon"
              >
                <FastfoodIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Recipes
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <IconButton
                edge="end"
                className={classes.addButton}
                color="inherit"
                aria-label="add-icon"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Link to="/addRecipe">
                  {isShow && (
                    <div className={classes.addRecipeText}>Add Recipe</div>
                  )}
                  {!isShow && <AddIcon />}
                </Link>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Switch>
            <Route exact path="/addRecipe">
              <AddRecipe />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default NavBar;
