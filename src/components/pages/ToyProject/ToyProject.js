import React, { Component } from 'react';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import styles from './ToyProject.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from './Book/Book';
import Poster from './Poster/Poster';
import Drawing from './Drawing/Drawing';
import WebPages from "./WebPages/WebPages"
import sideStyles from '../../../containers/SideStyle.module.css';
class ToyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: { [0]: true },
    };
  }
  componentDidMount = () => {
    scroll.scrollToTop();
  };

  handleClickType = (e) => {
    scroll.scrollToTop();
    this.setState({
      type: {
        [e.target.id]: true,
      },
    });
  };

  render() {
    const { type } = this.state;
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

          <h2 className={sideStyles.SideSmallType}>Toy Project</h2>
          <div className={sideStyles.SideIndex}>
            <span
              id="0"
              onClick={this.handleClickType}
              className={type[0] && sideStyles.SelectedType}
            >
              Web
            </span>
            {type[0] && (
              <div>
                <Link
                  to="web1"
                  type="web"
                  spy={true}
                  smooth={true}
                  offset={-500}
                  duration={500}
                >
                  1
                </Link>

              </div>
            )}
          </div>
          <div className={sideStyles.SideIndex}>
            <span
              id="1"
              onClick={this.handleClickType}
              className={type[1] && sideStyles.SelectedType}
            >
              Book
            </span>
            {type[1] && (
              <div>
                <Link
                  to="book1"
                  type="book"
                  spy={true}
                  smooth={true}
                  offset={-500}
                  duration={500}
                >
                  1
                </Link>
                <Link
                  to="book2"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  2
                </Link>
                <Link
                  to="book3"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  3
                </Link>
              </div>
            )}
          </div>
          <div className={sideStyles.SideIndex}>
            <span
              id="2"
              onClick={this.handleClickType}
              className={type[2] && sideStyles.SelectedType}
            >
              Poster
            </span>
            {type[2] && (
              <div>
                <Link
                  to="poster1"
                  spy={true}
                  smooth={true}
                  offset={-500}
                  duration={500}
                >
                  1
                </Link>
                <Link
                  to="poster2"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  2
                </Link>
                <Link
                  to="poster3"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  3
                </Link>
              </div>
            )}
          </div>
          <div className={sideStyles.SideIndex}>
            <span
              id="3"
              onClick={this.handleClickType}
              className={type[3] && sideStyles.SelectedType}
            >
              Drawing
            </span>
          </div>
        </SideDrawer>
        <div className={styles.Contents}>
          {type[0] && <WebPages />}
          {type[1] && <Book />}
          {type[2] && <Poster />}
          {type[3] && <Drawing />}
        </div>
      </>
    );
  }
}

export default ToyProject;
