import * as ReactDOM from "react-dom";
import * as React from "react";
import { Route, Router } from "react-router-dom";
import App from "./components/App";

import "./styles/App.css";

import history from "./utils/history";

const onRedirectCallback = (appState: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

const mainRoutes = (
  <Router history={history}>
    <Route path="/" render={(props) => <App />} />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));
