import React from 'react';
import styles from './LoadElement.module.css';

const LoadElement = () => (
  <div className={styles.LoadingBackground}>
    <span className={styles.Spinner}></span>
  </div>
);

export default LoadElement;
