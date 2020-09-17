import React, { useState } from 'react';
import aniList from '../../../../assets/images/anicenter';
import styles from './WorkImageFirst.module.css';
import ImageModalAll from '../../../UI/ImageModalAll/ImageModalAll';

const WorkImageFirst = (props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div onClick={handleClick} className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Col}>
            <img src={aniList[0]} />
          </div>
          <div className={styles.Col}>
            <img src={aniList[1]} />
          </div>
          <div className={styles.Col}>
            <div className={styles.Box1}>
              <img src={aniList[2]} />
            </div>
            <div className={styles.LastBoxRow}>
              <div className={styles.Box2}>
                <img src={aniList[3]} />
              </div>
              <div className={styles.Box3}>
                <img src={aniList[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageModalAll
        itemIndx={props.itemIndx}
        itemName={props.itemName}
        show={show}
        modalClosed={handleClick}
        imgList={aniList}
      />
    </>
  );
};

export default WorkImageFirst;
