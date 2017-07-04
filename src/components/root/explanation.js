import React, { PureComponent } from 'react';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import MdClose from 'react-icons/lib/md/close';

import './explanation.scss';

export default class Explanation extends PureComponent {
  constructor() {
    super();

    this.state = {
      show: true
    };
  }

  closeExplanation = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className={`explanation ${this.state.show ? '' : 'hidden'}`}>
        <span onClick={this.closeExplanation}>
          <MdClose className="close-icon" />
        </span>
        <div className="title">The best deals on Earth!</div>
        <div className="contain-features">
          <span className="feature">
            <MdCheckCircle className="icon" />
            <span className="text">Date Ideas</span>
          </span>
          <span className="feature">
            <MdCheckCircle className="icon" />
            <span className="text">Restaurants</span>
          </span>
          <span className="feature">
            <MdCheckCircle className="icon" />
            <span className="text">Activities</span>
          </span>
        </div>
      </div>
    );
  }
}
