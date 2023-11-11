import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  text: {
    width: "270px",
    height: "280px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingBottom: "1vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  typo: {
    color: "black",
    fontWeight: "600",
    fontSize: "20px",
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

        <div>
          <Grid container spacing={1} style={{}}>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={{
                display: "flex",
                alignContent: "center",
                paddingLeft: "20vw",
                paddingBottom: "2vw",
                gridGap: "20px",
              }}
            >
              <div className={classes.text}>
                <img
                  style={{
                    width: "15vw",
                    height: "14vw",
                  }}
                  src="/image/image-04.png"
                  className={classes.imageContainer}
                ></img>
                <Typography className={classes.typo}>
                  BRANDING & CREATIVE DESIGN
                </Typography>
              </div>

              <div className={classes.text}>
                <img
                  style={{
                    height: "15vw",
                    width: "15vw",
                  }}
                  src="/image/image-05.png"
                  className={classes.imageContainer}
                ></img>
                <Typography className={classes.typo}>IT SOLUTIONS</Typography>
              </div>

              <div className={classes.text}>
                <img
                  style={{
                    height: "15vw",
                    width: "15vw",
                  }}
                  src="/image/image-06.png"
                  className={classes.imageContainer}
                ></img>
                <Typography className={classes.typo}>
                  ANIMATION & VIDEOS
                </Typography>
              </div>

              <div className={classes.text}>
                <img
                  style={{
                    height: "15vw",
                    width: "15vw",
                  }}
                  src="/image/image-07.png"
                  className={classes.imageContainer}
                ></img>
                <Typography className={classes.typo}>
                  MARKETING & COMMUNICATIONS
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Menu;
