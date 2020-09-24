import React from 'react';
import styles from './Drawing.module.css';
import drawingList from '../../../../assets/images/drawing';

const Drawing = () => (
  <>
    <div className={styles.Header}>
      <h1>Drawing</h1>
      <div>
        <span>사용 프로그램</span>
        <span>illustrator, clipstudio</span>
      </div>
    </div>
    <div className={styles.Gallery}>
      <div className={styles.Row}>
        <div className={styles.Col}>
          <img src={drawingList[0].src} />
          <img src={drawingList[1].src} />
          <img src={drawingList[2].src} />
        </div>
        <div className={styles.Col}>
          <img src={drawingList[3].src} />
          <img src={drawingList[4].src} />
          <img src={drawingList[5].src} />
        </div>
      </div>
    </div>
  </>
);

export default Drawing;
