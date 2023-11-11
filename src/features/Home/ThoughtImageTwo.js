import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "grid",
    placeItems: "start",
    overflow:"hidden",
    width:"100%",
    // [theme.breakpoints.down("sm")]: {
    // paddingTop:"2vw"
    // },
  
  },
  content: {
    position: "absolute",
    placeItems: "start",
    top: "15%",
    right: "2vw",
    width: "20vw",
    height: "70%",

    background: "#fff",
    padding: "1.5vw",
    borderRadius: "10px",
    background: "rgba(255, 255, 255)",
    opacity: "0.85",
    zIndex: "3",
    [theme.breakpoints.down("md")]: {
      width: "30vw",
      height: "65%",
      top: "15%",

      left: "8vw",
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "300px",
    //   height: "300px",
    //   top: "20%",

    // },
    [theme.breakpoints.down("xs")]: {
      top: "10%",
      left: "25%",
      width: "250px",
      height: "180px",
    },
  },
  con: {
    position: "absolute",
    top: "80%",
    paddingLeft: "1vw",
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "2vw",
      paddingLeft: "5vw",
    },
  },
  image: {
    width: "100%",
    height: "250px",
    
    "&:hover": {
      transition: "0.3s all ease-in-out",
      transform: "scale(1.2,1.2) ",
      zIndex: "-1",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "325px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "230px",
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    //   height: "250px",
    // },
  },
  title: {
    fontWeight: "600",
    color: "#63686A",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
      fontWeight: "800",
      paddingBottom: "8%",
    },
  },
  description: {
    color: "#63686A",
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      placeItems: "start",
    },
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "250px",
    
    "&:hover": {
      transition: "0.3s all ease-in-out",
      transform: "scale(1.2,1.2) ",
      zIndex: "-1",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "325px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "230px",
    }, 
  }
}));
const ThoughtImageTwo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <img
        src="image/small_Ethiopia_J_Ob_Creation_Through_Off_Grid_Energy_Access_04fa8ff9c9.jpg"
        objectFit="cover"
        className={classes.image}
      />
      <div className={classes.content}>
        <Typography className={classes.title}>
          Job Creation Through Off...
        </Typography>
        <Typography variant="subtitle" className={classes.description}>
          This report includes recommmendations that can play a key role in
          scaling the Productive Use...
        </Typography>
        <div className={classes.con}>
          <Link style={{}}>Download Publication</Link>
        </div>
      </div>
    </div>
  );
};

export default ThoughtImageTwo;
