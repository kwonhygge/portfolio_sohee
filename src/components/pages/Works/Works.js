import React, { Component } from 'react';
import WorkInfo from './WorkInfo/WorkInfo';
import styles from './Works.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import sideStyles from '../../../containers/SideStyle.module.css';
import { WorksItems } from '../../../store/contents/portfolio/WorksItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageModalAll from '../../UI/ImageModalAll/ImageModalAll';
import cuList from '../../../assets/images/works/curation';
import aniList from '../../../assets/images/works/anicenter';
import workList from '../../../assets/images/works/index';
import LoadElement from '../../UI/LoadElement/LoadElement';

class Works extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      openState: {},
      maxSize: 380,
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

  handleImageErrored() {
    this.setState({ loading: true });
  }
  componentDidMount = () => {
    scroll.scrollToTop();
  };

  handleOpen = (e) => {
    this.setState({ show: true, openState: { [e.target.id]: true } });
    if (e.target.id === '0') {
      if (window.innerWidth <= 1440) {
        this.setState({ maxWidth: 380 });
      } else if (window.innerWidth <= 1680) {
        this.setState({ maxWidth: 450 });
      } else {
        this.setState({ maxWidth: 615 });
      }
    } else {
      if (window.innerWidth <= 1024) {
        this.setState({ maxWidth: 400 });
      } else if (window.innerWidth <= 1440) {
        this.setState({ maxWidth: 480 });
      } else if (window.innerWidth < 1920) {
        this.setState({ maxWidth: 600 });
      } else {
        this.setState({ maxWidth: 700 });
      }
    }
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const { openState, show, maxWidth } = this.state;

    return (
      <>
        <SideDrawer>
          <div className={sideStyles.SideBigType}>
            <h1>Portfolio </h1>
            <FontAwesomeIcon
              className={sideStyles.Caret}
              icon="caret-down"
              size="1x"
            />
          </div>

          <h2 className={sideStyles.SideSmallType}>Works</h2>
          <div className={sideStyles.SideIndex}>
            <span className={sideStyles.SelectedType}>Work</span>
            <Link
              to="work1"
              spy={true}
              smooth={true}
              offset={-500}
              duration={500}
            >
              1
            </Link>
            <Link
              to="work2"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              2
            </Link>
          </div>
        </SideDrawer>
        <div className={styles.Contents}>
          <Element name="work1">
            <WorkInfo item={WorksItems[0]} />
            {this.renderLoader()}
            <div
              id={0}
              className={styles.ImageContainer}
              onClick={this.handleOpen}
            >
              <img
                id={0}
                src={workList[0].src}
                onLoad={this.handleImageLoaded}
              />
              <span id={0}>더보기</span>
            </div>
            {openState[0] && (
              <ImageModalAll
                imgList={aniList}
                show={show}
                maxSize={maxWidth}
                modalClosed={this.handleClose}
                itemIndx={WorksItems[0].index}
                itemName={WorksItems[0].name}
              />
            )}
          </Element>
          <Element name="work2">
            <WorkInfo item={WorksItems[1]} />
            <div
              id={1}
              className={styles.ImageContainer}
              onClick={this.handleOpen}
            >
              <img
                id={1}
                src={workList[1].src}
                onLoad={this.handleImageLoaded}
              />
              <span id={1}>더보기</span>
            </div>
            {openState[1] && (
              <ImageModalAll
                imgList={cuList}
                show={show}
                maxSize={maxWidth}
                modalClosed={this.handleClose}
                itemIndx={WorksItems[1].index}
                itemName={WorksItems[1].name}
              />
            )}
          </Element>
        </div>
      </>
    );
  }
}

export default Works;
