import React from "react";
import Grid from "@material-ui/core/Grid";
import { image } from "../../data/Area";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Desc from "./Desc";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    objectFit: "scale-down",
    paddingTop: "6vw",
    // background:"{image.map((item,index)=>(url({item.img} )))}"
  },
  overlay: {
    position: "absolute",
    //inset: 0,
    background: "rgba(0,0,0,0.4)",
    height: "111vh",
    width: "100%",
    paddingTop: "0vw",
  },
  description: {
    position: "absolute",
    left: "0vw",
    top: "0%",
    color: "white",
    paddingTop: "25%",
    fontSize: "1.5vw",
    fontWeight: "200",
    marginLeft: theme.spacing(40),
   
  },
  descMargin: {
    // paddingBottom: "0vw",
    //position:"absolute",
  },
  icon: {
    width: "3vw",
    height: "3vw",
    //paddingLeft: "4vw",
  },
  grid: {
    display: "grid",
    placeItems: "start",
  },
  container: {
    position: "absolute",
  },
}));

const Container = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <Grid container spacing={0}>
        {image.map((item, index) => (
          <Grid item xs={4} md={4} key={index} >
            <img src={item.img} width="100%" height="800vh" style={{}} />
            <div className={classes.description}>
              <Typography className={classes.descMargin}>
                {item.desc}
              </Typography>
              <AddIcon className={classes.icon} />
            </div>
          </Grid>
        ))}
      </Grid>
 
    </div>
  );
};

export default Container;
