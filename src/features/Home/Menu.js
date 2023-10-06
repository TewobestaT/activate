import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typo from "./Typo";

const useStyles = makeStyles((theme) => ({
  root: {
   position: "relative",
   display: "grid",
    backgroundImage: "url(/image/image-01.png)",

   backgroundSize: "cover",
    zIndex: "-1",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.1)",
  },
  wrap: {
    position: "relative",
  },
}));
const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.wrap}>
        <div className={classes.link}>
          <div className={classes.links}></div>
        </div>
        <br />
        <div style={{ align: "flex", justifyContent: "right" }}>
          <Typo />

          
        </div>
      </div>
    </div>
  );
};

export default Menu;
