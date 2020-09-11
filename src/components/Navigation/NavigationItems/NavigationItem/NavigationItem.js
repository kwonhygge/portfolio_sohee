import React, { useState, useRef, useEffect } from 'react';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const [open, setOpen] = useState(false);
  const myRef = useRef();

  const handleClickMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (e) => {
    if (open && !myRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <li className={styles.NavigationItem}>
      <a ref={myRef} onClick={handleClickMenu}>
        {props.item}
        {props.isIcon && (
          <svg
            width="1.8vh"
            className={!open ? styles.Triangle : styles.Rotated}
            viewBox="0 0 16 11"
            fill="none"
          >
            <path
              d="M9.16093 9.58108C8.56077 10.3146 7.43921 10.3146 6.83906 9.58108L1.00442 2.44986C0.203093 1.47046 0.899917 1.45351e-06 2.16536 1.56414e-06L13.8346 2.5843e-06C15.1001 2.69493e-06 15.7969 1.47046 14.9956 2.44986L9.16093 9.58108Z"
              fill="#626E94"
            />
          </svg>
        )}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavigationItem;
