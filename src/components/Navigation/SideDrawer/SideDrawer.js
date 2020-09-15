import React from 'react';
import styles from './SideDrawer.module.css';

const SideDrawer = (props) => (
  <>
    <div className={styles.SideDrawer}>{props.children}</div>
  </>
);

export default SideDrawer;
