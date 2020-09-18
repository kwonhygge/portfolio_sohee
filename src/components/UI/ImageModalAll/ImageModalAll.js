import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './ImageModalAll.module.css';

class ImageModalAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgNum: 0,
    };
    this.imgLength = props.imgList.length;
  }
  increaseNumber = () => {
    this.setState((prevState) => ({
      imgNum: (prevState.imgNum + 1) % this.imgLength,
    }));
  };
  decreaseNumber = () => {
    if (this.state.imgNum === 0) {
      return;
    }
    this.setState((prevState) => ({
      imgNum: prevState.imgNum - 1,
    }));
  };

  render() {
    const { imgNum } = this.state;
    const {
      itemIndx,
      itemName,
      show,
      imgList,
      maxSize,
      modalClosed,
    } = this.props;

    return (
      <>
        <Modal
          index={itemIndx}
          name={itemName}
          show={show}
          modalClosed={modalClosed}
          nextArrow={this.increaseNumber}
          prevArrow={this.decreaseNumber}
          imgLength={this.imgLength}
          imgNum={imgNum + 1}
          isMany={true}
        >
          <div className={styles.Gallery}>
            <div styles={styles.Middle}>
              <img
                src={imgList ? imgList[imgNum].src : ''}
                alt={imgList[imgNum].alt}
                className={styles.ImgInModal}
                style={{ maxWidth: maxSize }}
              />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default ImageModalAll;
