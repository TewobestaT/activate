import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    //justifyContent: "flex-end",
    // paddingTop: 22,
    // background: "blue",
    // display: "flex",
    // justifyContent: "flex-end",
    
  },
  icon: {
    marginRight: theme.spacing(2),
    width: "1.2vw",
    height: "1.2vw",
    cursor: "pointer",
    // color: theme.palette.primary.main,
    "&:last-child": {
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.down("md")]: {
 
      width: "2.5vw",
      height: "2.5vw",
    },
  
    [theme.breakpoints.down("xs")]: {
      width: "5vw",
      height: "5vw",
    },
  },
}));
const Icons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <TwitterIcon className={classes.icon} /> */}
      {/* <LinkedInIcon className={classes.icon} /> */}
      {/* <MailOutlineIcon className={classes.icon} /> */}
      {/* <YouTubeIcon className={classes.icon} /> */}
    </div>
  );
};

export default Icons;
