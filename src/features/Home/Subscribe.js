import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Hidden from "@material-ui/core/Hidden";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import { Button, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    paddingTop: "5px",
    // background:"#d9dadb",
    [theme.breakpoints.down("md")]: {
      padding: "10vw 0",
      // paddingBottom: "10vw",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10vw 0",
      // paddingBottom: "10vw",
    },
  },

  contain: {
    padding: "20px",

    [theme.breakpoints.down("md")]: {
      bottom: "25%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "center",
      placeItems: "start",
    },
  },
  button: {
    left: "2vw",
    color: "white",
    width: "8vw",
    fontWeight: "600",
    background: "#2D4157",
    display: "flex",
    fontSize: "20px",

    [theme.breakpoints.down("md")]: {
      paddingRight: "10vw",
      paddingTop: "8vw",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "25vw",
    },
  },

  card: {
    background: "#e5e8ea",

    [theme.breakpoints.down("md")]: {
      height: "550px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  image: {
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      width: "25vw",
      height: "550px",
    },
  },
  text: {
    color: "#ccc",
    width: "100%",
    top: "3vw",
    left: "2vw",
    paddingRight: "4vw",
    paddingBottom: "3vw",

    [theme.breakpoints.down("xs")]: {
      width: "290px",
    },
  },
  textt: {
    color: "#ccc",
    width: "100%",
    top: "3vw",
    left: "2vw",
    paddingRight: "4vw",
    paddingBottom: "3vw",

    [theme.breakpoints.down("xs")]: {
      width: "290px",
    },
  },
  grid: {
    marginRight: theme.spacing(-7),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(-2),
    },
  },
  category: {
    display: "grid",
    placeItems: "start",
    left: "4vw",
    top: "9vw",
    [theme.breakpoints.down("md")]: {
      top: "3vw",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
}));
const Subscribe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        style={{ fontWeight: "600", fontSize: "50px", color: "#2C4158" }}
      >
        LET'S TALK.
      </Typography>
      <Typography>
        We're a team of creatives who are excited about unique ideas.
      </Typography>
      {/* {/* <div className={classes.content}> */}
      <div className={classes.contain}>
        <Container>
          <Grid container spacing={0} style={{ gridGap: "50px" }}>
            <Grid
              item
              xl={6}
              lg={6}
              md={8}
              sm={8}
              xs={12}
              className={classes.card}
              // style={{paddingRight:"80px"}}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "inline",
                  gridGap: "2px",
                }}
              >
                <TextField
                  className={classes.text}
                  id="margin-none"
                  label="Name"
                  variant="outlined"
                  color="primary"
                  focused
                  style={{ width: "50%" }}
                />
                <br />
                <TextField
                  className={classes.text}
                  id="standard-basic"
                  label="Phone"
                  variant="outlined"
                  color="primary"
                  focused
                  style={{ width: "50%" }}
                />
              </div>

              <br />
              <TextField
                className={classes.text}
                id="standard-basic"
                label="Email"
                variant="outlined"
                color="primary"
                focused
              />
              <br />
              <TextField
                className={classes.textt}
                variant="outlined"
                label="Message"
                id="outlined-multiline-static"
                multiline
                rows={4}
                color="primary"
                focused
              />
              <br />
              <br />
              <Button className={classes.button}>SEND</Button>
              <br />
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={4}
              sm={4}
              xs={12}
              className={classes.grid}
              style={{
                background: "#2D4157",
                paddingTop: "60px",
                paddingLeft: "80px",
                align: "center",
                width: "10%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "inline",
                  width: "300px",
                }}
              >
                <LocationOnIcon
                  style={{
                    paddingTop: "30px",
                    fontSize: "120",
                    color: "#4998B9",
                  }}
                ></LocationOnIcon>
                <div>
                  <Typography
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      color: "white",
                      paddingLeft: "20px",
                    }}
                  >
                    LOCATION
                  </Typography>
                  <Typography style={{ color: "white", paddingLeft: "20px" }}>
                    Around Century Mall, Tesfaye Werku Bldg, 3rd Floor Addia
                    Ababa, Ethiopia
                  </Typography>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "inline" }}>
                <PhoneIphoneIcon
                  style={{
                    paddingTop: "50px",
                    fontSize: "110",
                    color: "#4998B9",
                  }}
                ></PhoneIphoneIcon>
                <div>
                  <Typography
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      color: "white",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    PHONE
                  </Typography>
                  <Typography style={{ color: "white", paddingLeft: "50px" }}>
                    +2519 66 99 7979
                  </Typography>
                  <Typography style={{ color: "white", paddingLeft: "50px" }}>
                    +2519 23 98 11 48
                  </Typography>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "inline",
                  paddingBottom: "4vw",
                }}
              >
                <EmailIcon
                  style={{
                    fontSize: "110",
                    color: "#4998B9",
                    paddingTop: "50px",
                  }}
                ></EmailIcon>
                <div>
                  <Typography
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      color: "white",
                      paddingTop: "50px",
                      paddingLeft: "20px",
                    }}
                  >
                    E-MAIL
                  </Typography>
                  <a
                    style={{ color: "white", paddingLeft: "20px" }}
                    href={"mailto:info@activatetradingplc.com"}
                  >
                    info@activatetradingplc.com
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        {/* {/* </div> */}
      </div>
    </div>
  );
};

export default Subscribe;
