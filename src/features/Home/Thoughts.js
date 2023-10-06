import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ThoughtImageOne from "./ThoughtImageOne";
import ThoughtImageTwo from "./ThoughtImageTwo";
import ThoughtImageThree from "./ThoughtImageThree";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    width: "auto",
    background: "#F5F5F5",

    [theme.breakpoints.down("sm")]: {
      padding: "0 7vw",
    },
  },
  title: {
    fontWeight: "600",
    color: "#63686A",
    fontSize: "2vw",
    [theme.breakpoints.down("md")]: {
      fontWeight: "600",
      fontSize: "3vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: "800",
      fontSize: "5vw",
    },
  },
  subtitle: {
    color: "#63686A",
    paddingBottom: "1vw",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "3vw",
    },
  },
  imgtwo: {
    paddingBottom: "2vw",

    [theme.breakpoints.down("md")]: {
      paddingBottom: "2vw",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "1.5vw",
    },
  },
  view: {
    fontSize: "2vw",
    paddingBottom: "7.8vw",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5vw",
      fontWeight: "600",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
      fontWeight: "600",
    },
  },
  imgone: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(-5),
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(-4),
    },
  },
}));
const Thoughts = () => {
  const classes = useStyles();
  return (
    <div>
      <br />

      <Container className={classes.root}>
        <Grid container spacing={4} style={{}}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <div className={classes.imgone}>
              <div style={{ display: "flex", alignItems: "inline" }}>
                <div
                  style={{
                    background: "#4998B9",
                    width: "200px",
                    height: "200px",
                  }}
                ></div>
                <div
                  style={{
                    background: "#4998B9",
                    width: "150px",
                    height: "150px",
                    marginLeft: "20px",
                    marginTop: "50px",
                  }}
                ></div>
              </div>
              <div style={{ display: "flex", alignItems: "inline" }}>
                <div
                  style={{
                    background: "#4998B9",
                    width: "150px",
                    height: "150px",
                    marginLeft: "50px",
                    marginTop: "20px",
                  }}
                ></div>
                <div
                  style={{
                    background: "#4998B9",
                    width: "200px",
                    height: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                ></div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            style={{ align: "left", flex: "start" }}
          >
            <div className={classes.imgtwo}>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Freestyle Script",
                  fontSize: "60px",
                  color: "#30b8c7",
                }}
              >
                Welcome to-------------
              </Typography>
              <Typography
                style={{
                  textAlign: "left",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#0A1025",
                }}
              >
                ACTIVATE TRADING PLC
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                Activate Trading PLC is a company specializing in Company
                Promotion, IT Solutions and Event management. Its flagship brand
                is elite art, a creative studio which was aimed of providing
                advertising and branding services to companies.
              </Typography>
              <br />

              <Typography
                style={{
                  textAlign: "left",
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#30b8c7",
                }}
              >
                WHO WE ARE
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                The Founding members of Activate Trading PLC are professionals
                well experienced in Marketing, communications, and information
                Technology, having occupied positions in the field for several
                years. Activate Trading aims to provide best-in-class marketing,
                public relations, communications, counsel, and services to its
                clients.
              </Typography>
            </div>
            <div style={{ paddingBottom: "7.8vw" }}></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Thoughts;
