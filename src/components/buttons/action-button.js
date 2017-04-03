import React, { Component } from 'react';

import './action-button.scss';

export default class ActionButton extends Component {
  doNothing = () => {
    return;
  }

  onBtnClick = (e) => {
    e.preventDefault();

    // Don't allow double clicks if loading
    if (this.props.loading) {
      return;
    }

    this.props.onClick();
  }

  render() {
    return (
      <button
      type={this.props.type}
      className={`action-button ${this.props.size}`}
      disabled={this.props.disabled}
      onClick={this.props.onClick ? this.onBtnClick : this.doNothing}>
        {this.props.text}
      </button>
    );
  }
}

ActionButton.defaultProps = {
  disabled: false,
  loading: false,
  size: 'regular'
};

ActionButton.propTypes = {
  disabled: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  size: React.PropTypes.string, // regular, large
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired // button, submit
};
