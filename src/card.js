import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditRecipe from "./editRecipe";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  title: {
    fontSize: "30px",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Router>
        <Card className={classes.root}>
          <CardHeader title={props.recipe.name} />
          <CardMedia
            className={classes.media}
            image={props.recipe.imageURL}
            title={props.recipe.name}
          />
          <CardContent>
            <Typography paragraph align="left">
              Ingredients:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="left"
            >
              {props.recipe.ingredients}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="edit recipe">
              <Link to="/edit">
                <EditIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="delete recipe">
              <DeleteIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph align="left">
                Steps:
              </Typography>
              <Typography paragraph align="left">
                {props.recipe.steps}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Switch>
          <Route exact path="/edit">
            <EditRecipe />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
