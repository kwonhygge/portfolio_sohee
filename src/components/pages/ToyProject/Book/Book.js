import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
const Book = () => (
  <>
    <Element name="book1">
      <h1>book1</h1>
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="book2">
      <h1>book2</h1>
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="book3">
      <h1>book3</h1>
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
  </>
);

export default Book;
