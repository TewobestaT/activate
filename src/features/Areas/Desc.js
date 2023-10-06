import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "start",
    color: "white",
    padding: "2vw 7vw",
    position: "relative",
  },
}));
const Desc = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Typography>
            Sustainable Agro-industrial Value-network Innovation
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Off-grid Energy Innovation</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Development Policy Innovation</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Desc;
