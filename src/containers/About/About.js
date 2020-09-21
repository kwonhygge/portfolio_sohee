import React, { Component } from 'react';
import { Profile, Resume } from '../../components/pages/index';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Profile',
    };
  }
  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
    });
  }
  componentDidUpdate(lastProps) {
    if (lastProps.match.params.type !== this.props.match.params.type) {
      this.setState({
        type: this.props.match.params.type,
      });
    }
  }
  render() {
    const { type } = this.state;
    return (
      <>
        {type === 'profile' && <Profile />}
        {type === 'resume' && <Resume />}
      </>
    );
  }
}

export default About;
