import React, { useContext, useEffect } from "react";
import { AppContext } from "../store";

import styles from "./ItemsList.module.scss";
import Item from 'components/Item';
import Sidebar from 'components/Sidebar';

const ItemsList = () => {
  const { state, dispatch } = useContext(AppContext);
  
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`http://localhost:8081/api/v1/items`);
  //       const json = await response.json();
  //       return json.data
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   dispatch({ type: "FETCH_ITEMS", payload: fetchData() })
  // }, []);

  const renderSidebar = () => {
    return (
      <Sidebar />
    )
  }

  const renderCol = (col) => {
    const results = state.items.filter(item => item.title.includes(state.searchTerm))
    const colOne = results.filter(item => item.column === col)
   
    return (
      <ul>
        <h4>Column One</h4>
        {colOne.map(item => <Item key={item.id} title={item.title} />)}
      </ul>
    )
  }

  return (
    <div className={styles.ItemsList}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles['sidebar-menu']}>
            {renderSidebar()}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles['column-data']}>
            {renderCol(0)}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles['column-data']}>
            {renderCol(1)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsList;