import React from 'react';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
import ToyInfo from '../ToyInfo/ToyInfo';
import { Link, Element } from 'react-scroll';
import ImageModalEach from '../../../UI/ImageModalEach/ImageModalEach';
import coverEachList from '../../../../assets/images/bookCover';
import styles from './Book.module.css';

const Book = () => (
  <>
    <Element name="book1">
      <ToyInfo item={ToyItems[0][0]} />
      <div style={{ width: '40px', height: '500px' }}></div>
    </Element>
    <Element name="book2">
      <ToyInfo item={ToyItems[0][1]} />

      <div className={styles.Img}>
        <ImageModalEach
          itemIndx={ToyItems[0][1].index}
          itemName={ToyItems[0][1].name}
          imgSrc={coverEachList[0].src}
          imgAlt={coverEachList[1].alt}
        />
      </div>
    </Element>
    <Element name="book3">
      <ToyInfo item={ToyItems[0][2]} />
      <div className={styles.Img}>
        <ImageModalEach
          itemIndx={ToyItems[0][2].index}
          itemName={ToyItems[0][2].name}
          style={{ width: '500px' }}
          imgSrc={coverEachList[1].src}
          imgAlt={coverEachList[1].alt}
        />
      </div>
    </Element>
  </>
);

export default Book;
