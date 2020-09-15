import React, { Component } from 'react';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import styles from './ToyProject.module.css';
import Book from './Book/Book';
import Poster from './Poster/Poster';
import Illustration from './Illustration/Illustration';
class ToyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: {},
    };
  }
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
          <h1>Portfolio </h1>
          <h2>Toy Project</h2>
          <div>
            <span id="0" onClick={this.handleClickType}>
              Book
            </span>
            {type[0] && (
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
          <div>
            <ul>
              <span id="1" onClick={this.handleClickType}>
                Poster
              </span>
              {type[1] && (
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
            </ul>
          </div>
          <span id="2" onClick={this.handleClickType}>
            illustration
          </span>
        </SideDrawer>
        <div className={styles.Contents}>
          {type[0] && <Book />}
          {type[1] && <Poster />}
          {type[2] && <Illustration />}
        </div>
      </>
    );
  }
}

export default ToyProject;
