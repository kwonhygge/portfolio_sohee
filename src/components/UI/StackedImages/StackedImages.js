import React, { Component } from 'react';
import styles from './StackedImages.module.css';

class StackedImages extends Component {
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
    const { imgList, marginLeft } = this.props;

    return (
      <>
        <div className={styles.Container}>
          <div className={styles.Images}>
            {imgList.map((item, index) => {
              let zIndex = this.imgLength - index;
              let indxNum = (imgNum + index) % this.imgLength;
              let scaleNum = 1 - (index * 10) / 100;

              return (
                <div
                  className={styles.Image}
                  style={{
                    zIndex: `${zIndex}`,
                    transform: `scale(${scaleNum})`,
                    marginLeft: index === 0 ? '' : `-${marginLeft}vw`,
                  }}
                >
                  <img src={imgList[indxNum].src} />
                </div>
              );
            })}
          </div>
          <div className={styles.Next} onClick={this.increaseNumber}>
            Next
          </div>
        </div>
      </>
    );
  }
}

export default StackedImages;
