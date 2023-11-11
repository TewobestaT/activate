import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
   //display: "fixed1",
   // placeItems: "start",
    color: "white",
    padding: "30vw 7vw",
    
   


    [theme.breakpoints.down("md")]: {
      padding: "60vw 7vw 15vw 7vw",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "90vw 7vw 15vw 7vw",
    },
  },
  typo:{
    display: "flex",
    flexDirection: "column",
    paddingLeft:"50vw",
   // paddingRight:"2vw",
    alignItems:"center",
    }
}));
const Typo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.typo}>
      <Typography variant="h4" style={{ fontWeight: "700", color: "#4C9DBF", textAlign: "right",
   display: "flex",
    justifyContent: "center",}}>
        EXPERIENCE RESULTS-DRIVEN CORPORATE BRANDING
      </Typography>
     
      <Typography variant="h6">
        Let us do the work for you! We setup and manage your branding,
        Marketing, Event and more! We can help small businesses, enterprise
        companies and You.
      </Typography>
      <br />
      <Button
        variant="contained"
        style={{ backgroundColor: "#4998B9", color: "white", borderRadius:"10px" }}
      >
        Contact Us
      </Button>
      </div>
      
      
    </div>
    
  );
};

export default Typo;
