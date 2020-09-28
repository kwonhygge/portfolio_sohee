import React, { Component } from 'react';
import styles from './Main.module.css';
import stylesHome from '../../components/pages/Home/Home.module.css';

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
          <div className={stylesHome.MainContainer}>
            <div className={stylesHome.Upper}>
              <span>P</span>
              <span>O</span>
              <span>R</span>
              <span>T</span>
            </div>
            <div className={stylesHome.Down}>
              <span>F</span>
              <span>O</span>
              <span>L</span>
              <span className={stylesHome.I}>I</span>
              <span className={stylesHome.O}>O</span>
              <span className={stylesHome.Dot}></span>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Main;
