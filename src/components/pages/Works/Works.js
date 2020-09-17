import React, { Component } from 'react';
import WorkInfo from './WorkInfo/WorkInfo';
import styles from './Works.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import sideStyles from '../../../containers/Portfolio/SideStyle.module.css';
import { WorksItems } from '../../../store/contents/portfolio/WorksItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkImageFirst from './WorkImages/WorkImageFirst';
import WorkImageSecond from './WorkImages/WorkImageSecond';

class Works extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    scroll.scrollToTop();
  };

  render() {
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
            <WorkImageFirst
              itemIndx={WorksItems[0].index}
              itemName={WorksItems[0].name}
            />
          </Element>
          <Element name="work2">
            <WorkInfo item={WorksItems[1]} />
            <WorkImageSecond
              itemIndx={WorksItems[1].index}
              itemName={WorksItems[1].name}
            />
          </Element>
        </div>
      </>
    );
  }
}

export default Works;
