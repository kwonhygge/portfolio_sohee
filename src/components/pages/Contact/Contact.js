import React, { Component } from 'react';
import styles from './Contact.module.css';
import Card from '../../../assets/images/contact/contact.png';
import WorkMsg from '../../../assets/images/contact/workwithme.png';
import LazyItem from "../../LazyItems/LazyItem/LazyItem"

class Contact extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <>
        <div className={styles.Contact}>
          <div className={styles.Header}>
            <h1>Contact</h1>
            <div className={styles.Bubble}>
              <img src={WorkMsg} alt="WorkMessage" />
            </div>
          </div>
          {this.renderLoader}
          <div className={styles.Card}>
            <LazyItem src={Card} alt="contact-card" />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
