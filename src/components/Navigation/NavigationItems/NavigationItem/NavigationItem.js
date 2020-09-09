import React, { useState } from 'react';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    setOpen(!open);
  };

  return (
    <li className={styles.NavigationItem}>
      <a onClick={handleClickMenu}>{props.item}</a>
      {open && props.children}
    </li>
  );
};

export default NavigationItem;
