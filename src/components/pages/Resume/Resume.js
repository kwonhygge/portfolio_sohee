import React, { Component } from 'react';
import sideStyles from '../../../containers/SideStyle.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import styles from './Resume.module.css';
import resume from '../../../assets/images/resume.jpg';
import resumeFile from '../../../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadElement from '../../UI/LoadElement/LoadElement';

class Resume extends Component {
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
          <div className={styles.Header}>
            <h1>Resume</h1>
          </div>
          {this.renderLoader}
          <div className={styles.Resume}>
            <img onLoad={this.handleImageLoaded} src={resume} />
            <div className={styles.Download}>
              <h2>
                Download<br></br>Resume
              </h2>
              <a href={resumeFile} className={styles.DownloadIcon}>
                <svg width="1.2vw" height="28" viewBox="0 0 27 28" fill="none">
                  <path
                    d="M20.1742 12.7628C20.0375 12.4495 19.7371 12.25 19.4064 12.25H16.0314V0.875C16.0314 0.392 15.6534 0 15.1876 0H11.8126C11.3469 0 10.9689 0.392 10.9689 0.875V12.25H7.59385C7.2631 12.25 6.96273 12.4513 6.82604 12.7628C6.68767 13.076 6.74167 13.4417 6.95935 13.7008L12.8656 20.7008C13.0259 20.8915 13.2571 21 13.5001 21C13.7431 21 13.9743 20.8898 14.1346 20.7008L20.0409 13.7008C20.2602 13.4435 20.3109 13.076 20.1742 12.7628Z"
                    fill="black"
                  />
                  <path
                    d="M22.7812 19.25V24.5H4.21875V19.25H0.84375V26.25C0.84375 27.2178 1.59975 28 2.53125 28H24.4688C25.4019 28 26.1562 27.2178 26.1562 26.25V19.25H22.7812Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
