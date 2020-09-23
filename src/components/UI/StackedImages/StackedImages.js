import React, { Component } from 'react';
import styles from './StackedImages.module.css';
import AngleRight from '../../../assets/icons/AngleRight';
import LoadElement from '../../UI/LoadElement/LoadElement';
import ImageModalAll from '../ImageModalAll/ImageModalAll';

class StackedImages extends Component {
  constructor(props) {
    super(props);
    this.imgLength = props.imgList.length;
    this.state = {
      loading: true,
      show: false,
      maxSize: 400,
    };
  }
  renderLoader() {
    if (!this.state.loading) {
      return null;
    }
    return <LoadElement />;
  }
  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  handleImageErrored() {
    this.setState({ loading: true });
  }
  handleOpen = () => {
    this.setState({ show: true });
    if (window.innerWidth < 1366) {
      console.log('Here?');
      this.setState({ maxSize: 400 });
    } else if (window.innerWidth >= 1366 && window.innerWidth < 1440) {
      this.setState({ maxSize: 500 });
    } else if (window.innerWidth >= 1440 && window.innerWidth < 1680) {
      this.setState({ maxSize: 600 });
    } else {
      this.setState({ maxSize: 700 });
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const {
      imgList,
      marginLeft,
      imgNum,
      nextClick,
      itemName,
      itemIndx,
    } = this.props;
    const { show, maxSize } = this.state;
    const realIndex = imgNum % this.imgLength;
    return (
      <>
        <div className={styles.Container}>
          {show && (
            <ImageModalAll
              imgList={imgList}
              show={show}
              modalClosed={this.handleClose}
              itemIndx={itemIndx}
              itemName={itemName}
              maxSize={maxSize}
            />
          )}
          <div className={styles.Content} onClick={this.handleOpen}>
            <div className={styles.Images}>
              {this.renderLoader()}
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
