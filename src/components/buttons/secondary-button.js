import React, { Component } from 'react';

import './secondary-button.scss';

export default class SecondaryButton extends Component {
  doNothing = () => {
    return;
  }

  onBtnClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button
      type="button"
      className={`seconday-button ${this.props.size}`}
      onClick={this.props.onClick ? this.onBtnClick : this.doNothing}>
        {this.props.text}
      </button>
    );
  }
}

SecondaryButton.defaultProps = {
  size: 'regular'
};

SecondaryButton.propTypes = {
  onClick: React.PropTypes.func,
  size: React.PropTypes.string, // regular, large
  text: React.PropTypes.string.isRequired
};
