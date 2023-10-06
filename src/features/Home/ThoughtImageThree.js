import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position:"relative",
    [theme.breakpoints.down("xs")]: {
      //paddingTop: "2%",
    },
  },
  content: {
    // placeItems: "center",
    width: "300px",
    height: "222px",

    // position: "absolute",
    placeItems: "start",
    left: "10vw",
    top: "20%",
    background: "#fff",
    padding: "1.5vw",

    background: "rgba(255, 255, 255,1.6)",
    opacity: "0.85",
    [theme.breakpoints.down("md")]: {
      height: "170px",
      paddingTop: "2%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "160px",
      paddingTop: "2%",
    },
  },
  image: {
    width: "400px",
    height: "222px",
    [theme.breakpoints.down("md")]: {
      height: "170px",
      width: "130px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "160px",
      width: "200px",
    },
  },
  download: {
    paddingTop: "0%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2%",
      fontSize: "2vw",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "4%",
      fontSize: "3vw",
    },
  },
  title: {
    fontWeight: "600",
    color: "#63686A",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7vw",
      fontWeight: "800",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
      fontWeight: "800",
      paddingBottom: "5%",
    },
  },
  description: {
    color: "#63686A",
    paddingBottom: "2vw",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5vw",
      left: "20%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
      left: "20%",
      paddingBottom: "5%",
    },
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.2)",
    width: "340px",
    height: "222px",
    [theme.breakpoints.down("md")]: {
      height: "170px",
      width: "130px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop:"2vw",
      height: "160px",
      width: "155px",
    },
  },
}));
const ThoughtImageThree = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <img
        src="/image/small_People_to_Government_Digital_Payments_in_Ethiopia_d54e6fc6dc.PNG"
        className={classes.image}
      />
      <div className={classes.content}>
        <Typography className={classes.title}>
          Interoperability and Government...
        </Typography>
        <Typography className={classes.description}>
          Policy Environment and Regulatory Issues This study investigated
          the...
        </Typography>

        <div className={classes.download}>
          <Link style={{ fontWeight: "600" }}>Download Publication</Link>
        </div>
      </div>
    </div>
  );
};

export default ThoughtImageThree;
