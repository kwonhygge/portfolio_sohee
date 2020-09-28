import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    this.handleLoadingOpen();
  }
  handleLoadingOpen = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        setTimeout(this.handleLoadingClose, 3500);
      }
    );
  };
  handleLoadingClose = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        {this.handleLoadingOpen}
        {loading && (
          <div className={styles.LoadingContainer}>
            <div className={styles.ProgressBar}></div>
            <h1>Loading</h1>
            <h2>Please Wait...</h2>
          </div>
        )}
        {!loading && (
          <div className={styles.MainContainer}>
            <div className={styles.Upper}>
              <span>P</span>
              <span>O</span>
              <span>R</span>
              <span>T</span>
            </div>
            <div className={styles.Down}>
              <span>F</span>
              <span>O</span>
              <span>L</span>
              <span className={styles.I}>I</span>
              <span className={styles.O}>O</span>
              <span className={styles.Dot}>.</span>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Main;
