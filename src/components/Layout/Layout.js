import React from 'react';
import styles from './Layout.module.css';

const Layout = (props) => (
  <>
    <div>Toolbar</div>
    <div>Sidebar</div>
    <main className={styles.Content}>{props.children}</main>
  </>
);

export default Layout;
