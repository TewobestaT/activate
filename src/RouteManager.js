import React from "react";
import { Route, Switch } from "react-router-dom";
import AreasPage from "./pages/AreasPage";
import HomePage from "./pages/HomePage";
const RouteManager = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/areas" component={AreasPage} exact />
      </Switch>
    </div>
  );
};

export default RouteManager;
