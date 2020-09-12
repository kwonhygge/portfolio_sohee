import React from 'react';
import styles from './Contact.module.css';
import amelie from '../../../assets/images/amelie.jpg';

const Contact = () => (
  <>
    <div className={styles.CardHeader}>
      <div styles={styles.Pic}>
        <img src={amelie} alt="amelie" />
      </div>
    </div>
  </>
);

export default Contact;
