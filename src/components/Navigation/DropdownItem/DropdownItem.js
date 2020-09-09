import React from 'react';
import styles from './DropdownItem.module.css';

const DropdownItem = (props) => (
  <>
    <li className={styles.DropdownItem}>
      <a>{props.children}</a>
    </li>
  </>
);

export default DropdownItem;
