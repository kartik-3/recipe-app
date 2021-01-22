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
import NavBar from "./navBar";
import ShowAllRecipes from "./showAllRecipes";
import AddRecipe from "./addRecipe";
import EditRecipe from "./editRecipe";
import { RecipeState } from "./context/recipeState";
import context from "./context";

const Routing = () => {
  const [state, setState] = useState(null);
  return (
    <>
      <RecipeState>
        {/* <context.Provider value={{ state, setState }}> */}
        <Router>
          <NavBar />
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>
                <Link to="/edit">Edit</Link>
              </li>
            </ul>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={ShowAllRecipes}>
              {/* <ShowAllRecipes /> */}
            </Route>
            <Route exact path="/add" component={AddRecipe}>
              {/* <AddRecipe /> */}
            </Route>
            <Route exact path="/edit">
              <EditRecipe />
            </Route>
          </Switch>
        </Router>
        {/* </context.Provider> */}
      </RecipeState>
    </>
  );
};

export default Routing;
