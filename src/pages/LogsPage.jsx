import React, { useContext, useEffect } from "react";
import { AppContext } from "../store";

const LogsPage = () => {

  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8081/api/v1/logs`);
        const json = await response.json();
        
        return json.data

      } catch (err) {
        console.error(err);
      }
    }
    dispatch({ type: "FETCH_LOGS", payload: fetchData() })
  }, []);

  return (
    <main>
      <h1>App Logs</h1>
    </main>
  )
}

export default LogsPage;