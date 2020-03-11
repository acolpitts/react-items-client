import React, { useContext, createContext, useReducer } from 'react'

export const initialState = {
  items: [],
  logs: [],
  searchTerm: ''
};
const AppContext = createContext(initialState);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = props => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_ITEMS": {
        return { ...state, items: action.payload };
      }
      case "ADD_ITEM": {
        return { ...state, items: [...state.items, action.payload] };
      }
      case "DELETE_ITEM": {
        const reducedItems = state.items.filter(item => item.id !== action.payload.id)
        return { ...state, items: reducedItems }
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

export default AppContext;