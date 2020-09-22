import React, { Component } from 'react';
import styles from './StackedImages.module.css';
import AngleRight from '../../../assets/icons/AngleRight';

class StackedImages extends Component {
  constructor(props) {
    super(props);
    this.imgLength = props.imgList.length;
    this.state = {
      loading: true,
    };
  }
  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return <span className={styles.Spinner}></span>;
  }
  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  handleImageErrored() {
    this.setState({ loading: true });
  }
  render() {
    const { imgList, marginLeft, imgNum, nextClick } = this.props;
    const realIndex = imgNum % this.imgLength;
    return (
      <>
        <div className={styles.Container}>
          <div className={styles.Content}>
            <div className={styles.Images}>
              {this.renderSpinner()}
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
                    <img
                      onLoad={this.handleImageLoaded}
                      src={imgList[indxNum].src}
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.PosterName}>
              <span>포스터 {realIndex + 1}</span>
              <span>{imgList[realIndex].explanation}</span>
            </div>
          </div>

          <div className={styles.Next} onClick={nextClick}>
            <span>See Next</span>
            <AngleRight />
          </div>
        </div>
      </>
    );
  }
}

export default StackedImages;
