import React from 'react';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => (
  <>
    <nav className={styles.NavigationItems}>
      <ul>{props.children}</ul>
    </nav>
  </>
);

export default NavigationItems;
