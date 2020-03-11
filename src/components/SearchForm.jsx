import React, { useContext } from "react";
import { AppContext } from "../store";

const SearchForm = (props) => {

  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    const term = e.currentTarget.value || ''
    dispatch({ type: "SEARCH_ITEMS", payload: term})
  }

  return (
    <>
      <label>Search an item</label>
      <input type="text" placeholder="SEARCH ITEMS" onChange={handleChange}/>
    </>
  )
}

export default SearchForm;