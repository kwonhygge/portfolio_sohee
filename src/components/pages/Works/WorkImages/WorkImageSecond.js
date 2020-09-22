import React, { useState } from 'react';
import styles from './WorkImageSecond.module.css';
import cuList from '../../../../assets/images/curation';
import ImageModalAll from '../../../UI/ImageModalAll/ImageModalAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WorkImageSecond = (props) => {
  const [show, setShow] = useState(false);
  const [maxSize, setMaxSize] = useState(450);
  const handleClick = () => {
    setShow(!show);
    if (window.innerWidth <= 1024) {
      setMaxSize(450);
    } else if (window.innerWidth < 1920) {
      setMaxSize(480);
    } else {
      setMaxSize(700);
    }
  };

  return (
    <>
      <div onClick={handleClick} className={styles.Container}>
        <div className={styles.More}>
          <span>더보기&nbsp;&nbsp;</span>
          <FontAwesomeIcon icon="caret-down" size="1x" />
        </div>
        <div className={styles.Row}>
          <div className={styles.Left}>
            <img src={cuList[0].src} alt={cuList[0].alt} />
          </div>
          <div className={styles.Right}>
            <div className={styles.RightUp}>
              <div className={styles.Box1}>
                <img src={cuList[1].src} alt={cuList[1].alt} />
              </div>
              <div className={styles.Box2}>
                <img src={cuList[2].src} alt={cuList[2].alt} />
              </div>
            </div>

            <div className={styles.Box3}>
              <img src={cuList[3].src} alt={cuList[3].alt} />
            </div>
          </div>
        </div>
      </div>
      {show && (
        <ImageModalAll
          itemIndx={props.itemIndx}
          itemName={props.itemName}
          maxSize={maxSize}
          show={show}
          modalClosed={handleClick}
          imgList={cuList}
        />
      )}
    </>
  );
};

export default WorkImageSecond;
