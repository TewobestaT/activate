import React from "react";
import Menu from "./Menu";
import { makeStyles } from "@material-ui/core/styles";
import Thoughts from "./Thoughts";
import Work from "./Work";
import Power from "./Power";
import Subscribe from "./Subscribe";
import World from "./World";
const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.between("sm", "lg")]: {
    root: {
      display: "center",
     
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu />
       <Thoughts /> 
      <Work />
      <Power />
      <World/>
      <Subscribe />
    </div>
  );
};

export default Home;
