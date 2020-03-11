import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactDOM from "react-dom";

import "./index.scss";
//import { AppContextProvider } from "./store";
import { AppContextProvider } from 'hooks/AppContext';
import LogsPage from "pages/LogsPage";
import SplashPage from "pages/SplashPage";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/logs">Logs</Link>
      </nav>
        <Switch>
          <Route path="/logs">
            <LogsPage />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>

      </Router>
    </AppContextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
