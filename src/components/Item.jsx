import React, { useContext } from "react";
import { AppContext } from "../store";

import styles from './Item.module.scss';

const Item = ({item}) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    async function deleteItem() {
      try {
        await fetch(`http://localhost:8081/api/v1/items/${item.id}`, {
          method: "DELETE",
          body: JSON.stringify(item)
        });
        return item
      } catch (err) {
        console.error(err);
      }
    }
    dispatch({ type: "DELETE_ITEM", payload: deleteItem(item) });
  }

  return (
    <li className={styles.Item}>
      <span>{item.title}</span>
      <span className={styles.Item__delete} onClick={handleDelete}>
        <i className="far fa-window-close fa-lg"></i>
      </span>
    </li>
  )
}

Item.defaultProps = {
  title: 'Item'
}

Item.displayName = "Item";

export default Item