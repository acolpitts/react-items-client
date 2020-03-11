import React from "react";
import { useAppContext } from "hooks/AppContext";

const SearchForm = (props) => {

  const { dispatch } = useAppContext();

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