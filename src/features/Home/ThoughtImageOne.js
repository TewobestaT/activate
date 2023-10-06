import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    // display: "grid",
    // placeItems: "start",
    // zIndex: "-1",
  },

  textContainer: {
    position: "absolute",

    placeItems: "start",
    left: "10vw",
    top: "20%",
    background: "#fff",
    padding: "1.5vw",
    borderRadius: "10px",
    background: "rgba(255, 255, 255,255)",
    opacity: "0.85",
    width: "350px",
    height: "300px",

    [theme.breakpoints.down("md")]: {
      top: "20%",

      left: "10vw",
      width: "200px",
      height: "290px",
    },

    [theme.breakpoints.down("xs")]: {
      top: "15%",
      left: "20%",
      width: "230px",
      height: "230px",
    },
  },

  imageContainer: {
    // transition: "0.3s all",
    // height: "500",
    // width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "500px",
    "&:hover": {
      transition: "0.3s all ease-in-out",
      transform: "scale(1.2,1.2) ",
      zIndex: "-1",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "508px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "330px",
    },
  },
  title: {
    fontWeight: "600",
    color: "#63686A",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
      fontWeight: "800",
      paddingBottom: "2vw",
    },
  },
  description: {
    color: "#63686A",
    paddingBottom: "8vw",
    [theme.breakpoints.down("md")]: {
    paddingBottom:"4.5vw",
    },
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      placeItems: "start",
      fontSize: "3vw",
      paddingBottom: "13vw",
    },
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "508px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "330px",
    },
  },
  download:{
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
    top:"1vw"
    },
  }
}));
const ThoughtImageOne = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.imageContainer}>
        <img
          src="image/small_Introcuing_Medical_Office_Practice_in_Ethiopia_a63451b643.PNG"
          alt="Introducing Medical Office"
          objectFit="cover"
          className={classes.image}
        />
      </div>

      <div className={classes.textContainer}>
        <Typography className={classes.title}>
          Introducing Medical Office...
        </Typography>
        <Typography className={classes.description}>
          Why is Medical Office Practice Important? Approches that allow
          different clinical service delivery models that create oppotunity for
          health workers...
        </Typography>
        <div className={classes.download}>
          <Link
            underline="none"
            href=""
            target="_blank"
            rel="noopener"
            download
            style={{  }}
          >
            Download Publication
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThoughtImageOne;
