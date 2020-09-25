import React from 'react';
import sideStyles from '../../../containers/SideStyle.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import styles from './Resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Resume = () => (
  <>
    <SideDrawer>
      <div className={sideStyles.SideBigType}>
        <h1>About </h1>
        <FontAwesomeIcon
          className={sideStyles.Caret}
          icon="caret-down"
          size="1x"
        />
      </div>
      <h2 className={sideStyles.SideSmallType}>Resume</h2>
    </SideDrawer>
    <div className={styles.Contents}>
      <h1>Resume</h1>
    </div>
  </>
);

export default Resume;
