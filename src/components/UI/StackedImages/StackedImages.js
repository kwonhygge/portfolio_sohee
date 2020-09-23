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
    const { show } = this.state;
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
