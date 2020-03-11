import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();
export const AppContextProvider = props => {
  const initialState = {
    counter: 0,
    items: [],
    logs: [],
    searchTerm: ''
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_ITEMS": {
        return { ...state, items: action.payload };
      }
      case "ADD_ITEM": {
        console.log("ACTION PAYLOAD: ", action.payload)
        return { ...state, items: [...state.items, action.payload] };
      }
      case "FETCH_LOGS": {
        return { ...state, logs: action.payload };
      }
      case "SEARCH_ITEMS": {
        return { ...state, searchTerm: action.payload };
      }
      case "ADD_TO_COUNTER": {
        return { ...state, counter: state.counter + action.payload.value };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const isPromise = obj => {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  };
  const middleware = dispatch => {
    return action => {
      if (isPromise(action.payload)) {
        action.payload.then(v => {
          dispatch({ type: action.type, payload: v });
        });
      } else {
        dispatch(action);
      }
    };
  };
  return (
    <AppContext.Provider value={{ state, dispatch: middleware(dispatch) }}>
      {props.children}
    </AppContext.Provider>
  );
};