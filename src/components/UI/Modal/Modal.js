import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translate(-50%, -50%)' : 'scale(0)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
      <div
        className={styles.Info}
        style={{
          transform: props.show ? 'scale(1)' : 'scale(0)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <span>{props.index}</span>
        <span>{props.name}</span>
      </div>
      <FontAwesomeIcon
        className={styles.Close}
        onClick={props.modalClosed}
        icon="times"
        size="1x"
        style={{
          transform: props.show ? 'scale(1)' : 'scale(0)',
          opacity: props.show ? '1' : '0',
        }}
      />
      {props.isMany && (
        <div className={styles.ArrowBtns}>
          <div
            style={{
              transform: props.show ? 'scale(1)' : 'scale(0)',
              opacity: props.show ? '1' : '0',
            }}
          >
            <span className={styles.PicNum}>
              {props.imgNum}-0{props.imgLength}
            </span>
          </div>
          <FontAwesomeIcon
            onClick={props.prevArrow}
            icon="times"
            size="1x"
            style={{
              transform: props.show ? 'scale(1)' : 'scale(0)',
              opacity: props.show ? '1' : '0',
            }}
          />
          <FontAwesomeIcon
            onClick={props.nextArrow}
            icon="times"
            size="1x"
            style={{
              transform: props.show ? 'scale(1)' : 'scale(0)',
              opacity: props.show ? '1' : '0',
            }}
          />
        </div>
      )}
    </>
  );
};

export default Modal;
