import React from "react";
import Link from "@material-ui/core/Link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icons from "../../components/Icons";
import { makeStyles } from "@material-ui/core/styles";
import Precise from "../../components/Precise";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    position: "fixed",

    
    background: "white",
    zIndex: 1500,
    // padding: "0 6vw",
    // paddingBottom: "1vw",
  },
  logo: {
    flexGrow: 1,
    color:"#BF0000"
    
  },
  link: {
    display: "flex",
    color:"#A6A6A6"
  },
  icon: {
    marginRight: theme.spacing(4),
    color:"#BF0000"
  },
  icons: {
    display: "flex",
    marginBottom: "0.3vw",
    justifyContent: "flex-end",
    paddingTop: "22px",
    color:"#BF0000"
  },
  cont: {
    //justifyContent: "flex-end",
  },
  cursor: {
    cursor: "pointer",
  },
}));
const HeaderAreas = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container className={classes.root} id="AppBar" maxWidth="xl">
      <Box display="flex">
        <div className={classes.logo} id="logo">
          <Precise />
        </div>
        <Box>
          <div className={classes.icons} id="icon">
            <Icons />
          </div>
          <div className={classes.link}>
            <Link color="inherit" underline="none" className={classes.cursor}>
              About
            </Link>
            <ExpandMoreIcon className={classes.icon} />
            <Link
              underline="none"
              className={classes.cursor}
              color="inherit"
              onClick={() => {
                history.push("/areas");
              }}
            >
              Areas of Work
            </Link>
            <ExpandMoreIcon className={classes.icon} />
            <Link className={classes.cursor} underline="none" color="inherit">
              Capabilities
            </Link>
            <ExpandMoreIcon className={classes.icon} />
            <Link className={classes.cursor} underline="none" color="inherit">
              Resources
            </Link>
            <ExpandMoreIcon className={classes.icon} />
            <Link className={classes.cursor} underline="none" color="inherit">
              Careers
            </Link>
            <ExpandMoreIcon className={classes.icon} />
            <Link className={classes.cursor} underline="none" color="inherit">
              Events
            </Link>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default HeaderAreas;
