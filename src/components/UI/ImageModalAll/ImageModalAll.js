import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './ImageModalAll.module.css';
import LoadElement from '../LoadElement/LoadElement';

class ImageModalAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgNum: 0,
      loading: true,
    };
    this.imgLength = props.imgList.length;
  }
  renderLoader() {
    if (!this.state.loading) {
      return null;
    }
    return <LoadElement />;
  }
  increaseNumber = () => {
    this.setState((prevState) => ({
      imgNum: (prevState.imgNum + 1) % this.imgLength,
    }));
  };
  handleImageLoaded = () => {
    this.setState({ loading: false });
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
    let { imgNum } = this.state;
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
            {this.renderLoader()}
            <img
              onLoad={this.handleImageLoaded}
              src={imgList ? imgList[imgNum].src : ''}
              alt={imgList[imgNum].alt}
              className={styles.ImgInModal}
              style={{ maxWidth: `${maxSize}px` }}
            />
          </div>
        </Modal>
      </>
    );
  }
}

export default ImageModalAll;
