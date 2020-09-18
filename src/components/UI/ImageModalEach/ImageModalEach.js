import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './ImageModalEach.module.css';

class ImageModalEach extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isOpen } = this.state;
    const { itemIndx, itemName, imgSrc, imgAlt } = this.props;

    return (
      <>
        <img
          className={styles.SmallImg}
          src={imgSrc}
          alt={imgAlt}
          onClick={this.handleShowDialog}
        ></img>
        <Modal
          index={itemIndx}
          name={itemName}
          show={isOpen}
          modalClosed={this.handleShowDialog}
        >
          <img
            className={styles.ImgInModal}
            src={imgSrc}
            onClick={this.handleShowDialog}
          ></img>
        </Modal>
      </>
    );
  }
}

export default ImageModalEach;
