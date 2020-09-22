import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './ImageModalEach.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const { itemIndx, itemName, imgSrc, imgAlt, smallImgWidth } = this.props;

    return (
      <>
        <div
          className={styles.SmallImg}
          style={{ width: `${smallImgWidth}%` }}
          onClick={this.handleShowDialog}
        >
          <div className={styles.More}>
            <span>크게 보기&nbsp;&nbsp;</span>
            <FontAwesomeIcon icon="caret-down" size="1x" />
          </div>
          <img src={imgSrc} alt={imgAlt}></img>
        </div>

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
