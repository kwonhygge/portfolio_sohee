import React from 'react';
import styles from './CopyItem.module.css';

const CopyItem = (props) => (
  <>
    <a href="#" className={styles.CopyItem}>
      {props.children}
      <span>copy</span>
    </a>
  </>
);

export default CopyItem;
