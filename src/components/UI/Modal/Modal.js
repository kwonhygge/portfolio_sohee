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
      <FontAwesomeIcon
        className={styles.Close}
        onClick={props.modalClosed}
        icon="times"
        size="1x"
        style={{
          transform: props.show ? 'translate(-50%, -50%)' : 'scale(0)',
          opacity: props.show ? '1' : '0',
        }}
      />
    </>
  );
};

export default Modal;
