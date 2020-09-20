import React, { Component } from 'react';
import styles from './StackedImages.module.css';

class StackedImages extends Component {
  constructor(props) {
    super(props);
    this.imgLength = props.imgList.length;
  }

  render() {
    const { imgList, marginLeft, imgNum, nextClick } = this.props;

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
                  key={index}
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
          <div className={styles.Next} onClick={nextClick}>
            Next
          </div>
        </div>
      </>
    );
  }
}

export default StackedImages;
