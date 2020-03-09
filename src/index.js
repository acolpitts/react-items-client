import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { AppContext, AppContextProvider } from "./store";

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
      <Display />
      <Increment />
      <Decrement />
    </AppContextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
