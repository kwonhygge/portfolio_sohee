import React, { Component } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import ToyInfo from '../ToyInfo/ToyInfo';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
import StackedImages from '../../../UI/StackedImages/StackedImages';
import beastList from '../../../../assets/images/poster/beast';
import amelieList from '../../../../assets/images/poster/amelie';
import ImageModalEach from '../../../UI/ImageModalEach/ImageModalEach';
import Festival from '../../../../assets/images/poster/';
import styles from './Poster.module.css';

class Poster extends Component {
  constructor() {
    super();
    this.state = {
      imgNum: 0,
      maxSize: 480,
    };
  }
  componentDidMount() {
    if (window.innerWidth <= 1024) {
      this.setState({ maxSize: 380 });
    } else if (window.innerWidth <= 1600) {
      this.setState({ maxSize: 580 });
    } else {
      this.setState({ maxSize: 700 });
    }
  }

  increaseNumber = () => {
    this.setState((prevState) => ({
      imgNum: prevState.imgNum + 1,
    }));
  };
  render() {
    const { imgNum } = this.state;
    return (
      <>
        <Element name="poster1">
          <ToyInfo item={ToyItems[1][0]} colorNum={imgNum} length={2} />
          <StackedImages
            imgList={amelieList}
            nextClick={this.increaseNumber}
            marginLeft={22}
            imgNum={imgNum}
          />
        </Element>
        <Element name="poster2">
          <ToyInfo item={ToyItems[1][1]} colorNum={imgNum} length={3} />
          <StackedImages
            imgList={beastList}
            nextClick={this.increaseNumber}
            marginLeft={19}
            imgNum={imgNum}
          />
        </Element>
        <Element name="poster3">
          <ToyInfo item={ToyItems[1][2]} />
          <div className={styles.Img}>
            <ImageModalEach
              itemIndx={ToyItems[1][2].index}
              itemName={ToyItems[1][2].name}
              smallImgWidth={40}
              imgSrc={Festival.src}
              imgAlt={Festival.alt}
              maxWidth={this.state.maxSize}
            />
          </div>
        </Element>
      </>
    );
  }
}

export default Poster;
