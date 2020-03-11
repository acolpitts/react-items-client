import React from 'react';
import styles from './Item.module.scss';

const Item = ({title}) => {
  return (
    <li className={styles.Item}>{title}</li>
  )
}

Item.defaultProps = {
  title: 'Item'
}

Item.displayName = "Item";

export default Item