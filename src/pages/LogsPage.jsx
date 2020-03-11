import React, { useContext, useEffect } from "react";
import { AppContext } from "../store";

import LogItem from 'components/LogItem'

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
        return []
      }
    }
    dispatch({ type: "FETCH_LOGS", payload: fetchData() })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>App Logs</h1>
      <ul>
        {state.logs.map(log => <LogItem key={log.id} log={log} />)}
      </ul>
    </main>
  )
}

export default LogsPage;