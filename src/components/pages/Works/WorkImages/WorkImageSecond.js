import React from 'react';
import styles from './WorkImageSecond.module.css';
import cu1 from '../../../../assets/images/큐레이션/1.png';
import cu2 from '../../../../assets/images/큐레이션/2.jpg';
import cu3 from '../../../../assets/images/큐레이션/3.jpg';
import cu4 from '../../../../assets/images/큐레이션/4.jpg';

const WorkImageSecond = () => (
  <>
    <div className={styles.Container}>
      <div className={styles.Row}>
        <div className={styles.Left}>
          <img src={cu1} />
        </div>
        <div className={styles.Right}>
          <div className={styles.RightUp}>
            <div className={styles.Box1}>
              <img src={cu2} />
            </div>
            <div className={styles.Box2}>
              <img src={cu3} />
            </div>
          </div>

          <div className={styles.Box3}>
            <img src={cu4} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WorkImageSecond;
