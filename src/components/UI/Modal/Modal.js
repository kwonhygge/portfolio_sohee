import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Modal = (props) => {
  return (
    <>
      <div className={styles.Modal}>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
          className={styles.ModalContent}
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
        <svg
          className={styles.Close}
          onClick={props.modalClosed}
          style={{
            transform: props.show ? 'scale(1)' : 'scale(0)',
            opacity: props.show ? '1' : '0',
          }}
          width="26"
          viewBox="0 0 30 32"
          fill="none"
        >
          <path
            d="M15.2337 16.1795L2.73376 29.6794L2 29L14.5523 15.4436L2.73363 2.67943L3.46739 2.00003L15.2337 14.7076L27 2L27.7338 2.67941L15.9151 15.4436L28.4674 29L27.7336 29.6794L15.2337 16.1795Z"
            fill="black"
          />
          <path
            d="M2.73376 29.6794L2.05435 30.4132L2.78811 31.0926L3.46752 30.3588L2.73376 29.6794ZM15.2337 16.1795L15.9674 15.5001L15.2337 14.7076L14.4999 15.5001L15.2337 16.1795ZM2 29L1.26624 28.3206L0.586832 29.0544L1.32059 29.7338L2 29ZM14.5523 15.4436L15.286 16.123L15.9151 15.4436L15.286 14.7641L14.5523 15.4436ZM2.73363 2.67943L2.05422 1.94567L1.32046 2.62508L1.99987 3.35884L2.73363 2.67943ZM3.46739 2.00003L4.20115 1.32062L3.52175 0.586857L2.78798 1.26627L3.46739 2.00003ZM15.2337 14.7076L14.4999 15.387L15.2337 16.1795L15.9674 15.387L15.2337 14.7076ZM27 2L27.6794 1.26624L26.9456 0.586831L26.2662 1.32059L27 2ZM27.7338 2.67941L28.4675 3.35882L29.1469 2.62506L28.4132 1.94565L27.7338 2.67941ZM15.9151 15.4436L15.1813 14.7641L14.5523 15.4436L15.1813 16.123L15.9151 15.4436ZM28.4674 29L29.1468 29.7338L29.8806 29.0544L29.2012 28.3206L28.4674 29ZM27.7336 29.6794L26.9999 30.3588L27.6793 31.0926L28.413 30.4132L27.7336 29.6794ZM3.46752 30.3588L15.9674 16.8589L14.4999 15.5001L2 29L3.46752 30.3588ZM1.32059 29.7338L2.05435 30.4132L3.41317 28.9456L2.67941 28.2662L1.32059 29.7338ZM13.8185 14.7641L1.26624 28.3206L2.73376 29.6794L15.286 16.123L13.8185 14.7641ZM15.286 14.7641L3.46739 2.00003L1.99987 3.35884L13.8185 16.123L15.286 14.7641ZM3.41304 3.41319L4.1468 2.73379L2.78798 1.26627L2.05422 1.94567L3.41304 3.41319ZM2.73363 2.67943L14.4999 15.387L15.9674 14.0282L4.20115 1.32062L2.73363 2.67943ZM26.2662 1.32059L14.4999 14.0282L15.9674 15.387L27.7338 2.67941L26.2662 1.32059ZM28.4132 1.94565L27.6794 1.26624L26.3206 2.73376L27.0544 3.41317L28.4132 1.94565ZM16.6489 16.123L28.4675 3.35882L27 2L15.1813 14.7641L16.6489 16.123ZM15.1813 16.123L27.7336 29.6794L29.2012 28.3206L16.6489 14.7641L15.1813 16.123ZM27.788 28.2663L27.0542 28.9457L28.413 30.4132L29.1468 29.7338L27.788 28.2663ZM28.4674 29L15.9674 15.5001L14.4999 16.8589L26.9999 30.3588L28.4674 29Z"
            fill="black"
          />
        </svg>

        {props.isMany && (
          <div className={styles.ArrowBtns}>
            <div
              className={styles.PicNum}
              style={{
                transform: props.show ? 'scale(1)' : 'scale(0)',
                opacity: props.show ? '1' : '0',
              }}
            >
              <span>
                {props.imgNum} - 0{props.imgLength}
              </span>
            </div>
            <div
              style={{
                transform: props.show ? 'scale(1)' : 'scale(0)',
                opacity: props.show ? '1' : '0',
              }}
              className={styles.Btns}
            >
              <svg
                onClick={props.nextArrow}
                width="16"
                height="31"
                fill="none"
                viewBox="0 0 21 31"
              >
                <path d="M2 2L18 15L2 29.5" stroke="black" stroke-width="3" />
              </svg>
              <svg
                onClick={props.prevArrow}
                width="16"
                height="31"
                viewBox="0 0 21 31"
                fill="none"
              >
                <path d="M19 2L3 15L19 29.5" stroke="black" stroke-width="3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
