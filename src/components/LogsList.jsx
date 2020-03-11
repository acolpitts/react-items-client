import React from 'react';
import { useAppContext } from "hooks/AppContext";

import styles from './LogsList.module.scss';
import LogItem from './LogItem';

const LogsList = () => {
  const { state } = useAppContext();
  return (
    <section className={styles.LogsList}>
      <h1>App Logs</h1>
      <ul>
        {state.logs.map(log => <LogItem key={log.id} log={log} />)}
      </ul>
    </section>

  )
}

export default LogsList;