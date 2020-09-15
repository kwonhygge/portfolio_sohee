import React from 'react';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const ToyProject = () => (
  <>
    <div>
      <SideDrawer>
        <h1>Portfolio </h1>
        <h2>Toy Project</h2>
        <ul>
          <li>1</li>
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
        </ul>
      </SideDrawer>
    </div>
  </>
);

export default ToyProject;
