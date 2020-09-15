import React, { Component } from 'react';
import styles from './Portfolio.module.css';
import { WorksItems } from '../../store/contents/portfolio/WorksItems';
import { Works, ToyProject } from '../../components/pages/index';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      posts: WorksItems[props.match.params.id],
      currentPage: 2,
      postsPerPage: 2,
    };
  }

  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
    });
  }

  componentDidUpdate(lastProps) {
    if (lastProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        type: this.props.match.params.type,
        posts: WorksItems[this.props.match.params.id],
      });
    }
  }

  render() {
    const { type, posts, currentPage } = this.state;

    return (
      <>
        <div className={styles.Portfolio}>
          <div className={styles.Contents}>
            {type === 'works' && <Works page={currentPage} posts={posts} />}
            {type === 'toyproject' && <span>Toy Project</span>}
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
