import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { image } from "../../data/work";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    boxShadow: "rgba(0,0,0,1)",
    background: "#16283B",

    [theme.breakpoints.down("xs")]: { paddingBottom: "12vw" },
  },

  imageContainer: {
    position: "relative",
    height: "10vw",
    width: "100%",
    objectFit: "scale-down",
    transition: "0.3s all ease-in-out",
    //border: "0.1px #f7f2f2 solid",
    padding: "1vw",

    "&:hover": {
      boxShadow: "1px 8px 2px 1px rgba(0, 0, 0, .2);",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25vw",
    },
  },
  container: {
    //padding: "80px",
    display: "center",
    padding: "1.2vw 2vw",
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      display: "center",
      paddingRight: "7vw",
    },
  },
  title: {
    fontWeight: "600",
    fontSize: "3vw",
    color: "#63686A",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2vw",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "6vw",
    },
  },
}));
// const image = [
//   {
//     img: "/image/image.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image1.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image2.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image.jfif",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image1.jfif",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image3.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image4.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image5.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image6.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image2.jfif",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image7.png",
//     alt: "ABC Logo",
//   },
//   {
//     img: "/image/image8.png",
//     alt: "ABC Logo",
//   },
//   { img: "/image/image9.png", alt: "ABC Logo" },
// ];
const Work = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        style={{
          fontFamily: "Freestyle Script",
          fontSize: "60px",
          color: "#4691B1",
        }}
      >
        We see
      </Typography>
      <Typography
        style={{ fontWeight: "bold", color: "white", fontSize: "50px" }}
      >
        WHAT OTHER DON'T SEE.
      </Typography>
      <br />
      <Container className={classes.container}>
        <Grid
          container
          spacing={1}
          justify="center"
          style={{ alignItems: "center", paddingLeft: "6vw" , gridGap:"50px"}}
        >
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "2px solid #4A99BB",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography style={{ color: "white", fontWeight: "500" }}>
              PLANNING
            </Typography>
          </div>

          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "2px solid #4A99BB",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/image/image-09.png"
              className={classes.imageContainer}
            ></img>
            <Typography style={{ color: "white", fontWeight: "500" }}>
              MOCKUP
            </Typography>
          </div>
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "2px solid #4A99BB",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/image/image-10.png"
              className={classes.imageContainer}
            ></img>
            <Typography style={{ color: "white", fontWeight: "500" }}>
              DEVELOP
            </Typography>
          </div>
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "2px solid #4A99BB",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/image/image-11.png"
              className={classes.imageContainer}
            ></img>
            <Typography style={{ color: "white", fontWeight: "500" }}>
              PROVIDE
            </Typography>
          </div>

          {/* <Grid item xs={12} style={{ display: "center" }}>
            <img
              src="/image/image9.png"
              width="300"
              height="100"
              style={{ border: "0.1px #f6f7f6 solid" }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Work;
