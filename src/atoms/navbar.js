import React, { useState } from 'react';
import styles from './navbar.module.css';
import img1 from "./images/images (2).jpg";
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <nav className={styles.navbar}>
      <img src={img1} className={styles.img} alt="Logo" />
      <div onClick={handleClick} className={styles.nav_icons}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`${styles.nav_links} ${open ? styles.nav_linksactive : styles.nav_links}`}>
        <li className={styles.nav_list} key="home"><Link to="/">Home</Link></li>
        <li className={styles.nav_list} key="products"><Link to="/product">Products</Link></li>
        <li className={styles.nav_list} key="newlaunches"><Link to="/newlaunch">New Launches</Link></li>
        <li className={styles.nav_list} key="contact"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
