import React from "react";
import Footer from "./Footer";
import HeaderAreas from "./HeaderAreas";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "20%",
  },
}));
const LayoutAreas = (props) => {
  const classes = useStyles();
  return (
    <div>
      <HeaderAreas />
      <div >{props.children}</div>
      <Footer />
    </div>
  );
};

export default LayoutAreas;
