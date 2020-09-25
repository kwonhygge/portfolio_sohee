import React, { Component } from 'react';
import styles from './Drawing.module.css';
import drawingList from '../../../../assets/images/drawing';
import Modal from '../../../UI/Modal/Modal';
import LoadElement from '../../../UI/LoadElement/LoadElement';

class Drawing extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      imgNum: 0,
      loading: true,
      width: '23%',
    };
    this.imgLength = drawingList.length - 1;
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
  modalClosed = () => {
    this.setState({ show: false });
  };
  modalOpen = (e) => {
    this.setState({
      imgNum: Number(e.target.id),
      show: true,
    });
    if (window.innerWidth <= 1024) {
      this.setState({
        width: '38%',
      });
    } else if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
      this.setState({
        width: '27%',
      });
    } else if (window.innerWidth > 1366) {
      this.setState({
        width: '30%',
      });
    }
  };
  renderLoader() {
    if (!this.state.loading) {
      return null;
    }
    return <LoadElement />;
  }
  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  render() {
    const { imgNum, show, width } = this.state;

    return (
      <>
        <div className={styles.Header}>
          <h1>Drawing</h1>
          <div>
            <span>사용 프로그램</span>
            <span>illustrator, clipstudio</span>
          </div>
        </div>
        <div className={styles.Gallery}>
          <div className={styles.Row}>
            {this.renderLoader()}
            <div className={styles.Col}>
              <img
                id={0}
                onClick={this.modalOpen}
                src={drawingList[0].src}
                alt={drawingList[0].alt}
              />
              <img
                id={2}
                onClick={this.modalOpen}
                onLoad={this.handleImageLoaded}
                src={drawingList[2].src}
                alt={drawingList[2].alt}
              />
              <img
                id={4}
                onClick={this.modalOpen}
                src={drawingList[4].src}
                alt={drawingList[4].alt}
              />
            </div>
            <div className={styles.Col}>
              <img
                id={1}
                onClick={this.modalOpen}
                src={drawingList[1].src}
                alt={drawingList[1].alt}
              />
              <img
                id={3}
                onClick={this.modalOpen}
                src={drawingList[6].src}
                alt={drawingList[6].alt}
              />
              <img
                id={5}
                onClick={this.modalOpen}
                src={drawingList[5].src}
                alt={drawingList[5].alt}
              />
            </div>
          </div>
          {show && (
            <Modal
              show={show}
              modalClosed={this.modalClosed}
              nextArrow={this.increaseNumber}
              prevArrow={this.decreaseNumber}
              imgLength={this.imgLength}
              imgNum={imgNum + 1}
              index="Drawing"
              name={drawingList[imgNum].name}
              isMany={true}
            >
              <div className={styles.ImgContainer}>
                {this.renderLoader()}
                <img
                  onLoad={this.handleImageLoaded}
                  className={styles.ImgInModal}
                  style={{
                    width: imgNum === 3 ? width : '',
                  }}
                  src={drawingList[imgNum].src}
                  alt={drawingList[imgNum].alt}
                />
              </div>
            </Modal>
          )}
        </div>
      </>
    );
  }
}

export default Drawing;
