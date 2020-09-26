import React, { Component } from 'react';
import { ToyItems } from '../../../../store/contents/portfolio/ToyItems';
import ToyInfo from '../ToyInfo/ToyInfo';
import { Link, Element } from 'react-scroll';
import ImageModalEach from '../../../UI/ImageModalEach/ImageModalEach';
import coverEachList from '../../../../assets/images/bookCover';
import styles from './Book.module.css';
import harryList from '../../../../assets/images/harryPotter';
import LoadElement from '../../../UI/LoadElement/LoadElement';

class Book extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
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

  render() {
    return (
      <>
        <Element name="book1">
          <ToyInfo item={ToyItems[0][0]} />
          {this.renderLoader()}
          <div className={styles.Img}>
            <img
              onLoad={this.handleImageLoaded}
              className={styles.ImgInModal}
              src={harryList[0].src}
            />
          </div>
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
          <ToyInfo item={ToyItems[0][2]} isStory={true} />
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
  }
}

export default Book;
