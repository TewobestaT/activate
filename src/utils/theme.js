import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: { primary: {
    main: "#5BA2BE",
  }
   },
});

export default theme;
