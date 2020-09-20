import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import ToyInfo from '../ToyInfo/ToyInfo';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
import FoldedImage from '../../../UI/FoldedImage/FoldedImage';
import beastList from '../../../../assets/images/poster/beast';
import amelieList from '../../../../assets/images/poster/amelie';
const Poster = () => (
  <>
    <Element name="poster1">
      <ToyInfo item={ToyItems[1][0]} />
      <FoldedImage imgList={amelieList} marginLeft={22} />
    </Element>
    <Element name="poster2">
      <ToyInfo item={ToyItems[1][1]} />
      <FoldedImage imgList={beastList} marginLeft={19} />
    </Element>
    <Element name="poster3">
      <ToyInfo item={ToyItems[1][2]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
  </>
);

export default Poster;
