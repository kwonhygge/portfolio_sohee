import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../../store/menuitems/MenuItems';
import styles from './Dropdown.module.css';

const Dropdown = (props) => {
  const menu = props.menu;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul className={styles.Dropdown}>
        {MenuItems[menu].map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.DropdownItem}
                to={{
                  pathname: item.path,
                }}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
