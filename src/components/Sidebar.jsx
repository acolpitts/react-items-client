import React from 'react';

import styles from './Sidebar.module.scss';
import CreateItemForm from './CreateItemForm';
import SearchForm  from './SearchForm';

const Sidebar = () => {
  return (
    <aside className={styles.Sidebar}>
      <CreateItemForm />
      <SearchForm />
    </aside>
  )
}

export default Sidebar;