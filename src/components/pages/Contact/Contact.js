import React, { Component } from 'react';
import styles from './Contact.module.css';
import Card from '../../../assets/images/contact/Group 22.png';
import WorkMsg from '../../../assets/images/contact/workwithme.png';
import LoadElement from '../../UI/LoadElement/LoadElement';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  renderLoader = () => {
    if (!this.state.loading) {
      return null;
    }
    return <LoadElement />;
  };
  handleImageLoaded = () => {
    this.setState({
      loading: false,
    });
  };

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
          <div className={styles.Card}>
            {this.renderLoader}
            <img
              src={Card}
              alt="contact-card"
              onLoad={this.handleImageLoaded}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
