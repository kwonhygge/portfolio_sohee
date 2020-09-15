import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const location = this.props.location;
    return (
      <>
        <div>{location.state.type}</div>
      </>
    );
  }
}

export default About;
