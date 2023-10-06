import React from "react";
import Container from "./Container";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));
const Area = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Area;
