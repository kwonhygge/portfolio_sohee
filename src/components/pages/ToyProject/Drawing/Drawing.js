import React from 'react';
import styles from './Drawing.module.css';

const Drawing = () => (
  <>
    <div className={styles.Header}>
      <h1>Drawing</h1>
      <div>
        <span>사용 프로그램</span>
        <span>illustration, clipstudio</span>
      </div>
    </div>
    <div className={styles.Gallery}></div>
  </>
);

export default Drawing;
