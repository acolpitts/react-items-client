import React, { useEffect } from "react";
import { useAppContext } from "hooks/AppContext";

import IntroSection from 'components/IntroSection';
import ItemsList from 'components/ItemsList';

const SplashPage = () => {

  const { dispatch } = useAppContext();
  
  useEffect(() => {
    
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8081/api/v1/items`);
        const json = await response.json();
        return json.data
      } catch (err) {
        console.error(err);
        return [];
      }
    }
    dispatch({ type: "FETCH_ITEMS", payload: fetchData() })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <IntroSection />
      <ItemsList />
    </main>
  )
}

export default SplashPage;