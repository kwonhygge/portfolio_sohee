import React, { useRef } from 'react';
import WorkInfo from './WorkInfo/WorkInfo';
import styles from './Works.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import sideStyles from '../../../containers/Portfolio/Portfolio.module.css';

const Works = (props) => {
  const posts = props.posts;
  console.log(posts);
  return (
    <>
      <SideDrawer>
        <h1 className={sideStyles.SideBigType}>Portfolio </h1>
        <h2 className={sideStyles.SideSmallType}>Works</h2>
        <div className={sideStyles.SideIndex}>
          <span className={styles.SelectedType}>Work</span>
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
          <WorkInfo post={posts[0]} />
          <div className={styles.Pic}></div>
        </Element>
        <Element name="work2">
          <WorkInfo post={posts[1]} />
          <div className={styles.Pic}></div>
        </Element>
      </div>
    </>
  );
};

export default Works;
