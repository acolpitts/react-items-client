import React, { useEffect } from "react";
import { useAppContext } from "hooks/AppContext";

import LogItem from 'components/LogItem'

const LogsPage = () => {

  const { state, dispatch } = useAppContext();
  
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