import React from 'react';
import styles from './HomeLogo.module.css';

const HomeLogo = () => (
  <div className={styles.HomeBtn}>
    <svg width="2vw" viewBox="0 0 38 33" fill="none">
      <path
        d="M16.9167 0.702506C18.0162 -0.185077 19.586 -0.185076 20.6855 0.702507L36.1151 13.1583C38.1212 14.7777 37.2557 17.8753 34.9453 18.4123C35.0252 18.6824 35.068 18.9684 35.068 19.2643V29.6047C35.068 31.2615 33.7249 32.6047 32.068 32.6047H23V25C23 22.7909 21.2091 21 19 21C16.7908 21 15 22.7909 15 25V32.6047H6.4911C4.83425 32.6047 3.4911 31.2615 3.4911 29.6047V19.2643C3.4911 18.9975 3.52593 18.7388 3.5913 18.4926H3.37149C0.542284 18.4926 -0.714345 14.9354 1.48707 13.1583L16.9167 0.702506Z"
        fill="#5C668A"
      />
    </svg>
  </div>
);

export default HomeLogo;
