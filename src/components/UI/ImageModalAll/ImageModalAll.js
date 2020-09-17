import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './ImageModalAll.module.css';

class ImageModalAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgNum: '0',
    };
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} modalClosed={this.props.modalClosed}>
          <div className={styles.Gallery}>
            <div styles={styles.Middle}>
              <img
                src={this.props.imgList ? this.props.imgList[0].src : ''}
                className={styles.ImgInModal}
                style={{ maxWidth: this.props.maxSize }}
              />
              <h1>{this.props.imgList[0].name}</h1>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default ImageModalAll;
