import React, { useState } from 'react';
import styles from './navbar.module.css';
import img1 from "./images/images (2).jpg"
import { FiMenu, FiX } from 'react-icons/fi'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Contact from '../pages/contact';

import Hero from '../molecules/hero';

import NewLaunch from '../pages/newLaunch';
import Product from '../pages/product';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <Router>
      <nav className={styles.navbar}>
        <img src={img1} className={styles.img}></img>
        <div onClick={handleClick} className={styles.nav_icons}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`${styles.nav_links} ${open ? styles.nav_linksactive : styles.nav_links}`}>
          <li className={styles.nav_list}><Link to="/">Home</Link></li>
          <li className={styles.nav_list}><Link to="/product">Products</Link></li>
          <li className={styles.nav_list}><Link to="/newlaunch">New Launches</Link></li>
          <li className={styles.nav_list}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/newlaunch" element={<NewLaunch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
