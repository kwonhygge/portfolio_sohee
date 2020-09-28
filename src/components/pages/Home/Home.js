import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.MainContainer}>
    <div className={styles.Upper}>
      <span>P</span>
      <span>O</span>
      <span>R</span>
      <span>T</span>
    </div>
    <div className={styles.Down}>
      <span>F</span>
      <span>O</span>
      <span>L</span>
      <span>I</span>
      <span>O</span>
      <span>.</span>
    </div>
  </div>
);

export default Home;
