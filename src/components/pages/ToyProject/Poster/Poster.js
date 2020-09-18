import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import ToyInfo from '../ToyInfo/ToyInfo';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
const Poster = () => (
  <>
    <Element name="poster1">
      <ToyInfo item={ToyItems[1][0]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="poster2">
      <ToyInfo item={ToyItems[1][1]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="poster3">
      <ToyInfo item={ToyItems[1][2]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
  </>
);

export default Poster;
