import React, { Component } from 'react';
import styles from './CopyItem.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CopyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  handleOpen = () => {
    this.setState(
      {
        copied: true,
      },
      () => {
        setTimeout(this.handleClose, 2000);
      }
    );
  };
  handleClose = () => {
    this.setState({
      copied: false,
    });
  };

  render() {
    return (
      <>
        <CopyToClipboard
          text="Chubycheeks01@gmail.com"
          onCopy={() => this.handleOpen()}
        >
          <a className={styles.CopyItem}>
            {this.props.children}
            <span>copy</span>
            {this.state.copied && <h1 className={styles.CopiedMsg}>copied!</h1>}
          </a>
        </CopyToClipboard>
      </>
    );
  }
}

export default CopyItem;
