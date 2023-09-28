import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import RouteManager from "./RouteManager";
import theme from "./utils/theme";
// import {setDefaultBreakpoints} from 'react-socks'

// setDefaultBreakpoints([
//   { xsmall: 0 }, // all mobile devices
//   { small: 576 }, // mobile devices (not sure which one's this big)
//   { medium: 768 }, // ipad, ipad pro, ipad mini, etc
//   { large: 992 }, // smaller laptops
//   { xlarge: 1200 } // laptops and desktops
// ]);
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseLine />
          <RouteManager />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
