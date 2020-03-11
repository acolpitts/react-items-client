import React from 'react';
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link to="/">Home</Link>
      <Link to="/logs">Logs</Link>
    </nav>
  )
}

export default Navbar;