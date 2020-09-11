import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutMenuItems } from './MenuItemList/AboutMenuItems';
import { MenuItems } from './MenuItemList/MenuItems';

const Dropdown = (props) => {
  const menu = props.menu;
  console.log(MenuItems);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul>
        {MenuItems[menu].map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
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
