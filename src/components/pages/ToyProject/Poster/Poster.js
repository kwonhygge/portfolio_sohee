import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const Poster = () => (
  <>
    <Element name="poster1">
      <h1>poster1</h1>
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="poster2">
      <h1>poster2</h1>
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="poster3">
      <h1>poster3</h1>
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
  </>
);

export default Poster;
