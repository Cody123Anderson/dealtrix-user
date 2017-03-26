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
      style={{ margin: this.props.margin }}
      className="secondary-button"
      onClick={this.props.onClick ? this.onBtnClick : this.doNothing}>
        {this.props.text}
      </button>
    );
  }
}

SecondaryButton.defaultProps = {
  margin: '0'
};

SecondaryButton.propTypes = {
  onClick: React.PropTypes.func,
  margin: React.PropTypes.string,
  text: React.PropTypes.string.isRequired
};
