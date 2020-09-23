import React, { useState } from 'react';
import styles from './Contact.module.css';
import Card from '../../../assets/images/contact/Group 22.png';
import WorkMsg from '../../../assets/images/contact/workwithme.png';
import LoadElement from '../../UI/LoadElement/LoadElement';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  const renderLoader = () => {
    if (!loading) {
      return null;
    }
    return <LoadElement />;
  };
  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <div className={styles.Contact}>
        <div className={styles.Header}>
          <h1>Contact</h1>
          {renderLoader}
          <div className={styles.Bubble}>
            <img src={WorkMsg} alt="WorkMessage" />
          </div>
        </div>
        <div className={styles.Card}>
          <img src={Card} alt="contact-card" onLoad={handleImageLoaded} />
        </div>
      </div>
    </>
  );
};

export default Contact;
