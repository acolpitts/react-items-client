import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactDOM from "react-dom";

import "./index.scss";
import { AppContext, AppContextProvider } from "./store";
import LogsPage from "pages/LogsPage";
import SplashPage from "pages/SplashPage";

const Display = () => {
  const { state } = useContext(AppContext);
  return <h1>{state.counter}</h1>;
};
const Increment = () => {
  const { dispatch } = useContext(AppContext);
  const asyncCounterInc = async () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({ value: 1 });
      }, 1000);
    });

  return (
    <button
      onClick={() =>
        dispatch({ type: "ADD_TO_COUNTER", payload: asyncCounterInc() })
      }
    >
      Increment
    </button>
  );
};
const Decrement = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <button
      onClick={() =>
        dispatch({ type: "ADD_TO_COUNTER", payload: { value: -1 } })
      }
    >
      Decrement
    </button>
  );
};

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
