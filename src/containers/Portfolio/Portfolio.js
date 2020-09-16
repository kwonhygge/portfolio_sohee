import React, { Component } from 'react';
import { Works, ToyProject } from '../../components/pages/index';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'works',
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
        {type === 'works' && <Works />}
        {type === 'toyproject' && <ToyProject />}
      </>
    );
  }
}

export default Portfolio;
