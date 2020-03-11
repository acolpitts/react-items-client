import React, { useContext, useEffect } from "react";
import { AppContext } from "../store";

import IntroSection from 'components/IntroSection';
import ItemsList from 'components/ItemsList';

const SplashPage = () => {

  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8081/api/v1/items`);
        const json = await response.json();
        return json.data
      } catch (err) {
        console.error(err);
      }
    }
    dispatch({ type: "FETCH_ITEMS", payload: fetchData() })
  }, []);

  return (
    <main>
      <IntroSection />
      <ItemsList />
    </main>
  )
}

export default SplashPage;