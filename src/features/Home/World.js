import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "start",
    color: "white",
    backgroundImage: "url(/image/image-02.png)",
    backgroundSize: "cover",
    padding: "15vw 7vw",
    [theme.breakpoints.down("md")]: {
      padding: "60vw 7vw 15vw 7vw",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "90vw 7vw 15vw 7vw",
    },
  },
}));
const World = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ fontWeight: "200" }}>
       INFUSING BRANDS WITH DEEPER STORIES,
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "200" }}>
       PERSONALITIES AND IDENTITES THAT CONNECT
      </Typography>
      <Typography variant="h4" style={{color: "#4998B9", fontWeight: "700"}}>
       WITH THE WORLD.{" "}
      </Typography>
      <br />
     <Grid container
          spacing={3}
          style={{align:"left", flex:"start", gridGap: "20px" }}>
      <Grid item style={{background:"#3A7896"}}>
        <Typography>5+</Typography>
        <Typography style={{fontSize:"13px", fontWeight: "700"}} >Years of Experience</Typography>
      </Grid>
      <Grid item style={{background:"#306682"}}>
        <Typography>60+</Typography>
        <Typography>Happy Clients</Typography>
      </Grid>
      <Grid item style={{background:"#214A66"}}>
        <Typography>200+</Typography>
        <Typography>Successful Projects</Typography>
      </Grid>
     </Grid>
    </div>
  );
};

export default World;
