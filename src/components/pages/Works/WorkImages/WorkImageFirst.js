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
            <img src={aniList[0].src} alt={aniList[0].alt} />
          </div>
          <div className={styles.Col}>
            <img src={aniList[1].src} alt={aniList[1].alt} />
          </div>
          <div className={styles.Col}>
            <div className={styles.Box1}>
              <img src={aniList[2].src} alt={aniList[2].alt} />
            </div>
            <div className={styles.LastBoxRow}>
              <div className={styles.Box2}>
                <img src={aniList[3].src} alt={aniList[3].alt} />
              </div>
              <div className={styles.Box3}>
                <img src={aniList[4].src} alt={aniList[4].alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <ImageModalAll
          itemIndx={props.itemIndx}
          itemName={props.itemName}
          show={show}
          modalClosed={handleClick}
          imgList={aniList}
        />
      )}
    </>
  );
};

export default WorkImageFirst;
