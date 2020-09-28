import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <>
    <span className={styles.Msg}>
      이 사이트는 <strong>Chrome</strong>에 최적화되어 있습니다.
    </span>
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
        <span className={styles.I}>I</span>
        <span className={styles.O}>O</span>
        <span className={styles.Dot}></span>
      </div>
    </div>
  </>
);

export default Home;
