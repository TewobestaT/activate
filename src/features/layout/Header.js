import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icons from "../../components/Icons";
import { makeStyles } from "@material-ui/core/styles";
import Precise from "../../components/Precise";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBar from "../Home/MenuBar";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  // [theme.breakpoints.between('sm', 'lg')]: {
  root: {
    // display: "flex",
    position: "fixed",

    background: "rgba(0,0,0,0)",
    color: "white",
    zIndex: 1500,
    padding: "0 6vw",
    paddingBottom: "1vw",

   
  },

  logo: {
    flexGrow: 1,
  },
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(4),
  },
  icons: {
    display: "flex",
    marginBottom: "0.3vw",
    justifyContent: "flex-end",
    paddingTop: "22px",
  },
  cont: {},
  cursor: {
    cursor: "pointer",
  },

  menu: {
    color: "white",
    width: "15vw",
    height: "15vw",
    position: "relative",
    paddingTop: "6vw",
    justifyContent: "flex-end",
    top: 0,
    [theme.breakpoints.down("md")]: {
      paddingTop: "2.5vw",
      width: "8vw",
      height: "8vw",
    },

    [theme.breakpoints.down("xs")]: {
      paddingTop: "6vw",
      width: "15vw",
      height: "15vw",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(false);
  // const [scrollBackground, setScrollBackground] = useState(false);

  // useEffect(() => {
  //   var appBar = document.getElementById("AppBar");
  //   if (appBar.scrollY > 100) {
  //     setScrollBackground(true);
  //   }
  // }, 0);
  return (
    <Container
      className={clsx(
        classes.root
        // scrollBackground ? classes.appBar : classes.trans
      )}
      id="AppBar"
      maxWidth="xl"
    >
      <Box display="flex" justifyContent={"center"} >
        <div className={classes.logo} id="logo">
          <Precise />
        </div>

        <Box>
          <Hidden implementation="css" mdDown>
            <div className={classes.icons} id="icon">
              <Icons />
            </div>
            {/* <div className={classes.link}>
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
            </div> */}
          </Hidden>
          <Hidden implementation="css" lgUp>
            <MenuIcon
              onClick={() => setOpenMenu(true)}
              className={classes.menu}
              id="menu"
            />
          </Hidden>
        </Box>
      </Box>
      <Hidden implementation="css" lgUp>
        {openMenu && <MenuBar setOpenMenu={setOpenMenu} openMenu={openMenu} />}
      </Hidden>
    </Container>
  );
};

function changeCss() {
  var x = document.getElementById("AppBar");

  this.scrollY > 100
    ? (x.style.background = "#2A3D5A") && (x.style.color = "#000")
    : (x.style.background = "rgba(0,0,0,0)") && (x.style.color = "#fff");

  var y = document.getElementById("logo");

  this.scrollY > 100
    ? (y.style.background = "#2A3D5A") &&
      (y.style.color = "#30B8C7")
    : (y.style.background = "rgba(0,0,0,0)") && (y.style.color = "#fff");
  var z = document.getElementById("icon");

  this.scrollY > 100
    ? (z.style.background = "rgba(255,255,255,255)") &&
      (z.style.color = "#30B8C7")
    : (z.style.background = "rgba(0,0,0,0)") && (z.style.color = "#fff");
  var m = document.getElementById("menu");

  this.scrollY > 100
    ? (m.style.background = "rgba(255,255,255,255)") && (m.style.color = "#000")
    : (m.style.background = "rgba(0,0,0,0)") && (m.style.color = "#fff");
}

window.addEventListener("scroll", changeCss, false);

export default Header;
