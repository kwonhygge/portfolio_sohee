import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Toolbar.module.css';
import CopyItem from '../CopyItem/CopyItem';
import Dropdown from '../Dropdown/Dropdown';
import HomeLogo from '../HomeLogo/HomeLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Resume, Profile, ToyProject, Works } from '../../pages/index';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClick: false,
      hoverStates: {},
      contactClick: false,
    };
  }

  onMouseEnter = (e) => {
    if (window.innerWidth < 960) {
      this.setState({
        hoverStates: {
          [e.target.id]: false,
        },
      });
    } else {
      this.setState({
        hoverStates: {
          [e.target.id]: true,
        },
      });
    }
  };

  onMouseLeave = (e) => {
    if (window.innerWidth < 960) {
      this.setState({
        hoverStates: {
          [e.target.id]: false,
        },
      });
    } else {
      this.setState({
        hoverStates: {
          [e.target.id]: false,
        },
      });
    }
  };

  handleHomeClick = () =>
    this.setState((prevState) => ({
      homeClick: !prevState.homeClick,
    }));

  closeMobileMenu = () => this.setState({ homeClick: false });

  render() {
    const { homeClick, hoverStates } = this.state;
    return (
      <>
        <header className={styles.Toolbar}>
          <div className={styles.ToolbarContent}>
            <div>
              <Link to="/home" className={styles.HomeLogo}>
                <HomeLogo />
              </Link>

              <div
                className={styles.MenuIcon}
                onhomeClick={this.handleHomeClick}
              >
                {homeClick ? (
                  <FontAwesomeIcon icon="times" size="2x" />
                ) : (
                  <FontAwesomeIcon icon="bars" size="2x" />
                )}
              </div>
              <ul className={styles.NavItems}>
                <li
                  id="0"
                  className={styles.NavItem}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <Link
                    id="0"
                    to={{
                      pathname: '/about/profile',
                    }}
                    onClick={this.closeMobileMenu}
                  >
                    About
                    {hoverStates[0] ? (
                      <FontAwesomeIcon
                        className={styles.Caret}
                        icon="caret-up"
                        size="1x"
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={styles.Caret}
                        icon="caret-down"
                        size="1x"
                      />
                    )}
                  </Link>
                  {hoverStates[0] ? (
                    <Dropdown className={styles.Dropdown} menu={0} />
                  ) : null}
                </li>
                <li
                  id="1"
                  className={styles.NavItem}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <Link
                    id="1"
                    to={{
                      pathname: '/portfolio/works',
                    }}
                    onClick={this.closeMobileMenu}
                  >
                    Portfolio
                    {hoverStates[1] ? (
                      <FontAwesomeIcon
                        className={styles.Caret}
                        icon="caret-up"
                        size="1x"
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={styles.Caret}
                        icon="caret-down"
                        size="1x"
                      />
                    )}
                  </Link>
                  {hoverStates[1] ? (
                    <Dropdown className={styles.Dropdown} menu={1} />
                  ) : null}
                </li>
                <li
                  onClick={this.handleContactClickHandler}
                  className={styles.NavItem}
                >
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <CopyItem>Chubycheeks01@gmail.com</CopyItem>
          </div>
        </header>
      </>
    );
  }
}

export default Toolbar;
