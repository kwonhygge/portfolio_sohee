import React, { useState } from 'react';
import styles from './Drawing.module.css';
import drawingList from '../../../../assets/images/drawing';
import Modal from '../../../UI/Modal/Modal';

const Drawing = () => {
  const [show, setShow] = useState(false);
  const [imgNum, setImgNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const imgLength = drawingList.length;

  const modalClosed = () => {
    setShow(false);
  };
  const modalOpen = (e) => {
    setImgNum(e.target.id);
    setShow(true);
  };
  return (
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
            <img
              id={0}
              onClick={modalOpen}
              src={drawingList[0].src}
              alt={drawingList[0].alt}
            />
            <img
              id={1}
              onClick={modalOpen}
              src={drawingList[1].src}
              alt={drawingList[1].alt}
            />
            <img
              id={2}
              onClick={modalOpen}
              src={drawingList[2].src}
              alt={drawingList[2].alt}
            />
          </div>
          <div className={styles.Col}>
            <img
              id={3}
              onClick={modalOpen}
              src={drawingList[3].src}
              alt={drawingList[3].alt}
            />
            <img
              id={4}
              onClick={modalOpen}
              src={drawingList[4].src}
              alt={drawingList[4].alt}
            />
            <img
              id={5}
              onClick={modalOpen}
              src={drawingList[5].src}
              alt={drawingList[5].alt}
            />
          </div>
        </div>
        {show && (
          <Modal
            show={show}
            modalClosed={modalClosed}
            isMany={true}
            imgLength={imgLength}
            imgNum={imgNum + 1}
            index="Drawing"
            name={drawingList[imgNum].name}
            isMany={true}
          >
            <div className={styles.ImgContainer}>
              <img
                className={styles.ImgInModal}
                src={drawingList[imgNum].src}
                alt={drawingList[imgNum].alt}
              />
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Drawing;
