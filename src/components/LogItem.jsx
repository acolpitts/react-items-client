import React from 'react'
import styles from './LogItem.module.scss';

const LogItem = ({log}) => {
  return (
    <li className={styles.LogItem}>
      [{log.created_at}] {log.type} - {log.path}<br /><span>{log.agent} - {log.ip}</span>
    </li>
  )
}

export default LogItem;