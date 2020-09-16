import React from 'react';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
import BookInfo from './BookInfo/BookInfo';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
const Book = (props) => (
  <>
    <Element name="book1">
      <BookInfo item={ToyItems[0][0]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="book2">
      <BookInfo item={ToyItems[0][1]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="book3">
      <BookInfo item={ToyItems[0][2]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
  </>
);

export default Book;
