import React from "react";
import Precise from "../../components/Precise";
import { makeStyles } from "@material-ui/core/styles";

import FormLabel from "@material-ui/core/FormLabel";

import Icons from "../../components/Icons";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    //height: "100vh",
    background: "#203549",
    postion: "relative",

    justifyContent: "center",
    padding: "5vw 6vw 0vw 6vw",
    [theme.breakpoints.down("md")]: {
padding:"0vw 6vw"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20vw",
    },
    //flexGrow: 2,

    // flexBasis: "50%",
  },
  roo: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "center",
    },
    
  },
  header: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "center",
    },
    
  },
  footer: {
    display: "center",
    paddingTop: 100,
    [theme.breakpoints.down("md")]: {
     paddingTop:20
    },

    //  cursor: "pointer",
  },
  logo: {
    color: "red",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "30vw",
      paddingTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
     paddingLeft:"6vw"
    },
  },

  home: {
    display: "grid",
    placeItems: "flex-start",
    marginBottom: theme.spacing(-5),
    //padding: "0 10vw",
    [theme.breakpoints.down("md")]: {
      paddingTop: "5vw",
      marginBottom: theme.spacing(5),
    },
   
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15vw",
    },
  },
  home2: {
    display: "grid",
    placeItems: "flex-start",
    marginBottom: theme.spacing(-5),
    [theme.breakpoints.down("md")]: {
      paddingTop: "5vw",
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15vw",
    },
    
    // placeItems: "start",
    //display:"block",
    // marginRight: theme.spacing(5),
    //padding: "0 10vw",
  },
  contact: {
    display: "grid",
    placeItems: "flex-start",
    marginBottom: theme.spacing(-5),
    [theme.breakpoints.down("md")]: {
      paddingTop: "5vw",
      display: "center",
      marginBottom: theme.spacing(5),
    },
  
    [theme.breakpoints.down("xs")]: {
      paddingTop: "3vw",
      fontSize: "0.5vw",
      width: "50%",
    },
  },
  head: {
    marginRight: theme.spacing(1),
  },
  foot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("md")]: {
    paddingBottom:"2%"
    
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop:"1%"
      
      },
  },
  foo: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      fontSize: "2vw",
    
    },
   
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      fontSize: "3vw",
    },
  },
  // icon: {
  //   [theme.breakpoints.down("md")]: {
  //     width: "0.1vw",
  //     height: "0.5vw",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "0.1vw",
  //     height: "0.1vw",
  //     bottom: 0,
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     width: "0.5vw",
  //     height: "0.5vw",
  //   },
  // },
  email: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "2vw",
      display: "center",
    },
 
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10vw",
      display: "center",
    },
  },
  mad: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      fontSize: "2vw",
     
    },
  
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      fontSize: "2vw",
    },
  },

}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
  
      <div style={{display:"center"}}>
        <Typography style={{fontFamily:"Freestyle Script", color:"#4182A0", fontSize:"40px"}}>Our Esteemed</Typography>
        <Typography style={{fontWeight:"800", fontSize:"50px", color:"white"}}>CLIENTS</Typography>
      </div>
    
    </Container>
  );
};

export default Footer;
