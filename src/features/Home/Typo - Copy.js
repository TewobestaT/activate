import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "start",
    color: "white",
    padding: "15vw 7vw",
    [theme.breakpoints.down("md")]: {
      padding: "60vw 7vw 15vw 7vw",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "90vw 7vw 15vw 7vw",
    },
  },
}));
const Typo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: "700" }}>
        Where Policy Matters
      </Typography>
      <Typography variant="h6">
        We work with you to tailor solutions promoting good governance{" "}
      </Typography>
      <br />
      <Button variant="contained" color="secondary">
        Contact Us
      </Button>
    </div>
  );
};

export default Typo;
