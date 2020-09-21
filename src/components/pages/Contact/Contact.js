import React from 'react';
import styles from './Contact.module.css';
import Card from '../../../assets/images/contact/Group 22.png';
import WorkMsg from '../../../assets/images/contact/workwithme.png';

const Contact = () => (
  <>
    <div className={styles.Contact}>
      <div className={styles.Header}>
        <h1>Contact</h1>
        <div className={styles.Bubble}>
          <img src={WorkMsg} />
        </div>
      </div>
      <div className={styles.Card}>
        <img src={Card} />
      </div>
    </div>
  </>
);

export default Contact;
