import React from 'react';
import aniFirst from '../../../../assets/images/1 만화의집/1.png';
import aniSecond from '../../../../assets/images/1 만화의집/2.png';
import aniThird from '../../../../assets/images/1 만화의집/3.jpg';
import ani4 from '../../../../assets/images/1 만화의집/4.jpg';
import ani5 from '../../../../assets/images/1 만화의집/5.jpg';
import styles from './WorkImageFirst.module.css';

const WorkImageFirst = () => (
  <>
    <div className={styles.Container}>
      <div className={styles.Row}>
        <div className={styles.Col}>
          <img src={aniFirst} />
        </div>
        <div className={styles.Col}>
          <img src={aniSecond} />
        </div>
        <div className={styles.Col}>
          <div className={styles.Box1}>
            <img src={ani4} />
          </div>
          <div className={styles.LastBoxRow}>
            <div className={styles.Box2}>
              <img src={aniThird} />
            </div>
            <div className={styles.Box3}>
              <img src={ani5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WorkImageFirst;
