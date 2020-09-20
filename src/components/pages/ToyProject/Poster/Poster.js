import React, { Component } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import ToyInfo from '../ToyInfo/ToyInfo';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
import StackedImages from '../../../UI/StackedImages/StackedImages';
import beastList from '../../../../assets/images/poster/beast';
import amelieList from '../../../../assets/images/poster/amelie';
class Poster extends Component {
  constructor() {
    super();
    this.state = {
      imgNum: 0,
    };
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
          <div style={{ width: '40px', height: '500px' }}></div>
        </Element>
      </>
    );
  }
}

export default Poster;
