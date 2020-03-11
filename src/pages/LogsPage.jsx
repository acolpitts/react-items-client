import React, { useEffect } from "react";
import { useAppContext } from "hooks/AppContext";

import LogsList from "components/LogsList";

const LogsPage = () => {

  const { dispatch } = useAppContext();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8081/api/v1/logs`);
        const json = await response.json();
        return json.data
      } catch (err) {
        console.error(err);
        return []
      }
    }
    dispatch({ type: "FETCH_LOGS", payload: fetchData() })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <LogsList />
    </main>
  )
}

export default LogsPage;