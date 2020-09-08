import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => (
  <>
    <header className={styles.Toolbar}>
      <a className={styles.HomeBtn}>
        <span>Home</span>
      </a>
      <nav>
        <NavigationItems />
      </nav>
      <div>copy</div>
    </header>
  </>
);

export default Toolbar;
